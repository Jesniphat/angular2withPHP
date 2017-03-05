import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { RootscopeService } from "../../service/rootscope.service";
import { Subscription } from 'rxjs/Subscription';
declare var $ : any;

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  @Input() name: string;
    private test: any;
    private test1: any;
    private menuId: any[];
    private items: MenuItem[];

    subscription:Subscription;

    constructor( private $rootScope:RootscopeService, private _elRef: ElementRef){}

    ngOnInit() {
      // this._navService.navItem$.subscribe(data => this.gensomething(data));
      this.items = [
            {
                label: 'Product',
                icon: 'fa-product-hunt',
                items: [
                    {label: 'Category List', icon: 'fa-tag', routerLink: ['/category_list']},
                    {label: 'Product List', icon: 'fa-tag', routerLink: ['/product_list']}
                ]
            },
            {
                label: 'Order',
                icon: 'fa-cart-plus',
                items: [
                    {label: 'Order List', icon: 'fa-shopping-cart'}
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'fa-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                    ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa-save'},
                            {label: 'Update', icon: 'fa-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa-minus'}
                        ]
                    }
                ]
            }
        ];
    }

    gensomething(od:any){
        if(od != "" && od != undefined){
          console.log(od);
          this.test1 = od;
          console.log(JSON.parse(this.test1));
          this.test = JSON.parse(od).employees;
        }
    }

    menuClick(idName:any){
      for (let i=0; i < this.menuId.length; i++){
        $(this._elRef.nativeElement).find('#'+this.menuId[i].id).css({'background':'','color':''});
        if(this.menuId[i].id == idName){
          $(this._elRef.nativeElement).find('#'+this.menuId[i].id).css({'background':'#000','color':'#fff'});
        }
      }
    }

}
