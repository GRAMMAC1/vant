import{C as o}from"./index.d6f88d18.js";import{D as n}from"./function-call.2912bd41.js";import{a as k}from"./use-translate.a3af5295.js";import{z as A,D as E,r as j,o as b,a as _,e as u,w as s,B as e,d as g,F as x}from"./vue-libs.6d5ed635.js";import"./with-install.1b1f1c54.js";import"./use-route.c058a8b7.js";import"./index.97c885c5.js";import"./mount-component.10e6caec.js";import"./use-expose.b6cf8b20.js";import"./constant.80c6de18.js";import"./interceptor.0311b2d6.js";import"./index.699a1f95.js";import"./use-touch.21117490.js";import"./use-lazy-render.437ea78e.js";import"./on-popup-reopen.8120d0d7.js";import"./index.e5d520da.js";import"./index.06f314c1.js";import"./index.31456700.js";import"./index.dca61e6a.js";const M=A({setup(h){const m=n.Component,t=k({"zh-CN":{title:"\u6807\u9898",alert1:"\u63D0\u793A\u5F39\u7A97",alert2:"\u63D0\u793A\u5F39\u7A97\uFF08\u65E0\u6807\u9898\uFF09",confirm:"\u786E\u8BA4\u5F39\u7A97",content1:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\u3002",content2:"\u751F\u547D\u8FDC\u4E0D\u6B62\u8FDE\u8F74\u8F6C\u548C\u5FD9\u5230\u6781\u9650\uFF0C\u4EBA\u7C7B\u7684\u4F53\u9A8C\u8FDC\u6BD4\u8FD9\u8FBD\u9614\u3001\u4E30\u5BCC\u5F97\u591A\u3002",content3:"\u5982\u679C\u89E3\u51B3\u65B9\u6CD5\u662F\u4E11\u964B\u7684\uFF0C\u90A3\u5C31\u80AF\u5B9A\u8FD8\u6709\u66F4\u597D\u7684\u89E3\u51B3\u65B9\u6CD5\uFF0C\u53EA\u662F\u8FD8\u6CA1\u6709\u53D1\u73B0\u800C\u5DF2\u3002",beforeClose:"\u5F02\u6B65\u5173\u95ED",roundButton:"\u5706\u89D2\u6309\u94AE\u6837\u5F0F",componentCall:"\u7EC4\u4EF6\u8C03\u7528"},"en-US":{title:"Title",alert1:"Alert",alert2:"Alert without title",confirm:"Confirm dialog",content1:"Content",content2:"Content",content3:"Content",beforeClose:"Before Close",roundButton:"Round Button Style",componentCall:"Component Call"}}),r=E(!1),C="https://img.yzcdn.cn/vant/apple-3.jpg",d=()=>{n.alert({title:t("title"),message:t("content1")})},p=()=>{n.alert({message:t("content2")})},F=()=>{n.alert({theme:"round-button",title:t("title"),message:t("content1")})},f=()=>{n.alert({theme:"round-button",message:t("content2")})},B=()=>{n.confirm({title:t("title"),message:t("content3")})},D=()=>{const a=l=>new Promise(i=>{setTimeout(()=>i(l==="confirm"),1e3)});n.confirm({title:t("title"),message:t("content3"),beforeClose:a})};return(a,l)=>{const i=j("demo-block");return b(),_(x,null,[u(i,{card:"",title:e(t)("basicUsage")},{default:s(()=>[u(e(o),{"is-link":"",title:e(t)("alert1"),onClick:d},null,8,["title"]),u(e(o),{"is-link":"",title:e(t)("alert2"),onClick:p},null,8,["title"]),u(e(o),{"is-link":"",title:e(t)("confirm"),onClick:B},null,8,["title"])]),_:1},8,["title"]),u(i,{card:"",title:e(t)("roundButton")},{default:s(()=>[u(e(o),{"is-link":"",title:e(t)("alert1"),onClick:F},null,8,["title"]),u(e(o),{"is-link":"",title:e(t)("alert2"),onClick:f},null,8,["title"])]),_:1},8,["title"]),u(i,{card:"",title:e(t)("beforeClose")},{default:s(()=>[u(e(o),{"is-link":"",title:e(t)("beforeClose"),onClick:D},null,8,["title"])]),_:1},8,["title"]),u(i,{card:"",title:e(t)("componentCall")},{default:s(()=>[u(e(o),{"is-link":"",title:e(t)("componentCall"),onClick:l[0]||(l[0]=c=>r.value=!0)},null,8,["title"]),u(e(m),{show:r.value,"onUpdate:show":l[1]||(l[1]=c=>r.value=c),title:e(t)("title"),"show-cancel-button":"","lazy-render":!1},{default:s(()=>[g("img",{src:C})]),_:1},8,["show","title"])]),_:1},8,["title"])],64)}}});export{M as default};
