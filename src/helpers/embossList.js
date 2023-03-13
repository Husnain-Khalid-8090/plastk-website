/* eslint-disable no-param-reassign */
import { capitalize } from 'lodash';

function embossList(firstName, middleName, lastName) {
  if (!firstName) firstName = '';
  if (!lastName) lastName = '';
  if (!middleName) middleName = '';

  const options = [];

  if (firstName.trim() !== '' && lastName.trim() !== '') {
    // first _ last
    if (firstName !== '' && lastName !== '' && `${firstName} ${lastName}`.length <= 21) {
      options.push(`${firstName} ${lastName}`);
    }
    // first _ middle _ last
    if (
      firstName !== '' &&
      lastName !== '' &&
      middleName.length > 1 &&
      `${firstName} ${middleName} ${lastName}`.length <= 21
    ) {
      options.push(`${firstName} ${middleName} ${lastName}`);
    }

    // first _ middle ( initial ) _ last
    if (
      firstName !== '' &&
      lastName !== '' &&
      middleName.length > 1 &&
      `${firstName} ${capitalize(middleName.split('')[0])} ${lastName}`.length <= 21
    ) {
      options.push(`${firstName} ${capitalize(middleName.split('')[0])} ${lastName}`);
    }
    // first(initial) last
    if (firstName !== '' && lastName !== '' && `${firstName} ${lastName}`.length > 21) {
      options.push(`${capitalize(firstName.split('')[0])} ${lastName}`);
    }
  }
  return options;
}

export default embossList;
