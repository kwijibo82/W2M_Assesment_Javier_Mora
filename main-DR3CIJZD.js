import{a as L}from"./chunk-HMWMV4W5.js";import{a as k,b as z,d as B,g as H,h as V}from"./chunk-YBI7VVFB.js";import{Aa as w,Ab as T,Ba as P,Bb as O,Cb as j,Da as R,Ea as _,Ma as h,N as x,Oa as c,P as C,Qa as p,Ra as m,Sa as F,V as b,Va as u,Wa as g,Xa as y,_ as l,bb as f,ca as I,db as S,eb as D,sb as E,ta as M,xa as s,ya as A,za as N}from"./chunk-Z2R3CXV5.js";function q(i,e){if(i&1&&(p(0,"div",4),g(1),m()),i&2){let t=u().ngIf;s(),y(" ",t.message," ")}}function G(i,e){if(i&1&&(p(0,"div",5),g(1),m()),i&2){let t=u().ngIf;s(),y(" ",t.message," ")}}function J(i,e){if(i&1&&(p(0,"div",1),h(1,q,2,1,"div",2)(2,G,2,1,"div",3),m()),i&2){let t=e.ngIf;s(),c("ngIf",(t==null?null:t.type)==="success"),s(),c("ngIf",(t==null?null:t.type)==="error")}}var W=(()=>{let e=class e{constructor(o){this.notificationService=o}};e.\u0275fac=function(n){return new(n||e)(A(L))},e.\u0275cmp=l({type:e,selectors:[["app-notification"]],standalone:!0,features:[f],decls:2,vars:3,consts:[["class","notification-container",4,"ngIf"],[1,"notification-container"],["class","notification-success",4,"ngIf"],["class","notification-error",4,"ngIf"],[1,"notification-success"],[1,"notification-error"]],template:function(n,r){n&1&&(h(0,J,3,2,"div",0),S(1,"async")),n&2&&c("ngIf",D(1,1,r.notificationService.notification$))},dependencies:[j,T,O],styles:[".notification-container[_ngcontent-%COMP%]{display:flex;justify-content:center;position:fixed;bottom:0;left:0;right:0;padding:1rem;z-index:1000}.notification-success[_ngcontent-%COMP%]{background-color:#dff0d8;color:#3c763d;border:1px solid #d6e9c6;padding:1rem 2rem;font-size:1.25rem;border-radius:4px;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f;margin-bottom:50px}.notification-error[_ngcontent-%COMP%]{background-color:#f2dede;color:#a94442;border:1px solid #ebccd1;padding:1rem 2rem;font-size:1.25rem;border-radius:4px;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f;margin-bottom:50px}"]});let i=e;return i})();var X=(()=>{let e=class e{constructor(){this.title="angular-superheroes"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["app-root"]],standalone:!0,features:[f],decls:2,vars:0,template:function(n,r){n&1&&F(0,"app-notification")(1,"router-outlet")},dependencies:[B,V,W]});let i=e;return i})();var Y=[{path:"",redirectTo:"/heroes",pathMatch:"full"},{path:"heroes",loadChildren:()=>import("./chunk-4HBCYGWS.js").then(i=>i.HeroListModule)},{path:"edit-hero/:id",loadChildren:()=>import("./chunk-HCCGKNLJ.js").then(i=>i.HeroEditModule)},{path:"create-hero",loadChildren:()=>import("./chunk-AACMOIYO.js").then(i=>i.HeroCreateModule)}];var K="@",Q=(()=>{let e=class e{constructor(o,n,r,a,d){this.doc=o,this.delegate=n,this.zone=r,this.animationType=a,this.moduleImpl=d,this._rendererFactoryPromise=null,this.scheduler=b(w,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-HIYSHKBI.js")).catch(n=>{throw new x(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:r})=>{this._engine=n(this.animationType,this.doc,this.scheduler);let a=new r(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(o,n){let r=this.delegate.createRenderer(o,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let a=new v(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(d=>{let $=d.createRenderer(o,n);a.use($)}).catch(d=>{a.use(r)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(n){N()},e.\u0275prov=C({token:e,factory:e.\u0275fac});let i=e;return i})(),v=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,o,n){this.delegate.insertBefore(e,t,o,n)}removeChild(e,t,o){this.delegate.removeChild(e,t,o)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,o,n){this.delegate.setAttribute(e,t,o,n)}removeAttribute(e,t,o){this.delegate.removeAttribute(e,t,o)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,o,n){this.delegate.setStyle(e,t,o,n)}removeStyle(e,t,o){this.delegate.removeStyle(e,t,o)}setProperty(e,t,o){this.shouldReplay(t)&&this.replay.push(n=>n.setProperty(e,t,o)),this.delegate.setProperty(e,t,o)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,o){return this.shouldReplay(t)&&this.replay.push(n=>n.listen(e,t,o)),this.delegate.listen(e,t,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(K)}};function Z(i="animations"){return R("NgAsyncAnimations"),I([{provide:P,useFactory:(e,t,o)=>new Q(e,t,o,i),deps:[E,k,_]},{provide:M,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}z(X,{providers:[H(Y),Z()]}).catch(i=>console.error(i));