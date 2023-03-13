export const getDateObject = e => {
  const date = new Date(e);
  date.toLocaleTimeString('en-US', { timeZone: 'Canada/Eastern' });
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(date?.getTime())) {
    const otherDate = new Date();
    otherDate.toLocaleTimeString('en-US', { timeZone: 'Canada/Eastern' });

    return otherDate;
  }
  return date;
};

export const setCookie = (name, value, days) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/`;
  document.cookie = `${name}=${value || ''}; path=/; domain=.plastk.ca`;

  return true;
};

export const getCookie = name => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const clearCookie = name => {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.plastk.ca`;

  return true;
};
