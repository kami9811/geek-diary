import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from '../global.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-family',
  templateUrl: './family.page.html',
  styleUrls: ['./family.page.scss'],
})
export class FamilyPage implements OnInit {
  parentFlag: Boolean = false;

  postObj: any = {};
  returnObj: any = {};

  applicantList: any[] = [];

  objWord: any;

  id: string;

  attribute: Number;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    private nativeStorage: NativeStorage,
    public gs: GlobalService,
  ) { }

  ngOnInit() {
    this.nativeStorage.getItem('login').then(
      data => {
        this.postObj['id'] = data['id'];
        this.postObj['hash'] = data['hash'];
        this.attribute = data['attribute'];
        this.load();
      },
      error => console.log(error)
    );
  }

  onOk = (e: any) => {
    console.log(e.target.id);
    this.postObj['applicant_id'] = e.target.id.split('bar')[1];
    this.postObj['permission'] = 1;

    const body = this.postObj;
    this.gs.http('https://kn46itblog.com/hackathon/CCCu22/php_apis/processApplicant.php', body).subscribe(
      res => {
        console.log(res);
        this.load();
      },
      error => console.error(error)
    );
    this.alertOk();
  }
  onNo = (e: any) => {
    console.log(e.target.id);
    this.postObj['applicant_id'] = e.target.id.split('bar')[1];
    this.postObj['permission'] = 0;

    const body = this.postObj;
    this.gs.http('https://kn46itblog.com/hackathon/CCCu22/php_apis/processApplicant.php', body).subscribe(
      res => {
        console.log(res);
        this.load();
      },
      error => console.error(error)
    );
    this.alertNo();
  }

  async alertApply() {
    const alert = await this.alertController.create({
      message: '家族登録申請が行われました',
      buttons: ['OK']
    })

    await alert.present();
  }
  async alertOk() {
    const alert = await this.alertController.create({
      message: '家族登録申請を許可しました',
      buttons: ['OK']
    })

    await alert.present();
  }
  async alertNo() {
    const alert = await this.alertController.create({
      message: '家族登録申請を拒否しました',
      buttons: ['OK']
    })

    await alert.present();
  }

  apply = () => {
    this.postObj['apply_id'] = this.id;

    const body = this.postObj;
    this.gs.http('https://kn46itblog.com/hackathon/CCCu22/php_apis/applyFamily.php', body).subscribe(
      res => console.log(res),
      error => console.error(error)
    );
    this.alertApply();
  }

  load = () => {
    const body = this.postObj;
    if(this.attribute == 0){
      this.parentFlag = true;
      this.gs.http('https://kn46itblog.com/hackathon/CCCu22/php_apis/getApplicant.php', body).subscribe(
        res => {
          this.returnObj = res;
          this.applicantList = [];
          for(let i: any = 0; i < this.returnObj['applicant_num']; i++){
            let n = i + 1;
            this.objWord = 'applicant' + n;
            this.applicantList.push(this.returnObj['applicant_list'][this.objWord]);
          }
          console.log(this.applicantList);
        }
      );
    }
    else if(this.attribute == 1){
      this.parentFlag = false;
    }
  }

}
