import{c as f,e as S,d as E,k as O,h as $}from"./use-translate.5fa8a2a1.js";import{m as r,n as l,w as j}from"./with-install.ff23f643.js";import{B as k}from"./index.0f47b777.js";import{A as g,D as h,x as w,J as z,L as B,I as C,R as D,e as i,P as L,E as _,B as y}from"./vue-libs.ed3d9812.js";let b=2e3;const q=()=>++b,N=e=>{b=e},[I,T]=f("config-provider"),P=Symbol(I),G={tag:r("div"),theme:r("light"),zIndex:Number,themeVars:Object,themeVarsDark:Object,themeVarsLight:Object,iconPrefix:String};function R(e){const t={};return Object.keys(e).forEach(a=>{t[`--van-${O(a)}`]=e[a]}),t}const H=g({name:I,props:G,setup(e,{slots:t}){const a=h(()=>R(S({},e.themeVars,e.theme==="dark"?e.themeVarsDark:e.themeVarsLight)));if(E){const n=()=>{document.documentElement.classList.add(`van-theme-${e.theme}`)},c=(o=e.theme)=>{document.documentElement.classList.remove(`van-theme-${o}`)};w(()=>e.theme,(o,s)=>{s&&c(s),n()},{immediate:!0}),z(n),B(c),C(c)}return L(P,e),D(()=>{e.zIndex!==void 0&&N(e.zIndex)}),()=>i(e.tag,{class:T(),style:a.value},{default:()=>{var n;return[(n=t.default)==null?void 0:n.call(t)]}})}}),[Z,u]=f("icon"),A=e=>e==null?void 0:e.includes("/"),U={dot:Boolean,tag:r("i"),name:String,size:l,badge:l,color:String,badgeProps:Object,classPrefix:String},F=g({name:Z,props:U,setup(e,{slots:t}){const a=_(P,null),n=h(()=>e.classPrefix||(a==null?void 0:a.iconPrefix)||u());return()=>{const{tag:c,dot:o,name:s,size:v,badge:x,color:V}=e,m=A(s);return i(k,y({dot:o,tag:c,class:[n.value,m?"":`${n.value}-${s}`],style:{color:V,fontSize:$(v)},content:x},e.badgeProps),{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t),m&&i("img",{class:u("image"),src:s},null)]}})}}}),M=j(F);export{M as I,H as _,q as u};
