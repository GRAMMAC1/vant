import{a as r,T as c}from"./index.eb166e5b.js";import{I as M}from"./index.dc9079c8.js";import{a as w}from"./use-translate.5fa8a2a1.js";import{s as P}from"./index.97866e22.js";import{A as D,u as f,r as z,o as v,c as $,w as i,e as l,a as d,b as m,C as t,h as o,t as u,F as p}from"./vue-libs.ed3d9812.js";import"./with-install.ff23f643.js";import"./use-id.6401ef5b.js";import"./use-expose.840221e5.js";import"./use-route.24f31c45.js";import"./index.79003321.js";import"./use-touch.ecfb8eef.js";import"./on-popup-reopen.08d2a38f.js";import"./constant.80c6de18.js";import"./interceptor.f92ff708.js";import"./use-refs.abd3b4ec.js";import"./index.049f3457.js";import"./index.0f47b777.js";import"./index.5bc144fc.js";import"./use-lazy-render.997d3548.js";import"./index.5e96c57f.js";import"./index.200bbe9c.js";import"./mount-component.6bbd68ed.js";const j=D({__name:"Shrink",setup(I){const a=w({"zh-CN":{tab:"\u6807\u7B7E ",shrink:"\u6536\u7F29\u5E03\u5C40"},"en-US":{tab:"Tab ",shrink:"Shrink"}}),k=[1,2,3,4],y=f(0),C=f(0);return(g,_)=>{const E=z("demo-block");return v(),$(E,{title:t(a)("shrink")},{default:i(()=>[l(t(c),{active:y.value,"onUpdate:active":_[0]||(_[0]=s=>y.value=s),shrink:""},{default:i(()=>[(v(),d(p,null,m(k,s=>l(t(r),{title:t(a)("tab")+s,key:s},{default:i(()=>[o(u(t(a)("content"))+" "+u(s),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"]),l(t(c),{active:C.value,"onUpdate:active":_[1]||(_[1]=s=>C.value=s),type:"card",shrink:"",style:{"margin-top":"var(--van-padding-lg)"}},{default:i(()=>[(v(),d(p,null,m(k,s=>l(t(r),{title:t(a)("tab")+s,key:s},{default:i(()=>[o(u(t(a)("content"))+" "+u(s),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"])}}}),rt=D({__name:"index",setup(I){const a=w({"zh-CN":{tab:"\u6807\u7B7E ",title2:"\u6807\u7B7E\u680F\u6EDA\u52A8",title3:"\u7981\u7528\u6807\u7B7E",title4:"\u6837\u5F0F\u98CE\u683C",title5:"\u70B9\u51FB\u4E8B\u4EF6",title6:"\u7C98\u6027\u5E03\u5C40",title7:"\u81EA\u5B9A\u4E49\u6807\u7B7E",title8:"\u5207\u6362\u52A8\u753B",title9:"\u6ED1\u52A8\u5207\u6362",title10:"\u6EDA\u52A8\u5BFC\u822A",disabled:" \u5DF2\u88AB\u7981\u7528",matchByName:"\u901A\u8FC7\u540D\u79F0\u5339\u914D",beforeChange:"\u5F02\u6B65\u5207\u6362"},"en-US":{tab:"Tab ",content:"content of tab",title2:"Swipe Tabs",title3:"Disabled Tab",title4:"Card Style",title5:"Click Event",title6:"Sticky",title7:"Custom Tab",title8:"Switch Animation",title9:"Swipeable",title10:"Scrollspy",disabled:" is disabled",matchByName:"Match By Name",beforeChange:"Before Change"}}),k=f(0),y=f(0),C=f(0),g=f(0),_=f(0),E=f(0),s=f(0),A=f(0),F=f(0),T=f(0),S=f(0),N=f("b"),U=[1,2,3,4],V=({title:B})=>{P(B)},L=B=>B===1?!1:new Promise(n=>{n(B!==3)});return(B,n)=>{const b=z("demo-block");return v(),d(p,null,[l(b,{title:t(a)("basicUsage")},{default:i(()=>[l(t(c),{active:k.value,"onUpdate:active":n[0]||(n[0]=e=>k.value=e)},{default:i(()=>[(v(),d(p,null,m(U,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("matchByName")},{default:i(()=>[l(t(c),{active:N.value,"onUpdate:active":n[1]||(n[1]=e=>N.value=e)},{default:i(()=>[l(t(r),{name:"a",title:t(a)("tab")+1},{default:i(()=>[o(u(t(a)("content"))+" 1 ",1)]),_:1},8,["title"]),l(t(r),{name:"b",title:t(a)("tab")+2},{default:i(()=>[o(u(t(a)("content"))+" 2 ",1)]),_:1},8,["title"]),l(t(r),{name:"c",title:t(a)("tab")+3},{default:i(()=>[o(u(t(a)("content"))+" 3 ",1)]),_:1},8,["title"])]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title2")},{default:i(()=>[l(t(c),{active:y.value,"onUpdate:active":n[2]||(n[2]=e=>y.value=e)},{default:i(()=>[(v(),d(p,null,m(8,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title3")},{default:i(()=>[l(t(c),{active:C.value,"onUpdate:active":n[3]||(n[3]=e=>C.value=e)},{default:i(()=>[(v(),d(p,null,m(3,e=>l(t(r),{title:t(a)("tab")+e,disabled:e===2,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title","disabled"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title4")},{default:i(()=>[l(t(c),{active:g.value,"onUpdate:active":n[4]||(n[4]=e=>g.value=e),type:"card"},{default:i(()=>[(v(),d(p,null,m(3,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title5")},{default:i(()=>[l(t(c),{active:_.value,"onUpdate:active":n[5]||(n[5]=e=>_.value=e),onClickTab:V},{default:i(()=>[(v(),d(p,null,m(2,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title6")},{default:i(()=>[l(t(c),{active:E.value,"onUpdate:active":n[6]||(n[6]=e=>E.value=e),sticky:""},{default:i(()=>[(v(),d(p,null,m(U,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(j),l(b,{title:t(a)("title7")},{default:i(()=>[l(t(c),{active:s.value,"onUpdate:active":n[7]||(n[7]=e=>s.value=e)},{default:i(()=>[(v(),d(p,null,m(2,e=>l(t(r),{key:e},{title:i(()=>[l(t(M),{name:"more-o"}),o(u(t(a)("tab")),1)]),default:i(()=>[o(" "+u(t(a)("content"))+" "+u(e),1)]),_:2},1024)),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title8")},{default:i(()=>[l(t(c),{active:A.value,"onUpdate:active":n[8]||(n[8]=e=>A.value=e),animated:""},{default:i(()=>[(v(),d(p,null,m(U,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title9")},{default:i(()=>[l(t(c),{active:F.value,"onUpdate:active":n[9]||(n[9]=e=>F.value=e),swipeable:""},{default:i(()=>[(v(),d(p,null,m(U,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title10")},{default:i(()=>[l(t(c),{active:T.value,"onUpdate:active":n[10]||(n[10]=e=>T.value=e),scrollspy:"",sticky:""},{default:i(()=>[(v(),d(p,null,m(8,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("beforeChange")},{default:i(()=>[l(t(c),{active:S.value,"onUpdate:active":n[11]||(n[11]=e=>S.value=e),"before-change":L},{default:i(()=>[(v(),d(p,null,m(4,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[o(u(t(a)("content"))+" "+u(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"])],64)}}});export{rt as default};
