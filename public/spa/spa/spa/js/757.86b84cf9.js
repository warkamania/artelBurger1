"use strict";(self["webpackChunk_1"]=self["webpackChunk_1"]||[]).push([[757],{9757:(e,t,o)=>{o.r(t),o.d(t,{default:()=>j});var s=o(9835),n=o(6970);const a={class:"row"},l={class:"col-12",style:{"font-size":"22px",color:"whitesmoke"}},i={class:"row"},r={class:"col-12"};function c(e,t,o,c,d,m){const u=(0,s.up)("NewsPanel"),p=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(p,null,{default:(0,s.w5)((()=>[(0,s._)("div",a,[(0,s._)("div",l,(0,n.zw)(e.Time),1)]),(0,s._)("div",i,[(0,s._)("div",r,[(0,s.Wm)(u,{textt:e.newsText,img:e.newsImg,index:0},null,8,["textt","img"])])])])),_:1})}const d={class:"q-pa-md"},m=(0,s._)("img",{src:"red.jpg",alt:"",class:"col-12"},null,-1),u={class:"absolute-bottom custom-caption"},p={class:"text-h5"},g=(0,s._)("img",{src:"artel.jpg",alt:"",class:"col-12"},null,-1),w={class:"absolute-bottom custom-caption"},f={class:"text-h5"},h={class:"q-mt-md text-center"},v={class:"q-mt-md text-center"};function x(e,t,o,a,l,i){const r=(0,s.up)("center"),c=(0,s.up)("q-carousel-slide"),x=(0,s.up)("q-icon"),_=(0,s.up)("q-carousel");return(0,s.wg)(),(0,s.iD)("div",d,[(0,s.Wm)(_,{modelValue:a.slide,"onUpdate:modelValue":t[0]||(t[0]=e=>a.slide=e),swipeable:"",animated:"","navigation-position":a.navPos,navigation:"",padding:"",height:"460px",class:"bg-white text-black rounded-borders"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{name:"style",class:"column no-wrap flex-center row","img-src":o.img[o.index]},{default:(0,s.w5)((()=>[m,(0,s._)("div",u,[(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s._)("div",p,(0,n.zw)(o.textt[0]),1)])),_:1})])])),_:1},8,["img-src"]),(0,s.Wm)(c,{name:"tv",class:"column no-wrap flex-center row"},{default:(0,s.w5)((()=>[g,(0,s._)("div",w,[(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s._)("div",f,(0,n.zw)(o.textt[1]),1)])),_:1})])])),_:1}),(0,s.Wm)(c,{name:"layers",class:"column no-wrap flex-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(x,{name:"layers",size:"56px"}),(0,s._)("div",h,(0,n.zw)(o.textt[2]),1)])),_:1}),(0,s.Wm)(c,{name:"map",class:"column no-wrap flex-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(x,{name:"terrain",size:"56px"}),(0,s._)("div",v,(0,n.zw)(o.textt[3]),1)])),_:1})])),_:1},8,["modelValue","navigation-position"])])}var _=o(499),N=o(4987);const b={props:{textt:String,img:String,index:Number},setup(){return{navPos:(0,_.iH)("bottom"),navigationPositions:[{value:"bottom",label:"bottom (default)"}],slide:(0,_.iH)("style"),lorem:"НОВОСТИ",News:(0,_.iH)([])}},mounted(){N["default"].collection("News").onSnapshot((e=>{e.docChanges().forEach((e=>{const t=e.doc.data();"added"===e.type&&(console.log("New News: ",t),this.News.unshift(t)),"modified"===e.type&&console.log("Modified News: ",t),"removed"===e.type&&console.log("Removed News: ",t)}))}))}};var y=o(1639),W=o(7052),C=o(1694),H=o(2857),z=o(9984),P=o.n(z);const Z=(0,y.Z)(b,[["render",x]]),q=Z;P()(b,"components",{QCarousel:W.Z,QCarouselSlide:C.Z,QIcon:H.Z});var S=o(4409),k=o.n(S);const D=(0,s.aZ)({name:"IndexPage",components:{NewsPanel:q},setup(){return{lorem:"Бургер",toogle:(0,_.iH)("one"),value:(0,_.iH)(""),Dialog:(0,_.iH)(!1),menus:(0,_.iH)([]),News:(0,_.iH)([])}},mounted(){N["default"].collection("Burger").onSnapshot((e=>{e.docChanges().forEach((e=>{const t=e.doc.data();"added"===e.type&&(console.log("New burger: ",t),this.menus.unshift(t)),"modified"===e.type&&console.log("Modified burger: ",t),"removed"===e.type&&console.log("Removed burger: ",t)}))})),N["default"].collection("News").onSnapshot((e=>{e.docChanges().forEach((e=>{const t=e.doc.data();"added"===e.type&&(console.log("New News: ",t),this.News.unshift(t)),"modified"===e.type&&console.log("Modified News: ",t),"removed"===e.type&&console.log("Removed News: ",t)}))}))},computed:{Time(){let e=new Date,t=e.getHours(),o="Доброе утро!";return t<=11||(t>=12||t<=17?o="Добрый день!":t>=18&&(o="Добрый вечер")),o},parseTitle(){return k().map(this.menus,"title")},parsePrice(){return k().map(this.menus,"price")},parseStructure(){return k().map(this.menus,"structure")},parseImg(){return k().map(this.menus,"img")},parseCategory(){return k().map(this.menus,"Category")},newsText(){return k().map(this.News,"textNews")},newsImg(){return k().map(this.News,"img")}},methods:{openDialog(){this.Dialog=!this.Dialog}}});var I=o(9885),T=o(1389);const Q=(0,y.Z)(D,[["render",c],["__scopeId","data-v-ab5f3a20"]]),j=Q;P()(D,"components",{QPage:I.Z,QBtnToggle:T.Z})}}]);