import axios from "axios";

/**
 * This function could be considered as an adaptar between the backend and
 * the frontend.
 *
 * It returns podcastId podcast data.
 *
 */
const getLookup = function (podcastId) {
  return axios
    .get(`https://itunes.apple.com/lookup?id=${podcastId}`)
    .then(({ data: { resultCount, results } }) => ({
      count: resultCount,
      episodes: results.map((result) => ({
        id: result.trackId,
        title: result.trackCensoredName,
        date: new Date(result.releaseDate),
        duration: "12:32",
      })),
    }));
};

export default getLookup;
