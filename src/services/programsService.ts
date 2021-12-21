import { Program } from "@models";

export class ProgramsService {
  private readonly headers = { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  private readonly programsPath = 'mock/sample.json';

  public getAllPrograms = async () => {
    try {
      const response = await fetch(this.programsPath, { headers: this.headers })
      const programs = await response.json();
  
      return programs.entries.filter((program: Program) => program.releaseYear >= 2010);
    } catch (err) {
      console.error(new Date().toLocaleString(), err);
    }
  };
}
