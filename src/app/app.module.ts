import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MenuModule, MenubarModule, PanelMenuModule, MenuItem, InputTextModule, 
         MessagesModule, GrowlModule } from 'primeng/primeng';

import { routing } from "./routes";

import { AppComponent } from './app.component';
import { SidemenuComponent } from './menu/sidemenu/sidemenu.component';
import { TopbarComponent } from './menu/topbar/topbar.component';
import { LoginModule } from './components/login/login.module';
import { HomeModule } from './components/home/home.module';
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    SidemenuComponent,
    TopbarComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    InputTextModule,
    MenuModule,
    MenubarModule,
    PanelMenuModule,
    MessagesModule,
    GrowlModule,
    ////////////////// page module ////////////////////
    SharedModule.forRoot(),
    LoginModule,
    HomeModule
  ],
  // providers:[
  //   ApiService,
  //   RootscopeService,
  //   CookieService,
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
