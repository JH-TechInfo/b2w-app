import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quicklinks',
  templateUrl: './quicklinks.component.html',
  styleUrls: ['./quicklinks.component.css']
})
export class QuicklinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pgHead = {
    title: 'Important Links you must know!',
    subTitle: 'Somany useful links are available, but few of them are...',
    image: '/../../../assets/images/quicklinks.jpg'
  }
}
