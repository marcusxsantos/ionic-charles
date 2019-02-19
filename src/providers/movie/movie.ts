import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseUrl = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLastestMovies(page = 1) {
    return this.http.get(this.baseUrl + `/movie/popular?page=${page}&api_key=` + this.getApiKey());
  }
  getMovieDetail(filmeId) {
    return this.http.get(this.baseUrl + `/movie/${filmeId}?api_key=` + this.getApiKey());
  }
  getApiKey()
  {
    return "d37ef0066af34415dd1645ed81871674";
  }

}
