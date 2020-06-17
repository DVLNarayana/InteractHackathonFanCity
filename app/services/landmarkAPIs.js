import request from "../utils/request";

const host = "https://api.interact-lighting.com";

const landmark_BurlingtonTunnel_setup_service_id =
  "a069426d-3c9c-4d3b-a042-be5fd61ba1d2";
const landmark_BurlingtonTunnel_setup_service_secret =
  "$2a$10$a50Awr7mRVdmMD.Zy0CnUeb8SHqzjDzoJPSumSLQTYbYQ8l9kZG4O";

const serviceId = landmark_BurlingtonTunnel_setup_service_id;
const serviceSecret = landmark_BurlingtonTunnel_setup_service_secret;
const apiKey = "v0GISyT2Xonan3QrGmrvZL7hdE5M6AcJ";
const apiSecret = "2Bjj02FnxSWJSYgK";

export function getLandmarkAccessTokenAPI() {
  var urlencoded = new URLSearchParams();
  urlencoded.append("app_key", apiKey);
  urlencoded.append("app_secret", apiSecret);
  urlencoded.append("service", "landmark");

  const requestURL = `${host}/oauth/accesstoken`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic YTA2OTQyNmQtM2M5Yy00ZDNiLWEwNDItYmU1ZmQ2MWJhMWQyOiQyYSQxMCRhNTBBd3I3bVJWZG1NRC5aeTBDblVlYjhTSHF6akR6b0pQU3VtU0xRVFliWVE4bDlrWkc0Tw==",
      Accept: "application/json",
    },
    body: urlencoded,
    redirect: "follow",
  };
  return new Promise((resolve, reject) => {
    request(requestURL, undefined, options).then(
      (responseData) => {
        resolve(responseData.body.token);
      },
      (e) => {
        reject(e);
      }
    );
  });
}

export function getSites(token) {
  const requestURL = `${host}/interact/api/landmark/sites`;
  const queryString = null;
  const options = {
    method: "GET",
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
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

export function getSiteById(token, siteId) {
  const requestURL = `${host}/interact/api/landmark/sites/${siteId}`;
  const queryString = null;
  const options = {
    method: "GET",
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
    redirect: "follow",
  };

  return new Promise((resolve, reject) => {
    request(requestURL, queryString, options).then(
      (response) => {
        if (response.cookies) {
          console.log("res.cookies : ", res.cookies);
        }
        resolve(response);
      },
      (error) => {
        reject(error);
      }
    );
  });
}

export function getCustomButtons(token) {
  const requestURL = `${host}/interact/api/landmark/custombuttons`;
  const queryString = null;
  const options = {
    method: "GET",
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
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

export function getConnectionStatusAPI(token, controllerSerial) {
  const requestURL = `${host}/interact/api/landmark/tunnel/status`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
    body: JSON.stringify({
      serial: controllerSerial,
    }),
  };

  return new Promise((resolve, reject) => {
    request(requestURL, undefined, options).then(
      (responseData) => {
        resolve(responseData);
      },
      (e) => {
        reject(e);
      }
    );
  });
}

export function connectController(token, controllerSerial) {
  const requestURL = `${host}/interact/api/landmark/tunnel/connect`;
  const queryString = null;
  const options = {
    method: "PUT",
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      serial: controllerSerial,
    }),
  };
  return new Promise((resolve, reject) => {
    request(requestURL, queryString, options).then(
      (responseData) => {
        resolve(responseData);
      },
      (e) => {
        reject(e);
      }
    );
  });
}

export function disconnectController(token, controllerSerial) {
  const requestURL = `${host}/interact/api/landmark/tunnel/disconnect`;
  const queryString = null;
  const options = {
    method: "PUT",
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      serial: controllerSerial,
    }),
  };
  return new Promise((resolve, reject) => {
    request(requestURL, queryString, options).then(
      (responseData) => {
        resolve(responseData);
      },
      (e) => {
        reject(e);
      }
    );
  });
}

export function triggerShowInAZone(token, controllerSerial, zoneId, showId) {
  const requestURL = `${host}/interact/api/landmark/device/${controllerSerial}/api/v1/zones/${zoneId}/shows/${showId}/trigger`;
  const options = {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
    body: JSON.stringify({
      transition_type: "snap",
      transition_time: 0,
    }),
  };

  return new Promise((resolve, reject) => {
    request(requestURL, undefined, options).then(
      (responseData) => {
        resolve(responseData);
      },
      (e) => {
        reject(e);
      }
    );
  });
}
