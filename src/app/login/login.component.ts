import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  credenAuth;
  loginAlert = false;
  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  }

  login(credentials) {
    console.log(credentials);
    this.http.post('http://192.168.0.108:9001/AdminLogin', JSON.stringify(credentials))
    .subscribe(response => {
      const result = response.json();``
       console.log(result);
      console.log(result);
      if (result && result.token) {
        localStorage.setItem('token',  result.token);
        localStorage.setItem('name',  result.result.adminId);
        const reload = 'FirstTimeLogintrue';
        localStorage.setItem('reloadFlag',  reload);
        console.log('relaod ka flag set hua');
        this.router.navigate(['dashboard']);
        console.log('token set hua');
      } else {
        this.loginAlert = true;
      }
    });
  }
}
