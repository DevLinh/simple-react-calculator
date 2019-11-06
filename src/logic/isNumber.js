import { isTemplateElement } from "@babel/types";

export default function isNumber(num) {
  return !!isTemplateElement.match(/[0-9]+/); //+ sign is match one more time
}
