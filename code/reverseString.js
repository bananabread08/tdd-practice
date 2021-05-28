const reverseString = (str) => {
  if (typeof str !== 'string' && typeof str !== 'number')
    return 'ERROR. Not a String.';
  if (typeof str === 'number')
    return str.toString().split('').reverse().join('');
  return str.split('').reverse().join('');
};

module.exports = reverseString;
