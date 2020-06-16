import request from '../utils/request';

const host = 'https://api.interact-lighting.com';

const landmark_BurlingtonTunnel_setup_service_id =
  'a069426d-3c9c-4d3b-a042-be5fd61ba1d2';
const landmark_BurlingtonTunnel_setup_service_secret =
  '$2a$10$a50Awr7mRVdmMD.Zy0CnUeb8SHqzjDzoJPSumSLQTYbYQ8l9kZG4O';

const serviceId = landmark_BurlingtonTunnel_setup_service_id;
const serviceSecret = landmark_BurlingtonTunnel_setup_service_secret;
const apiKey = 'v0GISyT2Xonan3QrGmrvZL7hdE5M6AcJ';
const apiSecret = '2Bjj02FnxSWJSYgK';

export function getLandmarkAccessToken() {
  const requestURL = `${host}/oauth/accesstoken`;
  const options = {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' + encodeURIComponent(`${serviceId}:${serviceSecret}`),
      Accept: 'application/json',
    },
    body: JSON.stringify({
      app_key: apiKey,
      app_secret: apiSecret,
      service: 'landmark',
    }),
  };
  return new Promise((resolve, reject) => {
    request(requestURL, undefined, options).then(
      (responseData) => {
        resolve(responseData.body.token);
      },
      (e) => {
        reject(e);
      },
    );
  });
}

export function getSites(token) {
  const requestURL = `${host}/interact/api/landmark/sites`;
  const queryString = null;
  const options = {
    method: 'GET',
    headers: {
      Accept: '*/*',
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
      },
    );
  });
}

export function getSiteById(token, siteId) {
  const requestURL = `${host}/interact/api/landmark/sites/${siteId}`;
  const queryString = null;
  const options = {
    method: 'GET',
    headers: {
      Accept: '*/*',
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
      },
    );
  });
}

export function getCustomButtons(token) {
  const requestURL = `${host}/interact/api/landmark/custombuttons`;
  const queryString = null;
  const options = {
    method: 'GET',
    headers: {
      Accept: '*/*',
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
      },
    );
  });
}

export function getConnectionStatus(token, controllerSerial) {
  const requestURL = `${host}/interact/api/landmark/tunnel/status`;
  const options = {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${this.session.token}`,
      Accept: 'application/json',
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
      },
    );
  });
}

export function connectController(token, controllerSerial) {
  const requestURL = `${host}/interact/api/landmark/tunnel/connect`;
  const queryString = null;
  const options = {
    method: 'PUT',
    headers: {
      Accept: '*/*',
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
      },
    );
  });
}

export function disconnectController(token, controllerSerial) {
  const requestURL = `${host}/interact/api/landmark/tunnel/disconnect`;
  const queryString = null;
  const options = {
    method: 'PUT',
    headers: {
      Accept: '*/*',
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
      },
    );
  });
}

export function triggerShowInAZone(token, controllerSerial, zoneId, showId) {
  const requestURL = `${host}/interact/api/landmark/device/${controllerSerial}/api/v1/zones/${zoneId}/shows/${showId}/trigger`;
  const options = {
    method: 'POST',
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${this.session.token}`,
      Accept: 'application/json',
    },
  };

  return new Promise((resolve, reject) => {
    request(requestURL, undefined, options).then(
      (responseData) => {
        resolve(responseData);
      },
      (e) => {
        reject(e);
      },
    );
  });
}
