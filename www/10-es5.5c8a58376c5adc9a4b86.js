!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{rZHr:function(e,o,i){"use strict";i.r(o),i.d(o,"ArticlePageModule",(function(){return j}));var r=i("ofXK"),c=i("3Pt+"),a=i("TEn/"),b=i("tyNb"),s=i("mrSG"),u=i("fXoL"),m=i("dVwY");function l(t,n){if(1&t&&(u.Kb(0,"div",9),u.Ib(1,"ion-img",10),u.Jb()),2&t){var e=u.Tb();u.xb(1),u.Wb("src",e.image)}}function h(t,n){if(1&t&&(u.Kb(0,"ion-card",11),u.Kb(1,"ion-card-header"),u.Kb(2,"ion-card-subtitle"),u.dc(3),u.Jb(),u.Jb(),u.Kb(4,"ion-card-content"),u.dc(5),u.Jb(),u.Jb()),2&t){var e=n.$implicit;u.xb(3),u.fc("",e.id,"\u3055\u3093\u306e\u6295\u7a3f"),u.xb(2),u.ec(e.text)}}var d,p,g,f=[{path:"",component:(d=function(){function e(n,o,i,r){var c=this;t(this,e),this.gs=n,this.router=o,this.route=i,this.alertController=r,this.postObj={},this.returnObj={},this.imageFlag=!1,this.comment="",this.commentList=[],this.headerTitle="\u3084\u3089\u304b\u3057\u5171\u6709\u8a18\u4e8b",this.postComment=function(){c.postObj.comment=c.comment;var t=c.postObj;1==c.tab||3==c.tab?c.gs.http("https://kn46itblog.com/hackathon/CCCu22/php_apis/registerDiaryComment.php",t).subscribe((function(t){c.loadContents(),c.alertComment()}),(function(t){return console.error(t)})):2==c.tab&&c.gs.http("https://kn46itblog.com/hackathon/CCCu22/php_apis/registerTipsComment.php",t).subscribe((function(t){console.log(t),c.loadContents(),c.alertComment()}),(function(t){return console.error(t)}))},this.loadContents=function(){c.postObj.id=localStorage.id,c.postObj.hash=localStorage.hash;var t=c.postObj;1!=c.tab&&3!=c.tab||c.gs.http("https://kn46itblog.com/hackathon/CCCu22/php_apis/getDiaryArticleContents.php",t).subscribe((function(t){console.log(t),c.returnObj=t,c.image=c.returnObj.image,c.commentList=[];for(var n=0;n<c.returnObj.comment_num;n++)c.objWord="comment"+(n+1),c.commentList.push(c.returnObj.comment_list[c.objWord]);console.log(c.commentList)}),(function(t){return console.error(t)})),2==c.tab&&c.gs.http("https://kn46itblog.com/hackathon/CCCu22/php_apis/getTipsArticleContents.php",t).subscribe((function(t){console.log(t),c.returnObj=t,c.image=c.returnObj.image,c.commentList=[];for(var n=0;n<c.returnObj.comment_num;n++)c.objWord="comment"+(n+1),c.commentList.push(c.returnObj.comment_list[c.objWord]);console.log(c.commentList)}),(function(t){return console.error(t)}))}}var o,i,r;return o=e,(i=[{key:"ngOnInit",value:function(){var t=this;this.route.params.subscribe((function(n){t.tab=n.tab,t.article_id=n.article_id,t.title=n.title,t.text=n.text,t.id=n.id})),1!=this.tab&&3!=this.tab||(this.imageFlag=!0,this.headerTitle="\u3059\u307e\u3044\u308b\u65e5\u8a8c"),this.postObj.article_id=this.article_id,this.loadContents()}},{key:"alertComment",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:"\u30b3\u30e1\u30f3\u30c8",message:"\u30b3\u30e1\u30f3\u30c8\u304c\u6295\u7a3f\u3055\u308c\u307e\u3057\u305f",buttons:["OK"]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}}),t,this)})))}}])&&n(o.prototype,i),r&&n(o,r),e}(),d.\u0275fac=function(t){return new(t||d)(u.Hb(m.a),u.Hb(b.g),u.Hb(b.a),u.Hb(a.a))},d.\u0275cmp=u.Bb({type:d,selectors:[["app-article"]],decls:24,vars:7,consts:[["slot","start"],["id","back"],["id","image",4,"ngIf"],["id","text"],["button","true",4,"ngFor","ngForOf"],[3,"submit"],["position","floating"],["name","comment",3,"ngModel","ngModelChange"],["id","post-comment-button","type","submit","expand","block","color","base-green"],["id","image"],[3,"src"],["button","true"]],template:function(t,n){1&t&&(u.Kb(0,"ion-header"),u.Kb(1,"ion-toolbar"),u.Kb(2,"ion-buttons",0),u.Ib(3,"ion-back-button",1),u.Jb(),u.Kb(4,"ion-title"),u.dc(5),u.Jb(),u.Jb(),u.Jb(),u.Kb(6,"ion-content"),u.Kb(7,"ion-card"),u.Kb(8,"ion-card-header"),u.Kb(9,"ion-card-subtitle"),u.dc(10),u.Jb(),u.Kb(11,"ion-card-title"),u.dc(12),u.Jb(),u.Jb(),u.Jb(),u.cc(13,l,2,1,"div",2),u.Kb(14,"div",3),u.dc(15),u.Jb(),u.cc(16,h,6,2,"ion-card",4),u.Kb(17,"form",5),u.Rb("submit",(function(){return n.postComment()})),u.Kb(18,"ion-item"),u.Kb(19,"ion-label",6),u.dc(20,"\u6295\u7a3f\u30b3\u30e1\u30f3\u30c8"),u.Jb(),u.Kb(21,"ion-textarea",7),u.Rb("ngModelChange",(function(t){return n.comment=t})),u.Jb(),u.Jb(),u.Kb(22,"ion-button",8),u.dc(23,"\u30b3\u30e1\u30f3\u30c8\u3092\u6295\u7a3f\u3059\u308b"),u.Jb(),u.Jb(),u.Jb()),2&t&&(u.xb(5),u.ec(n.headerTitle),u.xb(5),u.fc("",n.id,"\u3055\u3093\u306e\u6295\u7a3f"),u.xb(2),u.ec(n.title),u.xb(1),u.Wb("ngIf",n.imageFlag),u.xb(2),u.ec(n.text),u.xb(1),u.Wb("ngForOf",n.commentList),u.xb(5),u.Wb("ngModel",n.comment))},directives:[a.q,a.F,a.f,a.c,a.d,a.E,a.m,a.g,a.i,a.j,a.k,r.i,r.h,c.i,c.e,c.f,a.u,a.v,a.D,a.M,c.d,c.g,a.e,a.s,a.h],styles:["#post-comment-button[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;width:90%}#button-area[_ngcontent-%COMP%]{text-align:center}#text[_ngcontent-%COMP%]{text-align:justify;margin:auto;width:90%}"]}),d)}],C=((g=function n(){t(this,n)}).\u0275mod=u.Fb({type:g}),g.\u0275inj=u.Eb({factory:function(t){return new(t||g)},imports:[[b.i.forChild(f)],b.i]}),g),j=((p=function n(){t(this,n)}).\u0275mod=u.Fb({type:p}),p.\u0275inj=u.Eb({factory:function(t){return new(t||p)},imports:[[r.b,c.a,a.G,C]]}),p)}}])}();