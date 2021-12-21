import { SortOrder } from "./models/SortOrder";

interface Item {
  [key: string]: any;
}

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
