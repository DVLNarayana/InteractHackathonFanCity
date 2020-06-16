import request from "../utils/request";

const host = "https://livescore6.p.rapidapi.com";

const landmark_BurlingtonTunnel_setup_service_id =
  "a069426d-3c9c-4d3b-a042-be5fd61ba1d2";
const landmark_BurlingtonTunnel_setup_service_secret =
  "$2a$10$a50Awr7mRVdmMD.Zy0CnUeb8SHqzjDzoJPSumSLQTYbYQ8l9kZG4O";

const serviceId = landmark_BurlingtonTunnel_setup_service_id;
const serviceSecret = landmark_BurlingtonTunnel_setup_service_secret;
const apiKey = "v0GISyT2Xonan3QrGmrvZL7hdE5M6AcJ";
const apiSecret = "2Bjj02FnxSWJSYgK";

export function getMatchDetails(category, eventID, p) {
  //   const requestURL = `https://livescore6.p.rapidapi.com/matches/get-table?p=1&category=soccer&id=3081629`;
  const requestURL = `${host}/matches/get-table?p=${p}&category=${category}&id=${eventID}`;
  const queryString = null;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "livescore6.p.rapidapi.com",
      "x-rapidapi-key": `Bearer fd14061a4fmsh7c509c1cb907936p14bc0cjsn90bc793721cd`,
    },
  };

  return new Promise((resolve, reject) => {
    request(requestURL, queryString, options).then(
      (response) => {
        resolve(response);
      },
      (error) => {
        reject(error);
      }
    );
  });
}
