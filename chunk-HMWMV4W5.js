import{P as r,i as e}from"./chunk-Z2R3CXV5.js";var a=(()=>{let t=class t{constructor(){this.notificationSource=new e(null),this.notification$=this.notificationSource.asObservable()}showSuccess(i){this.notificationSource.next({type:"success",message:i}),setTimeout(()=>this.clearNotification(),3e3)}showError(i){this.notificationSource.next({type:"error",message:i}),setTimeout(()=>this.clearNotification(),3e3)}clearNotification(){this.notificationSource.next(null)}};t.\u0275fac=function(c){return new(c||t)},t.\u0275prov=r({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();export{a};