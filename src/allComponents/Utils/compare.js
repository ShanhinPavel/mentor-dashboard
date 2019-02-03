/*
  *This function is an argument for array.sort.
   It sets how to sort collection: by alphabet if it contains 'string'
   or from less to more if it constains 'number'
*/
const compare = (a, b) => {
  if (a < b) {
    return -1;
  } if (a > b) return 1;
  return 0;
};

module.exports = compare;
