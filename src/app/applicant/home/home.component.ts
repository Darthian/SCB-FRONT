import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MaterializeAction } from 'angular2-materialize';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 	public action: String = 'Inscribed';

  constructor() { }

  ngOnInit() {
  }

  goToInscribed() {
    this.action = 'Inscribed';
  }
  goToPublished() {
    this.action = 'published';
  }

  goToPlaces() {
    this.action = 'places';
  }
}
