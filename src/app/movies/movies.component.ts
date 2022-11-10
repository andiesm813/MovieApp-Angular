import { Component, OnInit } from '@angular/core';
import { MovieAppService } from '../services/movie-app.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movieAppNowPlaying: any = null;

  constructor(
    private movieAppService: MovieAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.movieAppService.getNowPlaying().subscribe(data => this.movieAppNowPlaying = data);
  }
}
