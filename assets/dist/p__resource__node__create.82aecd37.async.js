(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"0U+A":function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("wx14"),r=(a("+L6B"),a("2/Rp")),c=(a("5NDa"),a("5rEg")),o=(a("miYZ"),a("tsqr")),i=a("VTBJ"),l=(a("y8nQ"),a("Vl3Y")),s=a("ODXe"),u=a("q1tI"),p=a.n(u),d=a("9kvl"),m={labelCol:{xs:{span:18},sm:{span:8}},wrapperCol:{xs:{span:18},sm:{span:16}}},f={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};function b(e){var t=l["a"].useForm(),a=Object(s["a"])(t,1),u=a[0],b=e.initialValues,v=e.request,y=e.id,h=function(e){v(Object(i["a"])({},e,{id:parseInt(y)})).then((function(e){return 0!==e.code?(o["a"].error(e.msg),!1):(o["a"].success(e.msg),d["F"].goBack(),!0)}))};return p.a.createElement(l["a"],Object(n["a"])({},m,{form:u,name:"register",onFinish:h,scrollToFirstError:!0,initialValues:b}),p.a.createElement(l["a"].Item,{name:"host_name",label:"\u673a\u5668\u540d\u79f0",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u673a\u5668\u540d\u79f0"}]},p.a.createElement(c["a"],null)),p.a.createElement(l["a"].Item,f,p.a.createElement(r["default"],{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"),p.a.createElement(r["default"],{style:{marginLeft:8},onClick:function(){d["F"].goBack()}},"\u8fd4\u56de")))}},IzEo:function(e,t,a){"use strict";a("cIOH"),a("lnY3"),a("Znn+"),a("14J3"),a("jCWc")},N29E:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));a("IzEo");var n=a("bx4M"),r=a("1OyB"),c=a("vuIU"),o=a("Ji7U"),i=a("LK+K"),l=a("Hx5s"),s=a("q1tI"),u=a.n(s),p=a("PcFE"),d=a("0U+A"),m=function(e){Object(o["a"])(a,e);var t=Object(i["a"])(a);function a(){return Object(r["a"])(this,a),t.apply(this,arguments)}return Object(c["a"])(a,[{key:"render",value:function(){return u.a.createElement(l["PageHeaderWrapper"],null,u.a.createElement(n["a"],null,u.a.createElement(d["a"],{request:p["a"]})))}}]),a}(u.a.Component)},PcFE:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return p})),a.d(t,"a",(function(){return m})),a.d(t,"e",(function(){return b})),a.d(t,"b",(function(){return y}));var n=a("VTBJ"),r=a("o0o1"),c=a.n(r),o=a("HaE+"),i=a("t3Un"),l=a("Qyje");function s(e){return u.apply(this,arguments)}function u(){return u=Object(o["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/admin/resource/node/info?".concat(Object(l["stringify"])(t))));case 1:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return d=Object(o["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/admin/resource/node/list?".concat(Object(l["stringify"])(t))));case 1:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function m(e){return f.apply(this,arguments)}function f(){return f=Object(o["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/admin/resource/node/create",{method:"POST",data:Object(n["a"])({},t)}));case 1:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function b(e){return v.apply(this,arguments)}function v(){return v=Object(o["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/admin/resource/node/update",{method:"POST",data:Object(n["a"])({},t)}));case 1:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function y(e){return h.apply(this,arguments)}function h(){return h=Object(o["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(i["a"])("/api/admin/resource/node/delete",{method:"POST",data:Object(n["a"])({},t)}));case 1:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}},bx4M:function(e,t,a){"use strict";var n=a("q1tI"),r=a("TSYQ"),c=a.n(r),o=a("BGR+"),i=a("H84U");function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},p=function(e){return n["createElement"](i["a"],null,(function(t){var a=t.getPrefixCls,r=e.prefixCls,o=e.className,i=e.hoverable,p=void 0===i||i,d=u(e,["prefixCls","className","hoverable"]),m=a("card",r),f=c()("".concat(m,"-grid"),o,s({},"".concat(m,"-grid-hoverable"),p));return n["createElement"]("div",l({},d,{className:f}))}))},d=p;function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}var f=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},b=function(e){return n["createElement"](i["a"],null,(function(t){var a=t.getPrefixCls,r=e.prefixCls,o=e.className,i=e.avatar,l=e.title,s=e.description,u=f(e,["prefixCls","className","avatar","title","description"]),p=a("card",r),d=c()("".concat(p,"-meta"),o),b=i?n["createElement"]("div",{className:"".concat(p,"-meta-avatar")},i):null,v=l?n["createElement"]("div",{className:"".concat(p,"-meta-title")},l):null,y=s?n["createElement"]("div",{className:"".concat(p,"-meta-description")},s):null,h=v||y?n["createElement"]("div",{className:"".concat(p,"-meta-detail")},v,y):null;return n["createElement"]("div",m({},u,{className:d}),b,h)}))},v=b,y=a("ZTPi"),h=a("BMrR"),O=a("kPKH"),E=a("3Nzz");function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},j.apply(this,arguments)}var w=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function x(e){var t=e.map((function(t,a){return n["createElement"]("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},n["createElement"]("span",null,t))}));return t}var P=function(e){var t,a,r,l=n["useContext"](i["b"]),s=l.getPrefixCls,u=l.direction,p=n["useContext"](E["b"]),m=function(t){e.onTabChange&&e.onTabChange(t)},f=function(){var t;return n["Children"].forEach(e.children,(function(e){e&&e.type&&e.type===d&&(t=!0)})),t},b=e.prefixCls,v=e.className,P=e.extra,N=e.headStyle,C=void 0===N?{}:N,k=e.bodyStyle,T=void 0===k?{}:k,S=e.title,I=e.loading,B=e.bordered,K=void 0===B||B,q=e.size,z=e.type,F=e.cover,H=e.actions,J=e.tabList,U=e.children,A=e.activeTabKey,L=e.defaultActiveTabKey,V=e.tabBarExtraContent,Y=e.hoverable,M=e.tabProps,Q=void 0===M?{}:M,R=w(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),Z=s("card",b),D=0===T.padding||"0px"===T.padding?{padding:24}:void 0,G=n["createElement"]("div",{className:"".concat(Z,"-loading-block")}),W=n["createElement"]("div",{className:"".concat(Z,"-loading-content"),style:D},n["createElement"](h["a"],{gutter:8},n["createElement"](O["a"],{span:22},G)),n["createElement"](h["a"],{gutter:8},n["createElement"](O["a"],{span:8},G),n["createElement"](O["a"],{span:15},G)),n["createElement"](h["a"],{gutter:8},n["createElement"](O["a"],{span:6},G),n["createElement"](O["a"],{span:18},G)),n["createElement"](h["a"],{gutter:8},n["createElement"](O["a"],{span:13},G),n["createElement"](O["a"],{span:9},G)),n["createElement"](h["a"],{gutter:8},n["createElement"](O["a"],{span:4},G),n["createElement"](O["a"],{span:3},G),n["createElement"](O["a"],{span:16},G))),X=void 0!==A,_=j(j({},Q),(t={},g(t,X?"activeKey":"defaultActiveKey",X?A:L),g(t,"tabBarExtraContent",V),t)),$=J&&J.length?n["createElement"](y["a"],j({size:"large"},_,{className:"".concat(Z,"-head-tabs"),onChange:m}),J.map((function(e){return n["createElement"](y["a"].TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(S||P||$)&&(r=n["createElement"]("div",{className:"".concat(Z,"-head"),style:C},n["createElement"]("div",{className:"".concat(Z,"-head-wrapper")},S&&n["createElement"]("div",{className:"".concat(Z,"-head-title")},S),P&&n["createElement"]("div",{className:"".concat(Z,"-extra")},P)),$));var ee=F?n["createElement"]("div",{className:"".concat(Z,"-cover")},F):null,te=n["createElement"]("div",{className:"".concat(Z,"-body"),style:T},I?W:U),ae=H&&H.length?n["createElement"]("ul",{className:"".concat(Z,"-actions")},x(H)):null,ne=Object(o["a"])(R,["onTabChange"]),re=q||p,ce=c()(Z,v,(a={},g(a,"".concat(Z,"-loading"),I),g(a,"".concat(Z,"-bordered"),K),g(a,"".concat(Z,"-hoverable"),Y),g(a,"".concat(Z,"-contain-grid"),f()),g(a,"".concat(Z,"-contain-tabs"),J&&J.length),g(a,"".concat(Z,"-").concat(re),re),g(a,"".concat(Z,"-type-").concat(z),!!z),g(a,"".concat(Z,"-rtl"),"rtl"===u),a));return n["createElement"]("div",j({},ne,{className:ce}),r,ee,te,ae)};P.Grid=d,P.Meta=v;t["a"]=P},lnY3:function(e,t,a){}}]);