import Big from "big.js";

export default function operate(numOne, numTwo, operation) {
  const a = Big(numOne);
  const b = Big(numTwo);

  if (operation === "+") {
    return a.plus(b).toString();
  }
  if (operation === "-") {
    return a.minus(b).toString();
  }
  if (operation === "x") {
    return a.times(b).toString();
  }
  if (operation === "/") {
    return a.div(b).toString();
  }
  if (operation === "%") {
    return a.mod(b).toString();
  }
  throw Error(`Unknown operation '${operation}'`);
}
