import k from"./DocsModuleNavigation.fae82305.js";import v from"./DocsNavLink.6b39cf7c.js";import C from"./DocsModuleInfo.9670cf2e.js";import h from"./DocsPageHeader.da5bd846.js";import $ from"./ContentRenderer.18363ea5.js";import{_ as w}from"./AppSidebarLayout.vue.bd64128a.js";import{_ as A}from"./AppLayout.vue.1663b334.js";import{u as D}from"./asyncData.11ffffb2.js";import{a as N,ar as M,q as S,Q as b,c as i,w as e,o as _,m as n,M as I,u as t,k as V,l as B,A as H,x as L}from"./entry.76afd329.js";import{u as q}from"./head.b9491f4e.js";import"./useDocsNavigation.a989b29c.js";import"./RplLink.vue.2e5c3afc.js";import"./RplIcon.vue.c671de53.js";import"./constants.bd7ca14c.js";import"./nuxt-link.6e7d6a0d.js";import"./ready.44143dfc.js";import"./DocsLink.9052a981.js";import"./RplTextLink.css.e16040dc.js";import"./ContentRendererMarkdown.710b72bf.js";import"./index.a6ef77ff.js";import"./config.80d459c0.js";import"./index.1d0b22c4.js";import"./RplImage.css.217b04d2.js";import"./RplList.vue.7084ff99.js";import"./RplExpandable.vue.d562a7c4.js";const P={class:"docs-sidebar-nav"},R=N({__name:"module",async setup(O){let a,m;const{page:o}=M();q(o);const s=S(),c=s.params.slug[0]==="framework",{data:p}=([a,m]=b(async()=>D(`module-info-${s.params.slug[2]}`,async()=>await H(`${s.params.slug[0]}/${s.params.slug[1]}/${s.params.slug[2]}/_module`).findOne()||null)),a=await a,m(),a);return(u,T)=>{const r=k,l=v,d=C,f=h,g=$,x=w,y=A;return _(),i(y,{theme:c?"module":"default"},{menuContents:e(()=>[n(r)]),default:e(()=>[n(x,{hideMobileSidebar:!1},{aside:e(()=>[n(l,{url:"/framework/modules/all-modules",icon:"icon-chevron-left",iconPosition:"start"},{default:e(()=>[I("All modules")]),_:1}),n(d,{module:t(p)},null,8,["module"]),V("div",P,[n(r)])]),pageHeader:e(()=>[n(f,{title:t(o).title,description:t(o).description,links:t(o).links},null,8,["title","description","links"])]),default:e(()=>[t(o)?(_(),i(g,{tag:t(o).tag||"DocsContent",key:t(o)._id,value:t(o)},null,8,["tag","value"])):B("",!0)]),_:1})]),_:1},8,["theme"])}}});const lo=L(R,[["__scopeId","data-v-2a19721d"]]);export{lo as default};
