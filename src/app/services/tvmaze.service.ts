import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {

  private API_URL: string = 'http://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  getShowsByKeywords(keywords: string) {
    let uri = `${this.API_URL}/search/shows?q=${keywords}`;

    return this.httpRequest(uri);
  }

  getShowDetail(showId) {
    let uri = `https://cors-anywhere.herokuapp.com/${this.API_URL}/shows/${showId}`;

    return this.httpRequest(uri);
  }

  private httpRequest(uri: string) {
    return this.http.get(uri);
  }
}
