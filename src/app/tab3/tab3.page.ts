import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from '../global.service';

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

  distance: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
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

  setDistance = () => {

  }

  /*
  navigateToFamily = () => {
    this.router.navigate(['/family']);
  }*/
}
