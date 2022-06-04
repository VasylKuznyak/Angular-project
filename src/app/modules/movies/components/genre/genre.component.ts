import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {DataService} from "../../services";
import {IGenre} from "../../interfaces";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  listGenresName: string;
  @Input()
  genre: IGenre;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  chooseGenre() {
    this.dataService.storageGenre.next([...this.dataService.storageGenre.value, this.genre.id]);
    this.dataService.storageQueryGenre.next([...this.dataService.storageQueryGenre.value, this.genre.name]);

    this.listGenresName = this.dataService.storageQueryGenre.value.join(',');

    this.activatedRoute.queryParams.subscribe(({genre}) => {
      this.router.navigate(
        [],
        {
          relativeTo: this.activatedRoute,
          queryParams: {genre: this.listGenresName},
          queryParamsHandling: "merge",
        }).then();
    });
  }
}
