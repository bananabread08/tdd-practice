const arrayAnalyze = (array) => {
  const object = {};
  object.average = [...array].reduce((acc, curr) => acc + curr) / array.length;
  object.min = [...array].sort((acc, curr) => acc - curr)[0];
  object.max = [...array].sort((acc, curr) => curr - acc)[0];
  object.length = array.length;
  return object;
};

module.exports = arrayAnalyze;
