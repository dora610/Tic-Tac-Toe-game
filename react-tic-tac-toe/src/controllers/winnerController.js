const checkWinner = (itemArr) => {
  if (
    itemArr[0] === itemArr[1] &&
    itemArr[1] === itemArr[2] &&
    itemArr[0] !== null
  ) {
    return itemArr[0];
  }
  if (
    itemArr[3] === itemArr[4] &&
    itemArr[4] === itemArr[5] &&
    itemArr[3] !== null
  ) {
    return itemArr[3];
  }
  if (
    itemArr[6] === itemArr[7] &&
    itemArr[7] === itemArr[8] &&
    itemArr[8] !== null
  ) {
    return itemArr[8];
  }
  if (
    itemArr[0] === itemArr[3] &&
    itemArr[3] === itemArr[6] &&
    itemArr[0] !== null
  ) {
    return itemArr[0];
  }
  if (
    itemArr[1] === itemArr[4] &&
    itemArr[4] === itemArr[7] &&
    itemArr[1] !== null
  ) {
    return itemArr[1];
  }
  if (
    itemArr[2] === itemArr[5] &&
    itemArr[5] === itemArr[8] &&
    itemArr[2] !== null
  ) {
    return itemArr[2];
  }
  if (
    itemArr[0] === itemArr[4] &&
    itemArr[4] === itemArr[8] &&
    itemArr[0] !== null
  ) {
    return itemArr[0];
  }
  if (
    itemArr[2] === itemArr[4] &&
    itemArr[4] === itemArr[6] &&
    itemArr[2] !== null
  ) {
    return itemArr[2];
  }
};

export default checkWinner;
