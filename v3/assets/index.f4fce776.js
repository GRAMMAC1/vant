import{a as P,T as st}from"./index.1a070162.js";import{c as $,L as it,b as ct,i as at,n as rt,l as lt,N as ut,K as z,G as D,y as dt,x as V,u as ft,e as ht,t as pt,a as mt}from"./use-translate.a3af5295.js";import{t as xt,n as F,a as gt,w as M}from"./with-install.1b1f1c54.js";import{u as vt}from"./use-touch.21117490.js";import{u as H}from"./use-expose.b6cf8b20.js";import{z as j,D as k,C as A,N as yt,x as U,e as c,R as bt,Q as Tt,q as Ct,H as St,o as _,c as kt,w as y,B as o,a as K,b as X,d as Y,F as q,h as It,t as jt}from"./vue-libs.6d5ed635.js";import{f as At}from"./constant.80c6de18.js";import{C as b}from"./index.d6f88d18.js";import"./use-id.5219fe1b.js";import"./use-route.c058a8b7.js";import"./index.46b40aa5.js";import"./on-popup-reopen.8120d0d7.js";import"./interceptor.0311b2d6.js";import"./use-refs.a1903a82.js";import"./index.2f0b04d4.js";import"./index.97c885c5.js";function _t(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Tt(e)}function wt(){const e="A".charCodeAt(0);return Array(26).fill("").map((n,l)=>String.fromCharCode(e+l))}const[G,w]=$("index-bar"),Lt={sticky:xt,zIndex:F,teleport:[String,Object],highlightColor:String,stickyOffsetTop:gt(0),indexList:{type:Array,default:wt}},Q=Symbol(G);var Bt=j({name:G,props:Lt,emits:["select","change"],setup(e,{emit:a,slots:n}){const l=k(),d=k(""),m=vt(),u=it(l),{children:x,linkChildren:s}=ct(Q);s({props:e});const T=A(()=>{if(at(e.zIndex))return{zIndex:+e.zIndex+1}}),C=A(()=>{if(e.highlightColor)return{color:e.highlightColor}}),W=(t,i)=>{for(let r=x.length-1;r>=0;r--){const h=r>0?i[r-1].height:0,f=e.sticky?h+e.stickyOffsetTop:0;if(t+f>=i[r].top)return r}return-1},L=()=>{if(ut(l))return;const{sticky:t,indexList:i}=e,r=z(u.value),h=D(u),f=x.map(I=>I.getRect(u.value,h)),g=W(r,f);d.value=i[g],t&&x.forEach((I,v)=>{const{state:p,$el:nt}=I;if(v===g||v===g-1){const S=nt.getBoundingClientRect();p.left=S.left,p.width=S.width}else p.left=null,p.width=null;if(v===g)p.active=!0,p.top=Math.max(e.stickyOffsetTop,f[v].top-r)+h.top;else if(v===g-1){const S=f[g].top-r;p.active=S>0,p.top=S+h.top-f[v].height}else p.active=!1})},B=()=>Ct(L);rt("scroll",L,{target:u}),yt(B),U(()=>e.indexList,B),U(d,t=>{t&&a("change",t)});const tt=()=>e.indexList.map(t=>{const i=t===d.value;return c("span",{class:w("index",{active:i}),style:i?C.value:void 0,"data-index":t},[t])}),O=t=>{t=String(t);const i=x.find(r=>String(r.index)===t);i&&(i.$el.scrollIntoView(),e.sticky&&e.stickyOffsetTop&&dt(V()-e.stickyOffsetTop),a("select",i.index))},R=t=>{const{index:i}=t.dataset;i&&O(i)},et=t=>{R(t.target)};let E;const ot=t=>{if(m.move(t),m.isVertical()){lt(t);const{clientX:i,clientY:r}=t.touches[0],h=document.elementFromPoint(i,r);if(h){const{index:f}=h.dataset;f&&E!==f&&(E=f,R(h))}}},N=()=>c("div",{class:w("sidebar"),style:T.value,onClick:et,onTouchstart:m.start,onTouchmove:ot},[tt()]);return H({scrollTo:O}),()=>{var i;let t;return c("div",{ref:l,class:w()},[e.teleport?c(bt,{to:e.teleport},_t(t=N())?t:{default:()=>[t]}):N(),(i=n.default)==null?void 0:i.call(n)])}}});const Z=M(Bt),[Ot,Rt]=$("index-anchor"),Et={index:F};var Nt=j({name:Ot,props:Et,setup(e,{slots:a}){const n=St({top:0,left:null,rect:{top:0,height:0},width:null,active:!1}),l=k(),{parent:d}=ft(Q);if(!d)return;const m=()=>n.active&&d.props.sticky,u=A(()=>{const{zIndex:s,highlightColor:T}=d.props;if(m())return ht(pt(s),{left:n.left?`${n.left}px`:void 0,width:n.width?`${n.width}px`:void 0,transform:n.top?`translate3d(0, ${n.top}px, 0)`:void 0,color:T})});return H({state:n,getRect:(s,T)=>{const C=D(l);return n.rect.height=C.height,s===window||s===document.body?n.rect.top=C.top+V():n.rect.top=C.top+z(s)-T.top,n.rect}}),()=>{const s=m();return c("div",{ref:l,style:{height:s?`${n.rect.height}px`:void 0}},[c("div",{style:u.value,class:[Rt({sticky:s}),{[At]:s}]},[a.default?a.default():e.index])])}}});const J=M(Nt),Jt=j({setup(e){const a=mt({"zh-CN":{text:"\u6587\u672C",customIndexList:"\u81EA\u5B9A\u4E49\u7D22\u5F15\u5217\u8868"},"en-US":{text:"Text",customIndexList:"Custom Index List"}}),n=k(0),l=[],d=[1,2,3,4,5,6,8,9,10],m="A".charCodeAt(0);for(let u=0;u<26;u++)l.push(String.fromCharCode(m+u));return(u,x)=>(_(),kt(o(st),{active:n.value,"onUpdate:active":x[0]||(x[0]=s=>n.value=s)},{default:y(()=>[c(o(P),{title:o(a)("basicUsage")},{default:y(()=>[c(o(Z),null,{default:y(()=>[(_(),K(q,null,X(l,s=>Y("div",{key:s},[c(o(J),{index:s},null,8,["index"]),c(o(b),{title:o(a)("text")},null,8,["title"]),c(o(b),{title:o(a)("text")},null,8,["title"]),c(o(b),{title:o(a)("text")},null,8,["title"])])),64))]),_:1})]),_:1},8,["title"]),c(o(P),{title:o(a)("customIndexList")},{default:y(()=>[c(o(Z),{"index-list":d},{default:y(()=>[(_(),K(q,null,X(d,s=>Y("div",{key:s},[c(o(J),{index:s},{default:y(()=>[It(jt(o(a)("title")+s),1)]),_:2},1032,["index"]),c(o(b),{title:o(a)("text")},null,8,["title"]),c(o(b),{title:o(a)("text")},null,8,["title"]),c(o(b),{title:o(a)("text")},null,8,["title"])])),64))]),_:1})]),_:1},8,["title"])]),_:1},8,["active"]))}});export{Jt as default};
