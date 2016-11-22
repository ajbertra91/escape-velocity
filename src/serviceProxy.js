import 'fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

export function serviceProxy(options) {
  return fetch(options.url)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => {
      return data;
    }).catch((error) => {
      return error;
    })
}