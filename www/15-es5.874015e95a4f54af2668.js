!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{tmrb:function(o,i,r){"use strict";r.r(i),r.d(i,"Tab1PageModule",(function(){return m}));var n=r("TEn/"),a=r("ofXK"),c=r("3Pt+"),l=r("qtYk"),s=r("tyNb"),b=r("mrSG"),u=r("fXoL"),g=r("Bfh1"),d=r("dVwY");function h(t,e){if(1&t&&(u.Kb(0),u.Mb(1,"ion-card",9),u.Mb(2,"ion-card-header",10),u.Mb(3,"ion-card-subtitle"),u.hc(4),u.Ib(5,"br"),u.hc(6),u.Lb(),u.Mb(7,"ion-card-title"),u.hc(8),u.Lb(),u.Lb(),u.Lb(),u.Jb()),2&t){var o=e.$implicit;u.xb(1),u.Zb("color","",o.category_color,"-",o.category_level,""),u.xb(1),u.ac("routerLink","/article/1/",o.article_id,"/",o.title,"/",o.text,"/",o.id,""),u.xb(2),u.kc("[",o.distance.toFixed(1),"km] ",o.id,"\u3055\u3093\u306e\u6295\u7a3f"),u.xb(2),u.ic(o.date),u.xb(2),u.ic(o.title)}}var f,p,j,v=[{path:"",component:(f=function(){function o(e,i,r,n){var a=this;t(this,o),this.geolocation=e,this.alertController=i,this.router=r,this.gs=n,this.latitude=0,this.longitude=0,this.postObj={},this.returnObj={},this.articleObj={},this.articleList=[],this.onGps=function(){a.geolocation.getCurrentPosition().then((function(t){a.latitude=t.coords.latitude,a.longitude=t.coords.longitude,a.alertGps()})).catch((function(t){console.log("Error getting location",t)}))},this.navigateToSelf=function(){a.router.navigate(["/self",1,"1"])},this.navigateToEdit=function(){a.router.navigate(["/edit",1])},this.getList=function(){a.geolocation.getCurrentPosition().then((function(t){a.latitude=t.coords.latitude,a.longitude=t.coords.longitude,a.postObj.hash=localStorage.hash,a.postObj.latitude=a.latitude,a.postObj.longitude=a.longitude,a.postObj.distance=Number(localStorage.distance),a.postObj.tab=1,a.postObj.attribute=localStorage.attribute;var e=a.postObj;console.log(e),a.gs.http("https://kn46itblog.com/hackathon/winter2020/php_apis/getDiaryArticle.php",e).subscribe((function(t){console.log(t),a.articleObj=t,a.articleList=[];for(var e=0;e<a.articleObj.article_num;e++)a.objWord="article"+(e+1),1==a.articleObj.article_list[a.objWord].category_level?a.articleObj.article_list[a.objWord].category_level="one":2==a.articleObj.article_list[a.objWord].category_level?a.articleObj.article_list[a.objWord].category_level="two":3==a.articleObj.article_list[a.objWord].category_level?a.articleObj.article_list[a.objWord].category_level="three":4==a.articleObj.article_list[a.objWord].category_level?a.articleObj.article_list[a.objWord].category_level="four":5==a.articleObj.article_list[a.objWord].category_level&&(a.articleObj.article_list[a.objWord].category_level="five"),a.articleList.push(a.articleObj.article_list[a.objWord]);console.log(a.articleList)}),(function(t){return console.error(t)}))})).catch((function(t){console.log("Error getting location",t)}))}}var i,r,n;return i=o,(r=[{key:"ngOnInit",value:function(){var t=this;console.log("Init!"),this.postObj.id=localStorage.id,this.postObj.password=localStorage.password,this.postObj.prefecture=localStorage.prefecture;var e=this.postObj;console.log(e),this.gs.http("https://kn46itblog.com/hackathon/winter2020/php_apis/login.php",e).subscribe((function(e){t.returnObj=e,200==t.returnObj.status?(localStorage.hash=t.returnObj.hash,t.getList()):t.router.navigate(["/login"])}),(function(t){return console.error(t)})),this.interval=setInterval((function(){t.getList()}),1e4)}},{key:"alertGps",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:"\u5ea7\u6a19\u304c\u89b3\u6e2c\u3055\u308c\u307e\u3057\u305f",message:"\u7def\u5ea6: "+this.latitude+"<br>\u7d4c\u5ea6: "+this.longitude,buttons:["OK"]});case 2:return e=t.sent,t.next=5,e.present();case 5:case"end":return t.stop()}}),t,this)})))}}])&&e(i.prototype,r),n&&e(i,n),o}(),f.\u0275fac=function(t){return new(t||f)(u.Hb(g.a),u.Hb(n.a),u.Hb(s.g),u.Hb(d.a))},f.\u0275cmp=u.Bb({type:f,selectors:[["app-tab1"]],decls:12,vars:3,consts:[[3,"translucent"],["id","icon","src","../../assets/icon/icon.png"],[3,"fullscreen"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","start","slot","fixed"],["color","base-green",3,"click"],["name","newspaper-outline"],["vertical","bottom","horizontal","end","slot","fixed"],["name","add-outline"],["button","true",3,"color"],[3,"routerLink"]],template:function(t,e){1&t&&(u.Mb(0,"ion-header",0),u.Mb(1,"ion-toolbar"),u.Mb(2,"ion-title"),u.Ib(3,"ion-img",1),u.Lb(),u.Lb(),u.Lb(),u.Mb(4,"ion-content",2),u.gc(5,h,9,10,"ng-container",3),u.Mb(6,"ion-fab",4),u.Mb(7,"ion-fab-button",5),u.Tb("click",(function(){return e.navigateToSelf()})),u.Ib(8,"ion-icon",6),u.Lb(),u.Lb(),u.Mb(9,"ion-fab",7),u.Mb(10,"ion-fab-button",5),u.Tb("click",(function(){return e.navigateToEdit()})),u.Ib(11,"ion-icon",8),u.Lb(),u.Lb(),u.Lb()),2&t&&(u.Yb("translucent",!0),u.xb(4),u.Yb("fullscreen",!0),u.xb(1),u.Yb("ngForOf",e.articleList))},directives:[n.q,n.F,n.E,n.s,n.m,a.h,n.n,n.o,n.r,n.g,n.i,n.K,s.h,n.j,n.k],styles:[""]}),f)}],O=((j=function e(){t(this,e)}).\u0275mod=u.Fb({type:j}),j.\u0275inj=u.Eb({factory:function(t){return new(t||j)},imports:[[s.i.forChild(v)],s.i]}),j),m=((p=function e(){t(this,e)}).\u0275mod=u.Fb({type:p}),p.\u0275inj=u.Eb({factory:function(t){return new(t||p)},imports:[[n.G,a.b,c.a,l.a,O]]}),p)}}])}();