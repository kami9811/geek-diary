!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"k+ul":function(o,i,r){"use strict";r.r(i),r.d(i,"Tab3PageModule",(function(){return J}));var e=r("TEn/"),a=r("tyNb"),c=r("ofXK"),b=r("3Pt+"),s=r("fXoL"),u=r("M2ZX"),l=r("dVwY");function f(t,n){if(1&t&&(s.Kb(0,"ion-card",11),s.Kb(1,"ion-card-content"),s.gc(2),s.Jb(),s.Jb()),2&t){var o=n.$implicit;s.Yb("routerLink","/self/3/",o,""),s.xb(2),s.ic("",o,"\u3055\u3093")}}function p(t,n){if(1&t&&(s.Kb(0,"div"),s.fc(1,f,3,2,"ion-card",10),s.Jb()),2&t){var o=s.Ub();s.xb(1),s.Xb("ngForOf",o.childList)}}function h(t,n){if(1&t&&(s.Kb(0,"ion-card",11),s.Kb(1,"ion-card-content"),s.gc(2),s.Jb(),s.Jb()),2&t){var o=n.$implicit;s.Yb("routerLink","/self/3/",o,""),s.xb(2),s.ic("",o,"\u3055\u3093")}}function d(t,n){if(1&t&&(s.Kb(0,"div"),s.fc(1,h,3,2,"ion-card",10),s.Jb()),2&t){var o=s.Ub();s.xb(1),s.Xb("ngForOf",o.parentList)}}var g,v,m,k=((g=function(){function o(n,i,r,e){var a=this;t(this,o),this.router=n,this.route=i,this.nativeStorage=r,this.gs=e,this.parentFlag=!1,this.postObj={},this.returnObj={},this.childList=[],this.parentList=[],this.logout=function(){a.nativeStorage.setItem("login",{id:"",password:"",hash:""}).then((function(){return console.log("Logout")}),(function(t){return console.error(t)})),a.router.navigate(["/login"])},this.navigateToFamily=function(){a.router.navigate(["/family"])}}var i,r,e;return i=o,(r=[{key:"ngOnInit",value:function(){var t=this;this.route.params.subscribe((function(t){}),(function(t){return console.error(t)})),this.nativeStorage.getItem("login").then((function(n){t.postObj.id=n.id,t.postObj.hash=n.hash;var o=t.postObj;0==n.attribute?(t.parentFlag=!0,t.gs.http("https://kn46itblog.com/hackathon/CCCu22/php_apis/getFamilyDataParent.php",o).subscribe((function(n){t.returnObj=n,t.childList=[];for(var o=0;o<t.returnObj.child_num;o++)t.objWord="child"+(o+1),t.childList.push(t.returnObj.child_list[t.objWord]);console.log(t.childList)}))):1==n.attribute&&(t.parentFlag=!1,t.gs.http("https://kn46itblog.com/hackathon/CCCu22/php_apis/getFamilyDataChild.php",o).subscribe((function(n){t.returnObj=n,t.parentList=[];for(var o=0;o<t.returnObj.parent_num;o++)t.objWord="parent"+(o+1),t.parentList.push(t.returnObj.parent_list[t.objWord]);console.log(t.parentList)})))}),(function(t){return console.log(t)}))}}])&&n(i.prototype,r),e&&n(i,e),o}()).\u0275fac=function(t){return new(t||g)(s.Hb(a.g),s.Hb(a.a),s.Hb(u.a),s.Hb(l.a))},g.\u0275cmp=s.Bb({type:g,selectors:[["app-tab3"]],decls:15,vars:4,consts:[[3,"translucent"],["id","icon","src","../../assets/icon/icon.png"],[3,"fullscreen"],["id","top"],[4,"ngIf"],["id","top-button-area"],["id","top-button",3,"click"],["vertical","bottom","horizontal","end","slot","fixed"],["color","success",3,"click"],["name","person-add-outline"],["button","true",3,"routerLink",4,"ngFor","ngForOf"],["button","true",3,"routerLink"]],template:function(t,n){1&t&&(s.Kb(0,"ion-header",0),s.Kb(1,"ion-toolbar"),s.Kb(2,"ion-title"),s.Ib(3,"ion-img",1),s.Jb(),s.Jb(),s.Jb(),s.Kb(4,"ion-content",2),s.Kb(5,"div",3),s.gc(6,"\u5bb6\u65cf\u4e00\u89a7"),s.Jb(),s.fc(7,p,2,1,"div",4),s.fc(8,d,2,1,"div",4),s.Kb(9,"div",5),s.Kb(10,"button",6),s.Sb("click",(function(){return n.logout()})),s.gc(11,"\u30ed\u30b0\u30a2\u30a6\u30c8"),s.Jb(),s.Jb(),s.Kb(12,"ion-fab",7),s.Kb(13,"ion-fab-button",8),s.Sb("click",(function(){return n.navigateToFamily()})),s.Ib(14,"ion-icon",9),s.Jb(),s.Jb(),s.Jb()),2&t&&(s.Xb("translucent",!0),s.xb(4),s.Xb("fullscreen",!0),s.xb(3),s.Xb("ngIf",n.parentFlag),s.xb(1),s.Xb("ngIf",!n.parentFlag))},directives:[e.n,e.B,e.A,e.p,e.k,c.i,e.l,e.m,e.o,c.h,e.f,e.F,a.h,e.g],styles:["#top-button[_ngcontent-%COMP%]{font-size:2em;color:#fff;background-color:#ffd1d1;border-radius:5px;padding:10px 30px;width:80%}#top[_ngcontent-%COMP%], #top-button-area[_ngcontent-%COMP%]{text-align:center}#top[_ngcontent-%COMP%]{font-weight:700;font-size:large}"]}),g),O=r("qtYk"),j=[{path:"",component:k}],y=((m=function n(){t(this,n)}).\u0275mod=s.Fb({type:m}),m.\u0275inj=s.Eb({factory:function(t){return new(t||m)},imports:[[a.i.forChild(j)],a.i]}),m),J=((v=function n(){t(this,n)}).\u0275mod=s.Fb({type:v}),v.\u0275inj=s.Eb({factory:function(t){return new(t||v)},imports:[[e.C,c.b,b.a,O.a,a.i.forChild([{path:"",component:k}]),y]]}),v)}}])}();