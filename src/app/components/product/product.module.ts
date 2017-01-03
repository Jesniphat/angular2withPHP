import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { DataTableModule, ButtonModule,
  SplitButtonModule, InputTextModule,
  InputTextareaModule, DropdownModule,
  FileUploadModule, PanelModule, 
  ConfirmDialogModule, DialogModule, 
  MessagesModule, GrowlModule,
  GalleriaModule } from 'primeng/primeng';

import { SharedModule } from "../../shared/shared.module";

import { routing } from "./product.routing";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { ProductPicComponent } from './product-pic/product-pic.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule, 
    ButtonModule,
    SplitButtonModule, 
    InputTextModule,
    InputTextareaModule, 
    DropdownModule,
    FileUploadModule, 
    PanelModule, 
    ConfirmDialogModule, 
    DialogModule, 
    MessagesModule, 
    GrowlModule,
    GalleriaModule,

    SharedModule,

    routing
  ],
  declarations: [ProductListComponent, ProductManageComponent, ProductPicComponent]
})
export class ProductModule { }
