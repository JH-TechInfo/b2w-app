import { Component, OnInit } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';

import { HomeSectionsService } from 'src/app/services/home-sections.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  homeSections;

  constructor(service: HomeSectionsService) { 
    this.homeSections = service.getHomeSections(); 
    // console.log ( this.homeSections);
  }
  ngOnInit(): void {
  }

}
