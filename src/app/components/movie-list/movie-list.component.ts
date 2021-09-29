/* movie - list.component.ts */
import { Component, OnInit, HostBinding } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/models/Movie'

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

    games: any = [];

    constructor(private movieService: MoviesService) { }

    ngOnInit(): void {
        this.movieService.getMovies().subscribe(
            res => {
                this.games = res;
            },
            err => console.log(err)
        );

    }

}
