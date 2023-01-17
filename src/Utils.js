export function range(start, end) {
  return [...Array(end - start + 1).keys()].map((i) => i + start);
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const random = (min, max) =>
  min + Math.floor(Math.random() * (max - min + 1));
export const sumArray = (array) => array.reduce((a, b) => a + b, 0);

export const randomSumIn = (arr, max) => {
  const sets = [[]];
  const sums = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, len = sets.length; j < len; j++) {
      const candidateSet = sets[j].concat(arr[i]);
      const candidateSum = sumArray(candidateSet);
      if (candidateSum <= max) {
        sets.push(candidateSet);
        sums.push(candidateSum);
      }
    }
  }
  return sums[random(0, sums.length - 1)];
};
