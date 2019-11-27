export const mode = (numbers) => {
  let modes = []; let count = []; let number; let
    maxIndex = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    number = numbers[i];
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }

  for (let i in count) {
    if (count.hasOwnProperty(i)) {
      if (count[i] === maxIndex) {
        modes.push(Number(i));
      }
    }
  }

  return modes;
};
