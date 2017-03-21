import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MenuModule, MenubarModule, PanelMenuModule, MenuItem, InputTextModule,
         MessagesModule, GrowlModule } from 'primeng/primeng';

import { routing } from "./app.routing";

import { SharedModule } from "./shared/shared.module";
import { AppComponent } from './app.component';
import { SidemenuComponent } from './menu/sidemenu/sidemenu.component';
import { TopbarComponent } from './menu/topbar/topbar.component';
import { LoginModule } from './components/login/login.module';
import { HomeModule } from './components/home/home.module';
import { SettingModule } from './components/setting/setting.module';
import { CategoryModule } from './components/category/category.module';
import { ProductModule } from './components/product/product.module';

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
    ////////////////// Service module /////////////////
    SharedModule,
    ////////////////// page module ////////////////////
    LoginModule,
    HomeModule,
    SettingModule,
    CategoryModule,
    ProductModule
  ],
  // providers:[
  //   ApiService,
  //   RootscopeService,
  //   CookieService,
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
