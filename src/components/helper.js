export function convertQueryToObject() {
  var search = '' || window.location.search.substring(1);
  return !search ? {} : JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

export const serializeObjToQueryURL = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      // console.log(str)
    }
  return str.join("&");
}