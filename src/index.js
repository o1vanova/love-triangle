/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  let i = 1;

  while(i < preferences.length + 1) {

    let first = preferences[i - 1];
    let second = preferences[first - 1];
    let third = preferences[second - 1];

    count += i === third && first !== second && second !== third;
    i++;
  }
  return count/3;
};
