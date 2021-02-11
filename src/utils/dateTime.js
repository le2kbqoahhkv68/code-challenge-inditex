/** Date utils */

/**
 * Tries to return a date with the format dd/mm/YYYY from a string.
 * @param {string} rawDate
 */
export const dateToString = function (rawDate) {
  try {
    const date = new Date(Date.parse(rawDate));
    return `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  } catch {
    return "";
  }
};

/**
 * Tries to return date with the format hh:mm:ss format from a string.
 * @param {string} time
 */
export const timeToString = function (time) {
  try {
    return isNaN(time)
      ? time
      : new Date(time * 1000).toISOString().substr(11, 8);
  } catch {
    return "";
  }
};
