import axios from "axios";

/**
 * This function could be considered as an adaptar between the backend and the
 * frontend.
 */
const getTopPodcasts = function () {
  return axios({
    method: "get",
    url:
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
  }).then(({ data }) =>
    data.feed.entry.map((e) => {
      return {
        title: e.title,
        author: e["im:artist"],
        img: e["im:image"][0].label,
      };
    })
  );
};

export default getTopPodcasts;
