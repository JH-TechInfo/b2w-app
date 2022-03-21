import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // constructor(private url: string, private http: HttpClient) { }
  constructor(private http: HttpClient) { }
  url = "";
  getAll() {
    // return [{ title: "Must Do - Every Day"} , { title: "Must Know - Things"}, { title: "Word of God"}];
    return this.http.get(this.url);
      // .map(response => response.json())
      // .catch(this.handleError);
  }


}
