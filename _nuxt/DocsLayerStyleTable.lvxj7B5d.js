import{d as y,J as b,b as t,c as r,e as l,F as m,W as _,a0 as n,f as u,t as c,N as x,p as h,i as f}from"./entry.BsW9RMHw.js";import{_ as k}from"./_plugin-vue_export-helper.DlAUqK2U.js";const w={border:{1:{value:"1px"},2:{value:"2px"},3:{value:"4px"},4:{value:"8px"},radius:{1:{value:"2px"},2:{value:"4px"},3:{value:"8px"},4:{value:"12px"},full:{value:"999px"}}},elevation:{1:{comment:"2px spread",value:"0 2px 8px rgb(26 26 26 / 16%)"},2:{comment:"4px spread",value:"0 4px 8px 2px rgb(26 26 26 / 16%)"}}},s=w,S=o=>(h("data-v-5dc4dd17"),o=o(),f(),o),V={class:"rpl-table rpl-table--no-stripes"},$={class:"rpl-table__scroll-container",tabindex:"0"},g={class:"w-full"},I=S(()=>l("thead",null,[l("tr",null,[l("th",null,"Visual"),l("th",null,"Value"),l("th",null,"CSS Variable")])],-1)),N=y({__name:"DocsLayerStyleTable",props:{type:{}},setup(o){const p=o,i=b(()=>{var d;let a=(s==null?void 0:s[p.type])||{};if(p.type.includes(".")){const[e,v]=p.type.split(".");a=((d=s==null?void 0:s[e])==null?void 0:d[v])||a}return Object.keys(a).filter(Number).map(e=>({key:e,value:a[e].value,token:`rpl-${p.type.replace(".","-")}-${e}`}))});return(a,d)=>(t(),r("div",V,[l("div",$,[l("table",g,[I,l("tbody",null,[(t(!0),r(m,null,_(x(i),e=>(t(),r("tr",{key:e.token},[l("td",null,[a.type==="border"?(t(),r("span",{key:0,class:"docs-layer-style-preview docs-layer-style-preview--border",style:n(`border-width: var(--rpl-border-${e.key})`)},null,4)):u("",!0),a.type==="border.radius"?(t(),r("span",{key:1,class:"docs-layer-style-preview docs-layer-style-preview--border-radius",style:n(`border-radius: var(--rpl-border-radius-${e.key})`)},null,4)):u("",!0),a.type==="elevation"?(t(),r("span",{key:2,class:"docs-layer-style-preview docs-layer-style-preview--elevation",style:n(`box-shadow: var(--rpl-elevation-${e.key})`)},null,4)):u("",!0)]),l("td",null,c(e.value),1),l("td",null,c(e.token),1)]))),128))])])])]))}}),D=k(N,[["__scopeId","data-v-5dc4dd17"]]);export{D as default};
