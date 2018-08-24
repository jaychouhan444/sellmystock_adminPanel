import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name = localStorage.getItem('name');

  constructor(private router: Router) { }

  ngOnInit() {
  }



  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('reloadFlag');
    this.router.navigate(['login']);
    console.log('token has been destoryed form localtorage ');
  }
}
