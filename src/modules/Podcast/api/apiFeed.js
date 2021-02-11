import axiosGet from "@/modules/Podcast/api/core/http";
import { xmlToJson } from "@/utils/xml";
import { getAllOriginsUrl } from "@/utils/cors";

function episodesMap(episode) {
  return {
    id: episode.guid[0]._,
    title: episode.title,
    date: episode.pubDate,
    description: episode.description,
    duration: episode["itunes:duration"][0],
    media: {
      url: episode.enclosure[0].$.url,
      type: episode.enclosure[0].$.type,
    },
  };
}

/**
 * This function could be considered as an adaptar between the backend and
 * the frontend.
 *
 * It returns podcastId podcast data.
 *
 */
const getFeed = function (url) {
  return axiosGet(getAllOriginsUrl(url)).then(async ({ data }) => {
    if (!data) return {};
    const rssData = xmlToJson(data);
    const podcastData = rssData.rss.channel[0];
    return {
      title: podcastData.title,
      author: podcastData["itunes:author"][0],
      description: podcastData.description,
      img: podcastData["itunes:image"][0].$.href,
      episodes: podcastData.item.map(episodesMap),
    };
  });
};

export default getFeed;
