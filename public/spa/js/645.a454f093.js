"use strict";(self["webpackChunk_1"]=self["webpackChunk_1"]||[]).push([[645],{6546:(e,t,r)=>{r.d(t,{Z:()=>D});r(702);var l=r(9835),i=r(1957),a=r(6970);const s=e=>((0,l.dD)("data-v-ee19401a"),e=e(),(0,l.Cn)(),e),u={class:"q-pa-md row items-start q-gutter-md"},o=["src"],c={class:"span-burger",style:{"word-wrap":"break-word"}},n=s((()=>(0,l._)("br",null,null,-1))),d={class:"fit row wrap justify-between"},m={class:"col-6 price",style:{overflow:"auto"}},g={class:"col-6",style:{overflow:"auto"}},p={class:"fit row wrap"},w={class:"col-4"},y={class:"col-3"},C={class:"col-2"},h={class:"q-pa-md q-gutter-sm"},f=s((()=>(0,l._)("div",{class:"text-h6 textGradient18"},"Состав",-1)));function S(e,t,r,s,S,b){const v=(0,l.up)("q-btn"),_=(0,l.up)("q-responsive"),I=(0,l.up)("q-input"),W=(0,l.up)("q-card-section"),k=(0,l.up)("q-card"),x=(0,l.up)("q-card-actions"),q=(0,l.up)("q-dialog"),H=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",u,[(0,l.Wm)(k,{class:"my-card bg-black text-white",onClick:t[2]||(t[2]=e=>!s.dialog),modelValue:s.id,"onUpdate:modelValue":t[3]||(t[3]=e=>s.id=e)},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(v,{onClick:b.stars,flat:"",icon:"star_border ",class:"fit row wrap justify-end items-end content-end"},null,8,["onClick"]),[[i.F8,!s.star]]),(0,l.wy)((0,l.Wm)(v,{onClick:b.stars,flat:"",icon:"star ",class:"fit row wrap justify-end items-end content-end"},null,8,["onClick"]),[[i.F8,s.star]]),(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[(0,l.Wm)(_,{ratio:1,class:"img"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:r.Img[r.index],alt:"",onClick:t[0]||(t[0]=(...e)=>b.OpenDialog&&b.OpenDialog(...e))},null,8,o)])),_:1}),(0,l._)("span",c,(0,a.zw)(r.title[r.index]),1),n,(0,l._)("div",d,[(0,l._)("div",m,(0,a.zw)(r.price[r.index])+" Р",1),(0,l._)("div",g,[(0,l.wy)((0,l.Wm)(v,{flat:"",icon:"add_box",onClick:b.persist},null,8,["onClick"]),[[i.F8,!s.add]])]),(0,l.wy)((0,l._)("div",p,[(0,l._)("div",w,[(0,l.Wm)(v,{flat:"",icon:"remove",color:"white",onClick:b.CounterMinus},null,8,["onClick"])]),(0,l._)("div",y,[(0,l.Wm)(I,{dense:"",dark:"",color:"red",outlined:"",modelValue:s.quantity,"onUpdate:modelValue":t[1]||(t[1]=e=>s.quantity=e),label:"",type:"number"},null,8,["modelValue"])]),(0,l._)("div",C,[(0,l.Wm)(v,{flat:"",icon:"add",color:"white",onClick:b.CounterPlus},null,8,["onClick"])])],512),[[i.F8,s.add]])])])),_:1})])),_:1},8,["modelValue"])]),(0,l._)("div",h,[(0,l.Wm)(q,{"bg-white":"",modelValue:s.alert,"onUpdate:modelValue":t[4]||(t[4]=e=>s.alert=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{class:"bg-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{"bg-white":""},{default:(0,l.w5)((()=>[f])),_:1}),(0,l.Wm)(W,{class:"q-pt-none textGradient18"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(r.Structure[r.index]),1)])),_:1}),(0,l.Wm)(x,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(v,{flat:"",label:"OK",color:"red"},null,512),[[H]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])],64)}var b=r(499),v=r(320);const _={props:{title:String,price:String,Structure:String,Category:String,Img:String,index:Number,toogle:String},setup(){return{dialog:(0,b.iH)(!1),id:(0,b.iH)(null),sum:(0,b.iH)(0),Card:(0,b.iH)([]),Menus:(0,b.iH)([]),star:(0,b.iH)(!1),alert:(0,b.iH)(!1),idfavourites:(0,b.iH)([]),add:(0,b.iH)(!1),quantity:(0,b.iH)(1)}},async mounted(){if(localStorage.getItem("Card"))try{this.Card=JSON.parse(localStorage.getItem("Card"))}catch(e){localStorage.removeItem("Card")}},methods:{OpenDialog(){this.alert=!this.alert},persist(){this.add=!0,this.id=(0,v.Z)(),this.Card.push({title:this.title[this.index],price:this.price[this.index],img:this.Img[this.index]}),this.saveCard()},saveCard(){const e=JSON.stringify(this.Card);localStorage.setItem("Card",e)},stars(){this.star=!this.star,this.idfavourites={id:this.id}},CounterPlus(){this.quantity++},CounterMinus(){this.quantity--}},components:{}};var I=r(1639),W=r(1517),k=r(4458),x=r(8879),q=r(3190),H=r(9893),B=r(6611),Z=r(7743),Q=r(1821),V=r(2146),U=r(9984),M=r.n(U);const P=(0,I.Z)(_,[["render",S],["__scopeId","data-v-ee19401a"]]),D=P;M()(_,"components",{QIntersection:W.Z,QCard:k.Z,QBtn:x.Z,QCardSection:q.Z,QResponsive:H.Z,QInput:B.Z,QDialog:Z.Z,QCardActions:Q.Z}),M()(_,"directives",{ClosePopup:V.Z})},1645:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ye});var l=r(9835);const i={class:"row"},a={class:"col-12"},s=(0,l._)("br",null,null,-1),u={class:"row"},o={class:"col-12"},c=(0,l._)("div",{style:{color:"white"}},null,-1);function n(e,t,r,n,d,m){const g=(0,l.up)("q-icon"),p=(0,l.up)("q-input"),w=(0,l.up)("TabsApp"),y=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(y,null,{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l._)("div",a,[(0,l.Wm)(p,{color:"red",dark:"",modelValue:n.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=e=>n.searchQuery=e),filled:"",type:"search",style:{color:"white"},placeholder:"Поиск"},{append:(0,l.w5)((()=>[(0,l.Wm)(g,{name:"search",style:{color:"white"}})])),_:1},8,["modelValue"])])]),s,(0,l._)("div",u,[(0,l._)("div",o,[(0,l.Wm)(w,{title:m.parseTitle,price:m.parsePrice,Img:m.parseImg,Structure:m.parseStructure,Category:m.parseCategory},null,8,["title","price","Img","Structure","Category"])])]),c])),_:1})}r(702),r(6727);var d=r(499);const m={class:"q-pa-xs"},g={class:"q-gutter-y-xs"},p={class:"row"},w={class:"col-6",style:{"word-wrap":"break-word"}},y={class:"col-6",style:{"word-wrap":"break-word"}},C={class:"col-6",style:{"word-wrap":"break-word"}},h={class:"col-6",style:{"word-wrap":"break-word"}},f={class:"col-6",style:{"word-wrap":"break-word"}},S={class:"col-6",style:{"word-wrap":"break-word"}},b={class:"col-6",style:{"word-wrap":"break-word"}},v={class:"col-6",style:{"word-wrap":"break-word"}},_={class:"col-6",style:{"word-wrap":"break-word"}},I={class:"col-6",style:{"word-wrap":"break-word"}},W={class:"col-6",style:{"word-wrap":"break-word"}},k={class:"col-6",style:{"word-wrap":"break-word"}},x={class:"col-6",style:{"word-wrap":"break-word"}},q={class:"col-6",style:{"word-wrap":"break-word"}},H={class:"col-6",style:{"word-wrap":"break-word"}},B={class:"col-6",style:{"word-wrap":"break-word"}},Z=(0,l._)("div",{class:"text-h6"},"Горячие Закуску",-1),Q=(0,l.Uk)(" Горячие Закуску "),V=(0,l._)("div",{class:"text-h6"},"Салаты",-1),U=(0,l.Uk)(" Салаты "),M=(0,l._)("div",{class:"text-h6"},'Первые Блюда"',-1),P=(0,l.Uk)(' Первые Блюда" '),D=(0,l._)("div",{class:"text-h6"},"Горячие Блюда",-1),N=(0,l.Uk)(" Горячие Блюда "),O=(0,l._)("div",{class:"text-h6"},"Десерты",-1),T=(0,l.Uk)(" Десерты "),j=(0,l._)("div",{class:"text-h6"},"Фирменные лимонады",-1),A=(0,l.Uk)(" Фирменные лимонады "),F=(0,l._)("div",{class:"text-h6"},"Паста",-1),J=(0,l.Uk)(" Паста "),z=(0,l._)("div",{class:"text-h6"},"Сендвичи",-1),R=(0,l.Uk)(" Сендвичи "),E=(0,l._)("div",{style:{color:"white"}},null,-1);function G(e,t,r,i,a,s){const u=(0,l.up)("q-tab"),o=(0,l.up)("q-tabs"),c=(0,l.up)("q-separator"),n=(0,l.up)("CardMenuVue"),d=(0,l.up)("q-tab-panel"),G=(0,l.up)("q-tab-panels"),L=(0,l.up)("q-card");return(0,l.wg)(),(0,l.iD)("div",m,[(0,l._)("div",g,[(0,l.Wm)(L,{class:"bg-black text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{modelValue:i.tab,"onUpdate:modelValue":t[0]||(t[0]=e=>i.tab=e),dense:"",class:"text-grey bg-black","active-color":"red","indicator-color":"red",align:"justify","narrow-indicator":""},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{name:"Бургер",label:"Бургеры"}),(0,l.Wm)(u,{name:"Горячие Закуски",label:"Горячие Закуски"}),(0,l.Wm)(u,{name:"Салаты",label:"Салаты"}),(0,l.Wm)(u,{name:"Первые Блюда",label:"Первые Блюда"}),(0,l.Wm)(u,{name:"Горячие Блюда",label:"Горячие Блюда"}),(0,l.Wm)(u,{name:"Десерты",label:"Десерты"}),(0,l.Wm)(u,{name:"Фирменные лимонады",label:"Фирменные лимонады"}),(0,l.Wm)(u,{name:"Паста",label:"Паста"}),(0,l.Wm)(u,{name:"Сендвичи",label:"Сендвичи"})])),_:1},8,["modelValue"]),(0,l.Wm)(c),(0,l.Wm)(G,{modelValue:i.tab,"onUpdate:modelValue":t[1]||(t[1]=e=>i.tab=e),animated:"",class:"bg-black text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{name:"Бургер",id:"burger"},{default:(0,l.w5)((()=>[(0,l._)("div",p,[(0,l._)("div",w,[(0,l.Wm)(n,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:0},null,8,["title","price","Img","Structure","Category"])]),(0,l._)("div",y,[(0,l.Wm)(n,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:1},null,8,["title","price","Img","Structure","Category"])]),(0,l._)("div",C,[(0,l.Wm)(n,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:2},null,8,["title","price","Img","Structure","Category"])]),(0,l._)("div",h,[(0,l.Wm)(n,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:3},null,8,["title","price","Img","Structure","Category"])]),(0,l._)("div",f,[(0,l.Wm)(n,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:4},null,8,["title","price","Img","Structure","Category"])]),(0,l._)("div",S,[(0,l.Wm)(n,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:5},null,8,["title","price","Img","Structure","Category"])]),(0,l._)("div",b,[(0,l.Wm)(n,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:6},null,8,["title","price","Img","Structure","Category"])]),(0,l._)("div",v,[(0,l.Wm)(n,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:7},null,8,["title","price","Img","Structure","Category"])]),(0,l._)("div",_,[(0,l.Wm)(n,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:8},null,8,["title","price","Img","Structure","Category"])]),(0,l._)("div",I,[(0,l.Wm)(n,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:9},null,8,["title","price","Img","Structure","Category"])]),(0,l._)("div",W,[(0,l.Wm)(n,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:10},null,8,["title","price","Img","Structure","Category"])]),(0,l._)("div",k,[(0,l.Wm)(n,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:11},null,8,["title","price","Img","Structure","Category"])]),(0,l._)("div",x,[(0,l.Wm)(n,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:12},null,8,["title","price","Img","Structure","Category"])]),(0,l._)("div",q,[(0,l.Wm)(n,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:13},null,8,["title","price","Img","Structure","Category"])]),(0,l._)("div",H,[(0,l.Wm)(n,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:14},null,8,["title","price","Img","Structure","Category"]),(0,l._)("div",B,[(0,l.Wm)(n,{title:r.title,price:r.price,Img:r.Img,Structure:r.Structure,Category:s.filterBurger,index:15},null,8,["title","price","Img","Structure","Category"])])])])])),_:1}),(0,l.Wm)(d,{name:"Горячие Закуски",id:"snacks"},{default:(0,l.w5)((()=>[Z,Q])),_:1}),(0,l.Wm)(d,{name:"Салаты"},{default:(0,l.w5)((()=>[V,U])),_:1}),(0,l.Wm)(d,{name:"Первые Блюда"},{default:(0,l.w5)((()=>[M,P])),_:1}),(0,l.Wm)(d,{name:"Горячие Блюда"},{default:(0,l.w5)((()=>[D,N])),_:1}),(0,l.Wm)(d,{name:"Десерты"},{default:(0,l.w5)((()=>[O,T])),_:1}),(0,l.Wm)(d,{name:"Фирменные лимонады"},{default:(0,l.w5)((()=>[j,A])),_:1}),(0,l.Wm)(d,{name:"Паста"},{default:(0,l.w5)((()=>[F,J])),_:1}),(0,l.Wm)(d,{name:"Сендвичи"},{default:(0,l.w5)((()=>[z,R])),_:1})])),_:1},8,["modelValue"]),E])),_:1})])])}var L=r(4409),K=r.n(L),Y=r(6546),X=r(4987);const $={props:{title:String,price:String,Structure:String,Category:String,Img:String},setup(){return{tab:(0,d.iH)("Бургер"),menus:(0,d.iH)([]),CategoryClick:(0,d.iH)("")}},async mounted(){X["default"].collection("Burger").onSnapshot((e=>{e.docChanges().forEach((e=>{const t=e.doc.data();"added"===e.type&&(console.log("New burger: ",t),this.menus.unshift(t)),"modified"===e.type&&(console.log("Modified burger: ",t),this.menus.unshift(t)),"removed"===e.type&&(console.log("Removed burger: ",t),this.menus.unshift(t))}))}))},computed:{filterBurger(){return K().find(this.menus,["Category",this.tab])}},watch:{CategoryClick(){}},components:{CardMenuVue:Y.Z}};var ee=r(1639),te=r(4458),re=r(7817),le=r(900),ie=r(926),ae=r(9800),se=r(4106),ue=r(9984),oe=r.n(ue);const ce=(0,ee.Z)($,[["render",G]]),ne=ce;oe()($,"components",{QCard:te.Z,QTabs:re.Z,QTab:le.Z,QSeparator:ie.Z,QTabPanels:ae.Z,QTabPanel:se.Z});const de={setup(){return{searchQuery:(0,d.iH)(""),id:(0,d.iH)(""),title:(0,d.iH)(""),price:(0,d.iH)(""),sum:(0,d.iH)(0),Card:(0,d.iH)([]),selectedSort:(0,d.iH)(""),menus:(0,d.iH)([]),img:(0,d.iH)(""),Category:(0,d.iH)(null),Structure:(0,d.iH)("")}},async mounted(){if(localStorage.getItem("Card"))try{this.Card=JSON.parse(localStorage.getItem("Card"))}catch(e){localStorage.removeItem("Card")}X["default"].collection("Burger").onSnapshot((e=>{e.docChanges().forEach((e=>{const t=e.doc.data();"added"===e.type&&(console.log("New burger: ",t),this.menus.unshift(t)),"modified"===e.type&&console.log("Modified burger: ",t),"removed"===e.type&&console.log("Removed burger: ",t)}))}))},computed:{sortedMenus(){return[...this.menus].sort(((e,t)=>{var r;return null===(r=e[this.selectedSort])||void 0===r?void 0:r.localeCompare(t[this.selectedSort])}))},sortedAndSearchedMenus(){return this.sortedMenus.filter((e=>e.title.toLowerCase().includes(this.searchQuery.toLowerCase())))},parseTitle(){return K().map(this.menus,"title")},parsePrice(){return K().map(this.menus,"price")},parseStructure(){return K().map(this.menus,"structure")},parseImg(){return K().map(this.menus,"img")},parseCategory(){return K().map(this.menus,"Category")},parsedUidDoc(){return K().map(this.menus,"UidDoc")},parsedBurgerNew(){return K().map(this.menus,"burgerNew")},parsedBurgerPop(){return K().map(this.menus,"burgerPop")},filterCategory(){return K().filter(this.menus,{Category:"Category"})},filterBurger(){return K().find(this.menus,["Category","Бургер"])},filterSnacks(){return K().find(this.menus,["Category","Закуски"])}},methods:{persist(){this.Card.push({id:this.id,title:this.title,price:this.price}),this.saveCard()},saveCard(){const e=JSON.stringify(this.Card);localStorage.setItem("Card",e)},getId(e){return X["default"].collection("Burger").doc(e).get()}},components:{TabsApp:ne}};var me=r(9885),ge=r(6611),pe=r(2857);const we=(0,ee.Z)(de,[["render",n]]),ye=we;oe()(de,"components",{QPage:me.Z,QInput:ge.Z,QIcon:pe.Z})}}]);