const average = (array) => {
  if (array.length === 0 || typeof (array) !== 'object') {
    return undefined;
  }
  let sum = 0;
  for (const number of array) {
    if (typeof number !== 'number') {
      return undefined;
    }
    sum += number;
  }
  return Math.round(sum / array.length);
};

module.exports = average;
