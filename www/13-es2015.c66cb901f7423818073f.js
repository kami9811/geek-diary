(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{dbnE:function(t,i,e){"use strict";e.r(i),e.d(i,"SelfPageModule",(function(){return d}));var r=e("ofXK"),o=e("3Pt+"),s=e("TEn/"),l=e("tyNb"),c=e("fXoL"),b=e("dVwY");function a(t,i){if(1&t&&(c.Kb(0),c.Mb(1,"ion-card",3),c.Mb(2,"ion-card-header",4),c.Mb(3,"ion-card-subtitle"),c.hc(4),c.Ib(5,"br"),c.hc(6),c.Lb(),c.Mb(7,"ion-card-title"),c.hc(8),c.Lb(),c.Lb(),c.Lb(),c.Jb()),2&t){const t=i.$implicit,e=c.Vb();c.xb(1),c.Zb("color","",t.category_color,"-",t.category_level,""),c.xb(1),c.bc("routerLink","/article/",e.tab,"/",t.article_id,"/",t.title,"/",t.text,"/",t.id,""),c.xb(2),c.jc("",t.id,"\u3055\u3093\u306e\u6295\u7a3f"),c.xb(2),c.ic(t.date),c.xb(2),c.ic(t.title)}}const n=[{path:"",component:(()=>{class t{constructor(t,i,e,r){this.alertController=t,this.router=i,this.route=e,this.gs=r,this.postObj={},this.returnObj={},this.articleObj={},this.articleList=[]}ngOnInit(){this.route.params.subscribe(t=>{this.tab=t.tab,this.self_id=t.self_id,3==this.tab?(this.postObj.id=this.self_id,this.title_id=this.self_id):(this.postObj.id=localStorage.id,this.title_id=localStorage.id),this.postObj.hash=localStorage.hash,1!=this.tab&&3!=this.tab||this.gs.http("https://kn46itblog.com/hackathon/winter2020/php_apis/getSelfDiaryArticle.php",this.postObj).subscribe(t=>{console.log(t),this.articleObj=t,this.articleList=[];for(let i=0;i<this.articleObj.article_num;i++)this.objWord="article"+(i+1),1==this.articleObj.article_list[this.objWord].category_level?this.articleObj.article_list[this.objWord].category_level="one":2==this.articleObj.article_list[this.objWord].category_level?this.articleObj.article_list[this.objWord].category_level="two":3==this.articleObj.article_list[this.objWord].category_level?this.articleObj.article_list[this.objWord].category_level="three":4==this.articleObj.article_list[this.objWord].category_level?this.articleObj.article_list[this.objWord].category_level="four":5==this.articleObj.article_list[this.objWord].category_level&&(this.articleObj.article_list[this.objWord].category_level="five"),this.articleList.push(this.articleObj.article_list[this.objWord]);console.log(this.articleList)},t=>console.error(t))},t=>console.error(t))}}return t.\u0275fac=function(i){return new(i||t)(c.Hb(s.a),c.Hb(l.g),c.Hb(l.a),c.Hb(b.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-self"]],decls:8,vars:2,consts:[["slot","start"],["id","back"],[4,"ngFor","ngForOf"],["button","true",3,"color"],[3,"routerLink"]],template:function(t,i){1&t&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-buttons",0),c.Ib(3,"ion-back-button",1),c.Lb(),c.Mb(4,"ion-title"),c.hc(5),c.Lb(),c.Lb(),c.Lb(),c.Mb(6,"ion-content"),c.gc(7,a,9,10,"ng-container",2),c.Lb()),2&t&&(c.xb(5),c.jc("",i.title_id,"\u3055\u3093\u306e\u6295\u7a3f\u65e5\u8a18"),c.xb(2),c.Yb("ngForOf",i.articleList))},directives:[s.q,s.F,s.f,s.c,s.d,s.E,s.m,r.h,s.g,s.i,s.K,l.h,s.j,s.k],styles:[""]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(i){return new(i||t)},imports:[[l.i.forChild(n)],l.i]}),t})(),d=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(i){return new(i||t)},imports:[[r.b,o.a,s.G,h]]}),t})()}}]);