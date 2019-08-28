import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})

export class UserScreenComponent implements OnInit {
  hotelId: string;
  hotelName: string;
  hotelRegisterNo: string;
  constructor() {
    this.hotelId = 'NOVHYD';
    this.hotelName = 'Novotel';
    this.hotelRegisterNo = '123ABC';
  }


  ngOnInit() {
  }
}
