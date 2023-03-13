function findGetParameter(parameterName) {
  let result = null;
  let tmp = [];
  window.location.search
    .substr(1)
    .split('&')
    .forEach(item => {
      tmp = item.split('=');
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp.join('='));
    });
  return result;
}

export default findGetParameter;
