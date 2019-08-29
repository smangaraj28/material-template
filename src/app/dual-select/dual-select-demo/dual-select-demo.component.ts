import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dual-select-demo',
  templateUrl: './dual-select-demo.component.html',
  styleUrls: ['./dual-select-demo.component.css']
})
export class DualSelectDemoComponent implements OnInit {
  keepSorted = true;
  key: string;
  display: any;
  filter = false;
  source: Array<any>;
  confirmed: Array<any>;
  userAdd = '';
  disabled = false;
  sourceLeft = true;
  format: any = {
    add: 'Add',
    remove: 'Remove',
    all: 'All',
    none: 'None',
    direction: 'left-to-right',
    draggable: true,
    locale: undefined
  };

  sourceTube: Array<string>;
  confirmedTube: Array<string>;
  tube: Array<string> = [
    'Branch 1',
    'Branch 2',
    'Branch 3',
    'Branch 4',
    'Branch 5',
    'Branch 6',
    'Branch 7',
    'Branch 8',
    'Branch 9',
    'Branch 10',
    'Branch 11',
    'Branch 12',
    'Branch 13',
    'Branch 14',
  ];
  breakpoint: any;

  private useTube() {
    this.key = undefined;
    this.display = undefined;
    this.keepSorted = false;
    this.source = this.sourceTube;
    this.confirmed = this.confirmedTube;
  }

  doReset() {
    this.sourceTube = JSON.parse(JSON.stringify(this.tube));
    this.confirmedTube = new Array<string>();
    this.useTube();
  }

  doDelete() {
    if (this.source.length > 0) {
      this.source.splice(0, 1);
    }
  }

  doCreate() {
    if (typeof this.source[0] === 'object') {
      const o = {};
      o[this.key] = this.source.length + 1;
      o[this.display] = this.userAdd;
      this.source.push(o);
    } else {
      this.source.push(this.userAdd);
    }
    this.userAdd = '';
  }

  doAdd() {
    for (let i = 0, len = this.source.length; i < len; i += 1) {
      const o = this.source[i];
      const found = this.confirmed.find((e: any) => e === o);
      if (!found) {
        this.confirmed.push(o);
        break;
      }
    }
  }

  doRemove() {
    if (this.confirmed.length > 0) {
      this.confirmed.splice(0, 1);
    }
  }

  doFilter() {
    this.filter = !this.filter;
  }

  filterBtn() {
    return (this.filter ? 'Hide Filter' : 'Show Filter');
  }

  doDisable() {
    this.disabled = !this.disabled;
  }

  disableBtn() {
    return (this.disabled ? 'Enable' : 'Disabled');
  }

  swapDirection() {
    this.sourceLeft = !this.sourceLeft;
    this.format.direction = this.sourceLeft ? 'left-to-right' : 'right-to-left';
  }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
    this.doReset();
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
}
