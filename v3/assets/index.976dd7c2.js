import{c as C,a as y}from"./use-translate.a3af5295.js";import{m as B,c as L,t as T,w as F}from"./with-install.1b1f1c54.js";import{I as D}from"./index.97c885c5.js";import{B as E}from"./index.06f314c1.js";import{z as _,e as t,D as A,r as I,o as N,a as V,w as r,B as e,h as j,t as b,d as w,F as P}from"./vue-libs.6d5ed635.js";import{C as U}from"./index.d5a3755c.js";import{T as S}from"./function-call.a4c482c7.js";import"./constant.80c6de18.js";import"./use-route.c058a8b7.js";import"./index.31456700.js";import"./use-expose.b6cf8b20.js";import"./Checker.3b339929.js";import"./mount-component.10e6caec.js";import"./index.699a1f95.js";import"./interceptor.0311b2d6.js";import"./use-touch.21117490.js";import"./use-lazy-render.437ea78e.js";import"./on-popup-reopen.8120d0d7.js";import"./index.e5d520da.js";const[z,o,$]=C("submit-bar"),q={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,currency:B("\xA5"),disabled:Boolean,textAlign:String,buttonText:String,buttonType:B("danger"),buttonColor:String,suffixLabel:String,decimalLength:L(2),safeAreaInsetBottom:T};var G=_({name:z,props:q,emits:["submit"],setup(u,{emit:i,slots:n}){const s=()=>{const{price:a,label:c,currency:p,textAlign:h,suffixLabel:x,decimalLength:k}=u;if(typeof a=="number"){const g=(a/100).toFixed(+k).split("."),v=k?`.${g[1]}`:"";return t("div",{class:o("text"),style:{textAlign:h}},[t("span",null,[c||$("label")]),t("span",{class:o("price")},[p,t("span",{class:o("price-integer")},[g[0]]),v]),x&&t("span",{class:o("suffix-label")},[x])])}},d=()=>{var p;const{tip:a,tipIcon:c}=u;if(n.tip||a)return t("div",{class:o("tip")},[c&&t(D,{class:o("tip-icon"),name:c},null),a&&t("span",{class:o("tip-text")},[a]),(p=n.tip)==null?void 0:p.call(n)])},f=()=>i("submit"),l=()=>n.button?n.button():t(E,{round:!0,type:u.buttonType,text:u.buttonText,class:o("button",u.buttonType),color:u.buttonColor,loading:u.loading,disabled:u.disabled,onClick:f},null);return()=>{var a,c;return t("div",{class:[o(),{"van-safe-area-bottom":u.safeAreaInsetBottom}]},[(a=n.top)==null?void 0:a.call(n),d(),t("div",{class:o("bar")},[(c=n.default)==null?void 0:c.call(n),s(),l()])])}}});const m=F(G);const rt=_({setup(u){const i=y({"zh-CN":{tip1:"\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u914D\u9001",tip2:"\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u914D\u9001, ",tip3:"\u4FEE\u6539\u5730\u5740",check:"\u5168\u9009",submit:"\u63D0\u4EA4\u8BA2\u5355",clickLink:"\u4FEE\u6539\u5730\u5740",clickButton:"\u70B9\u51FB\u6309\u94AE"},"en-US":{tip1:"Some tips",tip2:"Some tips, ",tip3:"Link",check:"Label",submit:"Submit",clickLink:"Click Link",clickButton:"Submit"}}),n=A(!0),s=()=>S(i("clickButton")),d=()=>S(i("clickLink"));return(f,l)=>{const a=I("demo-block");return N(),V(P,null,[t(a,{title:e(i)("basicUsage")},{default:r(()=>[t(e(m),{price:3050,"button-text":e(i)("submit"),onSubmit:s},null,8,["button-text"])]),_:1},8,["title"]),t(a,{title:e(i)("disabled")},{default:r(()=>[t(e(m),{disabled:"",price:3050,"button-text":e(i)("submit"),tip:e(i)("tip1"),"tip-icon":"info-o",onSubmit:s},null,8,["button-text","tip"])]),_:1},8,["title"]),t(a,{title:e(i)("loadingStatus")},{default:r(()=>[t(e(m),{loading:"",price:3050,"button-text":e(i)("submit"),onSubmit:s},null,8,["button-text"])]),_:1},8,["title"]),t(a,{title:e(i)("advancedUsage")},{default:r(()=>[t(e(m),{price:3050,"button-text":e(i)("submit"),onSubmit:s},{tip:r(()=>[j(b(e(i)("tip2"))+" ",1),w("span",{class:"edit-address",onClick:d},b(e(i)("tip3")),1)]),default:r(()=>[t(e(U),{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c)},{default:r(()=>[j(b(e(i)("check")),1)]),_:1},8,["modelValue"])]),_:1},8,["button-text"])]),_:1},8,["title"])],64)}}});export{rt as default};
