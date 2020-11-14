import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  // API用
  postObj: any = {};
  returnObj: any = {};
  articleObj: any = {};
  objWord: any;

  // 記事
  articleList: any[] = [];

  constructor(
    private geolocation: Geolocation,
    private alertController: AlertController,
    private router: Router,
    public gs: GlobalService,
  ) {}

  // 自動ログイン管理, 記事取得
  ngOnInit(){
    this.postObj["id"] = localStorage.id;
    this.postObj["hash"] = localStorage.hash;
    const body = this.postObj;
    this.gs.http('https://kn46itblog.com/hackathon/CCCu22/php_apis/getTipsArticle.php', body).subscribe(
      res => {
        console.log(res);
        this.articleObj = res;
        this.articleList = [];
        for(let i: any = 0; i < this.articleObj['article_num']; i++){
          let n = i + 1;
          this.objWord = 'article' + n;
          this.articleList.push(this.articleObj['article_list'][this.objWord]);
        }
        console.log(this.articleList);
      },
      error => console.error(error)
    );
  }

  navigateToSelf = () => {
    this.router.navigate(['/self', 2, '2']);
  }
  navigateToEdit = () => {
    this.router.navigate(['/edit', 2]);
  }

}
