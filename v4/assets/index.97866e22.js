import{c as M,p as L,i as N,e as h,d as z,f as j}from"./use-translate.5fa8a2a1.js";import{m as k,n as v,a as U,u as O,w as V}from"./with-install.ff23f643.js";import{I as q}from"./index.dc9079c8.js";import{P as A}from"./index.5bc144fc.js";import{L as D}from"./index.200bbe9c.js";import{A as E,x as p,M as F,G,e as i,B as S,u as H,O as _}from"./vue-libs.ed3d9812.js";import{m as J,u as K}from"./mount-component.6bbd68ed.js";let d=0;function Q(e){e?(d||document.body.classList.add("van-toast--unclickable"),d++):d&&(d--,d||document.body.classList.remove("van-toast--unclickable"))}const[R,c]=M("toast"),W=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],X={icon:String,show:Boolean,type:k("text"),overlay:Boolean,message:v,iconSize:v,duration:U(2e3),position:k("middle"),teleport:[String,Object],wordBreak:String,className:O,iconPrefix:String,transition:k("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:O,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean},T=E({name:R,props:X,emits:["update:show"],setup(e,{emit:n,slots:s}){let f,l=!1;const r=()=>{const t=e.show&&e.forbidClick;l!==t&&(l=t,Q(l))},u=t=>n("update:show",t),y=()=>{e.closeOnClick&&u(!1)},m=()=>clearTimeout(f),g=()=>{const{icon:t,type:o,iconSize:C,iconPrefix:B,loadingType:I}=e;if(t||o==="success"||o==="fail")return i(q,{name:t||o,size:C,class:c("icon"),classPrefix:B},null);if(o==="loading")return i(D,{class:c("loading"),size:C,type:I},null)},x=()=>{const{type:t,message:o}=e;if(s.message)return i("div",{class:c("text")},[s.message()]);if(N(o)&&o!=="")return t==="html"?i("div",{key:0,class:c("text"),innerHTML:String(o)},null):i("div",{class:c("text")},[o])};return p(()=>[e.show,e.forbidClick],r),p(()=>[e.show,e.type,e.message,e.duration],()=>{m(),e.show&&e.duration>0&&(f=setTimeout(()=>{u(!1)},e.duration))}),F(r),G(r),()=>i(A,S({class:[c([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:y,onClosed:m,"onUpdate:show":u},L(e,W)),{default:()=>[g(),x()]})}}),Y={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let a=[],Z=!1,b=h({},Y);const $=new Map;function P(e){return j(e)?e:{message:e}}function ee(){const{instance:e,unmount:n}=J({setup(){const s=H(""),{open:f,state:l,close:r,toggle:u}=K(),y=()=>{},m=()=>i(T,S(l,{onClosed:y,"onUpdate:show":u}),null);return p(s,g=>{l.message=g}),_().render=m,{open:f,close:r,message:s}}});return e}function ne(){if(!a.length||Z){const e=ee();a.push(e)}return a[a.length-1]}function te(e={}){if(!z)return{};const n=ne(),s=P(e);return n.open(h({},b,$.get(s.type||b.type),s)),n}const w=e=>n=>te(h({type:e},P(n))),de=w("loading"),fe=w("success"),me=w("fail"),ge=e=>{a.length&&(e?(a.forEach(n=>{n.close()}),a=[]):a[0].close())},ye=V(T);export{ye as T,de as a,fe as b,ge as c,me as d,te as s};
