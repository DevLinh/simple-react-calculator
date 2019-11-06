import operate from "./operate";
import isNumber from "./isNumber";

/*
Given a button name and a calculator data object, return an updated
Calculator data object contains:
    result: String      the running result
    next: String        the next number to be operated with the running result
    operation: String   +,-,x,/,%
*/

export default function calculate(obj, buttonName) {
  if (buttonName === "AC") {
    return {
      result: null,
      next: null,
      operation: null
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.next === "0") {
      return {};
    }
    //If there is an operation, update next
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonName };
      }
      return { next: buttonName };
    }

    // If there is no operation, update next and clear the value
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        result: null
      };
    }

    return {
      next: buttonName,
      result: null
    };
  }

  if (buttonName === ".") {
    if (obj.next) {
      if (obj.next.includes(".")) {
        return {};
      }
      return { next: obj.next + "." };
    }
    if (obj.operation) {
      return { next: "0." };
    }
    if (obj.result) {
      if (obj.result.includes(".")) {
        return {};
      }
      return { result: obj.result + "." };
    }
    return { result: "0." };
  }

  if (buttonName === "=") {
    if (obj.next && obj.operation) {
      return {
        result: operate(obj.result, obj.next, obj.operation),
        next: null,
        operation: null
      };
    } else {
      return {};
    }
  }

  if (buttonName === "+/-") {
    if (obj.next) {
      return { next: -1 * parseFloat(obj.next).toString() };
    }
    if (obj.result) {
      return { result: -1 * parseFloat(obj.result).toString() };
    }
    return {};
  }

  // User pressed an operation btn and there is an existing operation
  if (obj.operation) {
    return {
      result: operate(obj.result, obj.next, obj.operation),
      next: null,
      operation: buttonName
    };
  }

  if (!obj.next) {
    return { operation: buttonName };
  }

  return {
    result: obj.next,
    next: null,
    operation: buttonName
  };
}
