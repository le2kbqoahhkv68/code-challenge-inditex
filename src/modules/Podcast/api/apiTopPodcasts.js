import axios from "axios";

/**
 * This function could be considered as an adaptar between the backend and
 * the frontend.
 *
 * It returns the 100 top podcasts from iTunes.
 *
 * @returns podcast[]
 */
export const getTopPodcasts = function () {
  return axios
    .get(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    )
    .then(({ data }) =>
      data?.feed?.entry.map((e) => {
        return {
          id: e?.id?.attributes?.["im:id"],
          title: e?.title?.label || "",
          author: e["im:artist"]?.label || "",
          img: e["im:image"][2]?.label || "",
          summary: e.summary?.label || "",
        };
      })
    );
};

/**
 * It returns a podcast (if exists) from the top 100 podcasts if found.
 *
 * @remarks There are no methods to request a podcast using the podcastId, so
 * this an approach to do that. The request will be cached so it is not making
 * fresh request every time. It's necessary in order to get the data if we access
 * directly with the url and not from a click of the main view.
 *
 * @returns podcast
 */
export const getTopPodcast = function (podcastId) {
  return getTopPodcasts().then((podcasts) =>
    podcasts.find((podcast) => podcast.id === podcastId)
  );
};
