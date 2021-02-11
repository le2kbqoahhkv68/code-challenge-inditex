import axios from "axios";
import { getAllOriginsUrl } from "@/utils/cors";

/**
 * This function could be considered as an adaptar between the backend and
 * the frontend.
 *
 * It returns podcastId podcast data.
 *
 */
const getLookup = function (podcastId) {
  return axios
    .get(getAllOriginsUrl(`https://itunes.apple.com/lookup?id=${podcastId}`))
    .then(({ data: { results } }) => results[0].feedUrl);
};

export default getLookup;
