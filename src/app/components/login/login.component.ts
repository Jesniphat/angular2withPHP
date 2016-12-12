import { Component, OnInit, Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ApiService } from "../../service/api.service";
import { RootscopeService } from "../../service/rootscope.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  response: {};
  password: any;
  username: any;
  private storage: any;

  constructor(private apiService: ApiService, private $rootScope: RootscopeService) { 
    this.storage = localStorage;
  }

  ngOnInit() {
    this.getLogin();
    this.$rootScope.loginShow({hiddenLogin:true, class10:false /*,loginPading:"0px" */});
  }

  private getLogin(){
    let param = {"clear":"login"};
    this.apiService
        .post("/api/clearlogin", param)
        .subscribe(
            res => this.getLoginDoneAction(res),
            error => this.getLoginErrorAction(error)
        );
  }

  private getLoginDoneAction(res:any){
      // console.log("res login = ", res);
  }

  private getLoginErrorAction(error:any){
      this.error = error.message;
  }

  private login(){
    let param = {
      user: this.username,
      password: this.password
    }
    // console.log(param);
    this.apiService
      .post("/api/login", param)
      .subscribe(
          res => this.loginDoneAction(res),
          (error) => this.loginErrorAction(error)
      )
  }

  loginDoneAction(res:any){
      // console.log(" res = ", res);
    if(res.status === true){
        let loginData = JSON.stringify(res.data);
        this.storage.setItem('logindata',loginData);
        this.$rootScope.loginShow({hiddenLogin:false, class10:true /*, loginPading:"225px"*/});
        window.location.href = "#/home";
        // window.location.reload();
    } else {
        console.log("can't login");
    }
  }

  loginErrorAction(error:any){
    this.error = error.message;
    console.log("error = ", this.error);
    // setTimeout(() => this.error = null, 4000);
  }

}
