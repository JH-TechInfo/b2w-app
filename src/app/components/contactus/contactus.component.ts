import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pgHead = {
    title: 'Contact Us',
    subTitle: 'Any queires, please contact us',
    image: '/../../../assets/images/contactus.jpg'
  }
}
