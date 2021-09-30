/* movie - list.component.ts */
import { Component, OnInit, HostBinding } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
/* import { Movie } from 'src/app/models/Movie' */
import { Router } from '@angular/router';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

    lisMovies: any = [];

    constructor(
        private movieService: MoviesService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getMovies();
    }

    //get movies
    getMovies() {
        this.movieService.getMovies().subscribe(
            res => {
                console.log(res);
                this.lisMovies = <any>res;
            },
            err => console.error(err)
        );
    }

    //delete movie
    deleteMovie(id: string) {
        this.movieService.deleteMovie(id).subscribe(
            res => {
                console.log(res);
                this.getMovies();
                /* this.lisMovies = res; */
            },
            err => console.error(err)
        );
    }

    //modify movie
    updateMovie(id: string) {
        this.router.navigate([`/edit/${id}`]);
    }
}
