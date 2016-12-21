import { Component } from '@angular/core';
import { ApiService } from "./service/api.service";
import { CookieService } from "./service/cookie.service";
import { RootscopeService } from "./service/rootscope.service";
// Add the RxJS Observable operators.
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private pic_url:string = "";
  private hiddenLogin: any = true;
  private myClass10: any = true;
  private isLogged: boolean;

  constructor(
    private apiSevice: ApiService, 
    private cookie: CookieService, 
    private $rootScope: RootscopeService) {
    
  }

  ngOnInit(){
    // this.testapi();
    this.checkLogin();
    // console.log(this.permission.test());
    // this.checkLoginDoneAction(this.permission.readToken());
    this.$rootScope.showNav$.subscribe(data => this.showNav(data));
  }

  private checkLogin(){
    let param:any = {"id":"isLogin"};
    this.apiSevice
        .post("/api/checklogin", param)
        .subscribe(
          data => this.checkLoginDoneAction(data),
          error => this.checkLoginErrorAction(error)
        );
  }

  private checkLoginDoneAction(res:any){ // เดี่ยวไปใช้ service
    // console.log(res);
    if(res.data){
        this.hiddenLogin = false;
        this.myClass10 = true;
    }else{
        this.hiddenLogin = true;
        this.myClass10 = false;
        window.location.href = "#/login";
    }
  }

  private checkLoginErrorAction(error:any){
      console.log(error);
  }


  private testapi(){
    let param = {"id":"ทดสอบ"}
    this.apiSevice.post("/api/test", param)
        .subscribe(
          data => this.testdone(data),
          error => this.testerror(error)
        );
  }

  private testdone(data:any){
    console.log("data = ", data);
    if(!data.status){
      this.testerror(data);
    }
  }

  private testerror(error:any){
    console.log("error => ", error)
  }

  private showNav(obj:any){
    if(obj != "" && obj != undefined && Object.keys(obj).length != 0){
      // console.log("obj = ", obj);
      let show = obj;
      this.hiddenLogin = show.hiddenLogin;
      this.myClass10 = show.class10;
    }
  }
  
}
