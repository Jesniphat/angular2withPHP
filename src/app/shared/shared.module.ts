import { NgModule ,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from "../service/api.service";
import { RootscopeService } from "../service/rootscope.service";
import { CookieService } from "../service/cookie.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports:      [ /* Export them */ ]
})
export class SharedModule { 
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ApiService,
                RootscopeService,
                CookieService
            ]
        };
    }
}
