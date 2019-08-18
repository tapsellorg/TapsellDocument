export function getUrlVars(url) {
  let myJson = {};
  let decodedParams = decodeURIComponent(url);
  let hashes = decodedParams.substr(1).split('&');
  hashes.forEach(function(items) {
    let hash = items.split('=');
    myJson[hash[0]] = hash[1];
  });

  return myJson;
}
