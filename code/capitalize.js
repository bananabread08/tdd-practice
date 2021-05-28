const capitalize = (str) => {
  if ((str.length = 0 || str === '')) return '';
  if (typeof str !== 'string') return 'ERROR. Not a String';
  return str[0].toUpperCase() + str.slice(1);
};

module.exports = capitalize;
