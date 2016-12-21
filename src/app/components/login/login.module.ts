import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MessagesModule, GrowlModule} from 'primeng/primeng';

import { SharedModule } from "../../shared/shared.module";
import { LoginComponent } from "./login.component";
import { routing } from "./login.routing";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    MessagesModule,
    GrowlModule,
    routing,
    SharedModule.forRoot()
  ],
  declarations: [ 
    LoginComponent 
  ],
  bootstrap: [
    LoginComponent
  ]
})
export class LoginModule { }
