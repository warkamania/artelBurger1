"use strict";(self["webpackChunk_1"]=self["webpackChunk_1"]||[]).push([[512],{4492:(e,t,r)=>{r.d(t,{Z:()=>B});r(702);var a=r(9835),i=r(1957),l=r(6970);const s=e=>((0,a.dD)("data-v-420e0e44"),e=e(),(0,a.Cn)(),e),u={class:"q-pa-md row items-start q-gutter-md"},o=["src"],n={class:"span-burger",style:{"white-space":"nowrap"}},c=s((()=>(0,a._)("br",null,null,-1))),d={class:"fit row wrap justify-between"},m={class:"col-6 price",style:{overflow:"auto"}},g={class:"col-6",style:{overflow:"auto"}},p={class:"q-pa-md q-gutter-sm"},h=s((()=>(0,a._)("div",{class:"text-h6 textGradient18"},"Состав",-1)));function f(e,t,r,s,f,C){const y=(0,a.up)("q-btn"),w=(0,a.up)("q-responsive"),S=(0,a.up)("q-card-section"),v=(0,a.up)("q-card"),_=(0,a.up)("q-card-actions"),b=(0,a.up)("q-dialog"),I=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",u,[(0,a.Wm)(v,{class:"my-card bg-black text-white",onClick:t[1]||(t[1]=e=>!s.dialog),modelValue:s.id,"onUpdate:modelValue":t[2]||(t[2]=e=>s.id=e)},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(y,{onClick:C.stars,flat:"",icon:"star_border ",class:"fit row wrap justify-end items-end content-end"},null,8,["onClick"]),[[i.F8,!s.star]]),(0,a.wy)((0,a.Wm)(y,{onClick:C.stars,flat:"",icon:"star ",class:"fit row wrap justify-end items-end content-end"},null,8,["onClick"]),[[i.F8,s.star]]),(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{ratio:1},{default:(0,a.w5)((()=>[(0,a._)("img",{src:r.Img[r.index],alt:"",class:"img",onClick:t[0]||(t[0]=(...e)=>C.OpenDialog&&C.OpenDialog(...e))},null,8,o)])),_:1}),(0,a._)("span",n,(0,l.zw)(r.title[r.index]),1),c,(0,a._)("div",d,[(0,a._)("div",m,(0,l.zw)(r.price[r.index])+" Р",1),(0,a._)("div",g,[(0,a.wy)((0,a.Wm)(y,{flat:"",icon:"add_box",onClick:C.persist},null,8,["onClick"]),[[i.F8,!s.add]]),(0,a.wy)((0,a.Wm)(y,{flat:"",icon:"done",color:"green"},null,512),[[i.F8,s.add]])])])])),_:1})])),_:1},8,["modelValue"])]),(0,a._)("div",p,[(0,a.Wm)(b,{"bg-white":"",modelValue:s.alert,"onUpdate:modelValue":t[3]||(t[3]=e=>s.alert=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{class:"bg-white"},{default:(0,a.w5)((()=>[(0,a.Wm)(S,{"bg-white":""},{default:(0,a.w5)((()=>[h])),_:1}),(0,a.Wm)(S,{class:"q-pt-none textGradient18"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(r.Structure[r.index]),1)])),_:1}),(0,a.Wm)(_,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(y,{flat:"",label:"OK",color:"red"},null,512),[[I]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])],64)}var C=r(499),y=r(320);const w={props:{title:String,price:String,Structure:String,Category:String,Img:String,index:Number,toogle:String},setup(){return{dialog:(0,C.iH)(!1),id:(0,C.iH)(null),sum:(0,C.iH)(0),Card:(0,C.iH)([]),Menus:(0,C.iH)([]),star:(0,C.iH)(!1),alert:(0,C.iH)(!1),idfavourites:(0,C.iH)([]),add:(0,C.iH)(!1)}},async mounted(){if(localStorage.getItem("Card"))try{this.Card=JSON.parse(localStorage.getItem("Card"))}catch(e){localStorage.removeItem("Card")}},methods:{OpenDialog(){this.alert=!this.alert},persist(){this.add=!0,this.id=(0,y.Z)(),this.Card.push({title:this.title[this.index],price:this.price[this.index],img:this.Img[this.index]}),this.saveCard()},saveCard(){const e=JSON.stringify(this.Card);localStorage.setItem("Card",e)},stars(){this.star=!this.star,this.idfavourites={id:this.id}}},components:{}};var S=r(1639),v=r(1517),_=r(4458),b=r(8879),I=r(3190),W=r(9893),x=r(7743),k=r(1821),H=r(2146),Z=r(9984),q=r.n(Z);const Q=(0,S.Z)(w,[["render",f],["__scopeId","data-v-420e0e44"]]),B=Q;q()(w,"components",{QIntersection:v.Z,QCard:_.Z,QBtn:b.Z,QCardSection:I.Z,QResponsive:W.Z,QDialog:x.Z,QCardActions:k.Z}),q()(w,"directives",{ClosePopup:H.Z})},2512:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ne});var a=r(9835);const i={class:"row"},l={class:"col-12"},s=(0,a._)("br",null,null,-1),u={class:"row"},o={class:"col-12"},n=(0,a._)("div",{style:{color:"white"}},null,-1);function c(e,t,r,c,d,m){const g=(0,a.up)("q-icon"),p=(0,a.up)("q-input"),h=(0,a.up)("TabsApp"),f=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(f,null,{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a._)("div",l,[(0,a.Wm)(p,{color:"red",dark:"",modelValue:c.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=e=>c.searchQuery=e),filled:"",type:"search",style:{color:"white"},placeholder:"Поиск"},{append:(0,a.w5)((()=>[(0,a.Wm)(g,{name:"search",style:{color:"white"}})])),_:1},8,["modelValue"])])]),s,(0,a._)("div",u,[(0,a._)("div",o,[(0,a.Wm)(h,{title:m.parseTitle,price:m.parsePrice,Img:m.parseImg,Structure:m.parseStructure,Category:m.parseCategory},null,8,["title","price","Img","Structure","Category"])])]),n])),_:1})}r(702),r(6727);var d=r(499);const m={class:"q-pa-xs"},g={class:"q-gutter-y-xs"},p={class:"row"},h={class:"col-6"},f={class:"col-6"},C={class:"col-6"},y={class:"col-6"},w={class:"col-6"},S={class:"col-6"},v={class:"col-6"},_={class:"col-6"},b={class:"col-6"},I=(0,a._)("div",{class:"text-h6"},"Горячие Закуску",-1),W=(0,a.Uk)(" Горячие Закуску "),x=(0,a._)("div",{class:"text-h6"},"Салаты",-1),k=(0,a.Uk)(" Салаты "),H=(0,a._)("div",{class:"text-h6"},'Первые Блюда"',-1),Z=(0,a.Uk)(' Первые Блюда" '),q=(0,a._)("div",{class:"text-h6"},"Горячие Блюда",-1),Q=(0,a.Uk)(" Горячие Блюда "),B=(0,a._)("div",{class:"text-h6"},"Десерты",-1),V=(0,a.Uk)(" Десерты "),U=(0,a._)("div",{class:"text-h6"},"Фирменные лимонады",-1),D=(0,a.Uk)(" Фирменные лимонады "),N=(0,a._)("div",{class:"text-h6"},"Паста",-1),M=(0,a.Uk)(" Паста "),O=(0,a._)("div",{class:"text-h6"},"Сендвичи",-1),P=(0,a.Uk)(" Сендвичи "),T=(0,a._)("div",{style:{color:"white"}},null,-1);function j(e,t,r,i,l,s){const u=(0,a.up)("q-tab"),o=(0,a.up)("q-tabs"),n=(0,a.up)("q-separator"),c=(0,a.up)("CardMenuVue"),d=(0,a.up)("q-tab-panel"),j=(0,a.up)("q-tab-panels"),A=(0,a.up)("q-card");return(0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("div",g,[(0,a.Wm)(A,{class:"bg-black text-white"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{modelValue:i.tab,"onUpdate:modelValue":t[0]||(t[0]=e=>i.tab=e),dense:"",class:"text-grey bg-black","active-color":"red","indicator-color":"red",align:"justify","narrow-indicator":""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:"Бургер",label:"Бургеры"}),(0,a.Wm)(u,{name:"Горячие Закуски",label:"Горячие Закуски"}),(0,a.Wm)(u,{name:"Салаты",label:"Салаты"}),(0,a.Wm)(u,{name:"Первые Блюда",label:"Первые Блюда"}),(0,a.Wm)(u,{name:"Горячие Блюда",label:"Горячие Блюда"}),(0,a.Wm)(u,{name:"Десерты",label:"Десерты"}),(0,a.Wm)(u,{name:"Фирменные лимонады",label:"Фирменные лимонады"}),(0,a.Wm)(u,{name:"Паста",label:"Паста"}),(0,a.Wm)(u,{name:"Сендвичи",label:"Сендвичи"})])),_:1},8,["modelValue"]),(0,a.Wm)(n),(0,a.Wm)(j,{modelValue:i.tab,"onUpdate:modelValue":t[1]||(t[1]=e=>i.tab=e),animated:"",class:"bg-black text-white"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{name:"Бургер",id:"burger"},{default:(0,a.w5)((()=>[(0,a._)("div",p,[(0,a._)("div",h,[(0,a.Wm)(c,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:1},null,8,["title","price","Img","Structure","Category"])]),(0,a._)("div",f,[(0,a.Wm)(c,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:2},null,8,["title","price","Img","Structure","Category"])]),(0,a._)("div",C,[(0,a.Wm)(c,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:3},null,8,["title","price","Img","Structure","Category"])]),(0,a._)("div",y,[(0,a.Wm)(c,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:4},null,8,["title","price","Img","Structure","Category"])]),(0,a._)("div",w,[(0,a.Wm)(c,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:5},null,8,["title","price","Img","Structure","Category"])]),(0,a._)("div",S,[(0,a.Wm)(c,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:6},null,8,["title","price","Img","Structure","Category"])]),(0,a._)("div",v,[(0,a.Wm)(c,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:7},null,8,["title","price","Img","Structure","Category"])]),(0,a._)("div",_,[(0,a.Wm)(c,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:8},null,8,["title","price","Img","Structure","Category"])]),(0,a._)("div",b,[(0,a.Wm)(c,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:9},null,8,["title","price","Img","Structure","Category"])])])])),_:1}),(0,a.Wm)(d,{name:"Горячие Закуски",id:"snacks"},{default:(0,a.w5)((()=>[I,W])),_:1}),(0,a.Wm)(d,{name:"Салаты"},{default:(0,a.w5)((()=>[x,k])),_:1}),(0,a.Wm)(d,{name:"Первые Блюда"},{default:(0,a.w5)((()=>[H,Z])),_:1}),(0,a.Wm)(d,{name:"Горячие Блюда"},{default:(0,a.w5)((()=>[q,Q])),_:1}),(0,a.Wm)(d,{name:"Десерты"},{default:(0,a.w5)((()=>[B,V])),_:1}),(0,a.Wm)(d,{name:"Фирменные лимонады"},{default:(0,a.w5)((()=>[U,D])),_:1}),(0,a.Wm)(d,{name:"Паста"},{default:(0,a.w5)((()=>[N,M])),_:1}),(0,a.Wm)(d,{name:"Сендвичи"},{default:(0,a.w5)((()=>[O,P])),_:1})])),_:1},8,["modelValue"]),T])),_:1})])])}var A=r(4409),F=r.n(A),J=r(4492),z=r(4987);const R={props:{title:String,price:String,Structure:String,Category:String,Img:String},setup(){return{tab:(0,d.iH)("Бургер"),menus:(0,d.iH)([]),CategoryClick:(0,d.iH)("")}},async mounted(){z["default"].collection("Burger").onSnapshot((e=>{e.docChanges().forEach((e=>{const t=e.doc.data();"added"===e.type&&(console.log("New burger: ",t),this.menus.unshift(t)),"modified"===e.type&&(console.log("Modified burger: ",t),this.menus.unshift(t)),"removed"===e.type&&(console.log("Removed burger: ",t),this.menus.unshift(t))}))}))},computed:{filterBurger(){return F().find(this.menus,["Category",this.tab])}},watch:{CategoryClick(){}},components:{CardMenuVue:J.Z}};var E=r(1639),G=r(4458),L=r(7817),K=r(900),Y=r(926),X=r(9800),$=r(4106),ee=r(9984),te=r.n(ee);const re=(0,E.Z)(R,[["render",j]]),ae=re;te()(R,"components",{QCard:G.Z,QTabs:L.Z,QTab:K.Z,QSeparator:Y.Z,QTabPanels:X.Z,QTabPanel:$.Z});const ie={setup(){return{searchQuery:(0,d.iH)(""),id:(0,d.iH)(""),title:(0,d.iH)(""),price:(0,d.iH)(""),sum:(0,d.iH)(0),Card:(0,d.iH)([]),selectedSort:(0,d.iH)(""),menus:(0,d.iH)([]),img:(0,d.iH)(""),Category:(0,d.iH)(null),Structure:(0,d.iH)("")}},async mounted(){if(localStorage.getItem("Card"))try{this.Card=JSON.parse(localStorage.getItem("Card"))}catch(e){localStorage.removeItem("Card")}z["default"].collection("Burger").onSnapshot((e=>{e.docChanges().forEach((e=>{const t=e.doc.data();"added"===e.type&&(console.log("New burger: ",t),this.menus.unshift(t)),"modified"===e.type&&console.log("Modified burger: ",t),"removed"===e.type&&console.log("Removed burger: ",t)}))}))},computed:{sortedMenus(){return[...this.menus].sort(((e,t)=>{var r;return null===(r=e[this.selectedSort])||void 0===r?void 0:r.localeCompare(t[this.selectedSort])}))},sortedAndSearchedMenus(){return this.sortedMenus.filter((e=>e.title.toLowerCase().includes(this.searchQuery.toLowerCase())))},parseTitle(){return F().map(this.menus,"title")},parsePrice(){return F().map(this.menus,"price")},parseStructure(){return F().map(this.menus,"structure")},parseImg(){return F().map(this.menus,"img")},parseCategory(){return F().map(this.menus,"Category")},parsedUidDoc(){return F().map(this.menus,"UidDoc")},parsedBurgerNew(){return F().map(this.menus,"burgerNew")},parsedBurgerPop(){return F().map(this.menus,"burgerPop")},filterCategory(){return F().filter(this.menus,{Category:"Category"})},filterBurger(){return F().find(this.menus,["Category","Бургер"])},filterSnacks(){return F().find(this.menus,["Category","Закуски"])}},methods:{persist(){this.Card.push({id:this.id,title:this.title,price:this.price}),this.saveCard()},saveCard(){const e=JSON.stringify(this.Card);localStorage.setItem("Card",e)},getId(e){return z["default"].collection("Burger").doc(e).get()}},components:{TabsApp:ae}};var le=r(9885),se=r(6611),ue=r(2857);const oe=(0,E.Z)(ie,[["render",c]]),ne=oe;te()(ie,"components",{QPage:le.Z,QInput:se.Z,QIcon:ue.Z})}}]);