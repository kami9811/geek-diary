(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{TUkU:function(t,i,o){"use strict";o.r(i),o.d(i,"Tab2PageModule",(function(){return p}));var n=o("TEn/"),e=o("ofXK"),r=o("3Pt+"),s=o("qtYk"),c=o("tyNb"),a=o("fXoL"),b=o("Bfh1"),l=o("dVwY");function h(t,i){if(1&t&&(a.Kb(0,"ion-card",9),a.Kb(1,"ion-card-header",10),a.Kb(2,"ion-card-subtitle"),a.dc(3),a.Jb(),a.Kb(4,"ion-card-title"),a.dc(5),a.Jb(),a.Jb(),a.Jb()),2&t){const t=i.$implicit;a.xb(1),a.Xb("routerLink","/article/2/",t.article_id,"/",t.title,"/",t.text,"/",t.id,""),a.xb(2),a.fc("",t.id,"\u3055\u3093\u306e\u6295\u7a3f"),a.xb(2),a.ec(t.title)}}const u=[{path:"",component:(()=>{class t{constructor(t,i,o,n){this.geolocation=t,this.alertController=i,this.router=o,this.gs=n,this.postObj={},this.returnObj={},this.articleObj={},this.articleList=[],this.navigateToSelf=()=>{this.router.navigate(["/self",2,"2"])},this.navigateToEdit=()=>{this.router.navigate(["/edit",2])}}ngOnInit(){this.postObj.id=localStorage.id,this.postObj.hash=localStorage.hash,this.gs.http("https://kn46itblog.com/hackathon/CCCu22/php_apis/getTipsArticle.php",this.postObj).subscribe(t=>{console.log(t),this.articleObj=t,this.articleList=[];for(let i=0;i<this.articleObj.article_num;i++)this.objWord="article"+(i+1),this.articleList.push(this.articleObj.article_list[this.objWord]);console.log(this.articleList)},t=>console.error(t))}}return t.\u0275fac=function(i){return new(i||t)(a.Hb(b.a),a.Hb(n.a),a.Hb(c.g),a.Hb(l.a))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-tab2"]],decls:12,vars:3,consts:[[3,"translucent"],["id","icon","src","../../assets/icon/icon.png"],[3,"fullscreen"],["button","true",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","start","slot","fixed"],["color","base-green",3,"click"],["name","newspaper-outline"],["vertical","bottom","horizontal","end","slot","fixed"],["name","add-outline"],["button","true"],[3,"routerLink"]],template:function(t,i){1&t&&(a.Kb(0,"ion-header",0),a.Kb(1,"ion-toolbar"),a.Kb(2,"ion-title"),a.Ib(3,"ion-img",1),a.Jb(),a.Jb(),a.Jb(),a.Kb(4,"ion-content",2),a.cc(5,h,6,6,"ion-card",3),a.Kb(6,"ion-fab",4),a.Kb(7,"ion-fab-button",5),a.Rb("click",(function(){return i.navigateToSelf()})),a.Ib(8,"ion-icon",6),a.Jb(),a.Jb(),a.Kb(9,"ion-fab",7),a.Kb(10,"ion-fab-button",5),a.Rb("click",(function(){return i.navigateToEdit()})),a.Ib(11,"ion-icon",8),a.Jb(),a.Jb(),a.Jb()),2&t&&(a.Wb("translucent",!0),a.xb(4),a.Wb("fullscreen",!0),a.xb(1),a.Wb("ngForOf",i.articleList))},directives:[n.q,n.F,n.E,n.s,n.m,e.h,n.n,n.o,n.r,n.g,n.i,n.K,c.h,n.j,n.k],styles:[""]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(i){return new(i||t)},imports:[[c.i.forChild(u)],c.i]}),t})(),p=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(i){return new(i||t)},imports:[[n.G,e.b,r.a,s.a,d]]}),t})()}}]);