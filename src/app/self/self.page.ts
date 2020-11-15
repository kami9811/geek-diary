import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-self',
  templateUrl: './self.page.html',
  styleUrls: ['./self.page.scss'],
})
export class SelfPage implements OnInit {
  // API用
  postObj: any = {};
  returnObj: any = {};
  articleObj: any = {};
  objWord: any;

  // 記事
  articleList: any[] = [];

  tab: Number;

  self_id: string;
  title_id: string;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute,
    public gs: GlobalService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.tab = params['tab'];
        this.self_id = params['self_id'];

        // LocalStorage
        // 記事取得
        // 座標取得
        if(this.tab == 3){
          this.postObj['id'] = this.self_id;
          this.title_id = this.self_id;
        }
        else{
          this.postObj["id"] = localStorage.id;
          this.title_id = localStorage.id;
        }
        this.postObj['hash'] = localStorage.hash;
        const body = this.postObj;
        if(this.tab == 1 || this.tab == 3){
          this.gs.http('https://kn46itblog.com/hackathon/winter2020/php_apis/getSelfDiaryArticle.php', body).subscribe(
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
      },
      error => console.error(error)
    );
  }


}
