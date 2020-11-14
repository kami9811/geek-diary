import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  imageFlag: Boolean = false;
  image: any;
  imgHeight: number = 600;

  title: string = '';
  text: string = '';

  article_id: Number = 0;
  latitude: Number;
  longitude: Number;

  postObj: any = {};
  returnObj: any = {};

  tab: Number;
  tabFlag: Boolean = false;

  ccpp: number = 0;
  python: number = 0;
  web: number = 0;
  server: number = 0;
  native: number = 0;
  iot: number = 0;

  ccppFill: string = 'outline';
  pythonFill: string = 'outline';
  webFill: string = 'outline';
  serverFill: string = 'outline';
  nativeFill: string = 'outline';
  iotFill: string = 'outline';

  constructor(
    private gs: GlobalService,
    private geolocation: Geolocation,
    private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.tab = params['tab'];
        if(this.tab == 1){
          this.tabFlag = true;
        }
      },
      error => console.error(error)
    );
  }

  loadPicture = (e: any) => {
    console.log(e);
    var file: any = e.srcElement.files[0];
    var fileReader: any = new FileReader();
    var img = new Image();
    fileReader.onloadend = () => {
      img.onload = () => {
        // 画像軽量化
        console.log('Image Processing');
        const imgType = img.src.substring(5, img.src.indexOf(';'));
        const imgWidth = img.width * (this.imgHeight / img.height);
        const canvas = document.createElement('canvas');
        canvas.width = imgWidth;
        canvas.height = this.imgHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, imgWidth, this.imgHeight);
        this.image = canvas.toDataURL(imgType);
      }
      // 画像ファイルを base64 文字列に変換します
      img.src = fileReader.result;
      this.imageFlag = true;
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  postArticle = () => {
    this.geolocation.getCurrentPosition().then(
      (resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.postObj['id'] = localStorage.id;
        this.postObj['article_id'] = this.article_id;
        this.postObj['prefecture'] = localStorage.prefecture;
        this.postObj['latitude'] = this.latitude;
        this.postObj['longitude'] = this.longitude;
        this.postObj['title'] = this.title;
        this.postObj['text'] = this.text;
        this.postObj['image'] = this.image;
        this.postObj['hash'] = localStorage.hash;

        const body = this.postObj;
        if(this.tab == 1){
          this.gs.http('https://kn46itblog.com/hackathon/CCCu22/php_apis/registerDiaryArticle.php', body).subscribe(
            res => {
              console.log(res);
              this.navigate();
              this.alertPost();
            },
            error => console.error(error)
          );
        }
        else if (this.tab == 2){
          this.gs.http('https://kn46itblog.com/hackathon/CCCu22/php_apis/registerTipsArticle.php', body).subscribe(
            res => {
              console.log(res);
              this.navigate();
              this.alertPost();
            },
            error => console.error(error)
          );
        }
      },
      error => console.error(error)
    );
  }

  async alertPost() {
    const alert = await this.alertController.create({
      message: '日誌が投稿されました',
      buttons: ['OK']
    })

    await alert.present();
  }

  navigate = () => {
    let tabPos = 'tab' + this.tab;
    this.router.navigate(['/tabs', tabPos, 'edited']);
  }

  onGrid = (e: any) => {
    console.log('ON GRID!!');
    if(e.target.id == 'ccpp'){
      // console.log('C/C++');
      if(this.ccpp == 0){
        this.ccppFill = 'solid';
        this.ccpp = 1;
      }
      else{
        this.ccppFill = 'outline';
        this.ccpp = 0;
      }
    }
    else if(e.target.id == 'python'){
      // console.log('Python');
      if(this.python == 0){
        this.pythonFill = 'solid';
        this.python = 1;
      }
      else{
        this.pythonFill = 'outline';
        this.python = 0;
      }
    }
    else if(e.target.id == 'web'){
      // console.log('Web');
      if(this.web == 0){
        this.webFill = 'solid';
        this.web = 1;
      }
      else{
        this.webFill = 'outline';
        this.web = 0;
      }
    }
    else if(e.target.id == 'server'){
      // console.log('Server');
      if(this.server == 0){
        this.serverFill = 'solid';
        this.server = 1;
      }
      else{
        this.serverFill = 'outline';
        this.server = 0;
      }
    }
    else if(e.target.id == 'native'){
      // console.log('Native');
      if(this.native == 0){
        this.nativeFill = 'solid';
        this.native = 1;
      }
      else{
        this.nativeFill = 'outline';
        this.native = 0;
      }
    }
    else if(e.target.id == 'iot'){
      // console.log('IoT');
      if(this.iot == 0){
        this.iotFill = 'solid';
        this.iot = 1;
      }
      else{
        this.iotFill = 'outline';
        this.iot = 0;
      }
    }
  }

}
