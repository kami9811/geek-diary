!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{X3zk:function(o,i,e){"use strict";e.r(i),e.d(i,"LoginPageModule",(function(){return h}));var r,s,a,b=e("ofXK"),u=e("3Pt+"),c=e("TEn/"),l=e("tyNb"),g=e("fXoL"),p=e("dVwY"),d=[{path:"",component:(r=function(){function o(n,i){var e=this;t(this,o),this.router=n,this.gs=i,this.id="",this.password="",this.status=0,this.postObj={},this.returnObj={},this.navigate=function(){e.postObj.id=e.id,e.postObj.password=e.password,e.login()},this.navigateToSignup=function(){e.router.navigate(["/signup"])},this.login=function(){e.gs.http("https://kn46itblog.com/hackathon/CCCu22/php_apis/login.php",e.postObj).subscribe((function(t){console.log(t),e.returnObj=t,e.status=e.returnObj.status,200==e.status&&(localStorage.id=e.postObj.id,localStorage.attribute=e.returnObj.attribute,localStorage.prefecture=e.returnObj.prefecture,localStorage.password=e.postObj.password,localStorage.hash=e.returnObj.hash,console.log("Stored item!"),e.router.navigate(["/tabs","tab1","login"]))}),(function(t){console.log("error: "+t)}))}}var i,e,r;return i=o,(e=[{key:"ngOnInit",value:function(){this.postObj.id=localStorage.id,this.postObj.password=localStorage.password,this.login()}},{key:"ngOnDestroy",value:function(){200!=this.status&&this.router.navigate(["/login"])}}])&&n(i.prototype,e),r&&n(i,r),o}(),r.\u0275fac=function(t){return new(t||r)(g.Hb(l.g),g.Hb(p.a))},r.\u0275cmp=g.Bb({type:r,selectors:[["app-login"]],decls:20,vars:2,consts:[["id","icon","src","../../assets/icon/icon.png"],["src","../../assets/logo.png"],["id","top"],[1,"ion-padding",3,"submit"],["lines","full",1,"ion-padding-bottom"],["position","floating"],["required","","type","text","name","id",3,"ngModel","ngModelChange"],["required","","type","password","name","password",3,"ngModel","ngModelChange"],["type","submit","expand","block","color","base-green",1,""],["id","bottom-button","expand","block","fill","outline","color","base-green",3,"click"]],template:function(t,n){1&t&&(g.Kb(0,"ion-header"),g.Kb(1,"ion-toolbar"),g.Kb(2,"ion-title"),g.Ib(3,"ion-img",0),g.Jb(),g.Jb(),g.Jb(),g.Kb(4,"ion-content"),g.Ib(5,"ion-img",1),g.Kb(6,"div",2),g.dc(7,"\u30ed\u30b0\u30a4\u30f3"),g.Jb(),g.Kb(8,"form",3),g.Rb("submit",(function(){return n.navigate()})),g.Kb(9,"ion-item",4),g.Kb(10,"ion-label",5),g.dc(11,"ID"),g.Jb(),g.Kb(12,"ion-input",6),g.Rb("ngModelChange",(function(t){return n.id=t})),g.Jb(),g.Kb(13,"ion-label",5),g.dc(14,"\u30d1\u30b9\u30ef\u30fc\u30c9"),g.Jb(),g.Kb(15,"ion-input",7),g.Rb("ngModelChange",(function(t){return n.password=t})),g.Jb(),g.Jb(),g.Kb(16,"ion-button",8),g.dc(17,"\u30ed\u30b0\u30a4\u30f3"),g.Jb(),g.Jb(),g.Kb(18,"ion-button",9),g.Rb("click",(function(){return n.navigateToSignup()})),g.dc(19,"\u65b0\u898f\u767b\u9332\u306f\u3053\u3061\u3089"),g.Jb(),g.Jb()),2&t&&(g.xb(12),g.Wb("ngModel",n.id),g.xb(3),g.Wb("ngModel",n.password))},directives:[c.q,c.F,c.E,c.s,c.m,u.i,u.e,u.f,c.u,c.v,c.t,c.M,u.h,u.d,u.g,c.e],styles:["#top[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-size:large}#bottom-button[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;width:90%}"]}),r)}],f=((a=function n(){t(this,n)}).\u0275mod=g.Fb({type:a}),a.\u0275inj=g.Eb({factory:function(t){return new(t||a)},imports:[[l.i.forChild(d)],l.i]}),a),h=((s=function n(){t(this,n)}).\u0275mod=g.Fb({type:s}),s.\u0275inj=g.Eb({factory:function(t){return new(t||s)},imports:[[b.b,u.a,c.G,f]]}),s)}}])}();