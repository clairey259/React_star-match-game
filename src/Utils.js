export function range(start, end) {
    if (start === end) return [start];
    return [start, ...range(start + 1, end)];
  }

  export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }