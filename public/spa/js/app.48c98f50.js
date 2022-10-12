(()=>{"use strict";var e={1301:(e,t,r)=>{r(8964),r(702);var a=r(1957),o=r(1947),n=r(499),s=r(9835);function i(e,t,r,a,o,n){const i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(i)}r(2159),r(8570);const c=(0,s.aZ)({name:"App"});var l=r(1639);const u=(0,l.Z)(c,[["render",i]]),d=u;var h=r(6257),p=r(3340),m=r(222),f=r(8910);const g=[{history:(0,f.r5)(),path:"/",component:()=>Promise.all([r.e(736),r.e(297)]).then(r.bind(r,9473)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(876)]).then(r.bind(r,8876))},{path:"OrderApp",component:()=>Promise.all([r.e(736),r.e(645)]).then(r.bind(r,1645))},{path:"PromotionApp",component:()=>Promise.all([r.e(736),r.e(316)]).then(r.bind(r,316))},{path:"MoreApp",component:()=>Promise.all([r.e(736),r.e(433)]).then(r.bind(r,2433))},{path:"LoginApp",component:()=>Promise.all([r.e(736),r.e(581)]).then(r.bind(r,6581))},{path:"RegistrApp",component:()=>Promise.all([r.e(736),r.e(396)]).then(r.bind(r,4396))},{path:"CardApp",component:()=>Promise.all([r.e(736),r.e(360)]).then(r.bind(r,1360))},{path:"AdminPanel",component:()=>Promise.all([r.e(736),r.e(165)]).then(r.bind(r,2165))},{path:"OrderList",component:()=>Promise.all([r.e(736),r.e(57)]).then(r.bind(r,1057))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(862)]).then(r.bind(r,1862))}],b=g,v=(0,p.BC)((function(){const e=f.r5,t=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("")});return t.beforeEach((async(e,t,r)=>{const a=e.meta.requiresAuth;a&&!await m.Z.getCurrentUser()?r("/"):r()})),t}));async function y(e,t){const a=e(d);a.use(o.Z,t);const s="function"===typeof h["default"]?await(0,h["default"])({}):h["default"],{storeKey:i}=await Promise.resolve().then(r.bind(r,6257)),c=(0,n.Xl)("function"===typeof v?await v({store:s}):v);return s.$router=c,{app:a,store:s,storeKey:i,router:c}}var w=r(3833),P=r(8126),A=r(4328);const E={config:{},plugins:{LocalStorage:w.Z,SessionStorage:P.Z,Notify:A.Z}},S="";async function Z({app:e,router:t,store:r,storeKey:a},o){let n=!1;const s=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},i=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=s(e);null!==t&&(window.location.href=t,window.location.reload())},c=window.location.href.replace(window.location.origin,"");for(let u=0;!1===n&&u<o.length;u++)try{await o[u]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:c,publicPath:S})}catch(l){return l&&l.url?void i(l.url):void console.error("[Quasar] boot error:",l)}!0!==n&&(e.use(t),e.use(r,a),e.mount("#q-app"))}y(a.ri,E).then((e=>Promise.all([Promise.resolve().then(r.bind(r,6288)),Promise.resolve().then(r.bind(r,1569)),Promise.resolve().then(r.bind(r,4987))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));Z(e,r)}))))},1569:(e,t,r)=>{r.r(t),r.d(t,{api:()=>s,default:()=>i});var a=r(3340),o=r(9981),n=r.n(o);const s=n().create({baseURL:"https://api.example.com"}),i=(0,a.xr)((({app:e})=>{e.config.globalProperties.$axios=n(),e.config.globalProperties.$api=s}))},4987:(e,t,r)=>{r.r(t),r.d(t,{database:()=>s,default:()=>i,firebaseConfig:()=>o});var a=r(222);r(2159),r(8570),r(9226);const o={apiKey:"AIzaSyAdNAnCas-BuRdLEZhG1mq2wzR9DSnT8Yk",authDomain:"artelburger-240ca.firebaseapp.com",databaseURL:"https://artelburger-240ca-default-rtdb.firebaseio.com",projectId:"artelburger-240ca",storageBucket:"artelburger-240ca.appspot.com",messagingSenderId:"653115872239",appId:"1:653115872239:web:35246e0b86ef29e2c01c1a",measurementId:"G-QG2M3NF22Q"};a.Z.initializeApp(o),a.Z.getCurrentUser=()=>new Promise(((e,t)=>{const r=a.Z.auth().onAuthStateChanged((t=>{r(),e(t)}),t)}));let n=a.Z.firestore();const s=a.Z.database,i=n},6288:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var a=r(3340),o=r(9991);const n={failed:"Action failed",success:"Action was successful"},s={"en-US":n},i=(0,a.xr)((({app:e})=>{const t=(0,o.o)({locale:"en-US",messages:s});e.use(t)}))},6257:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var a=r(3340),o=r(3100),n=r(222);r(2159),r(9226);const s={actions:{login(e,t){n.Z.auth().signInWithEmailAndPassword(e,t).then((e=>{this.$q.notify({message:"Sign In Success."}),this.$router.push("/")})).catch((e=>{console.log(e)}))},register(e,t){n.Z.auth().createUserWithEmailAndPassword(e,t).then((e=>{this.$q.notify({message:"Sign In Success."}),this.$router.push("/")})).catch((e=>{console.log(e)}))},getUid(){const e=n.Z.auth().currentUser;return e?e.uid:null},logout(){n.Z.auth().signOut(),this.$router.push("/").then((()=>{this.$q.notify({message:"Sign Out Success."})})).catch((e=>console.log("error",e)))}}};r(8570);const i={actions:{async createNemu({dispatch:e,commit:t},r){try{await e("getUid");return await n.Z.database().ref("/Burger/").push(r)}catch(a){throw t("setError",a),a}},async fetchMenu({dispatch:e,commit:t}){try{const e=(await n.Z.database().ref("Burger/").once("value")).val()||{};return Object.keys(e).map((t=>({...e[t],id:t,img:t,price:t,title:t,structure:t})))}catch(r){throw t("setError",r),r}},async fetchMenuById({dispatch:e,commit:t},r){try{await e("getUid");const t=(await n.Z.database().ref("Burger/").once("value")).val()||{};return{...t,id:r,title,price,structure,img}}catch(a){throw t("setError",a),a}}}},c={actions:{async createNews({dispatch:e,commit:t},r){try{const t=await e("getUid");return await n.Z.database().ref(`/users/${t}/Menus`).push(r)}catch(a){throw t("setError",a),a}},async fetchNews({dispatch:e,commit:t}){try{const t=await e("getUid"),r=(await n.Z.database().ref(`/users/${t}/Menus`).once("value")).val()||{};return Object.keys(r).map((e=>({...r[e],id:e})))}catch(r){throw t("setError",r),r}},async fetchNewsById({dispatch:e,commit:t},r){try{const t=await e("getUid"),a=(await n.Z.database().ref(`/users/${t}/Menus`).child(r).once("value")).val()||{};return{...a,id:r}}catch(a){throw t("setError",a),a}}}},l={actions:{async createPromotion({dispatch:e,commit:t},r){try{const t=await e("getUid");return await n.Z.database().ref(`/users/${t}/Menus`).push(r)}catch(a){throw t("setError",a),a}},async fetchPromotion({dispatch:e,commit:t}){try{const t=await e("getUid"),r=(await n.Z.database().ref(`/users/${t}/Menus`).once("value")).val()||{};return Object.keys(r).map((e=>({...r[e],id:e})))}catch(r){throw t("setError",r),r}},async fetchPromotionById({dispatch:e,commit:t},r){try{const t=await e("getUid"),a=(await n.Z.database().ref(`/users/${t}/Menus`).child(r).once("value")).val()||{};return{...a,id:r}}catch(a){throw t("setError",a),a}}}},u=(0,a.h)((function(){const e=(0,o.MT)({modules:{auth:s,menu:i,news:c,promotion:l},strict:!1});return e}))}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}r.m=e,(()=>{var e=[];r.O=(t,a,o,n)=>{if(!a){var s=1/0;for(u=0;u<e.length;u++){for(var[a,o,n]=e[u],i=!0,c=0;c<a.length;c++)(!1&n||s>=n)&&Object.keys(r.O).every((e=>r.O[e](a[c])))?a.splice(c--,1):(i=!1,n<s&&(s=n));if(i){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,o,n]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,a)=>(r.f[a](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{57:"87ea4001",165:"b407e6f0",297:"b0d4397b",316:"53b22653",360:"91305992",396:"1e8a7798",433:"091a2796",581:"e3b7e73f",645:"a454f093",862:"d0f2d080",876:"35d5a065"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{57:"3384fe05",143:"31d6cfe0",316:"e6dfb16d",360:"0416f3da",645:"71bacee7",736:"dffc87eb",876:"c813fe9c"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.hmd=e=>(e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e)})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="1:";r.l=(a,o,n,s)=>{if(e[a])e[a].push(o);else{var i,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+n){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+n),i.src=a),e[a]=[o];var h=(t,r)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),c&&document.head.appendChild(i)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var n=n=>{if(o.onerror=o.onload=null,"load"===n.type)r();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,o.parentNode.removeChild(o),a(c)}};return o.onerror=o.onload=n,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var o=r[a],n=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===e||n===t))return o}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){o=s[a],n=o.getAttribute("data-href");if(n===e||n===t)return o}},a=a=>new Promise(((o,n)=>{var s=r.miniCssF(a),i=r.p+s;if(t(s,i))return o();e(a,i,o,n)})),o={143:0};r.f.miniCss=(e,t)=>{var r={57:1,316:1,360:1,645:1,876:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=a(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,a)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var n=new Promise(((r,a)=>o=e[t]=[r,a]));a.push(o[2]=n);var s=r.p+r.u(t),i=new Error,c=a=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var n=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",i.name="ChunkLoadError",i.type=n,i.request=s,o[1](i)}};r.l(s,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,a)=>{var o,n,[s,i,c]=a,l=0;if(s.some((t=>0!==e[t]))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var u=c(r)}for(t&&t(a);l<s.length;l++)n=s[l],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(u)},a=self["webpackChunk_1"]=self["webpackChunk_1"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=r.O(void 0,[736],(()=>r(1301)));a=r.O(a)})();