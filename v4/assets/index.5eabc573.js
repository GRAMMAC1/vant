import{c as g,a as T}from"./use-translate.5fa8a2a1.js";import{u as _,w as C}from"./with-install.ff23f643.js";import{T as x}from"./index.86ca9d94.js";import{I as k}from"./index.dc9079c8.js";import{C as V}from"./index.64e1751e.js";import{a as h,R as v}from"./index.9d9dbc84.js";import{B as y}from"./index.6b2fff9d.js";import{A as f,e as o,u as E,r as S,o as b,c as w,w as B,C as u}from"./vue-libs.ed3d9812.js";import{s as p}from"./index.97866e22.js";import"./constant.80c6de18.js";import"./index.0f47b777.js";import"./use-route.24f31c45.js";import"./Checker.e5396653.js";import"./index.200bbe9c.js";import"./index.5bc144fc.js";import"./interceptor.f92ff708.js";import"./use-expose.840221e5.js";import"./use-touch.ecfb8eef.js";import"./use-lazy-render.997d3548.js";import"./on-popup-reopen.08d2a38f.js";import"./index.5e96c57f.js";import"./mount-component.6bbd68ed.js";const[I,a,A]=g("contact-list"),D={list:Array,addText:String,modelValue:_,defaultTagText:String},L=f({name:I,props:D,emits:["add","edit","select","update:modelValue"],setup(s,{emit:t}){const d=(e,i)=>{const c=()=>{t("update:modelValue",e.id),t("select",e,i)},l=()=>o(v,{class:a("radio"),name:e.id,iconSize:16},null),r=()=>o(k,{name:"edit",class:a("edit"),onClick:n=>{n.stopPropagation(),t("edit",e,i)}},null),m=()=>{const n=[`${e.name}\uFF0C${e.tel}`];return e.isDefault&&s.defaultTagText&&n.push(o(x,{type:"primary",round:!0,class:a("item-tag")},{default:()=>[s.defaultTagText]})),n};return o(V,{key:e.id,isLink:!0,center:!0,class:a("item"),titleClass:a("item-title"),onClick:c},{icon:r,title:m,"right-icon":l})};return()=>o("div",{class:a()},[o(h,{modelValue:s.modelValue,class:a("group")},{default:()=>[s.list&&s.list.map(d)]}),o("div",{class:[a("bottom"),"van-safe-area-bottom"]},[o(y,{round:!0,block:!0,type:"primary",class:a("add"),text:s.addText||A("addContact"),onClick:()=>t("add")},null)])])}}),N=C(L),ot=f({__name:"index",setup(s){const t=T({"zh-CN":{add:"\u65B0\u589E",edit:"\u7F16\u8F91",list:[{id:"1",name:"\u5F20\u4E09",tel:"13000000000",isDefault:!0},{id:"2",name:"\u674E\u56DB",tel:"1310000000"}],select:"\u9009\u62E9",defaultTagText:"\u9ED8\u8BA4"},"en-US":{add:"Add",edit:"Edit",list:[{id:"1",name:"John Snow",tel:"13000000000",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000"}],select:"Select",defaultTagText:"default"}}),d=E("1"),e=()=>{p(t("add"))},i=l=>{p(t("edit")+l.id)},c=l=>{p(t("select")+l.id)};return(l,r)=>{const m=S("demo-block");return b(),w(m,{title:u(t)("basicUsage")},{default:B(()=>[o(u(N),{modelValue:d.value,"onUpdate:modelValue":r[0]||(r[0]=n=>d.value=n),list:u(t)("list"),"default-tag-text":u(t)("defaultTagText"),onAdd:e,onEdit:i,onSelect:c},null,8,["modelValue","list","default-tag-text"])]),_:1},8,["title"])}}});export{ot as default};
