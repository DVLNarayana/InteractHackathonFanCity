import request from '../utils/request';

const host = 'https://api.brandwatch.com';

const brandwatch_username =
  'interacthackathon2020@gmail.com';
const brandwatch_password =
  'Welcome!1234';

const apiusername = brandwatch_username;
const apipassword = brandwatch_password;
const clientid = 'brandwatch-api-client';
const granttype = 'api_password';

export function getBrandwatchAccessToken() {
  const requestURL = `${host}/oauth/accesstoken?username=${apiusername}&grant_type=${granttype}&client_id=${clientid}`;
  const options = {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',    
      Accept: 'application/json',
    },
    body: encodeURIComponent({
      password: apipassword
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
//https://api.brandwatch.com/projects/1998291985/data/volume/sentiment/days?queryId=2000243296&startDate=2020-06-04&endDate=2020-06-17&  
export function getVolume(token, projectId, queryId, startDate, endDate) {
  const requestURL = `${host}/projects/${projectId}/data/volume/sentiment/days?queryId=${queryId}&startDate=${startDate}&endDate=${endDate}`;
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

