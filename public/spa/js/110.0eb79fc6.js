"use strict";(self["webpackChunk_1"]=self["webpackChunk_1"]||[]).push([[110],{6735:(e,t,r)=>{r.d(t,{Z:()=>V});r(702);var a=r(9835),s=r(1957),l=r(6970);const i=e=>((0,a.dD)("data-v-3d2b386c"),e=e(),(0,a.Cn)(),e),n={class:"q-pa-md row items-start q-gutter-md"},o=["src"],d={class:"span-burger"},u=i((()=>(0,a._)("br",null,null,-1))),c={class:"fit row wrap justify-between"},m={class:"col-6 price",style:{overflow:"auto"}},p={class:"col-6",style:{overflow:"auto"}},g={class:"q-pa-md q-gutter-sm"},h=i((()=>(0,a._)("div",{class:"text-h6 textGradient18"},"Состав",-1)));function f(e,t,r,i,f,w){const C=(0,a.up)("q-btn"),b=(0,a.up)("q-responsive"),v=(0,a.up)("q-card-section"),y=(0,a.up)("q-card"),_=(0,a.up)("q-card-actions"),S=(0,a.up)("q-dialog"),W=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",n,[(0,a.Wm)(y,{class:"my-card bg-black text-white",onClick:t[1]||(t[1]=e=>!i.dialog),modelValue:i.id,"onUpdate:modelValue":t[2]||(t[2]=e=>i.id=e)},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(C,{onClick:w.stars,flat:"",icon:"star_border ",class:"fit row wrap justify-end items-end content-end"},null,8,["onClick"]),[[s.F8,!i.star]]),(0,a.wy)((0,a.Wm)(C,{onClick:w.stars,flat:"",icon:"star ",class:"fit row wrap justify-end items-end content-end"},null,8,["onClick"]),[[s.F8,i.star]]),(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,{ratio:1},{default:(0,a.w5)((()=>[(0,a._)("img",{src:r.Img[r.index],alt:"",class:"img",onClick:t[0]||(t[0]=(...e)=>w.OpenDialog&&w.OpenDialog(...e))},null,8,o)])),_:1}),(0,a._)("span",d,(0,l.zw)(r.title[r.index]),1),u,(0,a._)("div",c,[(0,a._)("div",m,(0,l.zw)(r.price[r.index])+" Р",1),(0,a._)("div",p,[(0,a.wy)((0,a.Wm)(C,{flat:"",icon:"add_box",onClick:w.persist},null,8,["onClick"]),[[s.F8,!i.add]]),(0,a.wy)((0,a.Wm)(C,{flat:"",icon:"done",color:"green"},null,512),[[s.F8,i.add]])])])])),_:1})])),_:1},8,["modelValue"])]),(0,a._)("div",g,[(0,a.Wm)(S,{"bg-white":"",modelValue:i.alert,"onUpdate:modelValue":t[3]||(t[3]=e=>i.alert=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{class:"bg-white"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{"bg-white":""},{default:(0,a.w5)((()=>[h])),_:1}),(0,a.Wm)(v,{class:"q-pt-none textGradient18"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(r.Structure[r.index]),1)])),_:1}),(0,a.Wm)(_,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(C,{flat:"",label:"OK",color:"red"},null,512),[[W]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])],64)}var w=r(499),C=r(320);const b={props:{title:String,price:String,Structure:String,Category:String,Img:String,index:Number,toogle:String},setup(){return{dialog:(0,w.iH)(!1),id:(0,w.iH)(null),sum:(0,w.iH)(0),Card:(0,w.iH)([]),Menus:(0,w.iH)([]),star:(0,w.iH)(!1),alert:(0,w.iH)(!1),idfavourites:(0,w.iH)([]),add:(0,w.iH)(!1)}},async mounted(){if(localStorage.getItem("Card"))try{this.Card=JSON.parse(localStorage.getItem("Card"))}catch(e){localStorage.removeItem("Card")}},methods:{OpenDialog(){this.alert=!this.alert},persist(){this.add=!0,this.id=(0,C.Z)(),this.Card.push({title:this.title[this.index],price:this.price[this.index],img:this.Img[this.index]}),this.saveCard()},saveCard(){const e=JSON.stringify(this.Card);localStorage.setItem("Card",e)},stars(){this.star=!this.star,this.idfavourites={id:this.id}}},components:{}};var v=r(1639),y=r(1517),_=r(4458),S=r(8879),W=r(3190),k=r(9893),x=r(7743),I=r(1821),H=r(2146),Z=r(9984),q=r.n(Z);const Q=(0,v.Z)(b,[["render",f],["__scopeId","data-v-3d2b386c"]]),V=Q;q()(b,"components",{QIntersection:y.Z,QCard:_.Z,QBtn:S.Z,QCardSection:W.Z,QResponsive:k.Z,QDialog:x.Z,QCardActions:I.Z}),q()(b,"directives",{ClosePopup:H.Z})},1110:(e,t,r)=>{r.r(t),r.d(t,{default:()=>re});var a=r(9835);const s={class:"row"},l={class:"col-12"},i=(0,a._)("br",null,null,-1),n={class:"row"},o={class:"col-12"},d=(0,a._)("div",{style:{color:"white"}},null,-1);function u(e,t,r,u,c,m){const p=(0,a.up)("q-icon"),g=(0,a.up)("q-input"),h=(0,a.up)("TabsApp"),f=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(f,null,{default:(0,a.w5)((()=>[(0,a._)("div",s,[(0,a._)("div",l,[(0,a.Wm)(g,{color:"red",dark:"",modelValue:u.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=e=>u.searchQuery=e),filled:"",type:"search",style:{color:"white"},placeholder:"Поиск"},{append:(0,a.w5)((()=>[(0,a.Wm)(p,{name:"search",style:{color:"white"}})])),_:1},8,["modelValue"])])]),i,(0,a._)("div",n,[(0,a._)("div",o,[(0,a.Wm)(h,{title:m.parseTitle,price:m.parsePrice,Img:m.parseImg,Structure:m.parseStructure,Category:m.parseCategory},null,8,["title","price","Img","Structure","Category"])])]),d])),_:1})}r(702),r(6727);var c=r(499);const m={class:"q-pa-xs"},p={class:"q-gutter-y-xs"},g={class:"row"},h={class:"col-6"},f={class:"col-6"},w=(0,a._)("div",{class:"text-h6"},"Горячие Закуску",-1),C=(0,a.Uk)(" Горячие Закуску "),b=(0,a._)("div",{class:"text-h6"},"Салаты",-1),v=(0,a.Uk)(" Салаты "),y=(0,a._)("div",{class:"text-h6"},'Первые Блюда"',-1),_=(0,a.Uk)(' Первые Блюда" '),S=(0,a._)("div",{class:"text-h6"},"Горячие Блюда",-1),W=(0,a.Uk)(" Горячие Блюда "),k=(0,a._)("div",{class:"text-h6"},"Десерты",-1),x=(0,a.Uk)(" Десерты "),I=(0,a._)("div",{class:"text-h6"},"Фирменные лимонады",-1),H=(0,a.Uk)(" Фирменные лимонады "),Z=(0,a._)("div",{class:"text-h6"},"Паста",-1),q=(0,a.Uk)(" Паста "),Q=(0,a._)("div",{class:"text-h6"},"Сендвичи",-1),V=(0,a.Uk)(" Сендвичи "),U=(0,a._)("div",{style:{color:"white"}},null,-1);function B(e,t,r,s,l,i){const n=(0,a.up)("q-tab"),o=(0,a.up)("q-tabs"),d=(0,a.up)("q-separator"),u=(0,a.up)("CardMenuVue"),c=(0,a.up)("q-tab-panel"),B=(0,a.up)("q-tab-panels"),D=(0,a.up)("q-card");return(0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("div",p,[(0,a.Wm)(D,{class:"bg-black text-white"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{modelValue:s.tab,"onUpdate:modelValue":t[0]||(t[0]=e=>s.tab=e),dense:"",class:"text-grey bg-black","active-color":"red","indicator-color":"red",align:"justify","narrow-indicator":""},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{name:"Бургер",label:"Бургеры"}),(0,a.Wm)(n,{name:"Горячие Закуски",label:"Горячие Закуски"}),(0,a.Wm)(n,{name:"Салаты",label:"Салаты"}),(0,a.Wm)(n,{name:"Первые Блюда",label:"Первые Блюда"}),(0,a.Wm)(n,{name:"Горячие Блюда",label:"Горячие Блюда"}),(0,a.Wm)(n,{name:"Десерты",label:"Десерты"}),(0,a.Wm)(n,{name:"Фирменные лимонады",label:"Фирменные лимонады"}),(0,a.Wm)(n,{name:"Паста",label:"Паста"}),(0,a.Wm)(n,{name:"Сендвичи",label:"Сендвичи"})])),_:1},8,["modelValue"]),(0,a.Wm)(d),(0,a.Wm)(B,{modelValue:s.tab,"onUpdate:modelValue":t[1]||(t[1]=e=>s.tab=e),animated:"",class:"bg-black text-white"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{name:"Бургер",id:"burger"},{default:(0,a.w5)((()=>[(0,a._)("div",g,[(0,a._)("div",h,[(0,a.Wm)(u,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:i.filterBurger,index:1},null,8,["title","price","Img","Structure","Category"])]),(0,a._)("div",f,[(0,a.Wm)(u,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:i.filterBurger,index:2},null,8,["title","price","Img","Structure","Category"])])])])),_:1}),(0,a.Wm)(c,{name:"Горячие Закуски",id:"snacks"},{default:(0,a.w5)((()=>[w,C])),_:1}),(0,a.Wm)(c,{name:"Салаты"},{default:(0,a.w5)((()=>[b,v])),_:1}),(0,a.Wm)(c,{name:"Первые Блюда"},{default:(0,a.w5)((()=>[y,_])),_:1}),(0,a.Wm)(c,{name:"Горячие Блюда"},{default:(0,a.w5)((()=>[S,W])),_:1}),(0,a.Wm)(c,{name:"Десерты"},{default:(0,a.w5)((()=>[k,x])),_:1}),(0,a.Wm)(c,{name:"Фирменные лимонады"},{default:(0,a.w5)((()=>[I,H])),_:1}),(0,a.Wm)(c,{name:"Паста"},{default:(0,a.w5)((()=>[Z,q])),_:1}),(0,a.Wm)(c,{name:"Сендвичи"},{default:(0,a.w5)((()=>[Q,V])),_:1})])),_:1},8,["modelValue"]),U])),_:1})])])}var D=r(4409),N=r.n(D),M=r(6735),O=r(4987);const P={props:{title:String,price:String,Structure:String,Category:String,Img:String},setup(){return{tab:(0,c.iH)("Бургер"),menus:(0,c.iH)([]),CategoryClick:(0,c.iH)("")}},async mounted(){O["default"].collection("Burger").onSnapshot((e=>{e.docChanges().forEach((e=>{const t=e.doc.data();"added"===e.type&&(console.log("New burger: ",t),this.menus.unshift(t)),"modified"===e.type&&(console.log("Modified burger: ",t),this.menus.unshift(t)),"removed"===e.type&&(console.log("Removed burger: ",t),this.menus.unshift(t))}))}))},computed:{filterBurger(){return N().find(this.menus,["Category",this.tab])}},watch:{CategoryClick(){}},components:{CardMenuVue:M.Z}};var T=r(1639),j=r(4458),A=r(7817),F=r(900),J=r(926),z=r(9800),R=r(4106),E=r(9984),G=r.n(E);const L=(0,T.Z)(P,[["render",B]]),K=L;G()(P,"components",{QCard:j.Z,QTabs:A.Z,QTab:F.Z,QSeparator:J.Z,QTabPanels:z.Z,QTabPanel:R.Z});const Y={setup(){return{searchQuery:(0,c.iH)(""),id:(0,c.iH)(""),title:(0,c.iH)(""),price:(0,c.iH)(""),sum:(0,c.iH)(0),Card:(0,c.iH)([]),selectedSort:(0,c.iH)(""),menus:(0,c.iH)([]),img:(0,c.iH)(""),Category:(0,c.iH)(null),Structure:(0,c.iH)("")}},async mounted(){if(localStorage.getItem("Card"))try{this.Card=JSON.parse(localStorage.getItem("Card"))}catch(e){localStorage.removeItem("Card")}O["default"].collection("Burger").onSnapshot((e=>{e.docChanges().forEach((e=>{const t=e.doc.data();"added"===e.type&&(console.log("New burger: ",t),this.menus.unshift(t)),"modified"===e.type&&console.log("Modified burger: ",t),"removed"===e.type&&console.log("Removed burger: ",t)}))}))},computed:{sortedMenus(){return[...this.menus].sort(((e,t)=>{var r;return null===(r=e[this.selectedSort])||void 0===r?void 0:r.localeCompare(t[this.selectedSort])}))},sortedAndSearchedMenus(){return this.sortedMenus.filter((e=>e.title.toLowerCase().includes(this.searchQuery.toLowerCase())))},parseTitle(){return N().map(this.menus,"title")},parsePrice(){return N().map(this.menus,"price")},parseStructure(){return N().map(this.menus,"structure")},parseImg(){return N().map(this.menus,"img")},parseCategory(){return N().map(this.menus,"Category")},parsedUidDoc(){return N().map(this.menus,"UidDoc")},parsedBurgerNew(){return N().map(this.menus,"burgerNew")},parsedBurgerPop(){return N().map(this.menus,"burgerPop")},filterCategory(){return N().filter(this.menus,{Category:"Category"})},filterBurger(){return N().find(this.menus,["Category","Бургер"])},filterSnacks(){return N().find(this.menus,["Category","Закуски"])}},methods:{persist(){this.Card.push({id:this.id,title:this.title,price:this.price}),this.saveCard()},saveCard(){const e=JSON.stringify(this.Card);localStorage.setItem("Card",e)},getId(e){return O["default"].collection("Burger").doc(e).get()}},components:{TabsApp:K}};var X=r(9885),$=r(6611),ee=r(2857);const te=(0,T.Z)(Y,[["render",u]]),re=te;G()(Y,"components",{QPage:X.Z,QInput:$.Z,QIcon:ee.Z})}}]);