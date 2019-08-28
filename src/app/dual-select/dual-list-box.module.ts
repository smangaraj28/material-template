import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {DualListComponent} from './dual-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule
  ],
  declarations: [DualListComponent],
  exports: [DualListComponent]
})
export class DualListBoxModule {
}

