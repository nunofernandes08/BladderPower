import _ from "lodash";

//Equação A: Q = 10 – 0.2Pdet --> Very Weak
export const eqA = (value) => {
  if (!value) return;

  const rEqA1 = 10 - 0.2 * 50;
  const rEqA2 = 10 - 0.2 * 0;
  const eqA = _.range(rEqA1, rEqA2 + 1);

  return eqA;
};

//Equação B: Q = 15 – 0.2Pdet --> Weak -
export const eqB = (value) => {
  if (!value) return;

  const rEqB1 = 15 - 0.2 * 75;
  const rEqB2 = 15 - 0.2 * 0;
  const eqB = _.range(rEqB1, rEqB2 + 1);

  return eqB;
};

//Equação C: Q = 20 – 0.2Pdet --> Weak +
export const eqC = (value) => {
  if (!value) return;

  const rEqC1 = 20 - 0.2 * 100;
  const rEqC2 = 20 - 0.2 * 0;
  const eqC = _.range(rEqC1, rEqC2 + 1);

  return eqC;
};

//Equação D: Q = 25 – 0.2Pdet --> Normal -
export const eqD = (value) => {
  if (!value) return;

  const rEqD1 = 25 - 0.2 * 125;
  const rEqD2 = 25 - 0.2 * 0;
  const eqD = _.range(rEqD1, rEqD2 + 1);

  return eqD;
};

//Equação E: Q = 31 – 0.2Pdet --> Normal +
export const eqE = (value) => {
  if (!value) return;

  const rEqE1 = 31 - 0.2 * 150;
  const rEqE2 = 31 - 0.2 * 0;
  const eqE = _.range(rEqE1, rEqE2 + 1);

  return eqE;
};
