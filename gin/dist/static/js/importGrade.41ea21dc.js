(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["importGrade"],{"1ff5":function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));var n=r("5c39"),o=r.n(n),i=r("4f91"),a=r.n(i),c=r("7b04"),u=r.n(c),s={title:"分享的标题",desc:"分享的描述",link:window.location.href,imgUrl:"//img.zhugexuetang.com/Fn4hgDYlcJu8MbZmIN63lrQS1zPq"},f=["updateAppMessageShareData","updateTimelineShareData","onMenuShareTimeline","onMenuShareAppMessage"],l=r("b76f"),p=r.n(l);function h(t,e){t.updateAppMessageShareData(e)}function d(t,e){e.desc;var r=p()(e,["desc"]);t.updateTimelineShareData(r)}function g(t,e){t.onMenuShareAppMessage(e)}function m(t,e){e.desc;var r=p()(e,["desc"]);t.onMenuShareTimeline(r)}var v=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o()(this,t),this.jssdk=e,this.options=r,this.beforeShareJs()}return a()(t,[{key:"beforeShareJs",value:function(){var t=this,e=Object.assign({debug:!1,jsApiList:f},t.jssdk);u.a.config(e),u.a.ready((function(){u.a.checkJsApi({jsApiList:f,success:function(e){for(var r in t.options)t.options[r]||(t.options[r]=s[r]);var n=Object.assign({},s,t.options);h(u.a,n),d(u.a,n),g(u.a,n),m(u.a,n)}})}))}}]),t}()},2591:function(t,e,r){var n=r("a1a8"),o=r("e505"),i=r("47a1"),a=r("5f1d");e=n(!1);var c=o(i),u=o(a);e.push([t.i,".importGrade{width:100%;background:url("+c+") no-repeat;background-size:100% 250px;padding:34px 0 0;box-sizing:border-box;position:relative;height:100vh}.importGrade .importGrade_wrap{height:100%;width:100%;background:url("+u+') no-repeat;background-size:100% 248px;background-position:0 100%}.importGrade .title{font-size:28px;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#fff;line-height:40px;margin:0 0 43px 24px;position:relative}.importGrade .title:before{content:"";width:22px;height:3px;background:rgba(187,191,255,.76);border-radius:2px;position:absolute;bottom:-12px;left:0;z-index:10}.importGrade .loading{position:absolute!important;top:0;left:0;right:0;bottom:0;background:hsla(0,0%,100%,.7);display:flex!important;justify-content:center!important;align-items:center!important}.importGrade .loading img{width:50px!important;height:55px!important;position:static!important;-webkit-animation:load 1s linear infinite!important}@-webkit-keyframes load{0%{transform:rotate(1turn)}to{transform:rotate(0deg)}}.importGrade .content{background:#fff;border-top-left-radius:16px;border-top-right-radius:16px;padding:38px 30px 127px;justify-content:space-between;flex-wrap:wrap}.importGrade .content,.importGrade .content li{box-sizing:border-box;position:relative;display:flex;align-items:center}.importGrade .content li{margin-bottom:30px;width:144px;height:44px;background:#f0f2f4;border-radius:23px;justify-content:center;font-size:14px;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:#999aaa;line-height:20px}.importGrade .content .currentSty{border:1px solid #3a5acf;color:#3a5acf}.importGrade .btnSty{padding:0 40px}.importGrade .btnSty button{width:100%;height:44px;background:#3a5acf;box-shadow:0 4px 7px 0 #87b2ff;border-radius:24px;box-sizing:border-box;font-size:16px;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:#fff;line-height:22px;margin-top:80px;border:none}',""]),t.exports=e},"47a1":function(t,e,r){t.exports=r.p+"static/img/ellipse.0d432185.png"},"4f91":function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}t.exports=n},5412:function(t,e,r){t.exports=r("6a61")},5909:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"importGrade"},[n("div",{staticClass:"importGrade_wrap"},[n("div",{staticClass:"title"},[t._v("请选择评估试卷")]),n("ul",{staticClass:"content"},t._l(t.gradeList,(function(e,r){return n("li",{key:r,class:{currentSty:t.currentGrade.id===e.id},on:{click:function(r){t.currentGrade=e}}},[t._v(" "+t._s(e.name)+" ")])})),0),n("div",{staticClass:"btnSty"},[n("button",{on:{click:t.handleGetReport}},[t._v("确定")])]),t.isLoading?n("div",{staticClass:"loading"},[n("img",{attrs:{src:r("b104"),alt:""}})]):t._e()])])},o=[],i=r("5412"),a=r.n(i),c=r("e417"),u=r.n(c),s=r("1ff5"),f=r("2934"),l={mounted:function(){},methods:{weixinshare:function(){return u()(a.a.mark((function t(){var e,r,n;return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return"https://huodong.doushen.com/zhaosheng/importGrade",e={link:encodeURIComponent(window.location.href.split("#")[0])},r={title:"⾖神⼤语⽂·语⽂学习能⼒评估",desc:"1分钟获取专属评估报告，48⼩时内免费1对1点评。",imgUrl:"https://graph.baidu.com/resource/1262c9079c9e37fceef4a01591238173.jpg"},t.prev=3,t.next=6,Object(f["c"])(e);case 6:n=t.sent,r["link"]=n.url,new s["a"](n,r),t.next=13;break;case 11:t.prev=11,t.t0=t["catch"](3);case 13:case"end":return t.stop()}}),t,null,[[3,11]])})))()}}},p={mixins:[l],data:function(){return{currentGrade:{},isLoading:!1,disabled:!1,forbidClick:!0,gradeList:[{name:"一年级评估",id:1,url:"https://jinshuju.net/f/R2onwi"},{name:"二年级评估",id:2,url:"https://jinshuju.net/f/jHYRSk"},{name:"三年级评估",id:3,url:"https://jinshuju.net/f/vSXDyE"},{name:"四年级评估",id:4,url:"https://jinshuju.net/f/bnHNbt"},{name:"五年级评估",id:5,url:"https://jinshuju.net/f/JMJrng"},{name:"六年级评估",id:6,url:"https://jinshuju.net/f/DyIJ8s"}]}},beforeRouteEnter:function(t,e,r){r((function(t){t.weixinshare()}))},methods:{handleGetReport:function(){this.forbidClick&&(this.currentGrade.url?window.location.href=this.currentGrade.url:this.$toast({message:"请选择评估试卷",duration:2e3}))}}},h=p,d=(r("dd9a"),r("9ca4")),g=Object(d["a"])(h,n,o,!1,null,null,null);e["default"]=g.exports},"5bf2":function(t,e,r){var n=r("2591");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("85cb").default;o("96b5c790",n,!0,{sourceMap:!1,shadowMode:!1})},"5c39":function(t,e){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}t.exports=r},"5f1d":function(t,e,r){t.exports=r.p+"static/img/infoimg.00877da5.png"},"6a61":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(F){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=S(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=s;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",g={};function m(){}function v(){}function y(){}var b={};b[i]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(P([])));w&&w!==r&&n.call(w,i)&&(b=w);var j=y.prototype=m.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function S(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return C()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=G(a,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}function G(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,G(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:C}}function C(){return{value:e,done:!0}}return v.prototype=j.constructor=y,y.constructor=v,v.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},k(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(j),u(j,c,"Generator"),j[i]=function(){return this},j.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"7e1f":function(t,e){function r(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}t.exports=r},b104:function(t,e,r){t.exports=r.p+"static/img/loading.bd775666.png"},b76f:function(t,e,r){var n=r("7e1f");function o(t,e){if(null==t)return{};var r,o,i=n(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}t.exports=o},dd9a:function(t,e,r){"use strict";var n=r("5bf2"),o=r.n(n);o.a},e417:function(t,e){function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}t.exports=n},e505:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}}}]);