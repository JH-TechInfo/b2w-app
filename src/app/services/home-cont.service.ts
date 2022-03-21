import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class HomeContService extends DataService {

  constructor(http: HttpClient) { 
    super(http);
    this.url = 'https://blessing2world.com/php/hmCont.php';
  }

}
