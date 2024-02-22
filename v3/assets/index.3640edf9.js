import{C as n}from"./index.d6f88d18.js";import{P as u}from"./index.699a1f95.js";import{a as k}from"./use-translate.a3af5295.js";import{z as g,D as i,r as I,o as x,a as y,e as l,w as r,B as o,h as B,t as j,F as A}from"./vue-libs.6d5ed635.js";import"./with-install.1b1f1c54.js";import"./use-route.c058a8b7.js";import"./index.97c885c5.js";import"./constant.80c6de18.js";import"./interceptor.0311b2d6.js";import"./use-expose.b6cf8b20.js";import"./use-touch.21117490.js";import"./use-lazy-render.437ea78e.js";import"./on-popup-reopen.8120d0d7.js";import"./index.e5d520da.js";const J=g({setup(E){const s=k({"zh-CN":{position:"\u5F39\u51FA\u4F4D\u7F6E",buttonBasic:"\u5C55\u793A\u5F39\u51FA\u5C42",buttonTop:"\u9876\u90E8\u5F39\u51FA",buttonBottom:"\u5E95\u90E8\u5F39\u51FA",buttonLeft:"\u5DE6\u4FA7\u5F39\u51FA",buttonRight:"\u53F3\u4FA7\u5F39\u51FA",teleport:"\u6307\u5B9A\u6302\u8F7D\u8282\u70B9",roundCorner:"\u5706\u89D2\u5F39\u7A97",closeIcon:"\u5173\u95ED\u56FE\u6807",customCloseIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customIconPosition:"\u56FE\u6807\u4F4D\u7F6E"},"en-US":{position:"Position",buttonBasic:"Show Popup",buttonTop:"From Top",buttonBottom:"From Bottom",buttonLeft:"From Left",buttonRight:"From Right",teleport:"Get Container",roundCorner:"Round Corner",closeIcon:"Close Icon",customCloseIcon:"Custom Icon",customIconPosition:"Icon Position"}}),p=i(!1),d=i(!1),m=i(!1),w=i(!1),v=i(!1),f=i(!1),C=i(!1),b=i(!1),h=i(!1),F=i(!1);return(U,t)=>{const a=I("demo-block");return x(),y(A,null,[l(a,{card:"",title:o(s)("basicUsage")},{default:r(()=>[l(o(n),{title:o(s)("buttonBasic"),"is-link":"",onClick:t[0]||(t[0]=e=>p.value=!0)},null,8,["title"]),l(o(u),{show:p.value,"onUpdate:show":t[1]||(t[1]=e=>p.value=e),style:{padding:"30px 50px"}},{default:r(()=>[B(j(o(s)("content")),1)]),_:1},8,["show"])]),_:1},8,["title"]),l(a,{card:"",title:o(s)("position")},{default:r(()=>[l(o(n),{title:o(s)("buttonTop"),"is-link":"",onClick:t[2]||(t[2]=e=>d.value=!0)},null,8,["title"]),l(o(n),{title:o(s)("buttonBottom"),"is-link":"",onClick:t[3]||(t[3]=e=>m.value=!0)},null,8,["title"]),l(o(n),{title:o(s)("buttonLeft"),"is-link":"",onClick:t[4]||(t[4]=e=>w.value=!0)},null,8,["title"]),l(o(n),{title:o(s)("buttonRight"),"is-link":"",onClick:t[5]||(t[5]=e=>v.value=!0)},null,8,["title"]),l(o(u),{show:d.value,"onUpdate:show":t[6]||(t[6]=e=>d.value=e),position:"top",style:{height:"30%"}},null,8,["show"]),l(o(u),{show:m.value,"onUpdate:show":t[7]||(t[7]=e=>m.value=e),position:"bottom",style:{height:"30%"}},null,8,["show"]),l(o(u),{show:w.value,"onUpdate:show":t[8]||(t[8]=e=>w.value=e),position:"left",style:{width:"30%",height:"100%"}},null,8,["show"]),l(o(u),{show:v.value,"onUpdate:show":t[9]||(t[9]=e=>v.value=e),position:"right",style:{width:"30%",height:"100%"}},null,8,["show"])]),_:1},8,["title"]),l(a,{card:"",title:o(s)("closeIcon")},{default:r(()=>[l(o(n),{title:o(s)("closeIcon"),"is-link":"",onClick:t[10]||(t[10]=e=>f.value=!0)},null,8,["title"]),l(o(n),{title:o(s)("customCloseIcon"),"is-link":"",onClick:t[11]||(t[11]=e=>h.value=!0)},null,8,["title"]),l(o(n),{title:o(s)("customIconPosition"),"is-link":"",onClick:t[12]||(t[12]=e=>F.value=!0)},null,8,["title"]),l(o(u),{show:f.value,"onUpdate:show":t[13]||(t[13]=e=>f.value=e),closeable:"",position:"bottom",style:{height:"30%"}},null,8,["show"]),l(o(u),{show:h.value,"onUpdate:show":t[14]||(t[14]=e=>h.value=e),closeable:"","close-icon":"close",position:"bottom",style:{height:"30%"}},null,8,["show"]),l(o(u),{show:F.value,"onUpdate:show":t[15]||(t[15]=e=>F.value=e),closeable:"","close-icon-position":"top-left",position:"bottom",style:{height:"30%"}},null,8,["show"])]),_:1},8,["title"]),l(a,{card:"",title:o(s)("roundCorner")},{default:r(()=>[l(o(n),{title:o(s)("roundCorner"),"is-link":"",onClick:t[16]||(t[16]=e=>C.value=!0)},null,8,["title"]),l(o(u),{show:C.value,"onUpdate:show":t[17]||(t[17]=e=>C.value=e),round:"",position:"bottom",style:{height:"30%"}},null,8,["show"])]),_:1},8,["title"]),l(a,{card:"",title:o(s)("teleport")},{default:r(()=>[l(o(n),{title:o(s)("teleport"),"is-link":"",onClick:t[18]||(t[18]=e=>b.value=!0)},null,8,["title"]),l(o(u),{show:b.value,"onUpdate:show":t[19]||(t[19]=e=>b.value=e),teleport:"body",style:{padding:"30px 50px"}},null,8,["show"])]),_:1},8,["title"])],64)}}});export{J as default};
