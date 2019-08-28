import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddItemComponent} from './add-item/add-item.component';
import {SharedModule} from './shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainScreenComponent} from './main-screen/main-screen.component';
import {LoginComponent} from './login/login.component';
import {MenuListItemComponent} from './side-nav/menu-list-item/menu-list-item.component';
import {SideNavResponsiveComponent} from './side-nav/side-nav-responsive/side-nav-responsive.component';
import {DualListBoxModule} from './dual-select/dual-list-box.module';
import {DefaultValidatorService} from './angular-table/default-validator.service';
import {ValidatorService} from './angular-table/validator.service';
import {PersonListComponent} from './angular-table/person-list/person-list.component';
import {PersonValidatorService} from './angular-table/person-list/person-validator.service';
import {BranchScreenComponent} from './branch-screen/branch-screen.component';
import {UserScreenComponent} from './user-screen/user-screen.component';
import {DualSelectDemoComponent} from './dual-select/dual-select-demo/dual-select-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavResponsiveComponent,
    MenuListItemComponent,
    AddItemComponent,
    MainScreenComponent,
    LoginComponent,
    PersonListComponent,
    BranchScreenComponent,
    UserScreenComponent,
    DualSelectDemoComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    DualListBoxModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    DefaultValidatorService,
    PersonValidatorService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  ,
  bootstrap: [AppComponent]
})
export class AppModule {
}
