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
    .then(({ results }) => ({
      img: results?.artworkUrl60,
      artistName: results.artistName,
    }));
};

export default getLookup;
