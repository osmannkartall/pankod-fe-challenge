import { Program } from "@models";

export class ProgramsService {
  public getAllPrograms = () => {
    try {
      const response = require('../../public/mock/sample.json');
  
      return response.entries.filter((program: Program) => program.releaseYear >= 2010);
    } catch (err) {
      console.error(new Date().toLocaleString(), err);
    }
  };
}
