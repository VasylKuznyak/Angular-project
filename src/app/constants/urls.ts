import {environment} from "../../environments/environment";

const {baseURL, baseImageURL} = environment;

export const urls = {
  genres: `${baseURL}/genre/movie/list`,
  movies: `${baseURL}/discover/movie`,
  movie: `${baseURL}/movie`,
  image: `${baseImageURL}`,
}
