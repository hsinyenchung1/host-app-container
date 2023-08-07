/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 9:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: ./node_modules/single-spa/lib/esm/single-spa.min.js
/* single-spa@5.9.5 - ESM - prod */
var t=Object.freeze({__proto__:null,get start(){return Bt},get ensureJQuerySupport(){return lt},get setBootstrapMaxTime(){return J},get setMountMaxTime(){return H},get setUnmountMaxTime(){return Q},get setUnloadMaxTime(){return V},get registerApplication(){return bt},get unregisterApplication(){return At},get getMountedApps(){return yt},get getAppStatus(){return Ot},get unloadApplication(){return Nt},get checkActivityFunctions(){return Tt},get getAppNames(){return Pt},get pathToActiveWhen(){return Dt},get navigateToUrl(){return et},get triggerAppChange(){return Lt},get addErrorHandler(){return a},get removeErrorHandler(){return c},get mountRootParcel(){return W},get NOT_LOADED(){return l},get LOADING_SOURCE_CODE(){return p},get NOT_BOOTSTRAPPED(){return h},get BOOTSTRAPPING(){return m},get NOT_MOUNTED(){return v},get MOUNTING(){return d},get UPDATING(){return g},get LOAD_ERROR(){return P},get MOUNTED(){return w},get UNLOADING(){return y},get UNMOUNTING(){return E},get SKIP_BECAUSE_BROKEN(){return O}});function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var r=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{}).CustomEvent,o=function(){try{var t=new r("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?r:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,n){var e=document.createEvent("CustomEvent");return n?e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail):e.initCustomEvent(t,!1,!1,void 0),e}:function(t,n){var e=document.createEventObject();return e.type=t,n?(e.bubbles=Boolean(n.bubbles),e.cancelable=Boolean(n.cancelable),e.detail=n.detail):(e.bubbles=!1,e.cancelable=!1,e.detail=void 0),e},i=[];function u(t,n,e){var r=f(t,n,e);i.length?i.forEach((function(t){return t(r)})):setTimeout((function(){throw r}))}function a(t){if("function"!=typeof t)throw Error(s(28,!1));i.push(t)}function c(t){if("function"!=typeof t)throw Error(s(29,!1));var n=!1;return i=i.filter((function(e){var r=e===t;return n=n||r,!r})),n}function s(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];return"single-spa minified message #".concat(t,": ").concat(n?n+" ":"","See https://single-spa.js.org/error/?code=").concat(t).concat(r.length?"&arg=".concat(r.join("&arg=")):"")}function f(t,n,e){var r,o="".concat(S(n)," '").concat(A(n),"' died in status ").concat(n.status,": ");if(t instanceof Error){try{t.message=o+t.message}catch(t){}r=t}else{console.warn(s(30,!1,n.status,A(n)));try{r=Error(o+JSON.stringify(t))}catch(n){r=t}}return r.appOrParcelName=A(n),n.status=e,r}var l="NOT_LOADED",p="LOADING_SOURCE_CODE",h="NOT_BOOTSTRAPPED",m="BOOTSTRAPPING",v="NOT_MOUNTED",d="MOUNTING",w="MOUNTED",g="UPDATING",E="UNMOUNTING",y="UNLOADING",P="LOAD_ERROR",O="SKIP_BECAUSE_BROKEN";function b(t){return t.status===w}function T(t){try{return t.activeWhen(window.location)}catch(n){return u(n,t,O),!1}}function A(t){return t.name}function N(t){return Boolean(t.unmountThisParcel)}function S(t){return N(t)?"parcel":"application"}function _(){for(var t=arguments.length-1;t>0;t--)for(var n in arguments[t])"__proto__"!==n&&(arguments[t-1][n]=arguments[t][n]);return arguments[0]}function D(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return t[e];return null}function U(t){return t&&("function"==typeof t||(n=t,Array.isArray(n)&&!D(n,(function(t){return"function"!=typeof t}))));var n}function j(t,n){var e=t[n]||[];0===(e=Array.isArray(e)?e:[e]).length&&(e=[function(){return Promise.resolve()}]);var r=S(t),o=A(t);return function(t){return e.reduce((function(e,i,u){return e.then((function(){var e=i(t);return M(e)?e:Promise.reject(s(15,!1,r,o,n,u))}))}),Promise.resolve())}}function M(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}function L(t,n){return Promise.resolve().then((function(){return t.status!==h?t:(t.status=m,t.bootstrap?q(t,"bootstrap").then(e).catch((function(e){if(n)throw f(e,t,O);return u(e,t,O),t})):Promise.resolve().then(e))}));function e(){return t.status=v,t}}function R(t,n){return Promise.resolve().then((function(){if(t.status!==w)return t;t.status=E;var e=Object.keys(t.parcels).map((function(n){return t.parcels[n].unmountThisParcel()}));return Promise.all(e).then(r,(function(e){return r().then((function(){var r=Error(e.message);if(n)throw f(r,t,O);u(r,t,O)}))})).then((function(){return t}));function r(){return q(t,"unmount").then((function(){t.status=v})).catch((function(e){if(n)throw f(e,t,O);u(e,t,O)}))}}))}var I=!1,x=!1;function B(t,n){return Promise.resolve().then((function(){return t.status!==v?t:(I||(window.dispatchEvent(new o("single-spa:before-first-mount")),I=!0),q(t,"mount").then((function(){return t.status=w,x||(window.dispatchEvent(new o("single-spa:first-mount")),x=!0),t})).catch((function(e){return t.status=w,R(t,!0).then(r,r);function r(){if(n)throw f(e,t,O);return u(e,t,O),t}})))}))}var G=0,C={parcels:{}};function W(){return $.apply(C,arguments)}function $(t,e){var r=this;if(!t||"object"!==n(t)&&"function"!=typeof t)throw Error(s(2,!1));if(t.name&&"string"!=typeof t.name)throw Error(s(3,!1,n(t.name)));if("object"!==n(e))throw Error(s(4,!1,name,n(e)));if(!e.domElement)throw Error(s(5,!1,name));var o,i=G++,u="function"==typeof t,a=u?t:function(){return Promise.resolve(t)},c={id:i,parcels:{},status:u?p:h,customProps:e,parentName:A(r),unmountThisParcel:function(){return y.then((function(){if(c.status!==w)throw Error(s(6,!1,name,c.status));return R(c,!0)})).then((function(t){return c.parentName&&delete r.parcels[c.id],t})).then((function(t){return m(t),t})).catch((function(t){throw c.status=O,d(t),t}))}};r.parcels[i]=c;var l=a();if(!l||"function"!=typeof l.then)throw Error(s(7,!1));var m,d,E=(l=l.then((function(t){if(!t)throw Error(s(8,!1));var n=t.name||"parcel-".concat(i);if(Object.prototype.hasOwnProperty.call(t,"bootstrap")&&!U(t.bootstrap))throw Error(s(9,!1,n));if(!U(t.mount))throw Error(s(10,!1,n));if(!U(t.unmount))throw Error(s(11,!1,n));if(t.update&&!U(t.update))throw Error(s(12,!1,n));var e=j(t,"bootstrap"),r=j(t,"mount"),u=j(t,"unmount");c.status=h,c.name=n,c.bootstrap=e,c.mount=r,c.unmount=u,c.timeouts=z(t.timeouts),t.update&&(c.update=j(t,"update"),o.update=function(t){return c.customProps=t,k(function(t){return Promise.resolve().then((function(){if(t.status!==w)throw Error(s(32,!1,A(t)));return t.status=g,q(t,"update").then((function(){return t.status=w,t})).catch((function(n){throw f(n,t,O)}))}))}(c))})}))).then((function(){return L(c,!0)})),y=E.then((function(){return B(c,!0)})),P=new Promise((function(t,n){m=t,d=n}));return o={mount:function(){return k(Promise.resolve().then((function(){if(c.status!==v)throw Error(s(13,!1,name,c.status));return r.parcels[i]=c,B(c)})))},unmount:function(){return k(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:k(l),bootstrapPromise:k(E),mountPromise:k(y),unmountPromise:k(P)}}function k(t){return t.then((function(){return null}))}function K(e){var r=A(e),o="function"==typeof e.customProps?e.customProps(r,window.location):e.customProps;("object"!==n(o)||null===o||Array.isArray(o))&&(o={},console.warn(s(40,!1),r,o));var i=_({},o,{name:r,mountParcel:$.bind(e),singleSpa:t});return N(e)&&(i.unmountSelf=e.unmountThisParcel),i}var F={bootstrap:{millis:4e3,dieOnTimeout:!1,warningMillis:1e3},mount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unmount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unload:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},update:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3}};function J(t,n,e){if("number"!=typeof t||t<=0)throw Error(s(16,!1));F.bootstrap={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function H(t,n,e){if("number"!=typeof t||t<=0)throw Error(s(17,!1));F.mount={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function Q(t,n,e){if("number"!=typeof t||t<=0)throw Error(s(18,!1));F.unmount={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function V(t,n,e){if("number"!=typeof t||t<=0)throw Error(s(19,!1));F.unload={millis:t,dieOnTimeout:n,warningMillis:e||1e3}}function q(t,n){var e=t.timeouts[n],r=e.warningMillis,o=S(t);return new Promise((function(i,u){var a=!1,c=!1;t[n](K(t)).then((function(t){a=!0,i(t)})).catch((function(t){a=!0,u(t)})),setTimeout((function(){return l(1)}),r),setTimeout((function(){return l(!0)}),e.millis);var f=s(31,!1,n,o,A(t),e.millis);function l(t){if(!a)if(!0===t)c=!0,e.dieOnTimeout?u(Error(f)):console.error(f);else if(!c){var n=t,o=n*r;console.warn(f),o+r<e.millis&&setTimeout((function(){return l(n+1)}),r)}}}))}function z(t){var n={};for(var e in F)n[e]=_({},F[e],t&&t[e]||{});return n}function X(t){return Promise.resolve().then((function(){return t.loadPromise?t.loadPromise:t.status!==l&&t.status!==P?t:(t.status=p,t.loadPromise=Promise.resolve().then((function(){var o=t.loadApp(K(t));if(!M(o))throw r=!0,Error(s(33,!1,A(t)));return o.then((function(r){var o;t.loadErrorTime=null,"object"!==n(e=r)&&(o=34),Object.prototype.hasOwnProperty.call(e,"bootstrap")&&!U(e.bootstrap)&&(o=35),U(e.mount)||(o=36),U(e.unmount)||(o=37);var i=S(e);if(o){var a;try{a=JSON.stringify(e)}catch(t){}return console.error(s(o,!1,i,A(t),a),e),u(void 0,t,O),t}return e.devtools&&e.devtools.overlays&&(t.devtools.overlays=_({},t.devtools.overlays,e.devtools.overlays)),t.status=h,t.bootstrap=j(e,"bootstrap"),t.mount=j(e,"mount"),t.unmount=j(e,"unmount"),t.unload=j(e,"unload"),t.timeouts=z(e.timeouts),delete t.loadPromise,t}))})).catch((function(n){var e;return delete t.loadPromise,r?e=O:(e=P,t.loadErrorTime=(new Date).getTime()),u(n,t,e),t})));var e,r}))}var Y,Z="undefined"!=typeof window,tt={hashchange:[],popstate:[]},nt=["hashchange","popstate"];function et(t){var n;if("string"==typeof t)n=t;else if(this&&this.href)n=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error(s(14,!1));n=t.currentTarget.href,t.preventDefault()}var e=st(window.location.href),r=st(n);0===n.indexOf("#")?window.location.hash=r.hash:e.host!==r.host&&r.host?window.location.href=n:r.pathname===e.pathname&&r.search===e.search?window.location.hash=r.hash:window.history.pushState(null,null,n)}function rt(t){var n=this;if(t){var e=t[0].type;nt.indexOf(e)>=0&&tt[e].forEach((function(e){try{e.apply(n,t)}catch(t){setTimeout((function(){throw t}))}}))}}function ot(){Rt([],arguments)}function it(t,n){return function(){var e=window.location.href,r=t.apply(this,arguments),o=window.location.href;return Y&&e===o||(Gt()?window.dispatchEvent(ut(window.history.state,n)):Rt([])),r}}function ut(t,n){var e;try{e=new PopStateEvent("popstate",{state:t})}catch(n){(e=document.createEvent("PopStateEvent")).initPopStateEvent("popstate",!1,!1,t)}return e.singleSpa=!0,e.singleSpaTrigger=n,e}if(Z){window.addEventListener("hashchange",ot),window.addEventListener("popstate",ot);var at=window.addEventListener,ct=window.removeEventListener;window.addEventListener=function(t,n){if(!("function"==typeof n&&nt.indexOf(t)>=0)||D(tt[t],(function(t){return t===n})))return at.apply(this,arguments);tt[t].push(n)},window.removeEventListener=function(t,n){if(!("function"==typeof n&&nt.indexOf(t)>=0))return ct.apply(this,arguments);tt[t]=tt[t].filter((function(t){return t!==n}))},window.history.pushState=it(window.history.pushState,"pushState"),window.history.replaceState=it(window.history.replaceState,"replaceState"),window.singleSpaNavigate?console.warn(s(41,!1)):window.singleSpaNavigate=et}function st(t){var n=document.createElement("a");return n.href=t,n}var ft=!1;function lt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!ft){var n=t.fn.on,e=t.fn.off;t.fn.on=function(t,e){return pt.call(this,n,window.addEventListener,t,e,arguments)},t.fn.off=function(t,n){return pt.call(this,e,window.removeEventListener,t,n,arguments)},ft=!0}}function pt(t,n,e,r,o){return"string"!=typeof e?t.apply(this,o):(e.split(/\s+/).forEach((function(t){nt.indexOf(t)>=0&&(n(t,r),e=e.replace(t,""))})),""===e.trim()?this:t.apply(this,o))}var ht={};function mt(t){return Promise.resolve().then((function(){var n=ht[A(t)];if(!n)return t;if(t.status===l)return vt(t,n),t;if(t.status===y)return n.promise.then((function(){return t}));if(t.status!==v&&t.status!==P)return t;var e=t.status===P?Promise.resolve():q(t,"unload");return t.status=y,e.then((function(){return vt(t,n),t})).catch((function(e){return function(t,n,e){delete ht[A(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,u(e,t,O),n.reject(e)}(t,n,e),t}))}))}function vt(t,n){delete ht[A(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=l,n.resolve()}function dt(t,n,e,r){ht[A(t)]={app:t,resolve:e,reject:r},Object.defineProperty(ht[A(t)],"promise",{get:n})}function wt(t){return ht[t]}var gt=[];function Et(){var t=[],n=[],e=[],r=[],o=(new Date).getTime();return gt.forEach((function(i){var u=i.status!==O&&T(i);switch(i.status){case P:u&&o-i.loadErrorTime>=200&&e.push(i);break;case l:case p:u&&e.push(i);break;case h:case v:!u&&wt(A(i))?t.push(i):u&&r.push(i);break;case w:u||n.push(i)}})),{appsToUnload:t,appsToUnmount:n,appsToLoad:e,appsToMount:r}}function yt(){return gt.filter(b).map(A)}function Pt(){return gt.map(A)}function Ot(t){var n=D(gt,(function(n){return A(n)===t}));return n?n.status:null}function bt(t,e,r,o){var i=function(t,e,r,o){var i,u={name:null,loadApp:null,activeWhen:null,customProps:null};return"object"===n(t)?(function(t){if(Array.isArray(t)||null===t)throw Error(s(39,!1));var e=["name","app","activeWhen","customProps"],r=Object.keys(t).reduce((function(t,n){return e.indexOf(n)>=0?t:t.concat(n)}),[]);if(0!==r.length)throw Error(s(38,!1,e.join(", "),r.join(", ")));if("string"!=typeof t.name||0===t.name.length)throw Error(s(20,!1));if("object"!==n(t.app)&&"function"!=typeof t.app)throw Error(s(20,!1));var o=function(t){return"string"==typeof t||"function"==typeof t};if(!(o(t.activeWhen)||Array.isArray(t.activeWhen)&&t.activeWhen.every(o)))throw Error(s(24,!1));if(!_t(t.customProps))throw Error(s(22,!1))}(t),u.name=t.name,u.loadApp=t.app,u.activeWhen=t.activeWhen,u.customProps=t.customProps):(function(t,n,e,r){if("string"!=typeof t||0===t.length)throw Error(s(20,!1));if(!n)throw Error(s(23,!1));if("function"!=typeof e)throw Error(s(24,!1));if(!_t(r))throw Error(s(22,!1))}(t,e,r,o),u.name=t,u.loadApp=e,u.activeWhen=r,u.customProps=o),u.loadApp="function"!=typeof(i=u.loadApp)?function(){return Promise.resolve(i)}:i,u.customProps=function(t){return t||{}}(u.customProps),u.activeWhen=function(t){var n=Array.isArray(t)?t:[t];return n=n.map((function(t){return"function"==typeof t?t:Dt(t)})),function(t){return n.some((function(n){return n(t)}))}}(u.activeWhen),u}(t,e,r,o);if(-1!==Pt().indexOf(i.name))throw Error(s(21,!1,i.name));gt.push(_({loadErrorTime:null,status:l,parcels:{},devtools:{overlays:{options:{},selectors:[]}}},i)),Z&&(lt(),Rt())}function Tt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location;return gt.filter((function(n){return n.activeWhen(t)})).map(A)}function At(t){if(0===gt.filter((function(n){return A(n)===t})).length)throw Error(s(25,!1,t));return Nt(t).then((function(){var n=gt.map(A).indexOf(t);gt.splice(n,1)}))}function Nt(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw Error(s(26,!1));var e=D(gt,(function(n){return A(n)===t}));if(!e)throw Error(s(27,!1,t));var r,o=wt(A(e));if(n&&n.waitForUnmount){if(o)return o.promise;var i=new Promise((function(t,n){dt(e,(function(){return i}),t,n)}));return i}return o?(r=o.promise,St(e,o.resolve,o.reject)):r=new Promise((function(t,n){dt(e,(function(){return r}),t,n),St(e,t,n)})),r}function St(t,n,e){R(t).then(mt).then((function(){n(),setTimeout((function(){Rt()}))})).catch(e)}function _t(t){return!t||"function"==typeof t||"object"===n(t)&&null!==t&&!Array.isArray(t)}function Dt(t,n){var e=function(t,n){var e=0,r=!1,o="^";"/"!==t[0]&&(t="/"+t);for(var i=0;i<t.length;i++){var u=t[i];(!r&&":"===u||r&&"/"===u)&&a(i)}return a(t.length),new RegExp(o,"i");function a(i){var u=t.slice(e,i).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");if(o+=r?"[^/]+/?":u,i===t.length)if(r)n&&(o+="$");else{var a=n?"":".*";o="/"===o.charAt(o.length-1)?"".concat(o).concat(a,"$"):"".concat(o,"(/").concat(a,")?(#.*)?$")}r=!r,e=i}}(t,n);return function(t){var n=t.origin;n||(n="".concat(t.protocol,"//").concat(t.host));var r=t.href.replace(n,"").replace(t.search,"").split("?")[0];return e.test(r)}}var Ut=!1,jt=[],Mt=Z&&window.location.href;function Lt(){return Rt()}function Rt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(Ut)return new Promise((function(t,e){jt.push({resolve:t,reject:e,eventArguments:n})}));var r,i=Et(),u=i.appsToUnload,a=i.appsToUnmount,c=i.appsToLoad,s=i.appsToMount,f=!1,p=Mt,h=Mt=window.location.href;return Gt()?(Ut=!0,r=u.concat(c,a,s),g()):(r=c,d());function m(){f=!0}function d(){return Promise.resolve().then((function(){var t=c.map(X);return Promise.all(t).then(y).then((function(){return[]})).catch((function(t){throw y(),t}))}))}function g(){return Promise.resolve().then((function(){if(window.dispatchEvent(new o(0===r.length?"single-spa:before-no-app-change":"single-spa:before-app-change",P(!0))),window.dispatchEvent(new o("single-spa:before-routing-event",P(!0,{cancelNavigation:m}))),f)return window.dispatchEvent(new o("single-spa:before-mount-routing-event",P(!0))),E(),void et(p);var n=u.map(mt),e=a.map(R).map((function(t){return t.then(mt)})).concat(n),i=Promise.all(e);i.then((function(){window.dispatchEvent(new o("single-spa:before-mount-routing-event",P(!0)))}));var l=c.map((function(t){return X(t).then((function(t){return It(t,i)}))})),h=s.filter((function(t){return c.indexOf(t)<0})).map((function(t){return It(t,i)}));return i.catch((function(t){throw y(),t})).then((function(){return y(),Promise.all(l.concat(h)).catch((function(n){throw t.forEach((function(t){return t.reject(n)})),n})).then(E)}))}))}function E(){var n=yt();t.forEach((function(t){return t.resolve(n)}));try{var e=0===r.length?"single-spa:no-app-change":"single-spa:app-change";window.dispatchEvent(new o(e,P())),window.dispatchEvent(new o("single-spa:routing-event",P()))}catch(t){setTimeout((function(){throw t}))}if(Ut=!1,jt.length>0){var i=jt;jt=[],Rt(i)}return n}function y(){t.forEach((function(t){rt(t.eventArguments)})),rt(n)}function P(){var t,o=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=arguments.length>1?arguments[1]:void 0,m={},d=(e(t={},w,[]),e(t,v,[]),e(t,l,[]),e(t,O,[]),t);o?(c.concat(s).forEach((function(t,n){E(t,w)})),u.forEach((function(t){E(t,l)})),a.forEach((function(t){E(t,v)}))):r.forEach((function(t){E(t)}));var g={detail:{newAppStatuses:m,appsByNewStatus:d,totalAppChanges:r.length,originalEvent:null==n?void 0:n[0],oldUrl:p,newUrl:h,navigationIsCanceled:f}};return i&&_(g.detail,i),g;function E(t,n){var e=A(t);n=n||Ot(e),m[e]=n,(d[n]=d[n]||[]).push(e)}}}function It(t,n){return T(t)?L(t).then((function(t){return n.then((function(){return T(t)?B(t):t}))})):n.then((function(){return t}))}var xt=!1;function Bt(t){var n;xt=!0,t&&t.urlRerouteOnly&&(n=t.urlRerouteOnly,Y=n),Z&&Rt()}function Gt(){return xt}Z&&setTimeout((function(){xt||console.warn(s(1,!1))}),5e3);var Ct={getRawAppData:function(){return[].concat(gt)},reroute:Rt,NOT_LOADED:l,toLoadPromise:X,toBootstrapPromise:L,unregisterApplication:At};Z&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=Ct);
//# sourceMappingURL=single-spa.min.js.map

;// CONCATENATED MODULE: ./node_modules/single-spa-layout/node_modules/single-spa/lib/es2015/esm/single-spa.min.js
/* single-spa@6.0.0-beta.3 - ES2015 - prod */
var single_spa_min_t=Object.freeze({__proto__:null,get start(){return single_spa_min_xt},get ensureJQuerySupport(){return single_spa_min_lt},get setBootstrapMaxTime(){return single_spa_min_F},get setMountMaxTime(){return single_spa_min_K},get setUnmountMaxTime(){return single_spa_min_H},get setUnloadMaxTime(){return single_spa_min_J},get registerApplication(){return single_spa_min_Ot},get unregisterApplication(){return single_spa_min_bt},get getMountedApps(){return single_spa_min_yt},get getAppStatus(){return single_spa_min_vt},get unloadApplication(){return single_spa_min_At},get checkActivityFunctions(){return single_spa_min_Tt},get getAppNames(){return single_spa_min_Et},get pathToActiveWhen(){return esm_single_spa_min_t},get navigateToUrl(){return single_spa_min_Z},get patchHistoryApi(){return single_spa_min_ut},get triggerAppChange(){return single_spa_min_jt},get addErrorHandler(){return single_spa_min_i},get removeErrorHandler(){return single_spa_min_s},get mountRootParcel(){return single_spa_min_B},get NOT_LOADED(){return single_spa_min_c},get LOADING_SOURCE_CODE(){return single_spa_min_l},get NOT_BOOTSTRAPPED(){return single_spa_min_f},get BOOTSTRAPPING(){return single_spa_min_p},get NOT_MOUNTED(){return single_spa_min_h},get MOUNTING(){return single_spa_min_m},get UPDATING(){return single_spa_min_w},get LOAD_ERROR(){return single_spa_min_y},get MOUNTED(){return single_spa_min_d},get UNMOUNTING(){return single_spa_min_g},get SKIP_BECAUSE_BROKEN(){return single_spa_min_E}}),single_spa_min_e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{}).CustomEvent,single_spa_min_n=function(){try{var t=new single_spa_min_e("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?single_spa_min_e:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,e){var n=document.createEvent("CustomEvent");return e?n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail):n.initCustomEvent(t,!1,!1,void 0),n}:function(t,e){var n=document.createEventObject();return n.type=t,e?(n.bubbles=Boolean(e.bubbles),n.cancelable=Boolean(e.cancelable),n.detail=e.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n};let single_spa_min_r=[];function single_spa_min_o(t,e,n){const o=single_spa_min_a(t,e,n);single_spa_min_r.length?single_spa_min_r.forEach((t=>t(o))):setTimeout((()=>{throw o}))}function single_spa_min_i(t){if("function"!=typeof t)throw Error(single_spa_min_u(28,!1));single_spa_min_r.push(t)}function single_spa_min_s(t){if("function"!=typeof t)throw Error(single_spa_min_u(29,!1));let e=!1;return single_spa_min_r=single_spa_min_r.filter((n=>{const r=n===t;return e=e||r,!r})),e}function single_spa_min_u(t,e,...n){return`single-spa minified message #${t}: ${e?e+" ":""}See https://single-spa.js.org/error/?code=${t}${n.length?`&arg=${n.join("&arg=")}`:""}`}function single_spa_min_a(t,e,n){const r=`${single_spa_min_b(e)} '${single_spa_min_O(e)}' died in status ${e.status}: `;let o;if(t instanceof Error){try{t.message=r+t.message}catch(t){}o=t}else{console.warn(single_spa_min_u(30,!1,e.status,single_spa_min_O(e)));try{o=Error(r+JSON.stringify(t))}catch(e){o=t}}return o.appOrParcelName=single_spa_min_O(e),e.status=n,o}const single_spa_min_c="NOT_LOADED",single_spa_min_l="LOADING_SOURCE_CODE",single_spa_min_f="NOT_BOOTSTRAPPED",single_spa_min_p="BOOTSTRAPPING",single_spa_min_h="NOT_MOUNTED",single_spa_min_m="MOUNTING",single_spa_min_d="MOUNTED",single_spa_min_w="UPDATING",single_spa_min_g="UNMOUNTING",single_spa_min_y="LOAD_ERROR",single_spa_min_E="SKIP_BECAUSE_BROKEN";function single_spa_min_v(t){return t.status===single_spa_min_d}function single_spa_min_P(t){try{return t.activeWhen(window.location)}catch(e){return single_spa_min_o(e,t,single_spa_min_E),!1}}function single_spa_min_O(t){return t.name}function single_spa_min_T(t){return Boolean(t.unmountThisParcel)}function single_spa_min_b(t){return single_spa_min_T(t)?"parcel":"application"}function single_spa_min_A(){for(let t=arguments.length-1;t>0;t--)for(let e in arguments[t])"__proto__"!==e&&(arguments[t-1][e]=arguments[t][e]);return arguments[0]}function single_spa_min_N(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return t[n];return null}function single_spa_min_S(t){return t&&("function"==typeof t||(e=t,Array.isArray(e)&&!single_spa_min_N(e,(t=>"function"!=typeof t))));var e}function single_spa_min_(t,e){let n=t[e]||[];n=Array.isArray(n)?n:[n],0===n.length&&(n=[()=>Promise.resolve()]);const r=single_spa_min_b(t),o=single_spa_min_O(t);return function(t){return n.reduce(((n,i,s)=>n.then((()=>{const n=i(t);return single_spa_min_D(n)?n:Promise.reject(single_spa_min_u(15,!1,r,o,e,s))}))),Promise.resolve())}}function single_spa_min_D(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}let single_spa_min_U=[];function single_spa_min_M(t,e){return Promise.resolve().then((()=>t.status!==single_spa_min_f?t:(t.status=single_spa_min_p,t.bootstrap?single_spa_min_Q(t,"bootstrap").then(n).catch((n=>{if(e)throw single_spa_min_a(n,t,single_spa_min_E);return single_spa_min_o(n,t,single_spa_min_E),t})):Promise.resolve().then(n))));function n(){return t.status=single_spa_min_h,t}}function single_spa_min_j(t,e){return Promise.resolve().then((()=>{if(t.status!==single_spa_min_d)return t;t.status=single_spa_min_g;const n=Object.keys(t.parcels).map((e=>t.parcels[e].unmountThisParcel()));return Promise.all(n).then(r,(n=>r().then((()=>{const r=Error(n.message);if(e)throw single_spa_min_a(r,t,single_spa_min_E);single_spa_min_o(r,t,single_spa_min_E)})))).then((()=>t));function r(){return single_spa_min_Q(t,"unmount").then((()=>{t.status=single_spa_min_h}),(n=>{if(e)throw single_spa_min_a(n,t,single_spa_min_E);single_spa_min_o(n,t,single_spa_min_E)}))}}))}let single_spa_min_$=!1,single_spa_min_L=!1;function single_spa_min_R(t,e){return Promise.resolve().then((()=>t.status!==single_spa_min_h?t:(single_spa_min_$||(window.dispatchEvent(new single_spa_min_n("single-spa:before-first-mount")),single_spa_min_$=!0),t.status=single_spa_min_m,single_spa_min_Q(t,"mount").then((()=>(t.status=single_spa_min_d,single_spa_min_L||(window.dispatchEvent(new single_spa_min_n("single-spa:first-mount")),single_spa_min_L=!0),t))).catch((n=>{return t.status=single_spa_min_d,single_spa_min_j(t,!0).then(r,r);function r(){if(e)throw single_spa_min_a(n,t,single_spa_min_E);return single_spa_min_o(n,t,single_spa_min_E),t}})))))}let single_spa_min_x=0;const single_spa_min_I={parcels:{}};function single_spa_min_B(){return single_spa_min_G.apply(single_spa_min_I,arguments)}function single_spa_min_G(t,e){const n=this;if(!t||"object"!=typeof t&&"function"!=typeof t)throw Error(single_spa_min_u(2,!1));if(t.name&&"string"!=typeof t.name)throw Error(single_spa_min_u(3,!1,typeof t.name));const r=single_spa_min_x++;let o=t.name||`parcel-${r}`;if("object"!=typeof e)throw Error(single_spa_min_u(4,!1,o,typeof e));if(!e.domElement)throw Error(single_spa_min_u(5,!1,o));const i="function"==typeof t,s=i?t:()=>Promise.resolve(t),c={id:r,parcels:{},status:i?single_spa_min_l:single_spa_min_f,customProps:e,parentName:single_spa_min_O(n),unmountThisParcel:()=>y.then((()=>{if(c.status!==single_spa_min_d)throw Error(single_spa_min_u(6,!1,o,c.status));return single_spa_min_j(c,!0)})).then((t=>(c.parentName&&delete n.parcels[c.id],t))).then((t=>(v(t),t))).catch((t=>{throw c.status=single_spa_min_E,P(t),t}))};let p;n.parcels[r]=c;let m=s();if(!m||"function"!=typeof m.then)throw Error(single_spa_min_u(7,!1));m=m.then((t=>{if(!t)throw Error(single_spa_min_u(8,!1));if(o=t.name||`parcel-${r}`,Object.prototype.hasOwnProperty.call(t,"bootstrap")&&!single_spa_min_S(t.bootstrap))throw Error(single_spa_min_u(9,!1,o));if(!single_spa_min_S(t.mount))throw Error(single_spa_min_u(10,!1,o));if(!single_spa_min_S(t.unmount))throw Error(single_spa_min_u(11,!1,o));if(t.update&&!single_spa_min_S(t.update))throw Error(single_spa_min_u(12,!1,o));const e=single_spa_min_(t,"bootstrap"),n=single_spa_min_(t,"mount"),i=single_spa_min_(t,"unmount");c.status=single_spa_min_f,c.name=o,c.bootstrap=e,c.mount=n,c.unmount=i,c.timeouts=single_spa_min_V(t.timeouts),t.update&&(c.update=single_spa_min_(t,"update"),p.update=function(t){return c.customProps=t,single_spa_min_W((e=c,Promise.resolve().then((()=>{if(e.status!==single_spa_min_d)throw Error(single_spa_min_u(32,!1,single_spa_min_O(e)));return e.status=single_spa_min_w,single_spa_min_Q(e,"update").then((()=>(e.status=single_spa_min_d,e))).catch((t=>{throw single_spa_min_a(t,e,single_spa_min_E)}))}))));var e})}));const g=m.then((()=>single_spa_min_M(c,!0))),y=g.then((()=>single_spa_min_R(c,!0)));let v,P;const T=new Promise(((t,e)=>{v=t,P=e}));return p={mount:()=>single_spa_min_W(Promise.resolve().then((()=>{if(c.status!==single_spa_min_h)throw Error(single_spa_min_u(13,!1,o,c.status));return n.parcels[r]=c,single_spa_min_R(c)}))),unmount:()=>single_spa_min_W(c.unmountThisParcel()),getStatus:()=>c.status,loadPromise:single_spa_min_W(m),bootstrapPromise:single_spa_min_W(g),mountPromise:single_spa_min_W(y),unmountPromise:single_spa_min_W(T)},p}function single_spa_min_W(t){return t.then((()=>null))}function single_spa_min_C(e){const n=single_spa_min_O(e);let r="function"==typeof e.customProps?e.customProps(n,window.location):e.customProps;("object"!=typeof r||null===r||Array.isArray(r))&&(r={},console.warn(single_spa_min_u(40,!1),n,r));const o=single_spa_min_A({},r,{name:n,mountParcel:single_spa_min_G.bind(e),singleSpa:single_spa_min_t});return single_spa_min_T(e)&&(o.unmountSelf=e.unmountThisParcel),o}const single_spa_min_k={bootstrap:{millis:4e3,dieOnTimeout:!1,warningMillis:1e3},mount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unmount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unload:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},update:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3}};function single_spa_min_F(t,e,n){if("number"!=typeof t||t<=0)throw Error(single_spa_min_u(16,!1));single_spa_min_k.bootstrap={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function single_spa_min_K(t,e,n){if("number"!=typeof t||t<=0)throw Error(single_spa_min_u(17,!1));single_spa_min_k.mount={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function single_spa_min_H(t,e,n){if("number"!=typeof t||t<=0)throw Error(single_spa_min_u(18,!1));single_spa_min_k.unmount={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function single_spa_min_J(t,e,n){if("number"!=typeof t||t<=0)throw Error(single_spa_min_u(19,!1));single_spa_min_k.unload={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function single_spa_min_Q(t,e){const n=t.timeouts[e],r=n.warningMillis,o=single_spa_min_b(t);return new Promise(((i,s)=>{let a=!1,c=!1;t[e](single_spa_min_C(t)).then((t=>{a=!0,i(t)})).catch((t=>{a=!0,s(t)})),setTimeout((()=>f(1)),r),setTimeout((()=>f(!0)),n.millis);const l=single_spa_min_u(31,!1,e,o,single_spa_min_O(t),n.millis);function f(t){if(!a)if(!0===t)c=!0,n.dieOnTimeout?s(Error(l)):console.error(l);else if(!c){const e=t,o=e*r;console.warn(l),o+r<n.millis&&setTimeout((()=>f(e+1)),r)}}}))}function single_spa_min_V(t){const e={};for(let n in single_spa_min_k)e[n]=single_spa_min_A({},single_spa_min_k[n],t&&t[n]||{});return e}function single_spa_min_q(t){return Promise.resolve().then((()=>{if(t.loadPromise)return t.loadPromise;if(t.status!==single_spa_min_c&&t.status!==single_spa_min_y)return t;let e,n;return t.status=single_spa_min_l,t.loadPromise=Promise.resolve().then((()=>{const r=t.loadApp(single_spa_min_C(t));if(!single_spa_min_D(r))throw n=!0,Error(single_spa_min_u(33,!1,single_spa_min_O(t)));return r.then((n=>{let r;t.loadErrorTime=null,e=n,"object"!=typeof e&&(r=34),Object.prototype.hasOwnProperty.call(e,"bootstrap")&&!single_spa_min_S(e.bootstrap)&&(r=35),single_spa_min_S(e.mount)||(r=36),single_spa_min_S(e.unmount)||(r=37);const i=single_spa_min_b(e);if(r){let n;try{n=JSON.stringify(e)}catch(t){}return console.error(single_spa_min_u(r,!1,i,single_spa_min_O(t),n),e),single_spa_min_o(void 0,t,single_spa_min_E),t}return e.devtools&&e.devtools.overlays&&(t.devtools.overlays=single_spa_min_A({},t.devtools.overlays,e.devtools.overlays)),t.status=single_spa_min_f,t.bootstrap=single_spa_min_(e,"bootstrap"),t.mount=single_spa_min_(e,"mount"),t.unmount=single_spa_min_(e,"unmount"),t.unload=single_spa_min_(e,"unload"),t.timeouts=single_spa_min_V(e.timeouts),delete t.loadPromise,t}))})).catch((e=>{let r;return delete t.loadPromise,n?r=single_spa_min_E:(r=single_spa_min_y,t.loadErrorTime=(new Date).getTime()),single_spa_min_o(e,t,r),t}))}))}const single_spa_min_z="undefined"!=typeof window,single_spa_min_X={hashchange:[],popstate:[]},single_spa_min_Y=["hashchange","popstate"];function single_spa_min_Z(t){let e;if("string"==typeof t)e=t;else if(this&&this.href)e=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error(single_spa_min_u(14,!1));e=t.currentTarget.href,t.preventDefault()}const n=single_spa_min_at(window.location.href),r=single_spa_min_at(e);0===e.indexOf("#")?window.location.hash=r.hash:n.host!==r.host&&r.host?window.location.href=e:r.pathname===n.pathname&&r.search===n.search?window.location.hash=r.hash:window.history.pushState(null,null,e)}function single_spa_min_tt(t){if(t){const e=t[0].type;single_spa_min_Y.indexOf(e)>=0&&single_spa_min_X[e].forEach((e=>{try{e.apply(this,t)}catch(t){setTimeout((()=>{throw t}))}}))}}let single_spa_min_et;function single_spa_min_nt(){$t([],arguments)}function single_spa_min_rt(t,e){return function(){const n=window.location.href,r=t.apply(this,arguments),o=window.location.href;return single_spa_min_et&&n===o||window.dispatchEvent(single_spa_min_ot(window.history.state,e)),r}}function single_spa_min_ot(t,e){let n;try{n=new PopStateEvent("popstate",{state:t})}catch(e){n=document.createEvent("PopStateEvent"),n.initPopStateEvent("popstate",!1,!1,t)}return n.singleSpa=!0,n.singleSpaTrigger=e,n}let single_spa_min_it=null,single_spa_min_st=!1;function single_spa_min_ut(t){if(single_spa_min_st)throw Error(single_spa_min_u(43,!1));single_spa_min_et=!t||!t.hasOwnProperty("urlRerouteOnly")||t.urlRerouteOnly,single_spa_min_st=!0,single_spa_min_it=window.history.replaceState,window.addEventListener("hashchange",single_spa_min_nt),window.addEventListener("popstate",single_spa_min_nt);const e=window.addEventListener,n=window.removeEventListener;window.addEventListener=function(t,n){if(!("function"==typeof n&&single_spa_min_Y.indexOf(t)>=0)||single_spa_min_N(single_spa_min_X[t],(t=>t===n)))return e.apply(this,arguments);single_spa_min_X[t].push(n)},window.removeEventListener=function(t,e){if(!("function"==typeof e&&single_spa_min_Y.indexOf(t)>=0))return n.apply(this,arguments);single_spa_min_X[t]=single_spa_min_X[t].filter((t=>t!==e))},window.history.pushState=single_spa_min_rt(window.history.pushState,"pushState"),window.history.replaceState=single_spa_min_rt(single_spa_min_it,"replaceState")}function single_spa_min_at(t){const e=document.createElement("a");return e.href=t,e}single_spa_min_z&&(window.singleSpaNavigate?console.warn(single_spa_min_u(41,!1)):window.singleSpaNavigate=single_spa_min_Z);let single_spa_min_ct=!1;function single_spa_min_lt(t=window.jQuery){if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!single_spa_min_ct){const e=t.fn.on,n=t.fn.off;t.fn.on=function(t,n){return single_spa_min_ft.call(this,e,window.addEventListener,t,n,arguments)},t.fn.off=function(t,e){return single_spa_min_ft.call(this,n,window.removeEventListener,t,e,arguments)},single_spa_min_ct=!0}}function single_spa_min_ft(t,e,n,r,o){return"string"!=typeof n?t.apply(this,o):(n.split(/\s+/).forEach((t=>{single_spa_min_Y.indexOf(t)>=0&&(e(t,r),n=n.replace(t,""))})),""===n.trim()?this:t.apply(this,o))}const single_spa_min_pt={};function single_spa_min_ht(t){return Promise.resolve().then((()=>{const e=single_spa_min_pt[single_spa_min_O(t)];if(!e)return t;if(t.status===single_spa_min_c)return single_spa_min_mt(t,e),t;if("UNLOADING"===t.status)return e.promise.then((()=>t));if(t.status!==single_spa_min_h&&t.status!==single_spa_min_y)return t;const n=t.status===single_spa_min_y?Promise.resolve():single_spa_min_Q(t,"unload");return t.status="UNLOADING",n.then((()=>(single_spa_min_mt(t,e),t))).catch((n=>(function(t,e,n){delete single_spa_min_pt[single_spa_min_O(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,single_spa_min_o(n,t,single_spa_min_E),e.reject(n)}(t,e,n),t)))}))}function single_spa_min_mt(t,e){delete single_spa_min_pt[single_spa_min_O(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=single_spa_min_c,e.resolve()}function single_spa_min_dt(t,e,n,r){single_spa_min_pt[single_spa_min_O(t)]={app:t,resolve:n,reject:r},Object.defineProperty(single_spa_min_pt[single_spa_min_O(t)],"promise",{get:e})}function single_spa_min_wt(t){return single_spa_min_pt[t]}const single_spa_min_gt=[];function single_spa_min_yt(){return single_spa_min_gt.filter(single_spa_min_v).map(single_spa_min_O)}function single_spa_min_Et(){return single_spa_min_gt.map(single_spa_min_O)}function single_spa_min_vt(t){const e=single_spa_min_N(single_spa_min_gt,(e=>single_spa_min_O(e)===t));return e?e.status:null}let single_spa_min_Pt=!1;function single_spa_min_Ot(t,e,n,r){const o=function(t,e,n,r){const o={name:null,loadApp:null,activeWhen:null,customProps:null};return"object"==typeof t?(function(t){if(Array.isArray(t)||null===t)throw Error(single_spa_min_u(39,!1));const e=["name","app","activeWhen","customProps"],n=Object.keys(t).reduce(((t,n)=>e.indexOf(n)>=0?t:t.concat(n)),[]);if(0!==n.length)throw Error(single_spa_min_u(38,!1,e.join(", "),n.join(", ")));if("string"!=typeof t.name||0===t.name.length)throw Error(single_spa_min_u(20,!1));if("object"!=typeof t.app&&"function"!=typeof t.app)throw Error(single_spa_min_u(20,!1));const r=t=>"string"==typeof t||"function"==typeof t;if(!(r(t.activeWhen)||Array.isArray(t.activeWhen)&&t.activeWhen.every(r)))throw Error(single_spa_min_u(24,!1));if(!single_spa_min_St(t.customProps))throw Error(single_spa_min_u(22,!1))}(t),o.name=t.name,o.loadApp=t.app,o.activeWhen=t.activeWhen,o.customProps=t.customProps):(function(t,e,n,r){if("string"!=typeof t||0===t.length)throw Error(single_spa_min_u(20,!1));if(!e)throw Error(single_spa_min_u(23,!1));if("function"!=typeof n)throw Error(single_spa_min_u(24,!1));if(!single_spa_min_St(r))throw Error(single_spa_min_u(22,!1))}(t,e,n,r),o.name=t,o.loadApp=e,o.activeWhen=n,o.customProps=r),o.loadApp="function"!=typeof(i=o.loadApp)?()=>Promise.resolve(i):i,o.customProps=function(t){return t||{}}(o.customProps),o.activeWhen=function(t){let e=Array.isArray(t)?t:[t];return e=e.map((t=>"function"==typeof t?t:esm_single_spa_min_t(t))),t=>e.some((e=>e(t)))}(o.activeWhen),o;var i}(t,e,n,r);if(single_spa_min_It()||single_spa_min_Pt||(single_spa_min_Pt=!0,setTimeout((()=>{single_spa_min_It()||console.warn(single_spa_min_u(1,!1))}),5e3)),-1!==single_spa_min_Et().indexOf(o.name))throw Error(single_spa_min_u(21,!1,o.name));single_spa_min_gt.push(single_spa_min_A({loadErrorTime:null,status:single_spa_min_c,parcels:{},devtools:{overlays:{options:{},selectors:[]}}},o)),single_spa_min_z&&(single_spa_min_lt(),$t())}function single_spa_min_Tt(t=window.location){return single_spa_min_gt.filter((e=>e.activeWhen(t))).map(single_spa_min_O)}function single_spa_min_bt(t){if(0===single_spa_min_gt.filter((e=>single_spa_min_O(e)===t)).length)throw Error(single_spa_min_u(25,!1,t));return single_spa_min_At(t,{waitForUnmount:!1}).then((()=>{const e=single_spa_min_gt.map(single_spa_min_O).indexOf(t);single_spa_min_gt.splice(e,1)}))}function single_spa_min_At(t,e={waitForUnmount:!1}){if("string"!=typeof t)throw Error(single_spa_min_u(26,!1));const n=single_spa_min_N(single_spa_min_gt,(e=>single_spa_min_O(e)===t));if(!n)throw Error(single_spa_min_u(27,!1,t));const r=single_spa_min_wt(single_spa_min_O(n));if(e&&e.waitForUnmount){if(r)return r.promise;{const t=new Promise(((e,r)=>{single_spa_min_dt(n,(()=>t),e,r)}));return t}}{let t;return r?(t=r.promise,single_spa_min_Nt(n,r.resolve,r.reject)):t=new Promise(((e,r)=>{single_spa_min_dt(n,(()=>t),e,r),single_spa_min_Nt(n,e,r)})),t}}function single_spa_min_Nt(t,e,n){Promise.resolve().then((()=>{if(single_spa_min_N(single_spa_min_Tt(),(e=>e===single_spa_min_O(t))))return single_spa_min_jt()})).then((()=>single_spa_min_j(t).then(single_spa_min_ht).then((()=>{e(),setTimeout((()=>{$t()}))})))).catch(n)}function single_spa_min_St(t){return!t||"function"==typeof t||"object"==typeof t&&null!==t&&!Array.isArray(t)}function esm_single_spa_min_t(t,e){const n=function(t,e){let n=0,r=!1,o="^";"/"!==t[0]&&(t="/"+t);for(let e=0;e<t.length;e++){const n=t[e],o=r&&"/"===n;(!r&&":"===n||o)&&i(e)}return i(t.length),new RegExp(o,"i");function i(i){const s=t.slice(n,i).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");if(o+=r?"[^/]+/?":s,i===t.length)if(r)e&&(o+="$");else{const t=e?"":".*";o="/"===o.charAt(o.length-1)?`${o}${t}$`:`${o}(/${t})?(#.*)?$`}r=!r,n=i}}(t,e);return t=>{let e=t.origin;e||(e=`${t.protocol}//${t.host}`);const r=t.href.replace(e,"").replace(t.search,"").split("?")[0];return n.test(r)}}let single_spa_min_Dt=!1,single_spa_min_Ut=[],single_spa_min_Mt=single_spa_min_z&&window.location.href;function single_spa_min_jt(){return $t()}function $t(t=[],e,r=!1){if(single_spa_min_Dt)return new Promise(((t,n)=>{single_spa_min_Ut.push({resolve:t,reject:n,eventArguments:e})}));const{appsToUnload:o,appsToUnmount:i,appsToLoad:s,appsToMount:a}=function(){const t=[],e=[],n=[],r=[],o=(new Date).getTime();return single_spa_min_gt.forEach((i=>{const s=i.status!==single_spa_min_E&&single_spa_min_P(i);switch(i.status){case single_spa_min_y:s&&o-i.loadErrorTime>=200&&n.push(i);break;case single_spa_min_c:case single_spa_min_l:s&&n.push(i);break;case single_spa_min_f:case single_spa_min_h:!s&&single_spa_min_wt(single_spa_min_O(i))?t.push(i):s&&r.push(i);break;case single_spa_min_d:s||e.push(i)}})),{appsToUnload:t,appsToUnmount:e,appsToLoad:n,appsToMount:r}}();let p,m=[],w=single_spa_min_Mt,g=single_spa_min_Mt=window.location.href;return single_spa_min_It()?(single_spa_min_Dt=!0,p=o.concat(s,i,a),Promise.resolve().then((()=>(S(0===p.length?"before-no-app-change":"before-app-change",N(!0)),S("before-routing-event",N(!0,{cancelNavigation:v})),Promise.all(m).then((n=>{if(n.some((t=>t)))return single_spa_min_it.call(window.history,history.state,"",w.substring(location.origin.length)),single_spa_min_Mt=location.href,single_spa_min_Dt=!1,$t(t,e,!0);const r=o.map(single_spa_min_ht),u=i.map(single_spa_min_j).map((t=>t.then(single_spa_min_ht))).concat(r),c=Promise.all(u);c.then((()=>{S("before-mount-routing-event",N(!0))}),(t=>{throw t}));const l=s.map((t=>single_spa_min_q(t).then((t=>single_spa_min_Lt(t,c))))),f=a.filter((t=>s.indexOf(t)<0)).map((t=>single_spa_min_Lt(t,c)));return c.catch((t=>{throw b(),t})).then((()=>(b(),Promise.all(l.concat(f)).catch((e=>{throw t.forEach((t=>t.reject(e))),e})).then(T).then((()=>{}),(t=>{throw t})))))})))))):(p=s,Promise.resolve().then((()=>{const t=s.map(single_spa_min_q);return Promise.all(t).then(b).then((()=>[])).catch((t=>{throw b(),t})).finally((()=>{}))})));function v(t=!0){const e="function"==typeof(null==t?void 0:t.then)?t:Promise.resolve(t);m.push(e.catch((t=>(console.warn(Error(single_spa_min_u(42,!1))),console.warn(t),!1))))}function T(){const e=single_spa_min_yt();t.forEach((t=>t.resolve(e)));try{S(0===p.length?"no-app-change":"app-change",N()),S("routing-event",N())}catch(t){setTimeout((()=>{throw t}))}if(single_spa_min_Dt=!1,single_spa_min_Ut.length>0){const t=single_spa_min_Ut;single_spa_min_Ut=[],$t(t)}return e}function b(){r||(t.forEach((t=>{single_spa_min_tt(t.eventArguments)})),single_spa_min_tt(e))}function N(t=!1,n){const r={},u={[single_spa_min_d]:[],[single_spa_min_h]:[],[single_spa_min_c]:[],[single_spa_min_E]:[]};t?(s.concat(a).forEach(((t,e)=>{f(t,single_spa_min_d)})),o.forEach((t=>{f(t,single_spa_min_c)})),i.forEach((t=>{f(t,single_spa_min_h)}))):p.forEach((t=>{f(t)}));const l={detail:{newAppStatuses:r,appsByNewStatus:u,totalAppChanges:p.length,originalEvent:null==e?void 0:e[0],oldUrl:w,newUrl:g}};return n&&single_spa_min_A(l.detail,n),l;function f(t,e){const n=single_spa_min_O(t);e=e||single_spa_min_vt(n),r[n]=e,(u[e]=u[e]||[]).push(n)}}function S(t,e){r||window.dispatchEvent(new single_spa_min_n(`single-spa:${t}`,e))}}function single_spa_min_Lt(t,e){return single_spa_min_P(t)?single_spa_min_M(t).then((t=>e.then((()=>single_spa_min_P(t)?single_spa_min_R(t):t)))):e.then((()=>t))}let single_spa_min_Rt=!1;function single_spa_min_xt(t){single_spa_min_Rt=!0,single_spa_min_z&&(single_spa_min_ut(t),$t())}function single_spa_min_It(){return single_spa_min_Rt}var single_spa_min_Bt={getRawAppData:function(){return[...single_spa_min_gt]},reroute:$t,NOT_LOADED:single_spa_min_c,toLoadPromise:single_spa_min_q,toBootstrapPromise:single_spa_min_M,unregisterApplication:single_spa_min_bt,getProfilerData:function(){return single_spa_min_U}};single_spa_min_z&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=single_spa_min_Bt);
//# sourceMappingURL=single-spa.min.js.map

;// CONCATENATED MODULE: ./node_modules/single-spa-layout/dist/esm/single-spa-layout.min.js
/* single-spa-layout@2.2.0 - esm */
function single_spa_layout_min_u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function single_spa_layout_min_s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?single_spa_layout_min_u(Object(n),!0).forEach((function(t){single_spa_layout_min_d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):single_spa_layout_min_u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function single_spa_layout_min_l(e){return(single_spa_layout_min_l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function single_spa_layout_min_d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function single_spa_layout_min_f(e){return function(e){if(Array.isArray(e))return single_spa_layout_min_h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||single_spa_layout_min_p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function single_spa_layout_min_p(e,t){if(e){if("string"==typeof e)return single_spa_layout_min_h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?single_spa_layout_min_h(e,t):void 0}}function single_spa_layout_min_h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var single_spa_layout_min_v="undefined"!=typeof window;function single_spa_layout_min_m(e,t){if("object"!==single_spa_layout_min_l(t)||Array.isArray(t)||null===t)throw Error("Invalid ".concat(e,": received ").concat(Array.isArray(t)?"array":t," but expected a plain object"))}function single_spa_layout_min_y(e,t){if("boolean"!=typeof t)throw Error("Invalid ".concat(e,": received ").concat(single_spa_layout_min_l(t),", but expected a boolean"))}function single_spa_layout_min_g(e,t,n,r){if(!r){var o=Object.keys(t),a=[];o.forEach((function(e){n.indexOf(e)<0&&a.push(e)})),a.length>0&&console.warn(Error("Invalid ".concat(e,": received invalid properties '").concat(a.join(", "),"', but valid properties are ").concat(n.join(", "))))}}function single_spa_layout_min_b(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("string"!=typeof t||n&&""===t.trim())throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected a").concat(n?" non-blank":""," string"))}function single_spa_layout_min_w(e,t){if(single_spa_layout_min_b(e,t),t.indexOf("/")<0)throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected an absolute path that starts with /"))}function single_spa_layout_min_E(e,t,n){if(!Array.isArray(t)&&("object"!==single_spa_layout_min_l(single_spa_layout_min_l(t))||"number"!==t.length))throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected an array"));for(var r=arguments.length,o=new Array(r>3?r-3:0),a=3;a<r;a++)o[a-3]=arguments[a];for(var i=0;i<t.length;i++)n.apply(void 0,[t[i],"".concat(e,"[").concat(i,"]")].concat(o))}function single_spa_layout_min_N(e,t){single_spa_layout_min_b("path",t);var n=single_spa_layout_min_s({},e),r=e.base.slice(0,e.base.length-1);if(0===t.indexOf(r)){var o=single_spa_layout_min_v?window.location.origin:"http://localhost",a=new URL(single_spa_layout_min_O(o,t));n.routes=single_spa_layout_min_A(a,e.routes)}else n.routes=[];return n}function single_spa_layout_min_A(e,t){var n=[];return t.forEach((function(t){"application"===t.type?n.push(t):"route"===t.type?t.activeWhen(e)&&n.push(single_spa_layout_min_s(single_spa_layout_min_s({},t),{},{routes:single_spa_layout_min_A(e,t.routes)})):Array.isArray(t.routes)?n.push(single_spa_layout_min_s(single_spa_layout_min_s({},t),{},{routes:single_spa_layout_min_A(e,t.routes)})):n.push(t)})),n}function single_spa_layout_min_O(e,t){var n;return"/"===(n="/"===e.substr(-1)?"/"===t[0]?e+t.slice(1):e+t:"/"===t[0]?e+t:e+"/"+t).substr(-1)&&n.length>1&&(n=n.slice(0,n.length-1)),n}function single_spa_layout_min_C(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n];return null}var single_spa_layout_min_x="undefined"!=typeof Symbol?Symbol():"@";function single_spa_layout_min_P(t,n){if(t&&t.nodeName||"string"==typeof t){if(single_spa_layout_min_v&&!n&&window.singleSpaLayoutData&&(n=window.singleSpaLayoutData),"string"==typeof t){if(!single_spa_layout_min_v)throw Error("calling constructRoutes with a string on the server is not yet supported");if(!(t=(new DOMParser).parseFromString(t,"text/html").documentElement.querySelector("single-spa-router")))throw Error("constructRoutes should be called with a string HTML document that contains a <single-spa-router> element.")}t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("template"===e.nodeName.toLowerCase()&&(e=(e.content||e).querySelector("single-spa-router")),"single-spa-router"!==e.nodeName.toLowerCase())throw Error("single-spa-layout: The HTMLElement passed to constructRoutes must be <single-spa-router> or a <template> containing the router. Received ".concat(e.nodeName));single_spa_layout_min_v&&e.isConnected&&e.parentNode.removeChild(e);var n={routes:[],redirects:{}};single_spa_layout_min_L(e,"mode")&&(n.mode=single_spa_layout_min_L(e,"mode")),single_spa_layout_min_L(e,"base")&&(n.base=single_spa_layout_min_L(e,"base")),single_spa_layout_min_L(e,"containerEl")&&(n.containerEl=single_spa_layout_min_L(e,"containerEl"));for(var r=0;r<e.childNodes.length;r++){var o;(o=n.routes).push.apply(o,single_spa_layout_min_f(single_spa_layout_min_j(e.childNodes[r],t,n)))}return n}(t,n)}else if(n)throw Error("constructRoutes should be called either with an HTMLElement and layoutData, or a single json object.");return function(t){single_spa_layout_min_m("routesConfig",t);var n,r=t.disableWarnings;if(single_spa_layout_min_g("routesConfig",t,["mode","base","containerEl","routes","disableWarnings","redirects"],r),t.hasOwnProperty("containerEl")?function(e,t){if("string"==typeof t?""===t.trim():!(single_spa_layout_min_v&&t instanceof HTMLElement))throw Error("Invalid ".concat("routesConfig.containerEl",": received ").concat(t," but expected either non-blank string or HTMLElement"))}(0,t.containerEl):t.containerEl="body",t.hasOwnProperty("mode")||(t.mode="history"),function(e,t,n){if(n.indexOf(t)<0)throw Error("Invalid ".concat("routesConfig.mode",": received '").concat(t,"' but expected ").concat(n.join(", ")))}(0,t.mode,["history","hash"]),t.hasOwnProperty("base")?(single_spa_layout_min_b("routesConfig.base",t.base),t.base=(0!==(n=t.base).indexOf("/")&&(n="/"+n),"/"!==n[n.length-1]&&(n+="/"),n)):t.base="/",t.hasOwnProperty("redirects"))for(var o in single_spa_layout_min_m("routesConfig.redirects",t.redirects),t.redirects){var a=t.redirects[o];single_spa_layout_min_w("routesConfig.redirects key",o),single_spa_layout_min_w("routesConfig.redirects['".concat(o,"']"),a)}var i=single_spa_layout_min_v?window.location.pathname:"/",c="hash"===t.mode?i+"#":"";single_spa_layout_min_E("routesConfig.routes",t.routes,(function t(n,o,a){var i=a.parentPath,c=a.siblingActiveWhens,u=a.parentActiveWhen;if(single_spa_layout_min_m(o,n),"application"===n.type)single_spa_layout_min_g(o,n,["type","name","props","loader","error","className"],r),n.props&&single_spa_layout_min_m("".concat(o,".props"),n.props),single_spa_layout_min_b("".concat(o,".name"),n.name);else if("route"===n.type){single_spa_layout_min_g(o,n,["type","path","routes","props","default","exact"],r),n.hasOwnProperty("exact")&&single_spa_layout_min_y("".concat(o,".exact"),n.exact);var s,l=n.hasOwnProperty("path"),d=n.hasOwnProperty("default");if(l)single_spa_layout_min_b("".concat(o,".path"),n.path),s=single_spa_layout_min_O(i,n.path),n.activeWhen=esm_single_spa_min_t(s,n.exact),c.push(n.activeWhen);else{if(!d)throw Error("Invalid ".concat(o,": routes must have either a path or default property."));single_spa_layout_min_y("".concat(o,".default"),n.default),s=i,n.activeWhen=function(e,t){return function(n){return t(n)&&!e.some((function(e){return e(n)}))}}(c,u)}if(l&&d&&n.default)throw Error("Invalid ".concat(o,": cannot have both path and set default to true."));n.routes&&single_spa_layout_min_E("".concat(o,".routes"),n.routes,t,{parentPath:s,siblingActiveWhens:[],parentActiveWhen:n.activeWhen})}else{if("undefined"!=typeof Node&&n instanceof Node);else for(var f in n)"routes"!==f&&"attrs"!==f&&single_spa_layout_min_b("".concat(o,"['").concat(f,"']"),n[f],!1);n.routes&&single_spa_layout_min_E("".concat(o,".routes"),n.routes,t,{parentPath:i,siblingActiveWhens:c,parentActiveWhen:u})}}),{parentPath:c+t.base,parentActiveWhen:function(){return!0},siblingActiveWhens:[]}),delete t.disableWarnings}(t),t}function single_spa_layout_min_L(e,t){if(single_spa_layout_min_v)return e.getAttribute(t);var n=single_spa_layout_min_C(e.attrs,(function(e){return e.name===t.toLowerCase()}));return n?n.value:null}function single_spa_layout_min_S(e,t){return single_spa_layout_min_v?e.hasAttribute(t):e.attrs.some((function(e){return e.name===t}))}function single_spa_layout_min_j(e,t,n){if("application"===e.nodeName.toLowerCase()){if(e.childNodes.length>0)throw Error("<application> elements must not have childNodes. You must put in a closing </application> - self closing is not allowed");var r={type:"application",name:single_spa_layout_min_L(e,"name")},o=single_spa_layout_min_L(e,"loader");if(o)if(t.loaders&&t.loaders.hasOwnProperty(o))r.loader=t.loaders[o];else if(single_spa_layout_min_v)throw Error("Application loader '".concat(o,"' was not defined in the htmlLayoutData"));var a=single_spa_layout_min_L(e,"error");if(a)if(t.errors&&t.errors.hasOwnProperty(a))r.error=t.errors[a];else if(single_spa_layout_min_v)throw Error("Application error handler '".concat(o,"' was not defined in the htmlLayoutData"));var i=single_spa_layout_min_L(e,"class");return i&&(r.className=i),single_spa_layout_min_W(e,r,t),[r]}if("route"===e.nodeName.toLowerCase()){var c={type:"route",routes:[]},u=single_spa_layout_min_L(e,"path");u&&(c.path=u),single_spa_layout_min_S(e,"default")&&(c.default=!0),single_spa_layout_min_S(e,"exact")&&(c.exact=!0),single_spa_layout_min_W(e,c,t);for(var s=0;s<e.childNodes.length;s++){var l;(l=c.routes).push.apply(l,single_spa_layout_min_f(single_spa_layout_min_j(e.childNodes[s],t,n)))}return[c]}if("redirect"===e.nodeName.toLowerCase())return n.redirects[single_spa_layout_min_O("/",single_spa_layout_min_L(e,"from"))]=single_spa_layout_min_O("/",single_spa_layout_min_L(e,"to")),[];if("undefined"!=typeof Node&&e instanceof Node){if(e.nodeType===Node.TEXT_NODE&&""===e.textContent.trim())return[];if(e.childNodes&&e.childNodes.length>0){e.routes=[];for(var d=0;d<e.childNodes.length;d++){var p;(p=e.routes).push.apply(p,single_spa_layout_min_f(single_spa_layout_min_j(e.childNodes[d],t,n)))}}return[e]}if(e.childNodes){for(var h={type:e.nodeName.toLowerCase(),routes:[],attrs:e.attrs},m=0;m<e.childNodes.length;m++){var y;(y=h.routes).push.apply(y,single_spa_layout_min_f(single_spa_layout_min_j(e.childNodes[m],t,n)))}return[h]}return"#comment"===e.nodeName?[{type:"#comment",value:e.data}]:"#text"===e.nodeName?[{type:"#text",value:e.value}]:void 0}function single_spa_layout_min_W(e,t,n){for(var r=(single_spa_layout_min_L(e,"props")||"").split(","),o=0;o<r.length;o++){var a=r[o].trim();if(0!==a.length)if(t.props||(t.props={}),n.props&&n.props.hasOwnProperty(a))t.props[a]=n.props[a];else{if(single_spa_layout_min_v)throw Error("Prop '".concat(a,"' was not defined in the htmlLayoutData. Either remove this attribute from the HTML element or provide the prop's value"));t.props[a]=single_spa_layout_min_x}}}function single_spa_layout_min_T(e){return{bootstrap:function(){return Promise.resolve()},mount:function(t){return Promise.resolve().then((function(){t.domElement.innerHTML=e}))},unmount:function(e){return Promise.resolve().then((function(){e.domElement.innerHTML=""}))}}}function single_spa_layout_min_I(e){var i=e.routes;e.applications;var c=e.active,u=void 0===c||c,s=!1,d={},f=single_spa_layout_min_v&&Boolean(window.singleSpaLayoutData);if(!i)throw Error("single-spa-layout constructLayoutEngine(opts): opts.routes must be provided. Value was ".concat(single_spa_layout_min_l(i)));var p=i.base.slice(0,i.base.length-1),h={isActive:function(){return s},activate:function(){s||(s=!0,single_spa_layout_min_v&&(window.addEventListener("single-spa:before-routing-event",y),window.addEventListener("single-spa:before-mount-routing-event",g),window.addEventListener("single-spa:routing-event",b),single_spa_min_i(m),f&&w(E(),i.routes),g()))},deactivate:function(){s&&(s=!1,single_spa_layout_min_v&&(window.removeEventListener("single-spa:before-routing-event",y),window.removeEventListener("single-spa:before-mount-routing-event",g),window.removeEventListener("single-spa:routing-event",b),single_spa_min_s(m)))}};return u&&h.activate(),h;function m(e){var t=single_spa_layout_min_H({applicationName:e.appOrParcelName,location:window.location,routes:i.routes});if(t&&t.error){var n=document.getElementById(single_spa_layout_min_k(t.name)),o="string"==typeof t.error?single_spa_layout_min_T(t.error):t.error;d[t.name]=single_spa_min_B(o,{domElement:n,error:e})}setTimeout((function(){throw e}))}function y(e){var t=e.detail,n=t.cancelNavigation,r=t.newUrl,a=single_spa_layout_min_q(i,single_spa_layout_min_X(r)),c=function(e){var t=i.redirects[e];if(e===a){if(!n)throw Error("single-spa-layout: <redirect> requires single-spa@>=5.7.0");return n(),setTimeout((function(){single_spa_min_Z(t)})),{v:void 0}}};for(var u in i.redirects){var s=c(u);if("object"===single_spa_layout_min_l(s))return s.v}var f=[];single_spa_layout_min_(r).forEach((function(e){d[e]&&(f.push(d[e].unmount()),delete d[e])})),f.length>0&&(n(),Promise.all(f).then((function(){single_spa_min_Z(r)})))}function g(){if(0===single_spa_layout_min_q(i).indexOf(p)){var e=single_spa_min_yt().reduce((function(e,t){return e[t]=document.getElementById(single_spa_layout_min_k(t)),e}),{});single_spa_layout_min_B({location:window.location,routes:i.routes,parentContainer:E(),shouldMount:!0,applicationContainers:e})}}function b(e){var t=e.detail,n=t.navigationIsCanceled,r=t.newUrl;n||single_spa_layout_min_(r).forEach((function(e){var t=document.getElementById(single_spa_layout_min_k(e));t&&t.isConnected&&t.parentNode.removeChild(t)}))}function w(e,t){if(e&&e.childNodes&&t)for(var n={nextSibling:e.childNodes[0]},r=0;r<t.length;r++){var o,a=t[r];if("route"!==a.type){for(var i=null===(o=n)||void 0===o?void 0:o.nextSibling;(null===(c=i)||void 0===c?void 0:c.nodeType)===Node.TEXT_NODE&&""===i.textContent.trim();){var c;i=i.nextSibling}n=i,single_spa_layout_min_D(a)&&single_spa_layout_min_M(i,a)&&(a.connectedNode=i),a.routes&&w(i,a.routes)}else w(e,a.routes)}}function E(){return"string"==typeof i.containerEl?document.querySelector(i.containerEl):i.containerEl}}function single_spa_layout_min_D(e){return t=["application","route","fragment","assets","redirect"],n=e.type,!t.some((function(e){return e===n}));var t,n}function single_spa_layout_min_M(e,t){var n,r;return!!e&&(r=t instanceof Node?t:function(e){switch(e.type){case"#text":return document.createTextNode(e.value);case"#comment":return document.createComment(e.value);default:var t=document.createElement(e.type);return e.attrs.forEach((function(e){t.setAttribute(e.name,e.value)})),t}}(t),(n=e).nodeType===r.nodeType&&n.nodeName===r.nodeName&&function(e,t){var n=e.getAttributeNames?e.getAttributeNames().sort():[],r=e.getAttributeNames?e.getAttributeNames().sort():[];return n.length===r.length&&!n.some((function(n){return e.getAttribute(n)!==t.getAttribute(n)}))}(n,r))}function single_spa_layout_min_B(e){var t=e.location,n=e.routes,r=e.parentContainer,o=e.previousSibling,a=e.shouldMount,i=e.applicationContainers;return n.forEach((function(e,n){if("application"===e.type){if(a){var c,u=single_spa_layout_min_k(e.name);i[e.name]?c=i[e.name]:document.getElementById(u)?c=document.getElementById(u):(c=document.createElement("div")).id=u,"string"==typeof e.className?c.className=e.className:"string"!=typeof e.className&&"string"==typeof c.className&&c.removeAttribute("class"),single_spa_layout_min_R(c,r,o),o=c}}else if("route"===e.type)o=single_spa_layout_min_B({location:t,routes:e.routes,parentContainer:r,previousSibling:o,shouldMount:a&&e.activeWhen(t),applicationContainers:i});else if(e instanceof Node||"string"==typeof e.type)if(a){if(!e.connectedNode){var s=e instanceof Node?e.cloneNode(!1):single_spa_layout_min_U(e);e.connectedNode=s}single_spa_layout_min_R(e.connectedNode,r,o),e.routes&&single_spa_layout_min_B({location:t,routes:e.routes,parentContainer:e.connectedNode,previousSibling:null,shouldMount:a,applicationContainers:i}),o=e.connectedNode}else(l=e.connectedNode)&&(l.remove?l.remove():l.parentNode.removeChild(l)),delete e.connectedNode;var l})),o}function single_spa_layout_min_H(e){for(var t=e.applicationName,n=e.location,r=e.routes,o=0;o<r.length;o++){var a=r[o];if("application"===a.type){if(a.name===t)return a}else if("route"===a.type){if(a.activeWhen(n)){var i=single_spa_layout_min_H({applicationName:t,location:n,routes:a.routes});if(i)return i}}else if(a.routes){var c=single_spa_layout_min_H({applicationName:t,location:n,routes:a.routes});if(c)return c}}}function single_spa_layout_min_R(e,t,n){var r=n?n.nextSibling:t.firstChild;r!==e&&t.insertBefore(e,r)}function single_spa_layout_min_k(e){return"single-spa-application:".concat(e)}function single_spa_layout_min_U(e){if("#text"===e.type.toLowerCase())return document.createTextNode(e.value);if("#comment"===e.type.toLowerCase())return document.createComment(e.value);var t=document.createElement(e.type);return(e.attrs||[]).forEach((function(e){t.setAttribute(e.name,e.value)})),t.routes&&t.routes.forEach((function(e){t.appendChild(single_spa_layout_min_U(e))})),t}function single_spa_layout_min_q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location;return t["hash"===e.mode?"hash":"pathname"]}function single_spa_layout_min_X(e){try{return new URL(e)}catch(n){var t=document.createElement("a");return t.href=e,t}}function single_spa_layout_min_(e){var t=[],n=single_spa_min_Tt(e?single_spa_layout_min_X(e):location);return single_spa_min_Et().forEach((function(e){n.indexOf(e)<0&&t.push(e)})),t}function single_spa_layout_min_F(e){var t=e.routes,n=e.loadApp,o={};return single_spa_layout_min_V(o,single_spa_layout_min_$,{},t.routes),Object.keys(o).map((function(e){var t=o[e];return{name:e,customProps:function(e,n){var r=single_spa_layout_min_C(t,(function(e){return e.activeWhen(n)}));return r?r.props:{}},activeWhen:t.map((function(e){return e.activeWhen})),app:function(){var o;single_spa_layout_min_v&&(o=single_spa_layout_min_C(t,(function(e){return e.activeWhen(window.location)})));var a=n({name:e});return o&&o.loader?function(e,t,n){return Promise.resolve().then((function(){var o,a=single_spa_layout_min_k(e),i=document.getElementById(a);i||((i=document.createElement("div")).id=a,i.style.display="none",document.body.appendChild(i),o=function(){i.style.removeProperty("display"),""===i.getAttribute("style")&&i.removeAttribute("style"),window.removeEventListener("single-spa:before-mount-routing-event",o)},window.addEventListener("single-spa:before-mount-routing-event",o));var c="string"==typeof t.loader?single_spa_layout_min_T(t.loader):t.loader,u=single_spa_min_B(c,{name:"application-loader:".concat(e),domElement:i});function s(){return u.unmount().then((function(){o&&o()}))}return Promise.all([u.mountPromise,n]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,n)||single_spa_layout_min_p(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());r[0];var o=r[1];return s().then((function(){return o}))}),(function(e){return s().then((function(){throw e}))}))}))}(e,o,a):a}}}))}function single_spa_layout_min_V(e,t,n,r){r.forEach((function(r){"application"===r.type?(e[r.name]||(e[r.name]=[]),e[r.name].push({activeWhen:t,props:single_spa_layout_min_Y(n,r.props),loader:r.loader})):"route"===r.type?single_spa_layout_min_V(e,r.activeWhen,single_spa_layout_min_Y(n,r.props),r.routes):r.routes&&single_spa_layout_min_V(e,t,n,r.routes)}))}function single_spa_layout_min_Y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return single_spa_layout_min_s(single_spa_layout_min_s({},e),t)}function single_spa_layout_min_$(){return!0}

;// CONCATENATED MODULE: ./src/index.ts


if (false) {}

/* @ts-ignore */
window.remotes = {
  headerModuleUrl: "https://cdn-js.sfo3.digitaloceanspaces.com/header-mf-mfe/remoteEntry.js",
  headerSectionModuleUrl: "https://cdn-js.sfo3.digitaloceanspaces.com/header-section-mf-mfe/remoteEntry.js"
};
const MfeConfigs = {
  "header/App": __webpack_require__.e(/* import() */ 249).then(__webpack_require__.t.bind(__webpack_require__, 249, 23)),
  "headerSection/App": __webpack_require__.e(/* import() */ 5).then(__webpack_require__.t.bind(__webpack_require__, 5, 23))
};
const layoutHTML = document.querySelector("#single-spa-layout");
if (layoutHTML) {
  const routes = single_spa_layout_min_P(layoutHTML);
  const applications = single_spa_layout_min_F({
    routes,
    loadApp({
      name
    }) {
      return MfeConfigs[name];
    }
  });
  const layoutEngine = single_spa_layout_min_I({
    routes,
    applications
  });
  applications.forEach(bt);
  layoutEngine.activate();
  Bt();
}

/***/ }),

/***/ 121:
/***/ ((module) => {

module.exports = new Promise((resolve) => {
  // We define a script tag to use the browser for fetching the remoteEntry.js file
  const script = document.createElement("script");
  script.src = window.remotes.headerModuleUrl;
  // When the script is loaded we need to resolve the promise back to Module Federation
  script.onload = () => {
    // The script is now loaded on window using the name defined within the remote
    const module = {
      get: (request) => {
        console.log(request);
        return window.header_mfe.get(request);
      },
      init: (arg) => {
        try {
          console.log(arg);
          return window.header_mfe.init(arg);
        } catch (e) {
          console.log(`Remote header Module has already been loaded`);
        }
      },
    };

    resolve(module);
  };
  // Lastly we inject the script tag into the document's head to trigger the script load
  document.head.appendChild(script);
});

/***/ }),

/***/ 882:
/***/ ((module) => {

module.exports = new Promise((resolve) => {
  // We define a script tag to use the browser for fetching the remoteEntry.js file
  const script = document.createElement("script");
  script.src = window.remotes.headerSectionModuleUrl;
  // When the script is loaded we need to resolve the promise back to Module Federation
  script.onload = () => {
    // The script is now loaded on window using the name defined within the remote
    const module = {
      get: (request) => {
        console.log(request);
        return window.header_section_mfe.get(request);
      },
      init: (arg) => {
        try {
          console.log(arg);
          return window.header_section_mfe.init(arg);
        } catch (e) {
          console.log(`Remote headerSection Module has already been loaded`);
        }
      },
    };

    resolve(module);
  };
  // Lastly we inject the script tag into the document's head to trigger the script load
  document.head.appendChild(script);
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "home:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/remotes loading */
/******/ 	(() => {
/******/ 		var chunkMapping = {
/******/ 			"5": [
/******/ 				5
/******/ 			],
/******/ 			"249": [
/******/ 				249
/******/ 			]
/******/ 		};
/******/ 		var idToExternalAndNameMapping = {
/******/ 			"5": [
/******/ 				"default",
/******/ 				"./App",
/******/ 				882
/******/ 			],
/******/ 			"249": [
/******/ 				"default",
/******/ 				"./App",
/******/ 				121
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.remotes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					var getScope = __webpack_require__.R;
/******/ 					if(!getScope) getScope = [];
/******/ 					var data = idToExternalAndNameMapping[id];
/******/ 					if(getScope.indexOf(data) >= 0) return;
/******/ 					getScope.push(data);
/******/ 					if(data.p) return promises.push(data.p);
/******/ 					var onError = (error) => {
/******/ 						if(!error) error = new Error("Container missing");
/******/ 						if(typeof error.message === "string")
/******/ 							error.message += '\nwhile loading "' + data[1] + '" from ' + data[2];
/******/ 						__webpack_require__.m[id] = () => {
/******/ 							throw error;
/******/ 						}
/******/ 						data.p = 0;
/******/ 					};
/******/ 					var handleFunction = (fn, arg1, arg2, d, next, first) => {
/******/ 						try {
/******/ 							var promise = fn(arg1, arg2);
/******/ 							if(promise && promise.then) {
/******/ 								var p = promise.then((result) => (next(result, d)), onError);
/******/ 								if(first) promises.push(data.p = p); else return p;
/******/ 							} else {
/******/ 								return next(promise, d, first);
/******/ 							}
/******/ 						} catch(error) {
/******/ 							onError(error);
/******/ 						}
/******/ 					}
/******/ 					var onExternal = (external, _, first) => (external ? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first) : onError());
/******/ 					var onInitialized = (_, external, first) => (handleFunction(external.get, data[1], getScope, 0, onFactory, first));
/******/ 					var onFactory = (factory) => {
/******/ 						data.p = 1;
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1);
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			var uniqueName = "home";
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					initExternal(121);
/******/ 					initExternal(882);
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(179 == chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhome"] = self["webpackChunkhome"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(9);
/******/ 	
/******/ })()
;