import {Component, OnInit, ViewChild} from '@angular/core';
import {DualSelectDemoComponent} from '../dual-select/dual-select-demo/dual-select-demo.component';

export interface BranchRoleTable {
  branchName: string;
  branchRole: string;
}

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})

export class UserScreenComponent implements OnInit {
  @ViewChild(DualSelectDemoComponent, {static: false})
  private timerComponent: DualSelectDemoComponent;

  hotelId: string;
  hotelName: string;
  hotelRegisterNo: string;
  displayedColumns: string[] = ['branchName', 'branchRole'];
  roleTableFlag = false;
  dataSource: BranchRoleTable[];

  constructor() {
    this.hotelId = 'NOVHYD';
    this.hotelName = 'Novotel';
    this.hotelRegisterNo = '123ABC';
  }


  ngOnInit() {
  }

  proceed() {
    this.dataSource = [];
    if (typeof this.timerComponent.confirmedTube !== 'undefined' && this.timerComponent.confirmedTube.length > 0) {
      this.timerComponent.confirmedTube.forEach((value) => {
        this.dataSource.push({
          branchName: value,
          branchRole: null
        });
      });
      this.roleTableFlag = true;
    } else {
      this.roleTableFlag = false;
    }
  }
}
