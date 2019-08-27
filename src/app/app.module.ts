import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddItemComponent} from './add-item/add-item.component';
import {SharedModule} from './shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainScreenComponent} from './main-screen/main-screen.component';
import {LoginComponent} from './login/login.component';
import {MenuListItemComponent} from './side-nav/menu-list-item/menu-list-item.component';
import {SideNavResponsiveComponent} from './side-nav/side-nav-responsive/side-nav-responsive.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavResponsiveComponent,
    MenuListItemComponent,
    AddItemComponent,
    MainScreenComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: []
  ,
  bootstrap: [AppComponent]
})
export class AppModule {
}
