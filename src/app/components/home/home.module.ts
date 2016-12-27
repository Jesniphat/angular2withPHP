import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
// import { NgSemanticModule } from "ng-semantic";
import { InputTextModule, FileUploadModule } from 'primeng/primeng';

import { HomeComponent } from "./home.component";
import { routing } from "./home.routing";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    InputTextModule,
    routing,
    FileUploadModule,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ],
  bootstrap: [
      HomeComponent
  ]
})
export class HomeModule { }
