import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeSectionsService {

  constructor() { }

  getHomeSections () {
    return ["Must Do - Every Day", "Must Know - Things", "Word of God"];
  }
}

// https://fahmidasclassroom.com/register-and-login-system-using-angular-8-php-and-mysql/
// https://www.youtube.com/watch?v=m5ZNGM7VKwg