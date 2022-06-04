import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

import {IImages, IMovie, IMovies} from "../interfaces";
import {urls, language} from "../../../constants";

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  movies: IMovies;

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number, with_genres: string): Observable<IMovies> {
    return this.httpClient.get<IMovies>(`${urls.movies}`,
      {params: {page, with_genres, language: language}});
  }

  getById(id: number): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${urls.movie}/${id}`,
      {params: {language: language}});
  }

  getMovieImage(id: string): Observable<IImages> {
    return this.httpClient.get<IImages>(`${urls.movie}/${id}/images`);
  }

}
