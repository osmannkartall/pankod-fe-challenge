import { Program } from "src/models/Program";

// TODO: fix this type error, separate the releaseYear logic
export const filterByAttribute = (items: Program[], attributeKey: string, attributeValue: string) => {
  const result = items.filter(
    (item: Program) => item[attributeKey] === attributeValue && item.releaseYear >= 2010
  );

  return result.sort((a, b) => a.title.localeCompare(b.title));
};
