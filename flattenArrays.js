function steamrollArray(arr) {
    return arr.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? steamrollArray(curr) : curr), []);
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);