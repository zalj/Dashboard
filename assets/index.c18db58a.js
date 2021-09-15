var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,i=(e,o,n)=>o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,a=(t,a)=>{for(var r in a||(a={}))e.call(a,r)&&i(t,r,a[r]);if(o)for(var r of o(a))n.call(a,r)&&i(t,r,a[r]);return t};import{b as r,a as l,m as s}from"./index.7f9368ca.js";import{d as c,b as p,B as d,C as m,w as u,e as v,p as g,f,o as y,h as S,q as w,F as _,j,t as b,s as h}from"./element-plus.4b059272.js";var k=c({name:"JueJin",props:{componentSetting:{type:Object,required:!0}},setup(t){const e=p([]),o=p(!1),n=p(!1),i=async()=>{try{o.value=!0,n.value=!1;const{data:i,err_no:a}=await r(`${l}/api/transfer`,{target:"https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed",_noHeaders:1,client_type:2680,cursor:"0",id_type:2,limit:t.componentSetting.limit||10,sort_type:200});if(0!==a)throw new Error("Api server error");{const t=i.map((t=>{var e;const o=null==(e=null==t?void 0:t.item_info)?void 0:e.article_info;return{id:null==o?void 0:o.article_id,title:null==o?void 0:o.title,like:null==o?void 0:o.digg_count,view:null==o?void 0:o.view_count}}));e.value=t}}catch(i){n.value=!0,console.error(i)}finally{o.value=!1}};let a;function c(){i(),a&&window.clearInterval(a),a=window.setInterval((()=>{i()}),60*t.componentSetting.duration*1e3)}d((()=>c())),m((()=>window.clearInterval(a))),u((()=>[t.componentSetting.duration,t.componentSetting.limit]),(()=>c()));const g=v((()=>s(t.componentSetting.position)));return{logo:"https://sf3-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/logo.a7995ad.svg",list:e,positionCSS:g,loading:o,error:n}}});const x=h();g("data-v-320ca56e");const O={class:"juejin"},I={class:"logo"},C={key:0,class:"loading"},F={key:1,class:"error"},$={key:2,class:"list"},J={class:"title"},P={class:"like"};f();const q=x(((t,e,o,n,i,r)=>(y(),S("div",{class:"wrapper",style:a({fontSize:t.componentSetting.textFontSize+"px",color:t.componentSetting.textColor,textShadow:t.componentSetting.textShadow,padding:t.componentSetting.padding+"px",fontFamily:t.componentSetting.fontFamily},t.positionCSS)},[w("div",O,[w("div",I,[w("img",{src:t.logo,alt:"Juejin",style:{filter:`drop-shadow(${t.componentSetting.iconShadow})`}},null,12,["src"])]),t.loading?(y(),S("div",C,"Loading...")):t.error?(y(),S("div",F,"Something error!")):(y(),S("div",$,[(y(!0),S(_,null,j(t.list,(e=>(y(),S("div",{class:"list-item",key:e.id},[w("div",J,[w("a",{href:`https://juejin.cn/post/${e.id}`,target:"_blank",style:!t.$store.state.isLock&&"pointer-events: none"},b(e.title),13,["href"])]),w("div",P,"👍"+b(e.like),1)])))),128))]))])],4))));k.render=q,k.__scopeId="data-v-320ca56e";export default k;
