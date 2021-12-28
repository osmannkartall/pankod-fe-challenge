interface Image {
  "Poster Art": {
    url: string,
    width: number,
    height: number,
  };
}

export interface Program {
  [key: string]: string | number | Image;
  title: string;
  description: string;
  programType: string;
  images: Image;
  releaseYear: number;
}
