"use strict";(self["webpackChunk_1"]=self["webpackChunk_1"]||[]).push([[581],{6581:(e,l,t)=>{t.r(l),t.d(l,{default:()=>y});var n=t(9835);const u={class:"row q-pa-md"},a={class:"col-12"},o={class:"q-pa-md",style:{"max-width":"400px"}},s=(0,n.Uk)("Регистрация");function r(e,l,t,r,d,i){const m=(0,n.up)("q-input"),c=(0,n.up)("q-btn"),p=(0,n.up)("router-link"),f=(0,n.up)("q-form"),g=(0,n.up)("q-card-section"),w=(0,n.up)("q-card"),b=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(b,null,{default:(0,n.w5)((()=>[(0,n._)("div",u,[(0,n._)("div",a,[(0,n.Wm)(w,{"bg-white":""},{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n._)("div",o,[(0,n.Wm)(f,{onSubmit:r.onSubmit,onReset:r.onReset,class:"q-gutter-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{type:"login",filled:"",modelValue:r.name,"onUpdate:modelValue":l[0]||(l[0]=e=>r.name=e),label:"Логин",hint:"Имя","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста введите логин"]},null,8,["modelValue","rules"]),(0,n.Wm)(m,{filled:"",type:"password",modelValue:r.age,"onUpdate:modelValue":l[1]||(l[1]=e=>r.age=e),label:"Пароль ","lazy-rules":"",rules:[e=>null!==e&&""!==e||"введите пароль"]},null,8,["modelValue","rules"]),(0,n._)("div",null,[(0,n.Wm)(c,{label:"Войти",type:"submit",color:"red"}),(0,n.Wm)(c,{label:"Сбросить",type:"reset",color:"red",flat:"",class:"q-ml-sm"})]),(0,n.Wm)(p,{to:"RegistrApp"},{default:(0,n.w5)((()=>[s])),_:1})])),_:1},8,["onSubmit","onReset"])])])),_:1})])),_:1})])])])),_:1})}var d=t(1446),i=t(499);const m={setup(){const e=(0,d.Z)(),l=(0,i.iH)(null),t=(0,i.iH)(null),n=(0,i.iH)(!1);return{name:l,age:t,accept:n,onSubmit(){!0!==n.value?e.notify({color:"red-5",textColor:"white",icon:"warning",message:"You need to accept the license and terms first"}):e.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Submitted"})},onReset(){l.value=null,t.value=null,n.value=!1}}}};var c=t(1639),p=t(9885),f=t(4458),g=t(3190),w=t(8326),b=t(6611),_=t(8879),v=t(9984),h=t.n(v);const q=(0,c.Z)(m,[["render",r]]),y=q;h()(m,"components",{QPage:p.Z,QCard:f.Z,QCardSection:g.Z,QForm:w.Z,QInput:b.Z,QBtn:_.Z})}}]);