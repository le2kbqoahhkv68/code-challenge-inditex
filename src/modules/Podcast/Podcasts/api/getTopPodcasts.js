import axios from "axios";

/**
 * This function could be considered as an adaptar between the backend and the
 * frontend.
 *
 * In this case I am not taking care of null or undefined
 */
const getTopPodcasts = function () {
  return axios({
    method: "get",
    url:
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
  }).then(({ data }) =>
    data.feed.entry.map((e) => {
      return {
        title: e?.title?.label || "",
        author: e["im:artist"]?.label || "",
        img: e["im:image"][2]?.label || "",
      };
    })
  );
};

export default getTopPodcasts;
