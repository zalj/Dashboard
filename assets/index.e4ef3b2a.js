import{U as e}from"./Unset.da40a4d4.js";import{_ as t,d as s,L as r,b as n,k as a,c as o,x as i,n as p,o as c}from"./index.fe526e92.js";const d=s({name:"Iframe",components:{Unset:e},props:{element:{type:Object,required:!0},componentSetting:{type:Object,required:!0}},setup:e=>({url:r((()=>/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(e.componentSetting.url)?e.componentSetting.url:"http://"+e.componentSetting.url))})}),m=["src"],l={key:2,class:"editing-mask"};var u=t(d,[["render",function(e,t,s,r,d,u){const f=n("Unset");return c(),a("div",{class:"wrapper",style:p({borderRadius:e.element.borderRadius+"px"})},[e.componentSetting.url?(c(),a("iframe",{key:0,src:e.url,style:{width:"100%",height:"100%"},frameborder:"0"},null,8,m)):(c(),o(f,{key:1,tips:"💫IFrame路径丢失，请进行配置"})),e.$store.state.isLock?i("",!0):(c(),a("div",l))],4)}],["__scopeId","data-v-1bc02ec2"]]);export{u as default};
