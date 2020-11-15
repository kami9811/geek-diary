import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  id: string;
  email: string;
  attribute: Number;
  prefecture: string;
  password: string;

  postObj: any = {};
  returnObj: any = {};

  constructor(
    private alertController: AlertController,
    private router: Router,
    public gs: GlobalService,
  ) { }

  ngOnInit() {
  }

  async alertSuccess() {
    const alert = await this.alertController.create({
      header: '新規登録',
      message: '新規登録に成功しました.',
      buttons: ['OK']
    })

    await alert.present();
  }
  async alertFailer() {
    const alert = await this.alertController.create({
      header: '新規登録',
      message: '新規登録に失敗しました.<br>IDが重複しています.',
      buttons: ['OK']
    })

    await alert.present();
  }

  signup = () => {
    this.postObj['id'] = this.id;
    this.postObj['email'] = this.email;
    this.postObj['prefecture'] = this.prefecture;
    this.postObj['password'] = this.password;
    const body = this.postObj;

    this.gs.http('https://kn46itblog.com/hackathon/winter2020/php_apis/signup.php', body).subscribe(
      res => {
        this.returnObj = res;
        if(this.returnObj['status'] == 200){
          this.alertSuccess();
          this.router.navigate(['/login']);
        }
        else{
          this.alertFailer(); 
        }
      }
    )
  }

}
