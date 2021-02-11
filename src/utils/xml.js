import { parseString } from "xml2js";

/** XML utils */

export const xmlToJson = function (xml) {
  let resultJson;

  parseString(xml, (err, result) => {
    try {
      if (err) throw err;
      const json = JSON.stringify(result, null, 4);
      resultJson = JSON.parse(json);
    } catch (e) {
      console.log(e);
      resultJson = {};
    }
  });

  return resultJson;
};
