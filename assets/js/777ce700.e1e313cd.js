"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[8180],{461:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return c}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(r),c=a,f=d["".concat(l,".").concat(c)]||d[c]||m[c]||i;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<i;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9815:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var n=r(2848),a=r(9213),i=(r(9496),r(461)),p=["components"],o={},l=void 0,u={unversionedId:"api/runtime/interfaces/IViewServer",id:"api/runtime/interfaces/IViewServer",title:"IViewServer",description:"runtime / IViewServer",source:"@site/docs/api/runtime/interfaces/IViewServer.md",sourceDirName:"api/runtime/interfaces",slug:"/api/runtime/interfaces/IViewServer",permalink:"/shuvijs.org/docs/api/runtime/interfaces/IViewServer",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/runtime/interfaces/IViewServer.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"IViewClient",permalink:"/shuvijs.org/docs/api/runtime/interfaces/IViewClient"},next:{title:"RuntimeServer.IDocumentModule",permalink:"/shuvijs.org/docs/api/runtime/interfaces/RuntimeServer.IDocumentModule"}},s={},m=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Methods",id:"methods-1",level:2},{value:"renderApp",id:"renderapp",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from",level:4}],d={toc:m};function c(e){var t=e.components,r=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/runtime/overview"},"runtime")," / IViewServer"),(0,i.kt)("h1",{id:"interface-iviewservercomptype-data-router"},"Interface: IViewServer<CompType, Data, Router",">"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"CompType")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Data")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Router")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"/shuvijs.org/docs/api/runtime/interfaces/internal_.IRouter"},(0,i.kt)("inlineCode",{parentName:"a"},"IRouter"))," = ",(0,i.kt)("a",{parentName:"td",href:"/shuvijs.org/docs/api/runtime/interfaces/internal_.IRouter"},(0,i.kt)("inlineCode",{parentName:"a"},"IRouter")))))),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/runtime/interfaces/internal_.IView"},(0,i.kt)("inlineCode",{parentName:"a"},"IView")),"<",(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/runtime/interfaces/IServerRendererOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"IServerRendererOptions")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"CompType"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Router"),">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/runtime/overview#irenderappresult"},(0,i.kt)("inlineCode",{parentName:"a"},"IRenderAppResult")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Data"),">",">",">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"IViewServer"))))),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shuvijs.org/docs/api/runtime/interfaces/IViewServer#renderapp"},"renderApp"))),(0,i.kt)("h2",{id:"methods-1"},"Methods"),(0,i.kt)("h3",{id:"renderapp"},"renderApp"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"renderApp"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/runtime/overview#irenderappresult"},(0,i.kt)("inlineCode",{parentName:"a"},"IRenderAppResult")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Data"),">",">"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/shuvijs.org/docs/api/runtime/interfaces/IServerRendererOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"IServerRendererOptions")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"CompType"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Router"),">")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/runtime/overview#irenderappresult"},(0,i.kt)("inlineCode",{parentName:"a"},"IRenderAppResult")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Data"),">",">"),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/runtime/interfaces/internal_.IView"},"IView"),".",(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/runtime/interfaces/internal_.IView#renderapp"},"renderApp")))}c.isMDXComponent=!0}}]);