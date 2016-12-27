import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DataTableModule, ButtonModule,
  SplitButtonModule, InputTextModule,
  InputTextareaModule, DropdownModule,
  FileUploadModule, PanelModule,
  ConfirmDialogModule, MessagesModule, 
  GrowlModule } from 'primeng/primeng';

import { routing } from "./category.routing";
import { SharedModule } from "../../shared/shared.module";

import { filterTestPipe } from "../../pipes/testfilter.pipe";

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryManageComponent } from './category-manage/category-manage.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule,
    ButtonModule,
    SplitButtonModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    FileUploadModule,
    PanelModule,
    ConfirmDialogModule,
    MessagesModule,
    GrowlModule,
    routing,
    SharedModule
  ],
  declarations: [
    filterTestPipe,
    CategoryListComponent,
    CategoryManageComponent
  ]
})
export class CategoryModule { }
