import{a as B,b as A,e as R,g as U,h as l,i as q,j as G}from"./chunk-LPTN67QA.js";import{h as z,j as _}from"./chunk-VDDGEJAY.js";import{Ca as d,D as w,Da as L,H,Mb as V,Nb as D,Pb as W,Ta as b,V as m,Va as c,Xa as s,Ya as a,Za as u,_a as O,ab as S,bb as g,d as M,da as f,ea as h,gb as p,i as v,jb as F,kb as P,lb as E,ma as x,mb as k,na as C,ob as I,pb as T,qb as j,rb as N}from"./chunk-SJ7YPFVE.js";var J=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f({type:e,selectors:[["app-loader"]],standalone:!0,features:[I],decls:3,vars:0,consts:[[1,"loader-container"],[1,"loader"]],template:function(t,o){t&1&&(s(0,"div",0),u(1,"div",1),p(2,` Cargando...
`),a())},styles:[".loader-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.loader[_ngcontent-%COMP%]{border:4px solid rgba(0,0,0,.1);width:36px;height:36px;border-radius:50%;border-left-color:#09f;animation:_ngcontent-%COMP%_spin 1s ease infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]});let i=e;return i})();var Y=i=>["/edit-hero",i];function Z(i,e){i&1&&u(0,"app-loader")}function $(i,e){if(i&1&&(s(0,"li",7)(1,"span"),p(2),j(3,"capitalizeFirst"),a(),s(4,"span",8)(5,"button",9),p(6,"Editar"),a()()()),i&2){let n=e.$implicit;d(2),F("",n.id," - ",N(3,3,n.name),""),d(3),c("routerLink",T(5,Y,n.id))}}function ee(i,e){if(i&1){let n=O();s(0,"div",2)(1,"h1"),p(2,"Lista de h\xE9roes"),a(),s(3,"ul",3),b(4,$,7,7,"li",4),a(),s(5,"input",5),k("ngModelChange",function(t){x(n);let o=g();return E(o.newHero.name,t)||(o.newHero.name=t),C(t)}),S("ngModelChange",function(t){x(n);let o=g();return C(o.search(t))}),a(),s(6,"button",6),p(7," Crear H\xE9roe "),a()()}if(i&2){let n=g();d(4),c("ngForOf",n.filteredHeroes),d(),P("ngModel",n.newHero.name),d(),c("routerLink","/create-hero")}}var K=(()=>{let e=class e{constructor(r){this.heroService=r,this.heroes=[],this.filteredHeroes=[],this.subscription=new M,this.isLoading=!1,this.searchTerms=new v,this.newHero={name:"",id:0}}ngOnInit(){this.getHeroes(),this.subscription.add(this.searchTerms.pipe(w(300),H()).subscribe(r=>{this.applyFilter(r)}))}ngOnDestroy(){this.subscription.unsubscribe()}getHeroes(){this.isLoading=!0,this.heroService.getHeroes().subscribe({next:r=>{this.heroes=r,this.filteredHeroes=r,this.isLoading=!1},error:()=>{this.isLoading=!1}})}applyFilter(r){this.filteredHeroes=this.heroes.filter(t=>t.name.toLowerCase().includes(r.toLowerCase()))}confirmDelete(r){this.heroService.deleteHero(r.id).subscribe(()=>{this.heroes=this.heroes.filter(t=>t.id!==r.id),this.filteredHeroes=this.filteredHeroes.filter(t=>t.id!==r.id),this.heroes.forEach((t,o)=>{t.id=o+1}),this.applyFilter("")})}search(r){this.searchTerms.next(r)}};e.\u0275fac=function(t){return new(t||e)(L(l))},e.\u0275cmp=f({type:e,selectors:[["app-hero-list"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","container",4,"ngIf"],[1,"container"],[1,"hero-list"],["class","hero-card",4,"ngFor","ngForOf"],["id","name","type","text","name","name","placeholder","Filtra nombre del H\xE9roe",3,"ngModelChange","ngModel"],[1,"crear-heroe-btn",3,"routerLink"],[1,"hero-card"],[1,"hero-actions"],[3,"routerLink"]],template:function(t,o){t&1&&b(0,Z,1,0,"app-loader",0)(1,ee,8,3,"div",1),t&2&&(c("ngIf",o.isLoading),d(),c("ngIf",!o.isLoading))},dependencies:[V,D,B,A,R,z,J,q],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:20px}h1[_ngcontent-%COMP%]{color:#333}input[type=text][_ngcontent-%COMP%]{padding:10px;margin:10px 0;border:1px solid #ddd;border-radius:4px}button[_ngcontent-%COMP%]{padding:10px 15px;margin-right:5px;border:none;border-radius:4px;cursor:pointer;background-color:#5c6bc0;color:#fff}.hero-list[_ngcontent-%COMP%]{list-style:none;padding:0;width:100%;max-width:600px}.hero-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:10px;margin:10px 0;border:1px solid #ddd;border-radius:4px;background-color:#fff}.hero-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:10px}.crear-heroe-btn[_ngcontent-%COMP%]{padding:10px 15px;border:none;border-radius:4px;cursor:pointer;background-color:#5c6bc0;color:#fff;margin-top:20px}.crear-heroe-btn[_ngcontent-%COMP%]:hover{background-color:#3f51b5}"]});let i=e;return i})();var te=[{path:"",component:K}],Q=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h({type:e}),e.\u0275inj=m({imports:[_.forChild(te),_]});let i=e;return i})();var Me=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h({type:e}),e.\u0275inj=m({providers:[{provide:l,useClass:l}],imports:[W,U,Q,G]});let i=e;return i})();export{Me as HeroListModule};
