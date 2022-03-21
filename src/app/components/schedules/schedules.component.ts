import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pgHead = {
    title: 'Schedule to Success!',
    subTitle: 'Please follow te below schedule for quick success in your life',
    image: '/../../../assets/images/schedule.jpg'
  }
}
