import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  
  table;
  insertBtn = true;
  updateBtn = false;
  cityTxt;
  idTxt;
  
  constructor(private http: Http) { }

  ngOnInit() {
    this.getCity();
  }

  insertCity() {

    const jsonstr = '{"city":"' + this.cityTxt + '"}';
    console.log(jsonstr);

    this.http.post('http://192.168.0.110:9001/city/1/cityInsert', jsonstr)
    .subscribe(Response => {
      console.log(Response.json());
     this.getCity();
    });

  }

  getCity() {
    
    this.http.get('http://192.168.0.110:9001/city/2/cityFind')
    .subscribe(response => {
      let result = response.json();
      console.log(result.doc);
      this.table = result.doc;
     
    });
  }

  editCity() {

    const jsonstr = '{"id":"' + this.idTxt + '","city":"' + this.cityTxt + '"}';
    console.log(jsonstr);

    this.http.post('http://192.168.0.110:9001/city/4/update', jsonstr)
    .subscribe(Response => {
      console.log(Response.json());
      this.insertBtn = true;
      this.updateBtn = false;
      this.getCity();
    });

  }

  editCityClick(id) {
    console.log(id);
    const jsonstr = '{"id":"' + id + '"}';
    console.log(jsonstr);

    this.http.post('http://192.168.0.110:9001/city/3/cityFindById', jsonstr)
    .subscribe(Response => {
      console.log(Response.json());
      let result = Response.json();
     console.log(result.doc.city);
     this.cityTxt = result.doc.city;
     this.idTxt = result.doc._id;
     this.updateBtn = true;
     this.insertBtn = false;
    });
  }

  deleteCity(id) {
    console.log(id);
    const jsonstr = '{"id":"' + id + '"}';
    console.log(jsonstr);

    this.http.post('http://192.168.0.110:9001/city/5/Delete', jsonstr)
    .subscribe(Response => {
      console.log(Response.json());
     this.getCity();
    });
  }
}
