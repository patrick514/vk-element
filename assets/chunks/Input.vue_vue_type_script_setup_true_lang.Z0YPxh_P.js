import{d as j,am as D,p as v,L as O,h as _,q as T,c as n,o as a,n as U,ag as F,F as q,e as t,j as P,r as m,an as E,K,k as z,b as k,Z as L,ao as Z,P as G}from"./framework.DB-FhJG4.js";import{_ as h}from"./Icon.vue_vue_type_script_setup_true_lang.B4BsHV7L.js";const ae=Symbol("formContextKey"),H=Symbol("formItemContextKey"),J={key:0,class:"vk-input__prepend"},Q={class:"vk-input__wrapper"},W={key:0,class:"vk-input__prefix"},X=["type","disabled","readonly","autocomplete","placeholder","autofocus","form"],Y={key:1,class:"vk-input__append"},x=["disabled","readonly","autocomplete","placeholder","autofocus","form"],oe=j({name:"VkInput",inheritAttrs:!1,__name:"Input",props:{type:{default:"text"},modelValue:{},size:{},disabled:{type:Boolean},clearable:{type:Boolean},showPassword:{type:Boolean},placeholder:{},readonly:{type:Boolean},autocomplete:{default:"off"},autofocus:{type:Boolean},form:{}},emits:["update:modelValue","input","change","focus","blur","clear"],setup(I,{expose:M,emit:A}){const u=I,o=A,b=D(),s=v(u.modelValue),d=v(!1),r=v(!1),c=v(),p=O(H,null),y=e=>{var l;(l=p==null?void 0:p.validate)==null||l.call(p,e).catch(i=>console.log(i.errors))},N=()=>{},R=async()=>{await G(),c.value.focus()},w=()=>{o("update:modelValue",s.value),o("input",s.value),y("input")},V=()=>{o("change",s.value),y("change")},$=_(()=>u.clearable&&!u.disabled&&!!s.value&&d.value),f=_(()=>u.showPassword&&!u.disabled&&!!s.value),g=e=>{d.value=!0,o("focus",e)},B=e=>{d.value=!1,o("blur",e),y("blur")},S=()=>{s.value="",o("update:modelValue",""),o("clear"),o("input",""),o("change","")},C=()=>{r.value=!r.value};return T(()=>u.modelValue,e=>{s.value=e}),M({ref:c}),(e,l)=>(a(),n("div",{class:U(["vk-input",{[`vk-input--${e.type}`]:e.type,[`vk-input--${e.size}`]:e.size,"is-disabled":e.disabled,"is-prepend":e.$slots.prepend,"is-append":e.$slots.append,"is-prefix":e.$slots.prefix,"is-suffix":e.$slots.suffix,"is-focus":d.value}])},[e.type!=="textarea"?(a(),n(q,{key:0},[e.$slots.prepend?(a(),n("div",J,[m(e.$slots,"prepend")])):t("",!0),P("div",Q,[e.$slots.prefix?(a(),n("span",W,[m(e.$slots,"prefix")])):t("",!0),F(P("input",K({class:"vk-input__inner",ref_key:"inputRef",ref:c},z(b),{type:f.value?r.value?"text":"password":e.type,disabled:e.disabled,readonly:e.readonly,autocomplete:e.autocomplete,placeholder:e.placeholder,autofocus:e.autofocus,form:e.form,"onUpdate:modelValue":l[0]||(l[0]=i=>s.value=i),onInput:w,onChange:V,onFocus:g,onBlur:B}),null,16,X),[[E,s.value]]),e.$slots.suffix||$.value||f.value?(a(),n("span",{key:1,class:"vk-input__suffix",onClick:R},[m(e.$slots,"suffix"),$.value?(a(),k(h,{key:0,icon:"circle-xmark",class:"vk-input__clear",onClick:S,onMousedown:L(N,["prevent"])})):t("",!0),f.value&&r.value?(a(),k(h,{key:1,icon:"eye",class:"vk-input__password",onClick:C})):t("",!0),f.value&&!r.value?(a(),k(h,{key:2,icon:"eye-slash",class:"vk-input__password",onClick:C})):t("",!0)])):t("",!0)]),e.$slots.append?(a(),n("div",Y,[m(e.$slots,"append")])):t("",!0)],64)):F((a(),n("textarea",K({key:1,class:"vk-textarea__wrapper",ref_key:"inputRef",ref:c},z(b),{disabled:e.disabled,readonly:e.readonly,autocomplete:e.autocomplete,placeholder:e.placeholder,autofocus:e.autofocus,form:e.form,"onUpdate:modelValue":l[1]||(l[1]=i=>s.value=i),onInput:w,onFocus:g,onChange:V,onBlur:B}),null,16,x)),[[Z,s.value]])],2))}});export{oe as _,H as a,ae as f};
