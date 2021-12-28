import { Program } from "@models";

export class ProgramsService {
  public getAllPrograms = () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const response = require('../../mock/sample.json');
  
      return response.entries.filter((program: Program) => program.releaseYear >= 2010);
    } catch (err) {
      console.error(new Date().toLocaleString(), err);
    }
  };
}
