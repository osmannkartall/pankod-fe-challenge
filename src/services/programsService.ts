import { filterByAttribute } from "src/utils";

const programsPath = 'mock/sample.json';

const headers = { 
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

export const getPrograms = async (programType: string) => {
  try {
    const response = await fetch(programsPath, { headers })
    const programs = await response.json();      

    if (Array.isArray(programs?.entries)) {
      return filterByAttribute(programs.entries, "programType", programType);
    }

    throw Error("An error occured");
  } catch (err) {
    console.error(new Date().toLocaleString(), err);
  }
};