import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-head',
  templateUrl: './page-head.component.html',
  styleUrls: ['./page-head.component.css']
})
export class PageHeadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('pgHeadInfo') pgHeadInfo = {
    title: 'Title', 
    subTitle: 'Sub Title', 
    image: '/../../../assets/images/HomeBanner.jpg'};

  // @Input('pgSubTitle') pgSubTitle = "Sub Title";
  // @Input('pgImage') pgImage = "/../../../assets/images/HomeBanner.jpg";
}
