import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    // public submitForm !: FormGroup;
  ) { }

  ngOnInit(): void {
  }

  // submitForm(){
  //   console.log("HelloWorld");
  // }
}
