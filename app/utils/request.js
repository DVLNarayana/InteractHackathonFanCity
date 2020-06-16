/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(
  url,
  queryString,
  options,
  canHaveResponseBody = true,
) {
  let req;
  if (queryString) {
    req = `${url}?${queryString}`;
  } else {
    req = url;
  }
  return new Promise((resolve, reject) => {
    fetch(req, options)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          if (canHaveResponseBody) {
            resolve(response.json());
          } else {
            resolve();
          }
          return;
        }
        const error = new Error();
        error.status = response.status;
        error.message = response.statusText;

        console.log('API fetch fail : ', {
          Message: error.message,
          Status: error.status,
          Url: url
            .replace('http://', '')
            .replace('https://', '')
            .replace(/[^/]*/, ''),
        });
        reject(error);
      })
      .catch((err) => {
        console.log('request reject', JSON.stringify(err));
        const error = new Error();
        error.name = 'NetworkError';
        error.message = 'Network Request Failed';
        console.log('API fetch fail : ', {
          Name: error.name,
          Message: error.message,
          Url: url
            .replace('http://', '')
            .replace('https://', '')
            .replace(/[^/]*/, ''),
        });
        reject(error);
      });
  });
}
