import{z as I,H as j,D as S,r as B,o as p,a as k,e as t,w as l,B as e,h as s,t as d,d as x,F as h,b as U,c as y,V as F}from"./vue-libs.6d5ed635.js";import{C as i}from"./index.d5a3755c.js";import{C as b}from"./index.040293cd.js";import{B as C}from"./index.06f314c1.js";import{C as D}from"./index.b9a7e6f4.js";import{C as R}from"./index.d6f88d18.js";import{a as L}from"./use-translate.a3af5295.js";import{u as w}from"./use-refs.a1903a82.js";import"./with-install.1b1f1c54.js";import"./use-expose.b6cf8b20.js";import"./Checker.3b339929.js";import"./index.97c885c5.js";import"./constant.80c6de18.js";import"./use-route.c058a8b7.js";import"./index.31456700.js";const N=["src"],G={class:"demo-checkbox-buttons"},oe=I({setup(T){const o=L({"zh-CN":{checkbox:"\u590D\u9009\u6846",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customIconSize:"\u81EA\u5B9A\u4E49\u5927\u5C0F",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",customShape:"\u81EA\u5B9A\u4E49\u5F62\u72B6",title3:"\u590D\u9009\u6846\u7EC4",title4:"\u9650\u5236\u6700\u5927\u53EF\u9009\u6570",title5:"\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528",toggleAll:"\u5168\u9009\u4E0E\u53CD\u9009",checkAll:"\u5168\u9009",inverse:"\u53CD\u9009",horizontal:"\u6C34\u5E73\u6392\u5217",disableLabel:"\u7981\u7528\u6587\u672C\u70B9\u51FB"},"en-US":{checkbox:"Checkbox",customIcon:"Custom Icon",customIconSize:"Custom Icon Size",customColor:"Custom Color",customShape:"Custom Shape",title3:"Checkbox Group",title4:"Maximum amount of checked options",title5:"Inside a Cell",toggleAll:"Toggle All",checkAll:"Check All",inverse:"Inverse",horizontal:"Horizontal",disableLabel:"Disable label click"}}),c=j({checkbox1:!0,checkbox2:!0,checkbox3:!0,checkboxShape:!0,checkboxLabel:!0,checboxIcon:!0,list:["a","b"],result:["a","b"],result2:[],result3:[],checkAllResult:[],horizontalResult:[]}),V="https://img.yzcdn.cn/vant/user-active.png",_="https://img.yzcdn.cn/vant/user-inactive.png",f=S(),[g,v]=w(),A=m=>{g.value[m].toggle()},z=()=>{var m;(m=f.value)==null||m.toggleAll(!0)},E=()=>{var m;(m=f.value)==null||m.toggleAll()};return(m,a)=>{const n=B("demo-block");return p(),k(h,null,[t(n,{title:e(o)("basicUsage")},{default:l(()=>[t(e(i),{modelValue:e(c).checkbox1,"onUpdate:modelValue":a[0]||(a[0]=u=>e(c).checkbox1=u)},{default:l(()=>[s(d(e(o)("checkbox")),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(n,{title:e(o)("disabled")},{default:l(()=>[t(e(i),{"model-value":!1,disabled:""},{default:l(()=>[s(d(e(o)("checkbox")),1)]),_:1}),t(e(i),{"model-value":!0,disabled:""},{default:l(()=>[s(d(e(o)("checkbox")),1)]),_:1})]),_:1},8,["title"]),t(n,{title:e(o)("customShape")},{default:l(()=>[t(e(i),{modelValue:e(c).checkboxShape,"onUpdate:modelValue":a[1]||(a[1]=u=>e(c).checkboxShape=u),shape:"square"},{default:l(()=>[s(d(e(o)("customShape")),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(n,{title:e(o)("customColor")},{default:l(()=>[t(e(i),{modelValue:e(c).checkbox2,"onUpdate:modelValue":a[2]||(a[2]=u=>e(c).checkbox2=u),"checked-color":"#ee0a24"},{default:l(()=>[s(d(e(o)("customColor")),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(n,{title:e(o)("customIconSize")},{default:l(()=>[t(e(i),{modelValue:e(c).checboxIcon,"onUpdate:modelValue":a[3]||(a[3]=u=>e(c).checboxIcon=u),"icon-size":"24px"},{default:l(()=>[s(d(e(o)("customIconSize")),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(n,{title:e(o)("customIcon")},{default:l(()=>[t(e(i),{modelValue:e(c).checkbox3,"onUpdate:modelValue":a[4]||(a[4]=u=>e(c).checkbox3=u)},{icon:l(({checked:u})=>[x("img",{src:u?V:_},null,8,N)]),default:l(()=>[s(d(e(o)("customIcon"))+" ",1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(n,{title:e(o)("disableLabel")},{default:l(()=>[t(e(i),{modelValue:e(c).checkboxLabel,"onUpdate:modelValue":a[5]||(a[5]=u=>e(c).checkboxLabel=u),"label-disabled":""},{default:l(()=>[s(d(e(o)("checkbox")),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(n,{title:e(o)("title3")},{default:l(()=>[t(e(b),{modelValue:e(c).result,"onUpdate:modelValue":a[6]||(a[6]=u=>e(c).result=u)},{default:l(()=>[t(e(i),{name:"a"},{default:l(()=>[s(d(e(o)("checkbox"))+" a",1)]),_:1}),t(e(i),{name:"b"},{default:l(()=>[s(d(e(o)("checkbox"))+" b",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(n,{title:e(o)("horizontal")},{default:l(()=>[t(e(b),{modelValue:e(c).horizontalResult,"onUpdate:modelValue":a[7]||(a[7]=u=>e(c).horizontalResult=u),direction:"horizontal"},{default:l(()=>[t(e(i),{name:"a"},{default:l(()=>[s(d(e(o)("checkbox"))+" a",1)]),_:1}),t(e(i),{name:"b"},{default:l(()=>[s(d(e(o)("checkbox"))+" b",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(n,{title:e(o)("title4")},{default:l(()=>[t(e(b),{modelValue:e(c).result2,"onUpdate:modelValue":a[8]||(a[8]=u=>e(c).result2=u),max:2},{default:l(()=>[t(e(i),{name:"a"},{default:l(()=>[s(d(e(o)("checkbox"))+" a",1)]),_:1}),t(e(i),{name:"b"},{default:l(()=>[s(d(e(o)("checkbox"))+" b",1)]),_:1}),t(e(i),{name:"c"},{default:l(()=>[s(d(e(o)("checkbox"))+" c",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(n,{title:e(o)("toggleAll")},{default:l(()=>[t(e(b),{modelValue:e(c).checkAllResult,"onUpdate:modelValue":a[9]||(a[9]=u=>e(c).checkAllResult=u),ref:(u,r)=>{r.group=u,f.value=u}},{default:l(()=>[t(e(i),{name:"a"},{default:l(()=>[s(d(e(o)("checkbox"))+" a",1)]),_:1}),t(e(i),{name:"b"},{default:l(()=>[s(d(e(o)("checkbox"))+" b",1)]),_:1}),t(e(i),{name:"c"},{default:l(()=>[s(d(e(o)("checkbox"))+" c",1)]),_:1})]),_:1},8,["modelValue"]),x("div",G,[t(e(C),{type:"primary",onClick:z},{default:l(()=>[s(d(e(o)("checkAll")),1)]),_:1}),t(e(C),{type:"primary",onClick:E},{default:l(()=>[s(d(e(o)("inverse")),1)]),_:1})])]),_:1},8,["title"]),t(n,{title:e(o)("title5")},{default:l(()=>[t(e(b),{modelValue:e(c).result3,"onUpdate:modelValue":a[11]||(a[11]=u=>e(c).result3=u)},{default:l(()=>[t(e(D),{inset:""},{default:l(()=>[(p(!0),k(h,null,U(e(c).list,(u,r)=>(p(),y(e(R),{clickable:"",key:r,title:`${e(o)("checkbox")} ${u}`,onClick:$=>A(r)},{"right-icon":l(()=>[t(e(i),{ref:e(v)(r),name:u,onClick:a[10]||(a[10]=F(()=>{},["stop"]))},null,8,["name"])]),_:2},1032,["title","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}});export{oe as default};
