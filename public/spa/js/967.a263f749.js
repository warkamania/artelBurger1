(self["webpackChunk_1"]=self["webpackChunk_1"]||[]).push([[967],{3744:(t,e,s)=>{"use strict";s.d(e,{A:()=>l});var a=s(1809);const l=(0,a.Q_)("counter",{state:()=>({quantity:1,options:{1:"котлета из мраморной говядины (+90 ₽)",2:"котлета свиная (+80 ₽)",3:"котлета куриная (+70 ₽)",4:"сыр Чеддер (+30 ₽)",5:"окорок прошутто (+80 ₽)",6:"яйцо на гриле (+30 ₽)",7:"перец халапеньо (+50 ₽)",8:"бекон (+70 ₽)",9:"соус шрирача (+50 ₽)"},sauce:{1:"Томатный соус",2:"Сливочный соус"},menu:"",summa:0}),actions:{increment(t){t.quantity++},dicrement(t){t.quantity--},clickMenu(t){t.menu="Меню"}}})},7251:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>dt});var a=s(9835),l=s(6970),i=s(1957);const r=t=>((0,a.dD)("data-v-a3d91866"),t=t(),(0,a.Cn)(),t),n={class:"q-pa-md row items-start"},o={class:"col-12",id:"id"},d={class:"row"},c={class:"col-10 text-white text-h6"},u={"col-2":""},m={class:"row"},h={class:"col-4"},p=["src"],C={class:"col-8 text-white text-h6"},w={class:"row"},_={class:"col-2"},y={class:"col-2"},g={class:"col-2"},f=r((()=>(0,a._)("div",{class:"col-3 text-white text-h6"},"Цена:",-1))),v={class:"col-3 price"},b={class:"fit row wrap items-end content-end justify-end"},k=r((()=>(0,a._)("div",{class:"col-9",style:{color:"white","font-size":"25px"}}," Стоимость заказ: ",-1))),q={class:"col-3 price"},W={class:"fit row wrap items-end content-end justify-end"},V=r((()=>(0,a._)("div",{class:"col-9 textGradient12",style:{"font-size":"22px"}}," начислим бонусов: ",-1))),x={class:"col-3 textGradient12",style:{"font-size":"22px"}},O=r((()=>(0,a._)("br",null,null,-1))),H={class:"fit row wrap justify-center items-end self-end"},S=(0,a.Uk)("Оформить заказ"),I=(0,a.Uk)(" `` "),Z={class:"row"},Q={class:"col-12"},U=r((()=>(0,a._)("br",null,null,-1))),j=r((()=>(0,a._)("br",null,null,-1))),D={class:"fit row wrap justify-center items-end self-end"},z=(0,a.Uk)("Отправить"),P={class:"row"},M={class:"col-12"},N=r((()=>(0,a._)("img",{src:"check_circle_outline_black_48dp.svg",alt:"",class:"fit row justify-center"},null,-1))),T=r((()=>(0,a._)("h5",{style:{color:"white"}},"Ваш заказ принят",-1)));function J(t,e,s,r,J,B){const A=(0,a.up)("q-btn"),G=(0,a.up)("q-input"),E=(0,a.up)("q-card-section"),F=(0,a.up)("q-card"),K=(0,a.up)("q-intersection"),L=(0,a.up)("q-icon"),R=(0,a.up)("q-select"),Y=(0,a.up)("q-dialog"),X=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(X,null,{default:(0,a.w5)((()=>[(0,a._)("div",n,[(0,a._)("div",o,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.Cards,((t,s)=>((0,a.wg)(),(0,a.j4)(K,{key:t,once:"",transition:"scale"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(F,{class:"my-card bg-black"},{default:(0,a.w5)((()=>[(0,a._)("div",d,[(0,a._)("div",c,(0,l.zw)(s+1),1),(0,a._)("div",u,[(0,a.Wm)(A,{flat:"",icon:"close",class:"items-end",color:"white",onClick:B.deleteCard},null,8,["onClick"])])]),(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[(0,a._)("div",m,[(0,a._)("div",h,[(0,a._)("img",{src:B.mapImg[s],class:"",alt:""},null,8,p)]),(0,a._)("div",C,(0,l.zw)(B.mapTitles[s]),1)]),(0,a._)("div",w,[(0,a._)("div",_,[(0,a.Wm)(A,{flat:"",icon:"remove",color:"white",onClick:B.CounterMinus},null,8,["onClick"])]),(0,a._)("div",y,[(0,a.Wm)(G,{dense:"",dark:"",color:"red",outlined:"",modelValue:B.quantitys,"onUpdate:modelValue":e[0]||(e[0]=t=>B.quantitys=t),type:"number",class:"fit row wrap justify-center"},null,8,["modelValue"])]),(0,a._)("div",g,[(0,a.Wm)(A,{flat:"",icon:"add",color:"white",onClick:B.CounterPlus},null,8,["onClick"])]),f,(0,a._)("div",v,(0,l.zw)(B.mapPrice[s]*B.quantitys)+" р",1)])])),_:2},1024)])),_:2},1536),[[i.F8,r.Open]])])),_:2},1024)))),128))])]),(0,a._)("div",b,[k,(0,a._)("div",q,(0,l.zw)(B.sum)+" р",1)]),(0,a._)("div",W,[V,(0,a._)("div",x,"+ "+(0,l.zw)(B.Bonus),1)]),O,(0,a._)("div",H,[(0,a.Wm)(A,{color:"red",onClick:e[1]||(e[1]=t=>r.alert=!0)},{default:(0,a.w5)((()=>[S])),_:1})]),I,(0,a.Wm)(Y,{modelValue:r.alert,"onUpdate:modelValue":e[6]||(e[6]=t=>r.alert=t)},{default:(0,a.w5)((()=>[(0,a._)("div",Z,[(0,a._)("div",Q,[(0,a.Wm)(F,null,{default:(0,a.w5)((()=>[(0,a.Wm)(E,{class:"bg-black"},{default:(0,a.w5)((()=>[(0,a.Wm)(G,{dark:"",standout:"","bottom-slots":"",modelValue:r.adres,"onUpdate:modelValue":e[3]||(e[3]=t=>r.adres=t),label:"Адрес доставки",counter:"",readonly:t.readonly,disable:t.disable,color:"red"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(L,{name:"place"})])),append:(0,a.w5)((()=>[(0,a.Wm)(L,{name:"close",onClick:e[2]||(e[2]=e=>t.text=""),class:"cursor-pointer"})])),_:1},8,["modelValue","readonly","disable"]),U,(0,a.Wm)(G,{type:"tel",dark:"",standout:"","bottom-slots":"",modelValue:r.tel,"onUpdate:modelValue":e[4]||(e[4]=t=>r.tel=t),label:"Номер телефона",counter:"",readonly:t.readonly,disable:t.disable,color:"red"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(L,{name:"phone"})])),_:1},8,["modelValue","readonly","disable"]),(0,a.Wm)(R,{dark:"",modelValue:r.payment,"onUpdate:modelValue":e[5]||(e[5]=t=>r.payment=t),options:r.options,label:"Способ оплаты",color:"red"},null,8,["modelValue","options"]),j,(0,a._)("div",D,[(0,a.Wm)(A,{color:"red",onClick:B.addCard},{default:(0,a.w5)((()=>[z])),_:1},8,["onClick"])])])),_:1})])),_:1})])])])),_:1},8,["modelValue"]),(0,a.Wm)(Y,{modelValue:r.Order,"onUpdate:modelValue":e[7]||(e[7]=t=>r.Order=t)},{default:(0,a.w5)((()=>[(0,a._)("div",P,[(0,a._)("div",M,[(0,a.Wm)(F,null,{default:(0,a.w5)((()=>[(0,a.Wm)(E,{class:"bg-black"},{default:(0,a.w5)((()=>[N,T])),_:1})])),_:1})])])])),_:1},8,["modelValue"])])),_:1})}var B=s(499),A=(s(4987),s(9981)),G=s.n(A),E=s(3744),F=(s(1470),s(4409)),K=s.n(F);const L={setup(){const t=(0,E.A)(),e=()=>t.increment(),s=()=>t.dicrement();return{alert:(0,B.iH)(!1),payment:(0,B.iH)(""),options:["Онлайн","Картой при получении","Наличными при получении"],Order:(0,B.iH)(!1),tel:(0,B.iH)(""),adres:(0,B.iH)(""),menu:(0,B.iH)([]),count:(0,B.iH)(null),number:(0,B.iH)(0),title:(0,B.iH)(""),price:(0,B.iH)(null),id:(0,B.iH)(null),quantity:(0,B.iH)(1),Open:(0,B.iH)(!0),Cards:(0,B.iH)([]),date:(0,B.iH)(Date),store:t,incrementCount:e,decrementCount:s}},async mounted(){if(localStorage.getItem("Card"))try{this.Cards=JSON.parse(localStorage.getItem("Card"))}catch(t){localStorage.removeItem("Card")}this.store.summa=this.sum},updated(){if(localStorage.getItem("Card"))try{this.Cards=JSON.parse(localStorage.getItem("Card"))}catch(t){localStorage.removeItem("Card")}this.store.summa=this.sum},watch:{sum1(){this.store.summa=this.sum}},computed:{numberOrder(){const t=this.number.length+1;return t},parseTitle(){return this.Cards.length>0?this.Cards[0].title:""},parseImg(){return this.Cards.length>0?this.Cards[0].img:""},parsePrice(){return Math.floor(this.Cards.length>0?this.Cards[0].price:"")},DataNow(){return(new Date).toLocaleString("ru-RU",{timeZone:"Europe/Moscow"})},Bonus(){return Math.round(this.parsePrice*this.Cards.length*.03)},quantitys(){return this.store.quantity},adds(){return this.Cards.length>0?this.Cards.options:""},option(){return this.Cards.length>0?this.Cards[0].option:""},sum(){return Math.floor(this.mapPrice[1]*this.Cards.length*this.quantitys)},indexx(){for(const t=0;this.Cards[t].length>5;t++)console.log(t);return this.indexx},mapTitles(){return K().map(this.Cards,"title")},mapPrice(){return K().map(this.Cards,"price")},mapImg(){return K().map(this.Cards,"img")}},methods:{Close(){this.Open=!1},CounterPlus(){this.store.quantity++},CounterMinus(){this.store.quantity--,0==this.quantitys&&this.deleteCard()},OpdenOrder(){},persist(){this.Cards.push({tel:this.tel,adres:this.adres,payment:this.payment,quantity:this.quantity,numberOrder:this.numberOrder,options:this.adds}),this.saveCard(),setTimeout((()=>{this.deleteCard()}),1e4)},saveCard(){const t=JSON.stringify(this.Cards);localStorage.setItem("Card",t)},deleteCard(){const t=JSON.stringify(this.Cards);localStorage.clear("Card",t),this.Cards=[],this.Open=!1},async addCard(){this.adres,this.quantity,this.payment,this.sum,this.tel,this.parseTitle,this.DataNow,this.option,this.adds;const t=!0,e="Наименование: "+this.parseTitle+",   Колличество:  "+this.quantity+"\nОплата:  "+this.payment+",   Сумма:  "+this.sum+"\n Адрес:  "+this.adres+",   Телефон:   "+this.tel+",   Дата:   "+this.DataNow;let s={to:"warkamania5@yandex.ru",subject:"Доставка",body:e},a=await G().post("http://80.240.250.157:1728/send-email",s,{crossDomain:t}),l=a.data1;console.log(l),this.deleteCard(),this.newCurdContent="",console.log("Корзина  сохранена"),this.Order=!0,this.alert=!1},idd(){}}};var R=s(1639),Y=s(9885),X=s(1517),$=s(4458),tt=s(8879),et=s(3190),st=s(6611),at=s(7743),lt=s(2857),it=s(6764),rt=s(9984),nt=s.n(rt);const ot=(0,R.Z)(L,[["render",J],["__scopeId","data-v-a3d91866"]]),dt=ot;nt()(L,"components",{QPage:Y.Z,QIntersection:X.Z,QCard:$.Z,QBtn:tt.Z,QCardSection:et.Z,QInput:st.Z,QDialog:at.Z,QIcon:lt.Z,QSelect:it.Z})},4654:()=>{}}]);