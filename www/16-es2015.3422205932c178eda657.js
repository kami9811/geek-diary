(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{tmrb:function(t,i,o){"use strict";o.r(i),o.d(i,"Tab1PageModule",(function(){return p}));var e=o("TEn/"),n=o("ofXK"),s=o("3Pt+"),r=o("qtYk"),a=o("tyNb"),c=o("mrSG"),l=o("fXoL"),b=o("Bfh1"),h=o("dVwY");function u(t,i){if(1&t&&(l.Kb(0,"ion-card",9),l.Kb(1,"ion-card-header",10),l.Kb(2,"ion-card-subtitle"),l.gc(3),l.Jb(),l.Kb(4,"ion-card-title"),l.gc(5),l.Jb(),l.Jb(),l.Jb()),2&t){const t=i.$implicit;l.xb(1),l.Zb("routerLink","/article/1/",t.article_id,"/",t.title,"/",t.text,"/",t.id,""),l.xb(2),l.ic("",t.id,"\u3055\u3093\u306e\u6295\u7a3f"),l.xb(2),l.hc(t.title)}}const d=[{path:"",component:(()=>{class t{constructor(t,i,o,e){this.geolocation=t,this.alertController=i,this.router=o,this.gs=e,this.latitude=0,this.longitude=0,this.postObj={},this.returnObj={},this.articleObj={},this.articleList=[],this.onGps=()=>{this.geolocation.getCurrentPosition().then(t=>{this.latitude=t.coords.latitude,this.longitude=t.coords.longitude,this.alertGps()}).catch(t=>{console.log("Error getting location",t)})},this.navigateToSelf=()=>{this.router.navigate(["/self",1,"1"])},this.navigateToEdit=()=>{this.router.navigate(["/edit",1])}}ngOnInit(){console.log("Init!"),this.postObj.id=localStorage.id,this.postObj.password=localStorage.password,this.postObj.prefecture=localStorage.prefecture;const t=this.postObj;console.log(t),this.gs.http("https://kn46itblog.com/hackathon/CCCu22/php_apis/login.php",t).subscribe(t=>{this.returnObj=t,200==this.returnObj.status?(localStorage.hash=this.returnObj.hash,this.geolocation.getCurrentPosition().then(t=>{this.latitude=t.coords.latitude,this.longitude=t.coords.longitude,this.postObj.hash=this.returnObj.hash,this.postObj.latitude=this.latitude,this.postObj.longitude=this.longitude,this.gs.http("https://kn46itblog.com/hackathon/CCCu22/php_apis/getDiaryArticle.php",this.postObj).subscribe(t=>{console.log(t),this.articleObj=t,this.articleList=[];for(let i=0;i<this.articleObj.article_num;i++)this.objWord="article"+(i+1),this.articleList.push(this.articleObj.article_list[this.objWord]);console.log(this.articleList)},t=>console.error(t))}).catch(t=>{console.log("Error getting location",t)})):this.router.navigate(["/login"])},t=>console.error(t))}alertGps(){return Object(c.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:"\u5ea7\u6a19\u304c\u89b3\u6e2c\u3055\u308c\u307e\u3057\u305f",message:"\u7def\u5ea6: "+this.latitude+"<br>\u7d4c\u5ea6: "+this.longitude,buttons:["OK"]});yield t.present()}))}}return t.\u0275fac=function(i){return new(i||t)(l.Hb(b.a),l.Hb(e.a),l.Hb(a.g),l.Hb(h.a))},t.\u0275cmp=l.Bb({type:t,selectors:[["app-tab1"]],decls:12,vars:3,consts:[[3,"translucent"],["id","icon","src","../../assets/icon/icon.png"],[3,"fullscreen"],["button","true",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","start","slot","fixed"],["color","success",3,"click"],["name","newspaper-outline"],["vertical","bottom","horizontal","end","slot","fixed"],["name","add-outline"],["button","true"],[3,"routerLink"]],template:function(t,i){1&t&&(l.Kb(0,"ion-header",0),l.Kb(1,"ion-toolbar"),l.Kb(2,"ion-title"),l.Ib(3,"ion-img",1),l.Jb(),l.Jb(),l.Jb(),l.Kb(4,"ion-content",2),l.fc(5,u,6,6,"ion-card",3),l.Kb(6,"ion-fab",4),l.Kb(7,"ion-fab-button",5),l.Sb("click",(function(){return i.navigateToSelf()})),l.Ib(8,"ion-icon",6),l.Jb(),l.Jb(),l.Kb(9,"ion-fab",7),l.Kb(10,"ion-fab-button",5),l.Sb("click",(function(){return i.navigateToEdit()})),l.Ib(11,"ion-icon",8),l.Jb(),l.Jb(),l.Jb()),2&t&&(l.Xb("translucent",!0),l.xb(4),l.Xb("fullscreen",!0),l.xb(1),l.Xb("ngForOf",i.articleList))},directives:[e.n,e.B,e.A,e.p,e.k,n.h,e.l,e.m,e.o,e.f,e.h,e.F,a.h,e.i,e.j],styles:[""]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=l.Fb({type:t}),t.\u0275inj=l.Eb({factory:function(i){return new(i||t)},imports:[[a.i.forChild(d)],a.i]}),t})(),p=(()=>{class t{}return t.\u0275mod=l.Fb({type:t}),t.\u0275inj=l.Eb({factory:function(i){return new(i||t)},imports:[[e.C,n.b,s.a,r.a,g]]}),t})()}}]);