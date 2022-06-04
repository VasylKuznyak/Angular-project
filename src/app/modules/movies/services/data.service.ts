import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  storageQueryGenre = new BehaviorSubject<string[]>([]);
  storageGenre = new BehaviorSubject<number[]>([]);
  storageTotalPages = new BehaviorSubject<number>(500);
  storageTheme = new BehaviorSubject<boolean>(false);
  storagePage = new BehaviorSubject<number>(1);

  constructor() {
  }
}
