import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../constants/api';

@Injectable()
export class SearchService {
  constructor(public http: HttpClient) {
  }

  getVenues(query: string): any {
    return this.http.get(`${API.BASE_URL}?near=${query}&client_id=${API.CLIENT_ID}&client_secret=${API.CLIENT_SECRET}&v=${API.V}`);
  }
}
