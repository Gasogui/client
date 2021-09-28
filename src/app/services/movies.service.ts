import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/Movie';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    API_URI = 'http://localhost:3000/api';

    constructor(private http: HttpClient) { }

    //get movies
    getMovies() {
        return this.http.get(`${this.API_URI}/movies`);
    }

    //get a movie
    getMovie(id: string) {
        return this.http.get(`${this.API_URI}/movies/${id}`);
    }

    //get add movie
    saveMovie(movie: Movie) {
        return this.http.post(`${this.API_URI}/movies`, movie);
    }

    //modify movie
    updateMovie(id: string | number, updatedMovie: Movie): Observable<Movie> {
        return this.http.put(`${this.API_URI}/movies/${id}`, updatedMovie);
    }

    //delete movie
    deleteMovie(id: string) {
        return this.http.delete(`${this.API_URI}/movies/${id}`);
    }

}
