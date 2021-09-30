/* ---movie - edit.component.ts--- */
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/models/Movie'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-movie-edit',
    templateUrl: './movie-edit.component.html',
    styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

    movie: Movie = {
        mov_id: ' ',
        mov_title: ' ',
        mov_year: ' ',
        mov_time: ' ',
        mov_lang: ' ',
        mov_dt_rel: ' ',
        mov_rel_country: ' '
    };


    constructor(
        private movieService: MoviesService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const params = this.activatedRoute.snapshot.params.id
        console.log('id de entrada: ' + params);

        if (params) {
            this.movieService.getMovie(params).subscribe(
                res => {
                    console.log(res);
                    this.movie = res;
                },
                err => console.log(err)
            );
        }
    }

    updateMovie() {

    }

}
