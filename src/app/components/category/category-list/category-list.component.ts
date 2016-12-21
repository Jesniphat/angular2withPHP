import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../../../service/api.service";
declare var $ : any;

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
    private item = 1;
    private error:string = "";
    private query:string = "";
    private categoryLists:any = [];
    private categorys:any = [];
    private cols:any = ["cate_name","cate_description","product_qty","status"];

    private testPipes = "";

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    console.log("category_list.component");

    this.getCategoryList();
  }

  private getCategoryList(){
    let param = {"id":"ทดสอบ"}
    this.apiService
        .post("/api/category_list",param)
        .subscribe(
          data => this.getCategoryDoneAction(data), // OR this.categoryLists = data.data,
          error => this.errorAction(error) 
          );
  }

  private getCategoryDoneAction(data:any){
      // console.log("data = ", data);
      this.categoryLists = data.data;
  }

  private errorAction(error:any){
      this.error = error.message;
      console.log("errer = ", this.error);
  }

  private add_new_category(data:any){
      // console.log("add new cate = ", data);
      let link: any;
      if(data == 'create'){
          link = ['/category_list/create_cate', data];
      }else{
          link = ['/category_list/create_cate', data.id];
      }
      this.router.navigate(link);
  }

}
