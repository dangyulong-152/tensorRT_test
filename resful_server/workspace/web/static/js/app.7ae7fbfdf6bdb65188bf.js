webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},o,!1,function(e){n("mVEf")},null,null).exports,i=n("/ocq"),s=n("mtWM"),l=n.n(s),u=n("mw3O"),c=n.n(u);l.a.defaults.timeout=1e4,l.a.defaults.baseURL="",l.a.defaults.withCredentials=!1;const f=((d=new Object)._queryingURLs={},d.isQuerying=(e=>e in d._queryingURLs),d.add=(e=>{d._queryingURLs[e]=!0}),d.remove=(e=>{d.isQuerying(e)&&delete d._queryingURLs[e]}),d);var d;let p=null,_=null;function h(e,t){if(null==e)return t;if(null!=t)for(let n in t)e[n]=t[n];return e}function g(e){let t={};for(let n in e){let r=e[n];"object"==typeof r&&(r=JSON.stringify(r)),t[n]=r}return c.a.stringify(t)}const m=e=>{var t=new Object;return t._url=e,t.data=(e=>(t._data=e,t)),t.defResp=(e=>(t._defResp=e,t)),t.then=(e=>(t._then=e,t._send("post"),t)),t.catch=(e=>(t._catch=e,t)),t.config=(e=>(t._config=e,t)),t.loadingSilence=(()=>(t._loadingSilence=!0,t)),t.tipsSilence=(()=>(t._tipsSilence=!0,t)),t.post=(()=>(t._send("post"),t)),t.get=(()=>(t._send("get"),t)),t._alreadyQuery=!1,t._then=(e=>{}),t._catch=(e=>{}),t._data={},t._defResp=null,t._loadingSilence=!1,t._tipsSilence=!1,t._config={headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"}},t._send=(e=>{if(t._alreadyQuery)return;if(t._alreadyQuery=!0,f.isQuerying(t._url))return void console.log("重复请求了"+t._url);null!=p&&p(t),f.add(t._url);let n=null;(n="post"==e?l.a.post(t._url,g(t._data),t._config):l.a.get(t._url,g(t._data),t._config)).then(e=>{f.remove(t._url);let n=e.data;n=h(n,t._defResp),null!=_&&_(t,n),"success"==n.status?t._then(n.msg):t._catch(n)}).catch(e=>{let n=e.response,r=null;null==n?r={status:"error",code:"NetworkError",msg:e.message,now:new Date}:(r=n.data).hasOwnProperty("msg")||(r={status:"error",code:n.status,msg:n.data,header:n.headers,now:new Date}),r=h(r,t._defResp),null!=_&&_(t,r),f.remove(t._url),t._catch(r)})}),t};m.setPreQueryCallback=function(e){p=e},m.setEndQueryCallback=function(e){_=e},r.default.prototype.$echo=m;var y=m,v={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n    错误\n")])},staticRenderFns:[]},w=n("VU/8")({name:"Error"},v,!1,null,null,null).exports,R={name:"Home",data:()=>({radio:"1"}),methods:{init:function(){}},mounted(){this.init()}},b={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"v-body"},[this._v("\n    test home\n")])},staticRenderFns:[]};var E=n("VU/8")(R,b,!1,function(e){n("u9hI")},"data-v-3d5386f2",null).exports,N=n("zL8q"),Q=n.n(N);function S(e,t){let n={};return"string"==typeof e?(n.message=e,n.title=t):n=e,"duration"in n||(n.duration=2e3),n}const U={success:function(e,t="成功"){let n=S(e,t);Q.a.Notification.success(n)},error:function(e,t="错误"){let n=S(e,t);Q.a.Notification.error(n)},info:function(e,t="提示"){let n=S(e,t);Q.a.Notification.info(n)},warning:function(e,t="警告"){let n=S(e,t);Q.a.Notification.warning(n)},tip:function(e){Q.a.Notification(e)}};r.default.prototype.$tips=U;var q=U;n("vwbq");r.default.use(i.a);const k=i.a.prototype.push;i.a.prototype.push=function(e){return k.call(this,e).catch(e=>e)};const L=[{path:"/",component:E},{path:"*",component:w}],C=new i.a({mode:"history",routes:L});C.beforeEach(function(e,t,n){return n()});var O=C,x=n("NYxO");r.default.use(x.a);var j=new x.a.Store({state:{userInfo:""},mutations:{updateUser(e,t){e.userInfo=t}}}),V=(n("tvR6"),n("gJwn"),n("ppUw")),$=n.n(V);var A={clone:function e(t){let n;if("object"==typeof t)if(null===t)n=null;else if(t instanceof Array){n=[];for(let r=0,o=t.length;r<o;r++)n.push(e(t[r]))}else{n={};for(let r in t)n[r]=e(t[r])}else n=t;return n}};r.default.use(Q.a),r.default.use($.a),window.Echo=y,window.Tips=q,window.Tools=A,r.default.config.productionTip=!1;let H=null;y.setPreQueryCallback(e=>{e._loadingSilence||null==H&&(H=Q.a.Loading.service({fullscreen:!0,lock:!0,text:"加载中...",background:"rgba(0, 0, 0, 0.5)"}))}),y.setEndQueryCallback((e,t)=>{null!=H&&(H.close(),H=null),"success"!=t.status&&(e._tipsSilence?console.log("请求结束静默，不提示："+t.msg):q.error(t.msg))}),new r.default({el:"#app",router:O,store:j,components:{App:a},template:"<App/>"})},gJwn:function(e,t){},mVEf:function(e,t){},tvR6:function(e,t){},u9hI:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.7ae7fbfdf6bdb65188bf.js.map