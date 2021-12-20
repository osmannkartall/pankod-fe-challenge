import { Program } from "./models/Program";
import { SortOrder } from "./models/SortOrder";

interface Item {
  [key: string]: any;
}

// TODO: refactor filterByAttribute and filterBySearch functions

const numElementInPage = 21;

// TODO: arguman pass etmeye gerek olmayabilir.
export function filterByAttribute(
  programs: Program[],
  attributeKey: string,
  attributeValue: string,
  page: number
) : { hasMoreEntries: boolean, entries: Program[] } {
  const entries = programs.filter((item: Program) => item[attributeKey] === attributeValue);

  // TODO: page number should be positive
  const start = (page - 1) * numElementInPage;
  const hasMoreEntries = page * numElementInPage <= entries.length;
  const end = hasMoreEntries ? page * numElementInPage % entries.length : entries.length;

  return {
    hasMoreEntries,
    entries: entries.sort((a, b) => a.title.localeCompare(b.title)).slice(start, end),
  };
};

export function filterBySearch(
  items: Program[],
  attributeKey: string,
  attributeValue: string,
  searchText: string
) {
  const result = items.filter(
    (item: Program) => (
      item[attributeKey] === attributeValue && item.releaseYear >= 2010
        && item.title.toLocaleLowerCase().includes(searchText)
    )
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
