import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-wrapper',
  templateUrl: './dashboard-wrapper.component.html',
  styleUrls: ['./dashboard-wrapper.component.css']
})

export class DashboardWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   if (localStorage.getItem('reloadFlag')) {
    localStorage.removeItem('reloadFlag');
    location.reload();
   }
  }

}
