!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{zFnc:function(n,i,o){"use strict";o.r(i),o.d(i,"EditPageModule",(function(){return x}));var r=o("ofXK"),a=o("3Pt+"),b=o("TEn/"),c=o("tyNb"),s=o("mrSG"),l=o("fXoL"),u=o("a/9d"),g=o("dVwY"),d=o("Bfh1");function f(t,e){if(1&t&&(l.Kb(0,"div"),l.Ib(1,"ion-img",12),l.Jb()),2&t){var n=l.Ub(2);l.xb(1),l.Xb("src",n.image)}}function p(t,e){if(1&t){var n=l.Lb();l.Kb(0,"div"),l.Kb(1,"div",9),l.Kb(2,"label",10),l.gc(3,"\u65e5\u8a8c\u306e\u5199\u771f\u3092\u9078\u629e"),l.Jb(),l.Kb(4,"input",11),l.Sb("change",(function(t){return l.cc(n),l.Ub().loadPicture(t)})),l.Jb(),l.Jb(),l.fc(5,f,2,1,"div",2),l.Kb(6,"ion-card"),l.Kb(7,"ion-card-content"),l.gc(8,"\u6b21\u306e\u30aa\u30b9\u30b9\u30e1\u306e\u6587[1]: RECOMMEND1"),l.Jb(),l.Jb(),l.Kb(9,"ion-card"),l.Kb(10,"ion-card-content"),l.gc(11,"\u6b21\u306e\u30aa\u30b9\u30b9\u30e1\u306e\u6587[2]: RECOMMEND2"),l.Jb(),l.Jb(),l.Kb(12,"ion-card"),l.Kb(13,"ion-card-content"),l.gc(14,"\u6b21\u306e\u30aa\u30b9\u30b9\u30e1\u306e\u6587[3]: RECOMMEND3"),l.Jb(),l.Jb(),l.Jb()}if(2&t){var i=l.Ub();l.xb(5),l.Xb("ngIf",i.imageFlag)}}var h,m,v,J=[{path:"",component:(h=function(){function n(e,i,o,r,a,b){var c=this;t(this,n),this.camera=e,this.gs=i,this.geolocation=o,this.alertController=r,this.router=a,this.route=b,this.imageFlag=!1,this.imgHeight=600,this.title="",this.text="",this.article_id=0,this.postObj={},this.returnObj={},this.tabFlag=!1,this.loadPicture=function(t){console.log(t);var e=t.srcElement.files[0],n=new FileReader,i=new Image;n.onloadend=function(){i.onload=function(){console.log("Image Processing");var t=i.src.substring(5,i.src.indexOf(";")),e=i.width*(c.imgHeight/i.height),n=document.createElement("canvas");n.width=e,n.height=c.imgHeight,n.getContext("2d").drawImage(i,0,0,e,c.imgHeight),c.image=n.toDataURL(t)},i.src=n.result,c.imageFlag=!0},e&&n.readAsDataURL(e)},this.takePicture=function(t){},this.postArticle=function(){c.geolocation.getCurrentPosition().then((function(t){c.latitude=t.coords.latitude,c.longitude=t.coords.longitude,c.postObj.id=localStorage.id,c.postObj.article_id=c.article_id,c.postObj.prefecture=localStorage.prefecture,c.postObj.latitude=c.latitude,c.postObj.longitude=c.longitude,c.postObj.title=c.title,c.postObj.text=c.text,c.postObj.image=c.image,c.postObj.hash=localStorage.hash;var e=c.postObj;1==c.tab?c.gs.http("https://kn46itblog.com/hackathon/CCCu22/php_apis/registerDiaryArticle.php",e).subscribe((function(t){console.log(t),c.navigate(),c.alertPost()}),(function(t){return console.error(t)})):2==c.tab&&c.gs.http("https://kn46itblog.com/hackathon/CCCu22/php_apis/registerTipsArticle.php",e).subscribe((function(t){console.log(t),c.navigate(),c.alertPost()}),(function(t){return console.error(t)}))}),(function(t){return console.error(t)}))},this.navigate=function(){c.router.navigate(["/tabs","tab"+c.tab,"edited"])}}var i,o,r;return i=n,(o=[{key:"ngOnInit",value:function(){var t=this;this.route.params.subscribe((function(e){t.tab=e.tab,1==t.tab&&(t.tabFlag=!0)}),(function(t){return console.error(t)}))}},{key:"alertPost",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({message:"\u65e5\u8a8c\u304c\u6295\u7a3f\u3055\u308c\u307e\u3057\u305f",buttons:["OK"]});case 2:return e=t.sent,t.next=5,e.present();case 5:case"end":return t.stop()}}),t,this)})))}}])&&e(i.prototype,o),r&&e(i,r),n}(),h.\u0275fac=function(t){return new(t||h)(l.Hb(u.a),l.Hb(g.a),l.Hb(d.a),l.Hb(b.a),l.Hb(c.g),l.Hb(c.a))},h.\u0275cmp=l.Bb({type:h,selectors:[["app-edit"]],decls:19,vars:3,consts:[["slot","start"],["id","back"],[4,"ngIf"],[3,"submit"],["position","floating"],["required","","type","text","name","title",3,"ngModel","ngModelChange"],["name","text",3,"ngModel","ngModelChange"],[1,"button-area"],["type","submit","id","post-article-button"],[1,"button-area","ion-padding"],["for","file-button","id","file-button-label"],["type","file","accept","image/*","id","file-button",3,"change"],["id","image",3,"src"]],template:function(t,e){1&t&&(l.Kb(0,"ion-header"),l.Kb(1,"ion-toolbar"),l.Kb(2,"ion-buttons",0),l.Ib(3,"ion-back-button",1),l.Jb(),l.Kb(4,"ion-title"),l.gc(5,"\u7de8\u96c6\u30da\u30fc\u30b8"),l.Jb(),l.Jb(),l.Jb(),l.Kb(6,"ion-content"),l.fc(7,p,15,1,"div",2),l.Kb(8,"form",3),l.Sb("submit",(function(){return e.postArticle()})),l.Kb(9,"ion-item"),l.Kb(10,"ion-label",4),l.gc(11,"\u30bf\u30a4\u30c8\u30eb"),l.Jb(),l.Kb(12,"ion-input",5),l.Sb("ngModelChange",(function(t){return e.title=t})),l.Jb(),l.Kb(13,"ion-label",4),l.gc(14,"\u672c\u6587"),l.Jb(),l.Kb(15,"ion-textarea",6),l.Sb("ngModelChange",(function(t){return e.text=t})),l.Jb(),l.Jb(),l.Kb(16,"div",7),l.Kb(17,"button",8),l.gc(18,"\u6295\u7a3f\u3059\u308b"),l.Jb(),l.Jb(),l.Jb(),l.Jb()),2&t&&(l.xb(7),l.Xb("ngIf",e.tabFlag),l.xb(5),l.Xb("ngModel",e.title),l.xb(3),l.Xb("ngModel",e.text))},directives:[b.n,b.B,b.e,b.c,b.d,b.A,b.k,r.i,a.i,a.e,a.f,b.r,b.s,b.q,b.H,a.h,a.d,a.g,b.z,b.f,b.g,b.p],styles:["#file-button-label[_ngcontent-%COMP%]{font-size:2em;color:#fff;background-color:#cbf266;border-radius:5px;padding:10px 30px;width:80%}#file-button[_ngcontent-%COMP%]{display:none}.button-area[_ngcontent-%COMP%]{text-align:center}#post-article-button[_ngcontent-%COMP%]{font-size:2em;color:#fff;background-color:#cbf266;border-radius:5px;padding:10px 30px;width:80%}"]}),h)}],K=((v=function e(){t(this,e)}).\u0275mod=l.Fb({type:v}),v.\u0275inj=l.Eb({factory:function(t){return new(t||v)},imports:[[c.i.forChild(J)],c.i]}),v),x=((m=function e(){t(this,e)}).\u0275mod=l.Fb({type:m}),m.\u0275inj=l.Eb({factory:function(t){return new(t||m)},imports:[[r.b,a.a,b.C,K]]}),m)}}])}();