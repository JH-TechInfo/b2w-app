import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
pgHead = {
  title: 'About',
  subTitle: 'About Blessing 2 World',
  image: '/../../../assets/images/about.jpg'
}

}
