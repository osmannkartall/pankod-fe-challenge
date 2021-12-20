import { Program } from "src/models/Program";
import { filterBySearch } from "src/utils";

const programsPath = 'mock/sample.json';

const headers = { 
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

export const getAllPrograms = async () => {
  try {
    const response = await fetch(programsPath, { headers })
    const programs = await response.json();

    return programs.entries.filter((program: Program) => program.releaseYear >= 2010);
  } catch (err) {
    console.error(new Date().toLocaleString(), err);
  }
};

export const searchPrograms = async (programType: string, searchText: string) => {
  try {
    const response = await fetch(programsPath, { headers })
    const programs = await response.json();      

    if (Array.isArray(programs?.entries)) {
      return filterBySearch(programs.entries, "programType", programType, searchText);
    }

    throw Error("An error occured");
  } catch (err) {
    console.error(new Date().toLocaleString(), err);
  }
};
