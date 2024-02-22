import{c as W,h as _,E as j,n as G,H as E,r as z,W as J,X as Q,l as Z,q as p,F as ee}from"./use-translate.5fa8a2a1.js";import{c as w,n as X,w as te}from"./with-install.ff23f643.js";import{u as ae}from"./use-touch.ecfb8eef.js";import{A as ne,u as x,D as A,e as y}from"./vue-libs.ed3d9812.js";const[re,f]=W("slider"),ie={min:w(0),max:w(100),step:w(1),range:Boolean,reverse:Boolean,disabled:Boolean,readonly:Boolean,vertical:Boolean,barHeight:X,buttonSize:X,activeColor:String,inactiveColor:String,modelValue:{type:[Number,Array],default:0}},le=ne({name:re,props:ie,emits:["change","dragEnd","dragStart","update:modelValue"],setup(t,{emit:b,slots:V}){let S,o,u;const N=x(),B=x(),c=x(),g=ae(),m=A(()=>Number(t.max)-Number(t.min)),D=A(()=>{const e=t.vertical?"width":"height";return{background:t.inactiveColor,[e]:_(t.barHeight)}}),s=e=>t.range&&Array.isArray(e),H=()=>{const{modelValue:e,min:a}=t;return s(e)?`${(e[1]-e[0])*100/m.value}%`:`${(e-Number(a))*100/m.value}%`},M=()=>{const{modelValue:e,min:a}=t;return s(e)?`${(e[0]-Number(a))*100/m.value}%`:"0%"},R=A(()=>{const a={[t.vertical?"height":"width"]:H(),background:t.activeColor};c.value&&(a.transition="none");const n=()=>t.vertical?t.reverse?"bottom":"top":t.reverse?"right":"left";return a[n()]=M(),a}),h=e=>{const a=+t.min,n=+t.max,i=+t.step;e=ee(e,a,n);const r=Math.round((e-a)/i)*i;return Q(a,r)},Y=e=>{var i,r;const a=(i=e[0])!=null?i:Number(t.min),n=(r=e[1])!=null?r:Number(t.max);return a>n?[n,a]:[a,n]},d=(e,a)=>{s(e)?e=Y(e).map(h):e=h(e),E(e,t.modelValue)||b("update:modelValue",e),a&&!E(e,u)&&b("change",e)},$=e=>{if(e.stopPropagation(),t.disabled||t.readonly)return;const{min:a,reverse:n,vertical:i,modelValue:r}=t,l=z(N),L=()=>i?n?l.bottom-e.clientY:e.clientY-l.top:n?l.right-e.clientX:e.clientX-l.left,O=i?l.height:l.width,v=Number(a)+L()/O*m.value;if(s(r)){const[T,k]=r,U=(T+k)/2;v<=U?d([v,k],!0):d([T,v],!0)}else d(v,!0)},F=e=>{t.disabled||t.readonly||(g.start(e),o=t.modelValue,s(o)?u=o.map(h):u=h(o),c.value="start")},I=e=>{if(t.disabled||t.readonly)return;c.value==="start"&&b("dragStart",e),Z(e,!0),g.move(e),c.value="dragging";const a=z(N),n=t.vertical?g.deltaY.value:g.deltaX.value,i=t.vertical?a.height:a.width;let r=n/i*m.value;if(t.reverse&&(r=-r),s(u)){const l=t.reverse?1-S:S;o[l]=u[l]+r}else o=u+r;d(o)},P=e=>{t.disabled||t.readonly||(c.value==="dragging"&&(d(o,!0),b("dragEnd",e)),c.value="")},q=e=>typeof e=="number"?f("button-wrapper",["left","right"][e]):f("button-wrapper",t.reverse?"left":"right"),K=(e,a)=>{if(typeof a=="number"){const n=V[a===0?"left-button":"right-button"];if(n)return n({value:e})}return V.button?V.button({value:e}):y("div",{class:f("button"),style:p(t.buttonSize)},null)},C=e=>{const a=typeof e=="number"?t.modelValue[e]:t.modelValue;return y("div",{ref:B,role:"slider",class:q(e),tabindex:t.disabled?void 0:0,"aria-valuemin":t.min,"aria-valuenow":a,"aria-valuemax":t.max,"aria-disabled":t.disabled||void 0,"aria-readonly":t.readonly||void 0,"aria-orientation":t.vertical?"vertical":"horizontal",onTouchstartPassive:n=>{typeof e=="number"&&(S=e),F(n)},onTouchend:P,onTouchcancel:P,onClick:J},[K(a,e)])};return d(t.modelValue),j(()=>t.modelValue),G("touchmove",I,{target:B}),()=>y("div",{ref:N,style:D.value,class:f({vertical:t.vertical,disabled:t.disabled}),onClick:$},[y("div",{class:f("bar"),style:R.value},[t.range?[C(0),C(1)]:C()])])}}),de=te(le);export{de as S};
