import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from '../global.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  tab: Number;
  article_id: string;
  title: string;
  text: string;
  id: string;

  postObj: any = {};
  returnObj: any = {};
  objWord: any;

  image: string;
  imageFlag: Boolean = false;

  comment: string = '';
  commentList: any[] = [];

  headerTitle: string = 'やらかし共有記事';

  ccppFill: string = 'outline';
  pythonFill: string = 'outline';
  webFill: string = 'outline';
  serverFill: string = 'outline';
  nativeFill: string = 'outline';
  iotFill: string = 'outline';

  constructor(
    public gs: GlobalService,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.tab = params['tab'];
        this.article_id = params['article_id'];
        this.title = params['title'];
        this.text = params['text'].replace(/\r?\n/g, '<br>');
        this.id = params['id'];
      }
    );
    if(true){
      this.imageFlag = true;
      this.headerTitle = 'Geek Diary';
    }
    // console.log();
    // this.posObj['id'] = this.user_id;
    this.postObj['article_id'] = this.article_id;
    this.loadContents();
  }

  async alertComment() {
    const alert = await this.alertController.create({
      header: 'コメント',
      message: 'コメントが投稿されました',
      buttons: ['OK']
    })

    await alert.present();
  }

  postComment = () => {
    // 'article/:tab/:article_id/:title/:text/:id'
    this.postObj['comment'] = this.comment;
    this.postObj['attribute'] = localStorage.attribute;

    const body = this.postObj;
    if(true){
      this.gs.http('https://kn46itblog.com/hackathon/winter2020/php_apis/registerDiaryComment.php', body).subscribe(
        res => {
          // console.log(res);
          // this.router.navigate(['/article', this.tab, this.article_id, this.title, this.text, this.id]);
          this.loadContents();
          this.alertComment();
          this.comment = '';
        },
        error => console.error(error)
      );
    }
  }

  loadContents = () => {
    this.postObj["id"] = localStorage.id;
    this.postObj["hash"] = localStorage.hash;

    const body = this.postObj;
    // console.log('hash: ' + body['hash'] + ', id: ' + body['id']);
    if(true){
      this.gs.http('https://kn46itblog.com/hackathon/winter2020/php_apis/getDiaryArticleContents.php', body).subscribe(
        res => {
          console.log(res);
          this.returnObj = res;
          this.image = this.returnObj['image'];
          if(this.returnObj['image_check'] == 0){
            this.imageFlag = false;
          }

          if(this.returnObj['ccpp'] == 1){
            this.ccppFill = 'solid';
          }
          if(this.returnObj['python'] == 1){
            this.pythonFill = 'solid';
          }
          if(this.returnObj['web'] == 1){
            this.webFill = 'solid';
          }
          if(this.returnObj['server'] == 1){
            this.serverFill = 'solid';
          }
          if(this.returnObj['native'] == 1){
            this.nativeFill = 'solid';
          }
          if(this.returnObj['iot'] == 1){
            this.iotFill = 'solid';
          }

          this.commentList = [];
          for(let i: any = 0; i < this.returnObj['comment_num']; i++){
            let n = i + 1;
            this.objWord = 'comment' + n;
            this.commentList.push(this.returnObj['comment_list'][this.objWord]);
          }
          console.log(this.commentList);
        },
        error => console.error(error)
      );
    }
  }

}
