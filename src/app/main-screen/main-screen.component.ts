import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'Room Booking', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Inventory Management', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Hotel POS', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Super Market POS', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Reports', cols: 1, rows: 1, color: '#E1F14B'},
    {text: 'Accounting', cols: 1, rows: 1, color: '#F1A587'},
  ];
  @ViewChild(MatSidenav, {static: true}) sidenav: MatSidenav;
  events: string[] = [];
  opened = true;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor() {
  }

  ngOnInit() {
  }
}
