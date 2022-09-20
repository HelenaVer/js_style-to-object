'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const resultObj = {};
  const newArr = sourceString.split(';');

  for (const key of newArr) {
    const [a, b] = key.split(':');

    if (b) {
      resultObj[a.trim()] = b.trim();
    }
  };

  return resultObj;
}

module.exports = convertToObject;
