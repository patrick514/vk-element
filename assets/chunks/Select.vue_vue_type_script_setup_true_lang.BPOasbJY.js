import{d as K,p as c,ai as P,q as x,h as m,c as u,o as i,n as v,G as p,w as g,k as M,b as C,Z as b,j as U,F as W,B as j}from"./framework.DB-FhJG4.js";import{d as z,_ as G}from"./Tooltip.vue_vue_type_script_setup_true_lang.Cb0skVpF.js";import{_ as Z}from"./Input.vue_vue_type_script_setup_true_lang.Z0YPxh_P.js";import{i as B,_ as k}from"./Icon.vue_vue_type_script_setup_true_lang.B4BsHV7L.js";import{R as J}from"./RenderVnode.JI7eWygW.js";const Q={key:0,class:"vk-select__loading"},T={key:1,class:"vk-select__nodata"},X={key:2,class:"vk-select__menu"},Y=["id","onClick"],ie=K({name:"VkSelect",__name:"Select",props:{modelValue:{},options:{default:()=>[]},placeholder:{},disabled:{type:Boolean},clearable:{type:Boolean},renderLabel:{},filterable:{type:Boolean},filterMethod:{},remote:{type:Boolean},remoteMethod:{}},emits:["change","update:modelValue","visible-change","clear"],setup($,{emit:D}){const y=l=>{const o=t.options.find(a=>a.value===l);return o||null},t=$,d=D,f=y(t.modelValue),h=c(),V=c(),s=c(!1),n=c(t.options),e=P({inputValue:f?f.label:"",selectedOption:f,mouseHover:!1,loading:!1,highlightIndex:-1});x(()=>t.modelValue,l=>{const o=y(l);e.selectedOption=o,e.inputValue=o?o.label:""});const N=m(()=>t.filterable&&e.selectedOption&&s.value?e.selectedOption.label:t.placeholder),r=l=>{l?(e.selectedOption&&t.filterable&&(e.inputValue=""),h.value.show(),t.filterable&&O(e.inputValue)):(h.value.hide(),t.filterable&&(e.inputValue=e.selectedOption?e.selectedOption.label:""),e.highlightIndex=-1),s.value=l,d("visible-change",l)},R=m(()=>t.clearable&&e.mouseHover&&e.selectedOption&&e.inputValue.trim()!==""),F=()=>{e.selectedOption=null,e.inputValue="",d("change",""),d("clear"),d("update:modelValue","")},S=()=>{t.disabled||(s.value?r(!1):r(!0))},_=l=>{l.disabled||(e.inputValue=l.label,e.selectedOption=l,d("change",l.value),d("update:modelValue",l.value),r(!1),V.value.ref.focus())},H=()=>{},L={modifiers:[{name:"offset",options:{offset:[0,9]}},{name:"sameWidth",enabled:!0,fn:({state:l})=>{l.styles.popper.width=`${l.rects.reference.width}px`},phase:"beforeWrite",requires:["computeStyles"]}]};x(()=>t.options,l=>{n.value=l});const E=m(()=>t.remote?300:0),q=z(()=>{O(e.inputValue)},E.value),A=l=>{switch(l.key){case"Enter":s.value?e.highlightIndex>-1&&n.value[e.highlightIndex]?_(n.value[e.highlightIndex]):r(!1):r(!0);break;case"ArrowUp":l.preventDefault(),n.value.length>0&&(e.highlightIndex===-1||e.highlightIndex===0?e.highlightIndex=n.value.length-1:e.highlightIndex--);break;case"ArrowDown":l.preventDefault(),n.value.length>0&&(e.highlightIndex===-1||e.highlightIndex===n.value.length-1?e.highlightIndex=0:e.highlightIndex++);break;case"Escape":s.value&&r(!1);break}},O=async l=>{if(t.filterable){if(t.filterMethod&&B(t.filterMethod))n.value=t.filterMethod(l);else if(t.remote&&t.remoteMethod&&B(t.remoteMethod)){e.loading=!0;try{n.value=await t.remoteMethod(l)}catch(o){console.error(o),n.value=[]}finally{e.loading=!1}}else n.value=t.options.filter(o=>o.label.includes(l));e.highlightIndex=-1}};return(l,o)=>(i(),u("div",{class:v(["vk-select",{"is-disabled":l.disabled}]),onClick:S,onMouseenter:o[2]||(o[2]=()=>e.mouseHover=!0),onMouseleave:o[3]||(o[3]=()=>e.mouseHover=!1)},[p(G,{placement:"bottom-start",popperOptions:L,manual:"",onClickOutside:o[1]||(o[1]=a=>r(!1)),ref_key:"tooltipRef",ref:h},{content:g(()=>[e.loading?(i(),u("div",Q,[p(k,{icon:"spinner",spin:""})])):l.filterable&&n.value.length===0?(i(),u("div",T,o[4]||(o[4]=[U("span",null,"No matching results",-1)]))):(i(),u("ul",X,[(i(!0),u(W,null,j(n.value,(a,w)=>{var I;return i(),u("li",{key:w,class:v(["vk-select__menu-item",{"is-disabled":a.disabled,"is-selected":((I=e.selectedOption)==null?void 0:I.value)===a.value,"is-highlighted":e.highlightIndex===w}]),id:`select-item-${a.value}`,onClick:b(ee=>_(a),["stop"])},[p(M(J),{vNode:l.renderLabel?l.renderLabel(a):a.label},null,8,["vNode"])],10,Y)}),128))]))]),default:g(()=>[p(Z,{modelValue:e.inputValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.inputValue=a),ref_key:"inputRef",ref:V,disabled:l.disabled,placeholder:N.value,readonly:!l.filterable||!s.value,onInput:M(q),onKeydown:A},{suffix:g(()=>[R.value?(i(),C(k,{key:0,icon:"circle-xmark",class:"vk-input__clear",onMousedown:b(H,["stop"]),onClick:b(F,["stop"])})):(i(),C(k,{key:1,icon:"angle-down",class:v(["header-angle",{"is-active":s.value}])},null,8,["class"]))]),_:1},8,["modelValue","disabled","placeholder","readonly","onInput"])]),_:1},512)],34))}});export{ie as _};
