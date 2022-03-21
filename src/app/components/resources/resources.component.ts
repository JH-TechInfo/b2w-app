import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pgHead = {
    title: 'Important Resourcess for you!',
    subTitle: 'You can have a free access to the resourcess',
    image: '/../../../assets/images/resources.jpg'
  }
}
