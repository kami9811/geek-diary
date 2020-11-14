import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  parentFlag: Boolean = false;

  postObj: any = {};
  returnObj: any = {};

  childList: any[] = [];
  parentList: any[] = [];

  objWord: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nativeStorage: NativeStorage,
    public gs: GlobalService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {},
      error => console.error(error)
    );
    this.nativeStorage.getItem('login').then(
      data => {
        this.postObj['id'] = data['id'];
        this.postObj['hash'] = data['hash'];
        const body = this.postObj;
        if(data['attribute'] == 0){
          this.parentFlag = true;
          this.gs.http('https://kn46itblog.com/hackathon/CCCu22/php_apis/getFamilyDataParent.php', body).subscribe(
            res => {
              this.returnObj = res;
              this.childList = [];
              for(let i: any = 0; i < this.returnObj['child_num']; i++){
                let n = i + 1;
                this.objWord = 'child' + n;
                this.childList.push(this.returnObj['child_list'][this.objWord]);
              }
              console.log(this.childList);
            }
          );
        }
        else if(data['attribute'] == 1){
          this.parentFlag = false;
          this.gs.http('https://kn46itblog.com/hackathon/CCCu22/php_apis/getFamilyDataChild.php', body).subscribe(
            res => {
              this.returnObj = res;
              this.parentList = [];
              for(let i: any = 0; i < this.returnObj['parent_num']; i++){
                let n = i + 1;
                this.objWord = 'parent' + n;
                this.parentList.push(this.returnObj['parent_list'][this.objWord]);
              }
              console.log(this.parentList);
            }
          );
        }
      },
      error => console.log(error)
    );
  }

  logout = () => {
    this.nativeStorage.setItem('login', {
      id: "",
      password: "",
      hash: "",
    }).then(
      () => console.log('Logout'),
      error => console.error(error)
    );
    this.router.navigate(['/login']);
  }

  navigateToFamily = () => {
    this.router.navigate(['/family']);
  }
}
