/*! For license information please see 9785.d1df222b.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["9785"],{760:function(e,t,r){"use strict";r.r(t);var o=r("75403");r.es(o,t),r("43972");let n=o.default;t.default=n},75403:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o.default}});var o=r("72923");r.es(o,t)},72923:function(e,t,r){"use strict";r.r(t);var o=r("69298"),n=r("63468"),a=r("30115"),i=r("54991"),c=r("70656");t.default=(0,o.defineComponent)({__name:"index",setup(e){var t=(0,c.useTranslate)({"zh-CN":{title:"\u5546\u54C1\u540D\u79F0",discountInfo:"\u8425\u9500\u4FE1\u606F",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},"en-US":{discountInfo:"Discount Info",customContent:"Custom Content"}}),r=(0,c.cdnURL)("ipad.jpeg");return(e,c)=>{var l=(0,o.resolveComponent)("demo-block");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(l,{title:(0,o.unref)(t)("basicUsage")},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(n.default),{num:"2",price:"2.00",desc:(0,o.unref)(t)("desc"),title:(0,o.unref)(t)("title"),thumb:(0,o.unref)(r)},null,8,["desc","title","thumb"])]),_:1},8,["title"]),(0,o.createVNode)(l,{title:(0,o.unref)(t)("discountInfo")},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(n.default),{num:"2",price:"2.00","origin-price":"10.00",tag:(0,o.unref)(t)("tag"),desc:(0,o.unref)(t)("desc"),title:(0,o.unref)(t)("title"),thumb:(0,o.unref)(r)},null,8,["tag","desc","title","thumb"])]),_:1},8,["title"]),(0,o.createVNode)(l,{title:(0,o.unref)(t)("customContent")},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(n.default),{num:"2",price:"2.00",desc:(0,o.unref)(t)("desc"),title:(0,o.unref)(t)("title"),thumb:(0,o.unref)(r)},{tags:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(a.default),{plain:"",type:"primary",style:{"margin-right":"5px"}},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tag")),1)]),_:1}),(0,o.createVNode)((0,o.unref)(a.default),{plain:"",type:"primary"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("tag")),1)]),_:1})]),footer:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(i.default),{round:"",size:"mini"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("button")),1)]),_:1}),(0,o.createVNode)((0,o.unref)(i.default),{round:"",size:"mini"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("button")),1)]),_:1})]),_:1},8,["desc","title","thumb"])]),_:1},8,["title"])],64)}}})},3042:function(e,t,r){"use strict";r.r(t),r.d(t,{Badge:function(){return a}});var o=r("59633"),n=r("9693"),a=(0,o.withInstall)(n.default);t.default=a},54991:function(e,t,r){"use strict";r.r(t),r.d(t,{Button:function(){return a}});var o=r("59633"),n=r("3883"),a=(0,o.withInstall)(n.default);t.default=a},63468:function(e,t,r){"use strict";r.r(t);var o=r("59633"),n=r("31017"),a=(0,o.withInstall)(n.default);t.default=a},15057:function(e,t,r){"use strict";r.r(t),r.d(t,{setGlobalZIndex:function(){return a},useGlobalZIndex:function(){return n}});var o=2e3,n=()=>++o,a=e=>{o=e}},3578:function(e,t,r){"use strict";r.r(t),r.d(t,{route:function(){return a},routeProps:function(){return n},useRoute:function(){return i}}),r("56821"),r("5780");var o=r("69298"),n={to:[String,Object],url:String,replace:Boolean};function a(e){var{to:t,url:r,replace:o,$router:n}=e;t&&n?n[o?"replace":"push"](t):r&&(o?location.replace(r):location.href=r)}function i(){var e=(0,o.getCurrentInstance)().proxy;return()=>a(e)}},57739:function(e,t,r){"use strict";r.r(t),r.d(t,{Icon:function(){return a}});var o=r("59633"),n=r("99931"),a=(0,o.withInstall)(n.default);t.default=a},35980:function(e,t,r){"use strict";r.r(t),r.d(t,{Image:function(){return a}});var o=r("59633"),n=r("81247"),a=(0,o.withInstall)(n.default);t.default=a},4341:function(e,t,r){"use strict";r.r(t),r.d(t,{Loading:function(){return a}});var o=r("59633"),n=r("22456"),a=(0,o.withInstall)(n.default);t.default=a},30115:function(e,t,r){"use strict";r.r(t),r.d(t,{Tag:function(){return a}});var o=r("59633"),n=r("64860"),a=(0,o.withInstall)(n.default);t.default=a},9693:function(e,t,r){"use strict";r.r(t),r("74366"),r("52400"),r("56821"),r("5780"),r("22584");var o=r("69298"),n=r("59633"),[a,i]=(0,n.createNamespace)("badge"),c={dot:Boolean,max:n.numericProp,tag:(0,n.makeStringProp)("div"),color:String,offset:Array,content:n.numericProp,showZero:n.truthProp,position:(0,n.makeStringProp)("top-right")};t.default=(0,o.defineComponent)({name:a,props:c,setup(e,t){var{slots:r}=t,a=()=>{if(r.content)return!0;var{content:t,showZero:o}=e;return(0,n.isDef)(t)&&""!==t&&(o||0!==t&&"0"!==t)},c=()=>{var{dot:t,max:o,content:i}=e;if(!t&&a())return r.content?r.content():(0,n.isDef)(o)&&(0,n.isNumeric)(i)&&+i>+o?"".concat(o,"+"):i},l=e=>e.startsWith("-")?e.replace("-",""):"-".concat(e),u=(0,o.computed)(()=>{var t={background:e.color};if(e.offset){var[o,a]=e.offset,{position:i}=e,[c,u]=i.split("-");r.default?("number"==typeof a?t[c]=(0,n.addUnit)("top"===c?a:-a):t[c]="top"===c?(0,n.addUnit)(a):l(a),"number"==typeof o?t[u]=(0,n.addUnit)("left"===u?o:-o):t[u]="left"===u?(0,n.addUnit)(o):l(o)):(t.marginTop=(0,n.addUnit)(a),t.marginLeft=(0,n.addUnit)(o))}return t}),d=()=>{if(a()||e.dot)return(0,o.createVNode)("div",{class:i([e.position,{dot:e.dot,fixed:!!r.default}]),style:u.value},[c()])};return()=>{if(r.default){var{tag:t}=e;return(0,o.createVNode)(t,{class:i("wrapper")},{default:()=>[r.default(),d()]})}return d()}}})},3883:function(e,t,r){"use strict";r.r(t),r("74366"),r("52400"),r("20964");var o=r("69298"),n=r("59633"),a=r("3578"),i=r("57739"),c=r("4341"),[l,u]=(0,n.createNamespace)("button"),d=(0,n.extend)({},a.routeProps,{tag:(0,n.makeStringProp)("button"),text:String,icon:String,type:(0,n.makeStringProp)("default"),size:(0,n.makeStringProp)("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:(0,n.makeStringProp)("button"),loadingSize:n.numericProp,loadingText:String,loadingType:String,iconPosition:(0,n.makeStringProp)("left")});t.default=(0,o.defineComponent)({name:l,props:d,emits:["click"],setup(e,t){var{emit:r,slots:l}=t,d=(0,a.useRoute)(),s=()=>l.loading?l.loading():(0,o.createVNode)(c.Loading,{size:e.loadingSize,type:e.loadingType,class:u("loading")},null),f=()=>e.loading?s():l.icon?(0,o.createVNode)("div",{class:u("icon")},[l.icon()]):e.icon?(0,o.createVNode)(i.Icon,{name:e.icon,class:u("icon"),classPrefix:e.iconPrefix},null):void 0,p=()=>{var t;if(t=e.loading?e.loadingText:l.default?l.default():e.text)return(0,o.createVNode)("span",{class:u("text")},[t])},m=()=>{var{color:t,plain:r}=e;if(t){var o={color:r?t:"white"};return!r&&(o.background=t),t.includes("gradient")?o.border=0:o.borderColor=t,o}},v=t=>{e.loading?(0,n.preventDefault)(t):!e.disabled&&(r("click",t),d())};return()=>{var{tag:t,type:r,size:a,block:i,round:c,plain:l,square:d,loading:s,disabled:g,hairline:h,nativeType:b,iconPosition:N}=e,V=[u([r,a,{plain:l,block:i,round:c,square:d,loading:s,disabled:g,hairline:h}]),{[n.BORDER_SURROUND]:h}];return(0,o.createVNode)(t,{type:b,class:V,style:m(),disabled:g,onClick:v},{default:()=>[(0,o.createVNode)("div",{class:u("content")},["left"===N&&f(),p(),"right"===N&&f()])]})}}})},31017:function(e,t,r){"use strict";r.r(t),r("74366"),r("52400"),r("22584"),r("5780");var o=r("69298"),n=r("59633"),a=r("30115"),i=r("35980"),[c,l]=(0,n.createNamespace)("card"),u={tag:String,num:n.numericProp,desc:String,thumb:String,title:String,price:n.numericProp,centered:Boolean,lazyLoad:Boolean,currency:(0,n.makeStringProp)("\xa5"),thumbLink:String,originPrice:n.numericProp};t.default=(0,o.defineComponent)({name:c,props:u,emits:["clickThumb"],setup(e,t){var{slots:r,emit:c}=t,u=()=>r.title?r.title():e.title?(0,o.createVNode)("div",{class:[l("title"),"van-multi-ellipsis--l2"]},[e.title]):void 0,d=()=>{if(r.tag||e.tag)return(0,o.createVNode)("div",{class:l("tag")},[r.tag?r.tag():(0,o.createVNode)(a.Tag,{mark:!0,type:"primary"},{default:()=>[e.tag]})])},s=()=>r.thumb?r.thumb():(0,o.createVNode)(i.Image,{src:e.thumb,fit:"cover",width:"100%",height:"100%",lazyLoad:e.lazyLoad},null),f=()=>{if(r.thumb||e.thumb)return(0,o.createVNode)("a",{href:e.thumbLink,class:l("thumb"),onClick:e=>c("clickThumb",e)},[s(),d()])},p=()=>r.desc?r.desc():e.desc?(0,o.createVNode)("div",{class:[l("desc"),"van-ellipsis"]},[e.desc]):void 0,m=()=>{var t=e.price.toString().split(".");return(0,o.createVNode)("div",null,[(0,o.createVNode)("span",{class:l("price-currency")},[e.currency]),(0,o.createVNode)("span",{class:l("price-integer")},[t[0]]),(0,o.createTextVNode)("."),(0,o.createVNode)("span",{class:l("price-decimal")},[t[1]])])};return()=>{var t,a,i,c=r.num||(0,n.isDef)(e.num),d=r.price||(0,n.isDef)(e.price),s=r["origin-price"]||(0,n.isDef)(e.originPrice),v=c||d||s||r.bottom,g=d&&(0,o.createVNode)("div",{class:l("price")},[r.price?r.price():m()]),h=s&&(0,o.createVNode)("div",{class:l("origin-price")},[r["origin-price"]?r["origin-price"]():"".concat(e.currency," ").concat(e.originPrice)]),b=c&&(0,o.createVNode)("div",{class:l("num")},[r.num?r.num():"x".concat(e.num)]),N=r.footer&&(0,o.createVNode)("div",{class:l("footer")},[r.footer()]),V=v&&(0,o.createVNode)("div",{class:l("bottom")},[(t=r["price-top"])===null||void 0===t?void 0:t.call(r),g,h,b,(a=r.bottom)===null||void 0===a?void 0:a.call(r)]);return(0,o.createVNode)("div",{class:l()},[(0,o.createVNode)("div",{class:l("header")},[f(),(0,o.createVNode)("div",{class:l("content",{centered:e.centered})},[(0,o.createVNode)("div",null,[u(),p(),(i=r.tags)===null||void 0===i?void 0:i.call(r)]),V])]),N])}}})},4418:function(e,t,r){"use strict";r.r(t),r.d(t,{CONFIG_PROVIDER_KEY:function(){return l}}),r("74366"),r("52400"),r("95818"),r("56821"),r("5780"),r("76959"),r("11057"),r("64667");var o=r("69298"),n=r("59633"),a=r("15057"),[i,c]=(0,n.createNamespace)("config-provider"),l=Symbol(i),u={tag:(0,n.makeStringProp)("div"),theme:(0,n.makeStringProp)("light"),zIndex:Number,themeVars:Object,themeVarsDark:Object,themeVarsLight:Object,themeVarsScope:(0,n.makeStringProp)("local"),iconPrefix:String};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(e).forEach(r=>{e[r]!==t[r]&&document.documentElement.style.setProperty(r,e[r])}),Object.keys(t).forEach(t=>{!e[t]&&document.documentElement.style.removeProperty(t)})}t.default=(0,o.defineComponent)({name:i,props:u,setup(e,t){var{slots:r}=t,i=(0,o.computed)(()=>{var t,r;return t=(0,n.extend)({},e.themeVars,"dark"===e.theme?e.themeVarsDark:e.themeVarsLight),r={},Object.keys(t).forEach(e=>{var o=(0,n.kebabCase)(e).replace(/([a-zA-Z])(\d)/g,"$1-$2");r["--van-".concat(o)]=t[e]}),r});if(n.inBrowser){var u=()=>{document.documentElement.classList.add("van-theme-".concat(e.theme))},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.theme;document.documentElement.classList.remove("van-theme-".concat(t))};(0,o.watch)(()=>e.theme,(e,t)=>{t&&s(t),u()},{immediate:!0}),(0,o.onActivated)(u),(0,o.onDeactivated)(s),(0,o.onBeforeUnmount)(s),(0,o.watch)(i,(t,r)=>{"global"===e.themeVarsScope&&d(t,r)}),(0,o.watch)(()=>e.themeVarsScope,(e,t)=>{"global"===t&&d({},i.value),"global"===e&&d(i.value,{})}),"global"===e.themeVarsScope&&d(i.value,{})}return(0,o.provide)(l,e),(0,o.watchEffect)(()=>{void 0!==e.zIndex&&(0,a.setGlobalZIndex)(e.zIndex)}),()=>(0,o.createVNode)(e.tag,{class:c(),style:"local"===e.themeVarsScope?i.value:void 0},{default:()=>{var e;return[(e=r.default)===null||void 0===e?void 0:e.call(r)]}})}})},99931:function(e,t,r){"use strict";r.r(t),r("74366"),r("52400"),r("20964");var o=r("69298"),n=r("59633"),a=r("3042"),i=r("4418"),[c,l]=(0,n.createNamespace)("icon"),u=e=>null==e?void 0:e.includes("/"),d={dot:Boolean,tag:(0,n.makeStringProp)("i"),name:String,size:n.numericProp,badge:n.numericProp,color:String,badgeProps:Object,classPrefix:String};t.default=(0,o.defineComponent)({name:c,props:d,setup(e,t){var{slots:r}=t,c=(0,o.inject)(i.CONFIG_PROVIDER_KEY,null),d=(0,o.computed)(()=>e.classPrefix||(null==c?void 0:c.iconPrefix)||l());return()=>{var{tag:t,dot:i,name:c,size:s,badge:f,color:p}=e,m=u(c);return(0,o.createVNode)(a.Badge,(0,o.mergeProps)({dot:i,tag:t,class:[d.value,m?"":"".concat(d.value,"-").concat(c)],style:{color:p,fontSize:(0,n.addUnit)(s)},content:f},e.badgeProps),{default:()=>{var e;return[(e=r.default)===null||void 0===e?void 0:e.call(r),m&&(0,o.createVNode)("img",{class:l("image"),src:c},null)]}})}}})},81247:function(e,t,r){"use strict";r.r(t),r("74366"),r("52400");var o=r("69298"),n=r("59633"),a=r("57739"),[i,c]=(0,n.createNamespace)("image"),l={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:n.numericProp,height:n.numericProp,radius:n.numericProp,lazyLoad:Boolean,iconSize:n.numericProp,showError:n.truthProp,errorIcon:(0,n.makeStringProp)("photo-fail"),iconPrefix:String,showLoading:n.truthProp,loadingIcon:(0,n.makeStringProp)("photo")};t.default=(0,o.defineComponent)({name:i,props:l,emits:["load","error"],setup(e,t){var{emit:r,slots:i}=t,l=(0,o.ref)(!1),u=(0,o.ref)(!0),d=(0,o.ref)(),{$Lazyload:s}=(0,o.getCurrentInstance)().proxy,f=(0,o.computed)(()=>{var t={width:(0,n.addUnit)(e.width),height:(0,n.addUnit)(e.height)};return(0,n.isDef)(e.radius)&&(t.overflow="hidden",t.borderRadius=(0,n.addUnit)(e.radius)),t});(0,o.watch)(()=>e.src,()=>{l.value=!1,u.value=!0});var p=e=>{u.value&&(u.value=!1,r("load",e))},m=()=>{var e=new Event("load");Object.defineProperty(e,"target",{value:d.value,enumerable:!0}),p(e)},v=e=>{l.value=!0,u.value=!1,r("error",e)},g=(t,r,n)=>n?n():(0,o.createVNode)(a.Icon,{name:t,size:e.iconSize,class:r,classPrefix:e.iconPrefix},null),h=()=>u.value&&e.showLoading?(0,o.createVNode)("div",{class:c("loading")},[g(e.loadingIcon,c("loading-icon"),i.loading)]):l.value&&e.showError?(0,o.createVNode)("div",{class:c("error")},[g(e.errorIcon,c("error-icon"),i.error)]):void 0,b=()=>{if(!l.value&&e.src){var t={alt:e.alt,class:c("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?(0,o.withDirectives)((0,o.createVNode)("img",(0,o.mergeProps)({ref:d},t),null),[[(0,o.resolveDirective)("lazy"),e.src]]):(0,o.createVNode)("img",(0,o.mergeProps)({ref:d,src:e.src,onLoad:p,onError:v},t),null)}},N=e=>{var{el:t}=e,r=()=>{t===d.value&&u.value&&m()};d.value?r():(0,o.nextTick)(r)},V=e=>{var{el:t}=e;t===d.value&&!l.value&&v()};return s&&n.inBrowser&&(s.$on("loaded",N),s.$on("error",V),(0,o.onBeforeUnmount)(()=>{s.$off("loaded",N),s.$off("error",V)})),(0,o.onMounted)(()=>{(0,o.nextTick)(()=>{var t;((t=d.value)===null||void 0===t?void 0:t.complete)&&!e.lazyLoad&&m()})}),()=>{var t;return(0,o.createVNode)("div",{class:c({round:e.round,block:e.block}),style:f.value},[b(),h(),(t=i.default)===null||void 0===t?void 0:t.call(i)])}}})},22456:function(e,t,r){"use strict";r.r(t),r("74366"),r("52400"),r("6868"),r("4331");var o=r("69298"),n=r("59633"),[a,i]=(0,n.createNamespace)("loading"),c=Array(12).fill(null).map((e,t)=>(0,o.createVNode)("i",{class:i("line",String(t+1))},null)),l=(0,o.createVNode)("svg",{class:i("circular"),viewBox:"25 25 50 50"},[(0,o.createVNode)("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),u={size:n.numericProp,type:(0,n.makeStringProp)("circular"),color:String,vertical:Boolean,textSize:n.numericProp,textColor:String};t.default=(0,o.defineComponent)({name:a,props:u,setup(e,t){var{slots:r}=t,a=(0,o.computed)(()=>(0,n.extend)({color:e.color},(0,n.getSizeStyle)(e.size))),u=()=>{var t="spinner"===e.type?c:l;return(0,o.createVNode)("span",{class:i("spinner",e.type),style:a.value},[r.icon?r.icon():t])},d=()=>{if(r.default){var t;return(0,o.createVNode)("span",{class:i("text"),style:{fontSize:(0,n.addUnit)(e.textSize),color:(t=e.textColor)!==null&&void 0!==t?t:e.color}},[r.default()])}};return()=>{var{type:t,vertical:r}=e;return(0,o.createVNode)("div",{class:i([t,{vertical:r}]),"aria-live":"polite","aria-busy":!0},[u(),d()])}}})},64860:function(e,t,r){"use strict";r.r(t),r("74366"),r("52400");var o=r("69298"),n=r("59633"),a=r("57739"),[i,c]=(0,n.createNamespace)("tag"),l={size:String,mark:Boolean,show:n.truthProp,type:(0,n.makeStringProp)("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};t.default=(0,o.defineComponent)({name:i,props:l,emits:["close"],setup(e,t){var{slots:r,emit:i}=t,l=e=>{e.stopPropagation(),i("close",e)},u=()=>e.plain?{color:e.textColor||e.color,borderColor:e.color}:{color:e.textColor,background:e.color},d=()=>{var t,{type:i,mark:d,plain:s,round:f,size:p,closeable:m}=e,v={mark:d,plain:s,round:f};p&&(v[p]=p);var g=m&&(0,o.createVNode)(a.Icon,{name:"cross",class:[c("close"),n.HAPTICS_FEEDBACK],onClick:l},null);return(0,o.createVNode)("span",{style:u(),class:c([v,i])},[(t=r.default)===null||void 0===t?void 0:t.call(r),g])};return()=>(0,o.createVNode)(o.Transition,{name:e.closeable?"van-fade":void 0},{default:()=>[e.show?d():null]})}})},43972:function(e){},20055:function(e){}}]);