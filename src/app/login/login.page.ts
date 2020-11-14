import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  id: string = '';
  password: string = '';

  status: Number = 0;
  // status: Number = 200;  // デバッグ用

  postObj: any = {};
  returnObj: any = {};

  constructor(
    private router: Router,
    public gs: GlobalService,
  ) { }

  ngOnInit() {
    // this.status = 0;
    this.postObj['id'] = localStorage.id;
    this.postObj['password'] = localStorage.password;

    this.login();
  }
  ngOnDestroy() {
    if(this.status != 200){
      this.router.navigate(['/login']);
    }
  }

  navigate = () => {
    this.postObj['id'] = this.id;
    this.postObj['password'] = this.password;

    this.login();

    /*
    const body = this.postObj;

    this.gs.http('https://kn46itblog.com/hackathon/CCCu22/php_apis/login.php', body).subscribe(
      res => {
        console.log(res);
        this.returnObj = res;
        this.status = this.returnObj["status"];
        // console.log(this.returnObj["status"]);
        if(this.status == 200){
          localStorage.id = this.id;
          localStorage.attribute = this.returnObj["attribute"];
          localStorage.prefecture = this.returnObj["prefecture"];
          localStorage.password = this.password;
          localStorage.hash = this.returnObj["hash"];
          console.log('Stored item!');
          this.router.navigate(['/tabs', 'tab1', 'login']);
        }
      },
      error => {
        console.log("error: " + error);
      }
    );*/
    // this.router.navigate(['/tabs']);
  }
  navigateToSignup = () => {
    this.router.navigate(['/signup']);
  }

  login = () => {
    const body = this.postObj;

    this.gs.http('https://kn46itblog.com/hackathon/CCCu22/php_apis/login.php', body).subscribe(
      res => {
        console.log(res);
        this.returnObj = res;
        this.status = this.returnObj["status"];
        // console.log(this.returnObj["status"]);
        if(this.status == 200){
          localStorage.id = this.postObj["id"];
          localStorage.attribute = this.returnObj["attribute"];
          localStorage.prefecture = this.returnObj["prefecture"];
          localStorage.password = this.postObj["password"];
          localStorage.hash = this.returnObj["hash"];
          console.log('Stored item!');
          this.router.navigate(['/tabs', 'tab1', 'login']);
        }
      },
      error => {
        console.log("error: " + error);
      }
    );
  }

}
