import { Program } from "src/models/Program";

// TODO: fix this type error
export const filterByAttribute = (items: Program[], attributeKey: string, attributeValue: string) => {
  return items.filter((item: Program) => item[attributeKey] === attributeValue);
}