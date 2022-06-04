import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';

import {DataService, MoviesService} from "../../services";
import {urls} from "../../../../constants";
import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  movie: IMovie;
  image: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private moviesService: MoviesService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['movie'];
      if (state) {
        this.movie = state;
      } else {
        this.moviesService.getById(id).subscribe(movie => this.movie = movie);
      }
      this.moviesService.getMovieImage(id).subscribe(value => {
        const differentPosters = value.backdrops.length;
        const {file_path} = value.backdrops[Math.floor(Math.random() * differentPosters)];
        this.image = `${urls.image}${file_path}`;
      })
    });
  }
}
