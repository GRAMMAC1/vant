import{C as o}from"./index.64e1751e.js";import{D as k,s,a as c}from"./index.380da15e.js";import{c as A}from"./index.6dc8290a.js";import{a as E}from"./use-translate.5fa8a2a1.js";import{A as _,u as g,r as b,o as w,a as h,e as u,w as i,C as e,d as v,F as x}from"./vue-libs.ed3d9812.js";import"./with-install.ff23f643.js";import"./use-route.24f31c45.js";import"./index.dc9079c8.js";import"./index.0f47b777.js";import"./constant.80c6de18.js";import"./interceptor.f92ff708.js";import"./index.5bc144fc.js";import"./use-expose.840221e5.js";import"./use-touch.ecfb8eef.js";import"./use-lazy-render.997d3548.js";import"./on-popup-reopen.08d2a38f.js";import"./index.5e96c57f.js";import"./index.6b2fff9d.js";import"./index.200bbe9c.js";import"./index.d2e05dfe.js";import"./use-placeholder.c3c867df.js";import"./use-height.ad04b230.js";import"./mount-component.6bbd68ed.js";const U=["src"],tt=_({__name:"index",setup(y){const t=E({"zh-CN":{title:"\u6807\u9898",alert1:"\u63D0\u793A\u5F39\u7A97",alert2:"\u63D0\u793A\u5F39\u7A97\uFF08\u65E0\u6807\u9898\uFF09",confirm:"\u786E\u8BA4\u5F39\u7A97",content1:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\u3002",content2:"\u751F\u547D\u8FDC\u4E0D\u6B62\u8FDE\u8F74\u8F6C\u548C\u5FD9\u5230\u6781\u9650\uFF0C\u4EBA\u7C7B\u7684\u4F53\u9A8C\u8FDC\u6BD4\u8FD9\u8FBD\u9614\u3001\u4E30\u5BCC\u5F97\u591A\u3002",content3:"\u5982\u679C\u89E3\u51B3\u65B9\u6CD5\u662F\u4E11\u964B\u7684\uFF0C\u90A3\u5C31\u80AF\u5B9A\u8FD8\u6709\u66F4\u597D\u7684\u89E3\u51B3\u65B9\u6CD5\uFF0C\u53EA\u662F\u8FD8\u6CA1\u6709\u53D1\u73B0\u800C\u5DF2\u3002",beforeClose:"\u5F02\u6B65\u5173\u95ED",roundButton:"\u5706\u89D2\u6309\u94AE\u6837\u5F0F",useComponent:"\u4F7F\u7528 Dialog \u7EC4\u4EF6"},"en-US":{title:"Title",alert1:"Alert",alert2:"Alert without title",confirm:"Confirm dialog",content1:"Content",content2:"Content",content3:"Content",beforeClose:"Before Close",roundButton:"Round Button Style",useComponent:"Use Dialog Component"}}),r=g(!1),C=A("apple-3.jpeg"),F=()=>{s({title:t("title"),message:t("content1")})},p=()=>{s({message:t("content2")})},d=()=>{s({theme:"round-button",title:t("title"),message:t("content1")})},f=()=>{s({theme:"round-button",message:t("content2")})},D=()=>{c({title:t("title"),message:t("content3")})},B=()=>{const a=n=>new Promise(l=>{setTimeout(()=>l(n==="confirm"),1e3)});c({title:t("title"),message:t("content3"),beforeClose:a})};return(a,n)=>{const l=b("demo-block");return w(),h(x,null,[u(l,{card:"",title:e(t)("basicUsage")},{default:i(()=>[u(e(o),{"is-link":"",title:e(t)("alert1"),onClick:F},null,8,["title"]),u(e(o),{"is-link":"",title:e(t)("alert2"),onClick:p},null,8,["title"]),u(e(o),{"is-link":"",title:e(t)("confirm"),onClick:D},null,8,["title"])]),_:1},8,["title"]),u(l,{card:"",title:e(t)("roundButton")},{default:i(()=>[u(e(o),{"is-link":"",title:e(t)("alert1"),onClick:d},null,8,["title"]),u(e(o),{"is-link":"",title:e(t)("alert2"),onClick:f},null,8,["title"])]),_:1},8,["title"]),u(l,{card:"",title:e(t)("beforeClose")},{default:i(()=>[u(e(o),{"is-link":"",title:e(t)("beforeClose"),onClick:B},null,8,["title"])]),_:1},8,["title"]),u(l,{card:"",title:e(t)("useComponent")},{default:i(()=>[u(e(o),{"is-link":"",title:e(t)("useComponent"),onClick:n[0]||(n[0]=m=>r.value=!0)},null,8,["title"]),u(e(k),{show:r.value,"onUpdate:show":n[1]||(n[1]=m=>r.value=m),title:e(t)("title"),"show-cancel-button":"","lazy-render":!1},{default:i(()=>[v("img",{src:e(C)},null,8,U)]),_:1},8,["show","title"])]),_:1},8,["title"])],64)}}});export{tt as default};
