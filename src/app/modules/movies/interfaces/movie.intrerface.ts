import {IGenre} from "./genre.interface";

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  budget: number;
  homepage: string;
  revenue: number;
  genres: IGenre[];
  production_companies: IProducers[]
}

export interface IProducers {
  id: number;
  name: string;
}



