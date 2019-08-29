import {Component, OnInit, ViewChild} from '@angular/core';
import {DualSelectRoleComponent} from '../dual-select/dual-select-role/dual-select-role.component';

@Component({
  selector: 'app-role-screen',
  templateUrl: './role-screen.component.html',
  styleUrls: ['./role-screen.component.css']
})

export class RoleScreenComponent implements OnInit {
  @ViewChild(DualSelectRoleComponent, {static: false})
  private timerComponent: DualSelectRoleComponent;

  hotelId: string;
  hotelName: string;
  hotelRegisterNo: string;
  roleTableFlag = false;
  moduleDetails = [];
  selectedUser: any;
  modules = [];

  constructor() {
    this.hotelId = 'NOVHYD';
    this.hotelName = 'Novotel';
    this.hotelRegisterNo = '123ABC';
  }


  ngOnInit() {
    this.modules = [
      'POS Billing',
      'Inventory Management',
      'Room Booking',
      'Super Market POS'
    ];
  }

  proceed() {
    this.moduleDetails = [];
    if (typeof this.timerComponent.confirmedTube !== 'undefined' && this.timerComponent.confirmedTube.length > 0) {
      this.timerComponent.confirmedTube.forEach((value) => {
        this.moduleFunctionality(value);
        this.moduleDetails.push([{
          name: value,
          id: value,
          details: this.modules
        }]);
      });
      this.roleTableFlag = true;
    } else {
      this.roleTableFlag = false;
    }
  }

  moduleFunctionality(value) {
    this.modules = [];
    if (value === 'Room Booking') {
      this.modules.push('XYZ');
      this.modules.push('LKJ');
      this.modules.push('ABC');
    } else if (value === 'POS Billing') {
      this.modules.push('poo');
      this.modules.push('acx');
      this.modules.push('qew');
    } else if (value === 'Inventory Management') {
      this.modules.push('123');
      this.modules.push('341');
      this.modules.push('213');
    } else if (value === 'Super Market POS') {
      this.modules.push('Add');
      this.modules.push('Sub');
      this.modules.push('Mul');
    }
  }
}
