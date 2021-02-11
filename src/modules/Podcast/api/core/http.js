import axios from "axios";

/**
 * Interceptor for caching
 *
 * If you want to test it, replace the setTime within getTomorrowDate function.
 */
axios.interceptors.request.use(
  function (req) {
    const cachedRequestStorage = localStorage.getItem(req.url);
    if (cachedRequestStorage) {
      const cachedRequest = JSON.parse(cachedRequestStorage);
      const now = Date.now();
      if (now <= cachedRequest.endDate) {
        req.headers.cached = true;
        req.data = cachedRequest.data;
        return Promise.reject(req);
      } else {
        localStorage.removeItem(req.url);
      }
    }
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  function (res) {
    // if (res.config?.forceCache) { // all origin removes the config
    localStorage.setItem(
      res.config.url,
      JSON.stringify({
        endDate: getTomorrowDate(),
        data: res.data,
      })
    );
    // }
    return res;
  },
  (err) => errorHandler(err)
);

function errorHandler(error) {
  if (error.headers.cached === true) {
    return Promise.resolve(error);
  }
  return Promise.reject(error);
}

function getTomorrowDate(days = 1) {
  const date = new Date();
  date.setTime(days * 24 * 60 * 60 * 1000 + date.getTime());
  //date.setTime(date.getTime() + 2 * 1000);
  return date.getTime();
}

const axiosGet = axios.get;

export default axiosGet;
