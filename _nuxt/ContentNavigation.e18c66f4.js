import{u as d}from"./asyncData.11ffffb2.js";import{a as l,am as f,I as p,z as m,ar as v,a8 as g,an as h,aj as _,ac as s}from"./entry.76afd329.js";import{_ as y}from"./nuxt-link.6e7d6a0d.js";import"./ready.44143dfc.js";const x=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:a}=f(u),n=p(()=>{var t;return typeof((t=a.value)==null?void 0:t.params)=="function"?a.value.params():a.value});if(!n.value&&m("dd-navigation").value){const{navigation:t}=v();return{navigation:t}}const{data:o}=await d(`content-navigation-${h(n.value)}`,()=>g(n.value));return{navigation:o}},render(u){const a=_(),{navigation:n}=u,o=e=>s(y,{to:e._path},()=>e.title),t=(e,i)=>s("ul",i?{"data-level":i}:null,e.map(r=>r.children?s("li",null,[o(r),t(r.children,i+1)]):s("li",null,o(r)))),c=e=>t(e,0);return a!=null&&a.default?a.default({navigation:n,...this.$attrs}):c(n)}});export{x as default};
