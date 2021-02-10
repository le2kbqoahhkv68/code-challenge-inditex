export const getAllOriginsUrl = function (url) {
  return `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
};
