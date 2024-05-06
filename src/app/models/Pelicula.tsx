export class Pelicula {
  public codPelicula: number;
  public nombrePelicula: string;
  public protagonistaPelicula: string;
  public generoPelicula: string;
  public imagenPelicula: string;
  public imagenPeliculaBase64: string;

  constructor(cod: number, nom: string, pro: string, gen: string, img: string, imgbs: string) {
    this.codPelicula = cod;
    this.nombrePelicula = nom;
    this.protagonistaPelicula = pro;
    this.generoPelicula = gen;
    this.imagenPelicula = img;
    this.imagenPeliculaBase64 = imgbs;
  }
}
