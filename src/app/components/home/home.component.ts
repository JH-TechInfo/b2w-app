import { Component, OnInit } from '@angular/core';
// import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';

import { HomeContService } from 'src/app/services/home-cont.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  homeSections:any = [];

  constructor(private service: HomeContService) {   }
  
  ngOnInit(): void {
    this.service.getAll() 
      .subscribe( 
        response =>{
          this.homeSections = response;
        },
        (err) => { 
          console.log('Unable to get the data.', err );
        });
  }

}
