import {ActivatedRoute, Router} from "@angular/router";
import {Component, Input, OnInit} from '@angular/core';

import {DataService, MoviesService} from "../../services";
import {IGenre, IMovie} from "../../interfaces";
import {urls} from "../../../../constants";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  imageEndPoint: string;
  movieDetails: IMovie;
  @Input()
  isDarkTheme: boolean;
  genres: IGenre[];
  @Input()
  movie: IMovie;
  image: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private dataService: DataService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.moviesService.getById(this.movie.id).subscribe(movie => {
      this.image = `${urls.image}${this.imageEndPoint}`;
      this.movieDetails = movie;
      this.genres = [...this.movieDetails.genres];
    });
  }

  navigateToInfo(): void {
    this.dataService.storagePage.subscribe(page => {
      this.router.navigate([this.movie.id], {
        relativeTo: this.activatedRoute,
        state: {movie: this.movieDetails},
        queryParams: {page: page},
        queryParamsHandling: "merge",
      }).then();
    });

    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    }, 100);
  }
}
