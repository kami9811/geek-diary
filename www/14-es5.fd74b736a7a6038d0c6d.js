!function(){function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{dbnE:function(e,n,o){"use strict";o.r(n),o.d(n,"SelfPageModule",(function(){return O}));var r=o("ofXK"),c=o("3Pt+"),a=o("TEn/"),b=o("tyNb"),s=o("fXoL"),l=o("M2ZX"),u=o("dVwY");function f(t,i){if(1&t&&(s.Kb(0,"ion-card",3),s.Kb(1,"ion-card-header",4),s.Kb(2,"ion-card-subtitle"),s.gc(3),s.Jb(),s.Kb(4,"ion-card-title"),s.gc(5),s.Jb(),s.Jb(),s.Jb()),2&t){var e=i.$implicit,n=s.Ub();s.xb(1),s.ac("routerLink","/article/",n.tab,"/",e.article_id,"/",e.title,"/",e.text,"/",e.id,""),s.xb(2),s.ic("",e.id,"\u3055\u3093\u306e\u6295\u7a3f"),s.xb(2),s.hc(e.title)}}var h,p,d,g=[{path:"",component:(h=function(){function e(i,n,o,r,c){t(this,e),this.alertController=i,this.router=n,this.route=o,this.nativeStorage=r,this.gs=c,this.postObj={},this.returnObj={},this.articleObj={},this.articleList=[]}var n,o,r;return n=e,(o=[{key:"ngOnInit",value:function(){var t=this;this.route.params.subscribe((function(i){t.tab=i.tab,t.self_id=i.self_id,t.nativeStorage.getItem("login").then((function(i){3==t.tab?(t.postObj.id=t.self_id,t.title_id=t.self_id):(t.postObj.id=i.id,t.title_id=i.id),t.postObj.hash=i.hash;var e=t.postObj;1==t.tab||3==t.tab?t.gs.http("https://kn46itblog.com/hackathon/CCCu22/php_apis/getSelfDiaryArticle.php",e).subscribe((function(i){console.log(i),t.articleObj=i,t.articleList=[];for(var e=0;e<t.articleObj.article_num;e++)t.objWord="article"+(e+1),t.articleList.push(t.articleObj.article_list[t.objWord]);console.log(t.articleList)}),(function(t){return console.error(t)})):2==t.tab&&t.gs.http("https://kn46itblog.com/hackathon/CCCu22/php_apis/getSelfTipsArticle.php",e).subscribe((function(i){console.log(i),t.articleObj=i,t.articleList=[];for(var e=0;e<t.articleObj.article_num;e++)t.objWord="article"+(e+1),t.articleList.push(t.articleObj.article_list[t.objWord]);console.log(t.articleList)}),(function(t){return console.error(t)}))}),(function(t){return console.log(t)}))}),(function(t){return console.error(t)}))}}])&&i(n.prototype,o),r&&i(n,r),e}(),h.\u0275fac=function(t){return new(t||h)(s.Hb(a.a),s.Hb(b.g),s.Hb(b.a),s.Hb(l.a),s.Hb(u.a))},h.\u0275cmp=s.Bb({type:h,selectors:[["app-self"]],decls:8,vars:2,consts:[["slot","start"],["id","back"],["button","true",4,"ngFor","ngForOf"],["button","true"],[3,"routerLink"]],template:function(t,i){1&t&&(s.Kb(0,"ion-header"),s.Kb(1,"ion-toolbar"),s.Kb(2,"ion-buttons",0),s.Ib(3,"ion-back-button",1),s.Jb(),s.Kb(4,"ion-title"),s.gc(5),s.Jb(),s.Jb(),s.Jb(),s.Kb(6,"ion-content"),s.fc(7,f,6,7,"ion-card",2),s.Jb()),2&t&&(s.xb(5),s.ic("",i.title_id,"\u3055\u3093\u306e\u6295\u7a3f\u65e5\u8a18"),s.xb(2),s.Xb("ngForOf",i.articleList))},directives:[a.n,a.B,a.e,a.c,a.d,a.A,a.k,r.h,a.f,a.h,a.F,b.h,a.i,a.j],styles:[""]}),h)}],j=((d=function i(){t(this,i)}).\u0275mod=s.Fb({type:d}),d.\u0275inj=s.Eb({factory:function(t){return new(t||d)},imports:[[b.i.forChild(g)],b.i]}),d),O=((p=function i(){t(this,i)}).\u0275mod=s.Fb({type:p}),p.\u0275inj=s.Eb({factory:function(t){return new(t||p)},imports:[[r.b,c.a,a.C,j]]}),p)}}])}();