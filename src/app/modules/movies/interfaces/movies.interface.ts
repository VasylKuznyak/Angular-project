import {IMovie} from "./movie.intrerface";
import {IGenre} from "./genre.interface";

export interface IMovies{
  page: string;
  results: IMovie[];
  total_pages: number;
  total_results: number;
  genre_ids: IGenre[];
}
