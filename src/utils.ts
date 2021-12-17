import { Program } from "./models/Program";
import { SortOrder } from "./models/SortOrder";

interface Item {
  [key: string]: any;
}

export function filterByAttribute(items: Program[], attributeKey: string, attributeValue: string) {
  const result = items.filter(
    (item: Program) => item[attributeKey] === attributeValue && item.releaseYear >= 2010
  );

  return result.sort((a, b) => a.title.localeCompare(b.title));
};

export function sortByAttribute(items: Item[], filterAttribute: string, sortOrder: SortOrder) {
  const filterAttributeValueType = typeof items[0][filterAttribute];

  if (filterAttributeValueType === "string" && sortOrder === "asc") {
    items.sort((a: Item, b: Item) => a[filterAttribute].localeCompare(b[filterAttribute]));
  } else if (filterAttributeValueType === "string" && sortOrder === "desc") {
    items.sort((a: Item, b: Item) => b[filterAttribute].localeCompare(a[filterAttribute]));
  } else if (filterAttributeValueType === "number" && sortOrder === "asc") {
    items.sort((a: Item, b: Item) => a[filterAttribute] - b[filterAttribute]);
  } else if (filterAttributeValueType === "number" && sortOrder === "desc") {
    items.sort((a: Item, b: Item) => b[filterAttribute] - a[filterAttribute]);
  }
}
