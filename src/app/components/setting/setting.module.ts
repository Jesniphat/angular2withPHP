import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { ButtonModule, InputTextModule, MessagesModule, GrowlModule, PanelModule, ConfirmDialogModule, PasswordModule } from 'primeng/primeng';

import { routing } from "./setting.routing";
import { SharedModule } from '../../shared/shared.module'
import { StaffSettingComponent } from './staff-setting/staff-setting.component';
import { StaffCreateComponent } from './staff-create/staff-create.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    routing,
    MessagesModule,
    GrowlModule,
    PanelModule,
    ConfirmDialogModule,
    SharedModule
  ],
  declarations: [StaffSettingComponent, StaffCreateComponent],
  bootstrap:    [ StaffSettingComponent ]
})
export class SettingModule { }
