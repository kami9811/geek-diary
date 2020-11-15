import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from '../global.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  // parentFlag: Boolean = false;
  // childList: any[] = [];
  // parentList: any[] = [];

  postObj: any = {};
  returnObj: any = {};

  objWord: any;

  distance: number = localStorage.distance;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController,
    public gs: GlobalService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {},
      error => console.error(error)
    );
  }

  logout = () => {
    localStorage.clear();
    console.log('logout');
    this.router.navigate(['/login']);
  }

  async alertSave() {
    const alert = await this.alertController.create({
      message: '設定が保存されました.',
      buttons: ['OK']
    })

    await alert.present();
  }
  setDistance = () => {
    this.postObj['id'] = localStorage.id;
    this.postObj['distance'] = this.distance;
    this.postObj['hash'] = localStorage.hash;
    const body = this.postObj;

    this.gs.http('https://kn46itblog.com/hackathon/winter2020/php_apis/registerDistance.php', body).subscribe(
      res => {
        console.log('Distance has been changed!');
        localStorage.distance = this.distance;
        this.alertSave();
      },
      error => console.error(error)
    );
  }

  /*
  navigateToFamily = () => {
    this.router.navigate(['/family']);
  }*/
}
