/* eslint-disable no-underscore-dangle */
import { Buffer } from 'buffer';

import { clearCookie, getCookie } from './common';
import * as crypto from './crypto';

let trigger = false;

function decrypt(text, ENCRYPTION_KEY) {
  try {
    const textParts = text.reverse().join('')?.split(':');

    const iv = Buffer.from(textParts.shift(), 'hex');

    const encryptedText = Buffer.from(textParts.join(':'), 'hex');

    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY, 'hex'), iv);

    let decrypted = decipher.update(encryptedText);

    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
  } catch (err) {
    return text;
  }
}

function handleResponse(response) {
  if (response.status === 401 && !trigger && getCookie('account_plastk_token')) {
    trigger = true;
    clearCookie('account_plastk_token');
    clearCookie('account_plastk_status');
    clearCookie('plastk_is_free');
    clearCookie('plastk_redirect');
    window.location.reload();
  }
  return response;
}
function get(url, enc = false) {
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${getCookie('account_plastk_token')}`,
  };
  const requestOptions = {
    method: 'GET',
    headers,
  };
  return fetch(url, requestOptions)
    .then(res => handleResponse(res))
    .then(async res => {
      if (enc) {
        const r = await res.json();
        return r;
      }
      return res;
    })
    .then(data => {
      if (enc) {
        return JSON.parse(decrypt(data?.__, getCookie('account_plastk_label')));
      }
      return data;
    });
}

function post(url, body, enc = false) {
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${getCookie('account_plastk_token')}`,
  };

  const requestOptions = {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  };

  return fetch(url, requestOptions)
    .then(res => handleResponse(res))
    .then(async res => {
      if (enc) {
        const r = await res.json();
        return r;
      }

      return res;
    })
    .then(data => {
      if (enc) {
        return JSON.parse(decrypt(data?.__, getCookie('account_plastk_label')));
      }

      return data;
    });
}

function put(url, body, enc = false) {
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${getCookie('account_plastk_token')}`,
  };
  const requestOptions = {
    method: 'PUT',
    headers,
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions)
    .then(res => handleResponse(res))
    .then(async res => {
      if (enc) {
        const r = await res.json();
        return r;
      }
      return res;
    })
    .then(data => {
      if (enc) {
        return JSON.parse(decrypt(data?.__, getCookie('account_plastk_label')));
      }
      return data;
    });
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url, body, enc = false) {
  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${getCookie('account_plastk_token')}`,
  };
  const requestOptions = {
    method: 'DELETE',
    headers,
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions)
    .then(res => handleResponse(res))
    .then(async res => {
      if (enc) {
        const r = await res.json();
        return r;
      }
      return res;
    })
    .then(data => {
      if (enc) {
        return JSON.parse(decrypt(data?.__, getCookie('account_plastk_label')));
      }
      return data;
    });
}

export const Fetch = {
  get,
  post,
  put,
  delete: _delete,
};
