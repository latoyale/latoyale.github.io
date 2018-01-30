import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


interface ItemsResponse {
  results: string[];
  id: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'My Reddit Client';

   results: string[];


  constructor(private http: HttpClient){ }

  ngOnInit(): void {
    this.http.get<string[]>('https://www.reddit.com/r/analog/top/.json?sort=new&limit=100"')
    .subscribe(data => {  this.results = data;   });
  }

}
