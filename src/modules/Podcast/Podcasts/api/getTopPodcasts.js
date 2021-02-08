import axios from "axios";

/**
 * This function could be considered as an adaptar between the backend and
 * the frontend.
 *
 * The limit has been set to 101 in order to get 100.
 *
 */
const getTopPodcasts = function () {
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
        };
      })
    );
};

export default getTopPodcasts;
