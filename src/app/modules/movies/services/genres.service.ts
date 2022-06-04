import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

import {urls, language} from "../../../constants";
import {IGenres} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IGenres> {
    return this.httpClient.get<IGenres>(urls.genres,
      {params: {language: language}});
  }
}
