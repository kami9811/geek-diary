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

  interval: any;

  constructor(
    private geolocation: Geolocation,
    private alertController: AlertController,
    private router: Router,
    public gs: GlobalService,
  ) {}

  // 自動ログイン管理, 記事取得
  ngOnInit(){
    this.interval = setInterval(() => {
      // Function
      this.getList();
    }, 1500);
  }

  getList = () => {
    this.postObj["id"] = localStorage.id;
    this.postObj["hash"] = localStorage.hash;
    this.postObj["latitude"] = 32.79996930738612;
    this.postObj["longitude"] = 130.73221830631005;
    this.postObj["distance"] = 12;
    this.postObj["tab"] = 2;
    this.postObj["attribute"] = localStorage.attribute;
    const body = this.postObj;
    console.log(body);
    this.gs.http('https://kn46itblog.com/hackathon/winter2020/php_apis/getDiaryArticle.php', body).subscribe(
      res => {
        console.log(res);
        this.articleObj = res;
        this.articleList = [];
        for(let i: any = 0; i < this.articleObj['article_num']; i++){
          let n = i + 1;
          this.objWord = 'article' + n;

          // 数字→英語の変換
          if(this.articleObj['article_list'][this.objWord]['category_level'] == 1){
            this.articleObj['article_list'][this.objWord]['category_level'] = 'one';
          }
          else if(this.articleObj['article_list'][this.objWord]['category_level'] == 2){
            this.articleObj['article_list'][this.objWord]['category_level'] = 'two';
          }
          else if(this.articleObj['article_list'][this.objWord]['category_level'] == 3){
            this.articleObj['article_list'][this.objWord]['category_level'] = 'three';
          }
          else if(this.articleObj['article_list'][this.objWord]['category_level'] == 4){
            this.articleObj['article_list'][this.objWord]['category_level'] = 'four';
          }
          else if(this.articleObj['article_list'][this.objWord]['category_level'] == 5){
            this.articleObj['article_list'][this.objWord]['category_level'] = 'five';
          }

          this.articleList.push(this.articleObj['article_list'][this.objWord]);
        }
        console.log(this.articleList);
      },
      error => console.error(error)
    );
  }

  // 記事の投稿対象混乱を防ぐために, 仕様から外しておく
  /*
  navigateToSelf = () => {
    this.router.navigate(['/self', 2, '2']);
  }
  navigateToEdit = () => {
    this.router.navigate(['/edit', 2]);
  }
  */

}
