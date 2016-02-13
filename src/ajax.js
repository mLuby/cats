export default function makeRequest (url, callback) {
  var httpRequest;
  if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();
  }
  httpRequest.onreadystatechange = responseHandler;
  httpRequest.open('GET', url);
  httpRequest.send();
  function responseHandler () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        callback(httpRequest.responseText);
      } else {
        console.warn('There was a problem with the request.');
      }
    }
  }
}
