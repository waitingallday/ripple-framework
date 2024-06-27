import se from"./DocsContentNavigation.C38Xx18I.js";import le from"./DocsPageHeader.CCM5YSN6.js";import{d as G,r as i,J,o as oe,a as ue,Z as P,A as E,b as u,c as b,e as p,t as C,n as A,E as D,D as U,$ as re,aJ as ie,Q as pe,aK as v,aL as m,g as h,f as K,F as Q,W,a0 as ce,V as de,m as fe,a1 as me,G as q,w as $,N as B,a3 as be,q as ge}from"./entry.BsW9RMHw.js";import{o as ve}from"./RplImage.css.BZRjXW_5.js";import{_ as z}from"./RplIcon.vue.Bj30mq1S.js";import{u as he}from"./useRippleEvent.DrrImATz.js";import{_ as _e}from"./RplPromoCard.vue.3ql2i_FT.js";import ye from"./DocsCardGrid.DZwfGQNm.js";import{_ as we}from"./AppSidebarLayout.vue.BKC01lgU.js";import{_ as $e}from"./AppLayout.vue.InapS4JC.js";import{u as Oe}from"./asyncData.pTxJrvLf.js";import{u as Se}from"./head.Bi4O5H7C.js";import"./RplLink.vue.B_BDDWAs.js";import"./RplExpandable.vue.C0uIcaLs.js";import"./DocsNavLink.ae8NQFBr.js";import"./nuxt-link.Lv7gOctm.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./useDocsNavigation.DkfIXnqc.js";import"./DocsLink.D_QFMDu5.js";import"./RplTextLink.css.DgSdFLfE.js";import"./RplList.vue.Bv6W_T3l.js";const Ie=["for"],Le=["onKeydown"],Ve=["id","aria-owns","aria-expanded","placeholder"],Be={class:"rpl-search-bar__right"},Ce={type:"submit","aria-label":"search",class:"rpl-search-bar-submit rpl-u-focusable-inline"},Re={key:0,class:"rpl-search-bar-submit__label rpl-type-label rpl-type-weight-bold"},Te={class:"rpl-search-bar-submit__icon"},ke=p("div",{class:"rpl-search-bar__menu"},[p("span",{class:"rpl-search-bar__menu-noresults"}," No results ")],-1),Fe=["id"],Ae=["id","data-option-id","role","onKeydown","onClick"],De={inheritAttrs:!1},Ke=G({...De,__name:"RplSearchBar",props:{variant:{default:"default"},id:{},autoFocus:{type:Boolean,default:!1},inputLabel:{default:"Search"},inputValue:{default:""},submitLabel:{type:[String,Boolean],default:"Search"},suggestions:{default:()=>[]},maxSuggestionsDisplayed:{default:10},placeholder:{default:""},globalEvents:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!1},getSuggestionVal:{type:Function,default:c=>c},getOptionLabel:{type:Function,default:c=>c},getOptionId:{type:Function,default:c=>c},isOptionSelectable:{type:Function,default:c=>!0},showLabel:{type:Boolean,default:!1},isFreeText:{type:Boolean,default:!0},showClearButton:{type:Boolean,default:!0},submitOnClear:{type:Boolean,default:!1}},emits:["update:inputValue","submit"],setup(c,{emit:O}){const n=c,d=O,{emitRplEvent:R}=he("rpl-search-bar",d),o=i(""),T=i(null),f=i(null),_=i(null),k=i([]),S=i(null),y=J(()=>`${n.id}__menu`),s=i(!1),l=i(null),I=i(!1);oe(()=>{n.autoFocus&&(S.value=setTimeout(()=>{var e;return(e=f.value)==null?void 0:e.focus()},100))}),ue(()=>{S.value&&clearTimeout(S.value)}),ve(T,()=>{w(!1)});const F=e=>{R("submit",{action:"search",id:n.id,name:n.inputLabel,value:o.value,text:e==="button"?n.submitLabel:null,type:e},{global:n.globalEvents})},N=e=>{o.value=e.target.value,d("update:inputValue",e.target.value),s.value=!0},L=(e,t)=>{var r;const a=n.getOptionLabel(e);t&&((r=f.value)==null||r.focus()),o.value=n.getSuggestionVal(e),d("update:inputValue",e),s.value=!1,R("submit",{action:"search",id:n.id,text:n.getSuggestionVal(e),name:n.inputLabel,value:a,payload:e,type:"suggestion"},{global:n.globalEvents})},V=()=>n.getOptionId(n.suggestions[0]),g=(e=!1)=>{var t;s.value=!0,e&&((t=n.suggestions)!=null&&t.length)&&(l.value=V())},w=(e=!1)=>{var t;s.value=!1,l.value=null,e&&((t=f.value)==null||t.focus())},Z=async()=>{var e;I.value=!0,await E(),(e=f.value)==null||e.focus()},j=()=>{I.value=!1},X=async()=>{var e;d("update:inputValue",null),o.value="",n.submitOnClear&&R("submit",{action:"search",id:n.id,text:"",name:n.inputLabel,value:"",payload:null,type:"suggestion"},{global:n.globalEvents}),await E(),(e=f.value)==null||e.focus()},Y=()=>{const e=n.suggestions.findIndex(t=>n.getOptionId(t)===l.value);e<0?l.value=V():e<n.suggestions.length-1&&(l.value=n.getOptionId(n.suggestions[e+1]))},x=()=>{const e=n.suggestions.findIndex(t=>n.getOptionId(t)===l.value);e<0?l.value=V():e>0&&(l.value=n.getOptionId(n.suggestions[e-1]))},ee=e=>e>47&&e<58||e===32||e===8||e>64&&e<91||e>95&&e<112||e>185&&e<193||e>218&&e<223,te=e=>{var t;ee(e.keyCode)&&((t=f.value)==null||t.focus())},ae=e=>l.value===e,ne=e=>{const t=k.value.find(r=>r.dataset.optionId===e),a=_.value;if(a&&a.scrollHeight>a.clientHeight){let r=a.clientHeight+a.scrollTop,M=t.offsetTop+t.offsetHeight;M>r?a.scrollTop=M-a.clientHeight:t.offsetTop<a.scrollTop&&(a.scrollTop=t.offsetTop)}t&&t.focus()};P(()=>n.inputValue,e=>{o.value=n.getSuggestionVal(e)},{immediate:!0}),P(l,async e=>{e!==null&&(await E(),ne(e))});const H=e=>e.toLowerCase().replace(/[^\w-]+/g,"-");return(e,t)=>(u(),b("form",{class:A({"rpl-search-bar":!0,[`rpl-search-bar--${e.variant}`]:!!e.variant,"rpl-search-bar--with-label":!!e.submitLabel,"rpl-search-bar--with-clear-btn":!!e.inputValue||!!o.value}),style:ce({"--local-max-items":e.maxSuggestionsDisplayed}),onSubmit:t[9]||(t[9]=m(a=>F("button"),["prevent"]))},[p("label",{class:A({"rpl-search-bar__label":!0,"rpl-u-visually-hidden":!e.showLabel,"rpl-type-h4-fixed":!0}),for:e.id},C(e.inputLabel),11,Ie),p("div",{class:A({"rpl-search-bar__inner":!0,"rpl-u-focusable-outline":!0,"rpl-u-focusable-outline--no-border":!0,"rpl-u-focusable--force-on":s.value}),onKeydown:[v(m(x,["prevent"]),["up"]),v(m(Y,["prevent"]),["down"]),t[6]||(t[6]=v(m(a=>w(!0),["prevent"]),["esc"])),t[7]||(t[7]=v(m(a=>w(!1),["exact"]),["tab"])),t[8]||(t[8]=v(m(a=>w(!1),["shift"]),["tab"]))]},[p("div",{ref_key:"containerRef",ref:T,class:"rpl-search-bar__input-wrap"},[!e.isFreeText&&e.inputValue&&!I.value&&!s.value?(u(),b("div",{key:0,tabindex:"0",class:"rpl-search-bar__input",onFocus:t[0]||(t[0]=a=>Z())},[D(e.$slots,"suggestion",{option:{option:e.inputValue}},()=>[U(C(e.getOptionLabel(e.inputValue)),1)])],32)):re((u(),b("input",pe({key:1},e.$attrs,{id:e.id,ref_key:"inputRef",ref:f,"onUpdate:modelValue":t[1]||(t[1]=a=>o.value=a),"aria-owns":y.value,autocomplete:"off","aria-autocomplete":"list","aria-expanded":s.value,placeholder:e.placeholder,role:"combobox",class:"rpl-search-bar__input",type:"search",onInput:N,onFocus:t[2]||(t[2]=a=>g(!1)),onBlur:t[3]||(t[3]=a=>j()),onKeydown:t[4]||(t[4]=v(m(a=>F("enter"),["prevent"]),["enter"]))}),null,16,Ve)),[[ie,o.value]])],512),D(e.$slots,"afterInput"),p("div",Be,[e.showClearButton&&(o.value||e.inputValue)?(u(),b("button",{key:0,type:"button","aria-label":"Clear search",class:"rpl-search-bar__clear rpl-u-focusable-inline",onClick:t[5]||(t[5]=a=>X())},[h(z,{name:"icon-cancel-circle-filled"})])):K("",!0),p("button",Ce,[e.submitLabel?(u(),b("span",Re,C(e.submitLabel),1)):K("",!0),p("span",Te,[h(z,{name:"icon-search",size:"m"})])])]),e.showNoResults&&e.suggestions.length===0&&o.value&&s.value?D(e.$slots,"noresults",{key:0},()=>[ke]):K("",!0),e.suggestions.length&&s.value?(u(),b("div",{key:1,id:y.value,ref_key:"menuRef",ref:_,class:"rpl-search-bar__menu",role:"listbox",tabindex:"-1"},[(u(!0),b(Q,null,W(e.suggestions,a=>(u(),b("div",{id:H(e.getOptionId(a)),key:`opt-${H(e.getOptionId(a))}`,ref_for:!0,ref_key:"optionRefs",ref:k,"data-option-id":e.getOptionId(a),role:e.isOptionSelectable(a)?"option":null,class:A({"rpl-search-bar__menu-option":!0,"rpl-u-focusable-block":!0,"rpl-u-focusable--force-on":ae(e.getOptionId(a))}),tabindex:"-1",onKeydown:[v(m(r=>e.isOptionSelectable(a)&&L(a,!0),["prevent"]),["space"]),v(m(r=>e.isOptionSelectable(a)&&L(a,!0),["prevent"]),["enter"]),r=>e.isOptionSelectable(a)&&te],onClick:r=>e.isOptionSelectable(a)&&L(a,!1)},[D(e.$slots,"suggestion",{option:{option:a}},()=>[U(C(e.getOptionLabel(a)),1)])],42,Ae))),128))],8,Fe)):K("",!0)],42,Le)],38))}}),Ne={class:"rpl-u-margin-b-8"},lt=G({__name:"module-listing",async setup(c){let O,n;const{page:d}=de();Se(d);const T=fe().params.slug[0]==="framework",{data:f}=([O,n]=me(async()=>Oe("module-listing",async()=>await ge().where({isModuleInfo:{$eq:!0}}).find())),O=await O,n(),O),_=i(""),k=J(()=>(f.value||[]).filter(S=>{const y=S.name.toLowerCase(),s=_.value.toLowerCase();return y.includes(s)}));return(S,y)=>{const s=se,l=le,I=Ke,F=_e,N=ye,L=we,V=$e;return u(),q(V,{theme:T?"module":"default"},{menuContents:$(()=>[h(s)]),default:$(()=>[h(L,{hideMobileSidebar:""},{aside:$(()=>[h(s)]),pageHeader:$(()=>[h(l,{title:B(d).title,description:B(d).description,links:B(d).links},null,8,["title","description","links"]),p("div",Ne,[h(I,{id:"listing-search",inputValue:B(_),"onUpdate:inputValue":y[0]||(y[0]=g=>be(_)?_.value=g:null)},null,8,["inputValue"])])]),default:$(()=>[h(N,null,{default:$(()=>[(u(!0),b(Q,null,W(B(k),g=>{var w;return u(),q(F,{key:g._path,title:g.name,url:`${(w=g._path)==null?void 0:w.replace(/\/_module$/,"")}`},{default:$(()=>[p("p",null,C(g.description),1)]),_:2},1032,["title","url"])}),128))]),_:1})]),_:1})]),_:1},8,["theme"])}}});export{lt as default};
