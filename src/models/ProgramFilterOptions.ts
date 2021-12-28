import { SortOrder } from "./SortOrder";

export interface ProgramFilterOptions {
  [key: string]: { title: string, filterAttribute: string, sortOrder: SortOrder };
}
