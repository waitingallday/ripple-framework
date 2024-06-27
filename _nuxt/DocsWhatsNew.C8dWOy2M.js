import{d as v,aq as N,J as L,b as l,c as a,E as r,f as c,e as p,n as b,t as k,G as f,F as R,W as E,w as m,D as I,g as y,aC as S}from"./entry.BsW9RMHw.js";import{_ as w}from"./RplIcon.vue.Bj30mq1S.js";import{_ as W}from"./RplList.vue.Bv6W_T3l.js";import{_ as H}from"./RplButton.css.CrBKybwm.js";import{_ as T}from"./RplTextLink.css.DgSdFLfE.js";import{u as B}from"./useRippleEvent.DrrImATz.js";import{_ as V}from"./_plugin-vue_export-helper.DlAUqK2U.js";import"./RplLink.vue.B_BDDWAs.js";const z={class:"rpl-header"},D={key:0,class:"rpl-header__behind rpl-u-screen-only"},F={class:"rpl-container"},q={class:"rpl-grid"},G={key:0,class:"rpl-header__upper"},J={class:"rpl-header__body"},j={class:"rpl-header__content"},A={key:1,class:"rpl-header__lower"},K={key:0,class:"rpl-header__aside rpl-col-12 rpl-col-4-m rpl-col-start-9-m"},M=v({__name:"RplHeader",props:{fullWidth:{type:Boolean,default:!1},limitContent:{type:Boolean,default:!1},hasTitle:{type:Boolean},hasSidebar:{type:Boolean},pageBackground:{default:"default"}},setup(_){const i=_,o=N(),n=L(()=>({"rpl-header__main":!0,"rpl-col-12":!0,"rpl-col-7-m":!i.fullWidth&&(o.aside||i.limitContent),"rpl-col-10-m":!i.fullWidth&&!o.aside&&!i.limitContent}));return(t,u)=>(l(),a("div",z,[t.$slots.behind?(l(),a("div",D,[r(t.$slots,"behind")])):c("",!0),p("div",F,[p("div",q,[p("div",{class:b(n.value)},[t.$slots.upper?(l(),a("div",G,[r(t.$slots,"upper")])):c("",!0),p("div",J,[r(t.$slots,"title"),p("div",j,[r(t.$slots,"default")])]),t.$slots.lower?(l(),a("div",A,[r(t.$slots,"lower")])):c("",!0)],2),t.$slots.aside?(l(),a("div",K,[r(t.$slots,"aside")])):c("",!0)])])]))}}),O={key:0,class:"rpl-header-links__title rpl-type-h4"},P={key:2,class:"rpl-header-links__list"},Q={key:3,class:"rpl-header-links__more"},U=v({__name:"RplHeaderLinks",props:{title:{default:void 0},items:{},type:{default:"link"},moreLink:{default:void 0}},emits:["itemClick"],setup(_,{emit:i}){const o=_,n=i,{emitRplEvent:t}=B("rpl-header",n),u=e=>{t("itemClick",{action:"click",value:e.url,text:e.text,section:"links",elementType:o.type})},s=e=>{t("itemClick",{...e,section:"links",elementType:o.type})};return(e,h)=>(l(),a("div",{class:b(`rpl-header-links rpl-header-links--${e.type}`)},[e.title?(l(),a("h2",O,k(e.title),1)):c("",!0),e.type==="link"?(l(),f(W,{key:1,items:e.items,"container-class":"rpl-header-links__list","item-class":"rpl-header-links__item rpl-header__text-large-fixed rpl-type-p","icon-placement":"after",onItemClick:s},null,8,["items"])):(l(),a("div",P,[(l(!0),a(R,null,E(e.items,d=>(l(),f(H,{key:d.url,url:d.url,el:"a",class:"rpl-header-links__item",onClick:()=>u(d)},{default:m(()=>[I(k(d.text),1)]),_:2},1032,["url","onClick"]))),128))])),e.moreLink?(l(),a("div",Q,[y(T,{url:e.moreLink.url,class:"rpl-header__text-large-fixed rpl-header__icon-link rpl-type-p rpl-type-weight-bold",onClick:h[0]||(h[0]=()=>u(e.moreLink))},{default:m(()=>[p("span",null,k(e.moreLink.text),1),y(w,{name:"icon-arrow-right",size:"xs"})]),_:1},8,["url"])])):c("",!0)],2))}}),X={class:"rpl-header__title rpl-type-h2","data-cy":"title"},Y={key:0,"data-cy":"summary"},Z=v({__name:"RplIntroHeader",props:{title:{},content:{default:void 0},links:{default:void 0},iconName:{default:void 0}},emits:["navigate"],setup(_,{emit:i}){const o=_,n=i,{emitRplEvent:t}=B("rpl-header",n),u=s=>{t("navigate",{...s,label:o==null?void 0:o.title,type:"intro"},{global:!0})};return(s,e)=>{var h,d;return l(),f(M,{class:"rpl-header--intro"},S({title:m(()=>[p("h2",X,k(s.title),1)]),default:m(()=>[s.$slots.default?(l(),a("div",Y,[r(s.$slots,"default")])):c("",!0)]),_:2},[s.iconName?{name:"upper",fn:m(()=>[y(w,{class:"rpl-header__icon",name:s.iconName,size:"l"},null,8,["name"])]),key:"0"}:void 0,(d=(h=s.links)==null?void 0:h.items)!=null&&d.length?{name:"aside",fn:m(()=>{var $,C;return[y(U,{title:($=s.links)==null?void 0:$.title,items:(s.links.items||[]).map(g=>({...g,icon:g.icon||"icon-arrow-right"})),type:(C=s.links)==null?void 0:C.type,"more-link":s.links.more,onItemClick:u},null,8,["title","items","type","more-link"])]}),key:"1"}:void 0]),1024)}}}),x=v({__name:"DocsWhatsNew",props:{title:{},description:{},links:{default:()=>[]}},setup(_){return(i,o)=>{const n=Z;return l(),f(n,{class:"custom",title:i.title,iconName:"icon-information-circle-filled",links:{items:i.links}},{default:m(()=>[r(i.$slots,"default",{},void 0,!0)]),_:3},8,["title","links"])}}}),ne=V(x,[["__scopeId","data-v-bb051665"]]);export{ne as default};
