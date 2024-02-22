import{c as A,h as v,q as C,a as S}from"./use-translate.a3af5295.js";import{c as g,t as _,n as w,m as p,w as B}from"./with-install.1b1f1c54.js";import{z as E,e,D as y,r as V,o as b,a as k,w as c,B as u,d as s,t as F,F as D}from"./vue-libs.6d5ed635.js";import{S as W}from"./index.65085948.js";import"./index.31456700.js";const[x,i]=A("skeleton"),f="100%",z="60%",T={row:g(0),title:Boolean,round:Boolean,avatar:Boolean,loading:_,animate:_,avatarSize:w,titleWidth:w,avatarShape:p("round"),rowWidth:{type:[Number,String,Array],default:f}};var U=E({name:x,props:T,setup(t,{slots:a}){const l=()=>{if(t.avatar)return e("div",{class:i("avatar",t.avatarShape),style:C(t.avatarSize)},null)},h=()=>{if(t.title)return e("h3",{class:i("title"),style:{width:v(t.titleWidth)}},null)},d=n=>{const{rowWidth:o}=t;return o===f&&n===+t.row-1?z:Array.isArray(o)?o[n]:o},r=()=>Array(t.row).fill("").map((n,o)=>e("div",{class:i("row"),style:{width:v(d(o))}},null));return()=>{var n;return t.loading?e("div",{class:i({animate:t.animate,round:t.round})},[l(),e("div",{class:i("content")},[h(),r()])]):(n=a.default)==null?void 0:n.call(a)}}});const m=B(U);const N={class:"demo-preview"},j=s("img",{src:"https://img.yzcdn.cn/vant/logo.png"},null,-1),P={class:"demo-content"},q=E({setup(t){const a=S({"zh-CN":{showAvatar:"\u663E\u793A\u5934\u50CF",showChildren:"\u663E\u793A\u5B50\u7EC4\u4EF6",title:"\u5173\u4E8E Vant",desc:"Vant \u662F\u4E00\u5957\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF Vue \u7EC4\u4EF6\u5E93\uFF0C\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u57FA\u7840\u7EC4\u4EF6\u548C\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u642D\u5EFA\u79FB\u52A8\u5E94\u7528\u3002"},"en-US":{showAvatar:"Show Avatar",showChildren:"Show Children",title:"About Vant",desc:"Vant is a set of Mobile UI Components built on Vue."}}),l=y(!1);return(h,d)=>{const r=V("demo-block");return b(),k(D,null,[e(r,{title:u(a)("basicUsage")},{default:c(()=>[e(u(m),{title:"",row:3})]),_:1},8,["title"]),e(r,{title:u(a)("showAvatar")},{default:c(()=>[e(u(m),{title:"",avatar:"",row:3})]),_:1},8,["title"]),e(r,{title:u(a)("showChildren")},{default:c(()=>[e(u(W),{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=n=>l.value=n),size:"24px"},null,8,["modelValue"]),e(u(m),{title:"",avatar:"",row:3,loading:!l.value},{default:c(()=>[s("div",N,[j,s("div",P,[s("h3",null,F(u(a)("title")),1),s("p",null,F(u(a)("desc")),1)])])]),_:1},8,["loading"])]),_:1},8,["title"])],64)}}});export{q as default};
