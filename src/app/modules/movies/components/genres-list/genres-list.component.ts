import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';

import {DataService, GenresService} from "../../services";
import {IGenre} from "../../interfaces";

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {
  isDarkTheme: boolean;
  genres: IGenre[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private genresService: GenresService,
    private dataService: DataService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.genresService.getAll().subscribe(genres => this.genres = genres.genres);
    this.dataService.storageTheme.subscribe(theme => this.isDarkTheme = theme);
  }

  resetFilters() {
    this.activatedRoute.queryParams.subscribe(params => {
      const queries = {...params};
      delete queries['genre'];
      this.router.navigate([],
        {
          relativeTo: this.activatedRoute,
          queryParams: queries,
        }).then();
    });
    this.dataService.storageGenre.next([]);
    this.dataService.storageQueryGenre.next([]);
  }
}
