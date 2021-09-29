/* -- movie - form.component.ts -- */
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/models/Movie'
import { Router } from '@angular/router';

@Component({
    selector: 'app-movie-form',
    templateUrl: './movie-form.component.html',
    styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

    movie: Movie = {
        mov_id: ' ',
        mov_title: ' ',
        mov_year: ' ',
        mov_time: ' ',
        mov_lang: ' ',
        mov_dt_rel: ' ',
        mov_rel_country: ' '
    };

    constructor(private movieService: MoviesService, private router: Router) { }

    ngOnInit(): void {
    }

    saveMovie() {
        this.movieService.saveMovie(this.movie).subscribe();
        this.router.navigate(['/movies']);
    }
}
