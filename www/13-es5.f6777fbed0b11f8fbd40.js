!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{X3zk:function(o,i,e){"use strict";e.r(i),e.d(i,"LoginPageModule",(function(){return h}));var r,a,s,b=e("ofXK"),u=e("3Pt+"),c=e("TEn/"),g=e("tyNb"),l=e("fXoL"),p=e("dVwY"),d=[{path:"",component:(r=function(){function o(n,i){var e=this;t(this,o),this.router=n,this.gs=i,this.id="",this.password="",this.status=0,this.postObj={},this.returnObj={},this.navigate=function(){e.postObj.id=e.id,e.postObj.password=e.password,e.gs.http("https://kn46itblog.com/hackathon/CCCu22/php_apis/login.php",e.postObj).subscribe((function(t){console.log(t),e.returnObj=t,e.status=e.returnObj.status,200==e.status&&(localStorage.id=e.id,localStorage.attribute=e.returnObj.attribute,localStorage.prefecture=e.returnObj.prefecture,localStorage.password=e.password,localStorage.hash=e.returnObj.hash,console.log("Stored item!"),e.router.navigate(["/tabs","tab1","login"]))}),(function(t){console.log("error: "+t)}))},this.navigateToSignup=function(){e.router.navigate(["/signup"])},this.login=function(){}}var i,e,r;return i=o,(e=[{key:"ngOnInit",value:function(){this.status=0}},{key:"ngOnDestroy",value:function(){200!=this.status&&this.router.navigate(["/login"])}}])&&n(i.prototype,e),r&&n(i,r),o}(),r.\u0275fac=function(t){return new(t||r)(l.Hb(g.g),l.Hb(p.a))},r.\u0275cmp=l.Bb({type:r,selectors:[["app-login"]],decls:23,vars:2,consts:[["id","icon","src","../../assets/icon/icon.png"],["src","../../assets/logo.png"],["id","top"],[1,"button_center"],[1,"ion-padding",3,"submit"],["lines","full",1,"ion-padding-bottom"],["position","floating"],["required","","type","text","name","id",3,"ngModel","ngModelChange"],["required","","type","password","name","password",3,"ngModel","ngModelChange"],[1,"button-area"],["type","submit","id","login-button",1,"button"],[1,"button",3,"click"]],template:function(t,n){1&t&&(l.Kb(0,"ion-header"),l.Kb(1,"ion-toolbar"),l.Kb(2,"ion-title"),l.Ib(3,"ion-img",0),l.Jb(),l.Jb(),l.Jb(),l.Kb(4,"ion-content"),l.Ib(5,"ion-img",1),l.Kb(6,"div",2),l.gc(7,"\u30ed\u30b0\u30a4\u30f3"),l.Jb(),l.Kb(8,"div",3),l.Kb(9,"form",4),l.Sb("submit",(function(){return n.navigate()})),l.Kb(10,"ion-item",5),l.Kb(11,"ion-label",6),l.gc(12,"ID"),l.Jb(),l.Kb(13,"ion-input",7),l.Sb("ngModelChange",(function(t){return n.id=t})),l.Jb(),l.Kb(14,"ion-label",6),l.gc(15,"\u30d1\u30b9\u30ef\u30fc\u30c9"),l.Jb(),l.Kb(16,"ion-input",8),l.Sb("ngModelChange",(function(t){return n.password=t})),l.Jb(),l.Jb(),l.Kb(17,"div",9),l.Kb(18,"button",10),l.gc(19,"\u30ed\u30b0\u30a4\u30f3"),l.Jb(),l.Jb(),l.Jb(),l.Kb(20,"div",9),l.Kb(21,"button",11),l.Sb("click",(function(){return n.navigateToSignup()})),l.gc(22,"\u65b0\u898f\u767b\u9332"),l.Jb(),l.Jb(),l.Jb(),l.Jb()),2&t&&(l.xb(13),l.Xb("ngModel",n.id),l.xb(3),l.Xb("ngModel",n.password))},directives:[c.n,c.B,c.A,c.p,c.k,u.i,u.e,u.f,c.r,c.s,c.q,c.H,u.h,u.d,u.g],styles:["#top[_ngcontent-%COMP%]{font-weight:700;font-size:large}#top[_ngcontent-%COMP%], .button-area[_ngcontent-%COMP%]{text-align:center}.button[_ngcontent-%COMP%]{font-size:2em;color:#fff;background-color:#cbf266;border-radius:5px;padding:10px 30px;width:300px}"]}),r)}],f=((s=function n(){t(this,n)}).\u0275mod=l.Fb({type:s}),s.\u0275inj=l.Eb({factory:function(t){return new(t||s)},imports:[[g.i.forChild(d)],g.i]}),s),h=((a=function n(){t(this,n)}).\u0275mod=l.Fb({type:a}),a.\u0275inj=l.Eb({factory:function(t){return new(t||a)},imports:[[b.b,u.a,c.C,f]]}),a)}}])}();