"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[2352],{9613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),d=n,f=c["".concat(p,".").concat(d)]||c[d]||h[d]||i;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},161:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var a=r(7813),n=r(7044),i=(r(9496),r(9613)),o=["components"],s={},p=void 0,l={unversionedId:"api/router/interfaces/Location",id:"api/router/interfaces/Location",title:"Location",description:"@shuvi/router / Exports / Location",source:"@site/docs/api/router/interfaces/Location.md",sourceDirName:"api/router/interfaces",slug:"/api/router/interfaces/Location",permalink:"/shuvijs.org/docs/api/router/interfaces/Location",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/router/interfaces/Location.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Listener",permalink:"/shuvijs.org/docs/api/router/interfaces/Listener"},next:{title:"NavigationGuardHook",permalink:"/shuvijs.org/docs/api/router/interfaces/NavigationGuardHook"}},u={},h=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"hash",id:"hash",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"key",id:"key",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"pathname",id:"pathname",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"query",id:"query",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"redirectedFrom",id:"redirectedfrom",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"search",id:"search",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"state",id:"state",level:3},{value:"Defined in",id:"defined-in-6",level:4}],c={toc:h};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/router/"},"@shuvi/router")," / ",(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/router/modules"},"Exports")," / Location"),(0,i.kt)("h1",{id:"interface-locations"},"Interface: Location<S",">"),(0,i.kt)("p",null,"An entry in a history stack. A location contains information about the\nURL path, as well as possibly some arbitrary state and a key."),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"S")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"/shuvijs.org/docs/api/router/modules#state"},(0,i.kt)("inlineCode",{parentName:"a"},"State"))," = ",(0,i.kt)("a",{parentName:"td",href:"/shuvijs.org/docs/api/router/modules#state"},(0,i.kt)("inlineCode",{parentName:"a"},"State")))))),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/router/interfaces/Path"},(0,i.kt)("inlineCode",{parentName:"a"},"Path"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Location"))))),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shuvijs.org/docs/api/router/interfaces/Location#hash"},"hash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shuvijs.org/docs/api/router/interfaces/Location#key"},"key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shuvijs.org/docs/api/router/interfaces/Location#pathname"},"pathname")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shuvijs.org/docs/api/router/interfaces/Location#query"},"query")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shuvijs.org/docs/api/router/interfaces/Location#redirectedfrom"},"redirectedFrom")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shuvijs.org/docs/api/router/interfaces/Location#search"},"search")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shuvijs.org/docs/api/router/interfaces/Location#state"},"state"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"hash"},"hash"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"hash"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"A URL fragment identifier, beginning with a #."),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/router/interfaces/Path"},"Path"),".",(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/router/interfaces/Path#hash"},"hash")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L78"},"packages/router/src/types/history.ts:78")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"key"},"key"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"key"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"A unique string associated with this location. May be used to safely store\nand retrieve data in some other storage API, like ",(0,i.kt)("inlineCode",{parentName:"p"},"localStorage"),"."),(0,i.kt)("p",null,'Note: This value is always "default" on the initial location.'),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L131"},"packages/router/src/types/history.ts:131")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pathname"},"pathname"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"pathname"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"A URL pathname, beginning with a /."),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/router/interfaces/Path"},"Path"),".",(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/router/interfaces/Path#pathname"},"pathname")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L60"},"packages/router/src/types/history.ts:60")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"query"},"query"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"query"),": ",(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/router/interfaces/ParsedQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"ParsedQuery")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("p",null,"The parsed URL search Object."),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/router/interfaces/Path"},"Path"),".",(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/router/interfaces/Path#query"},"query")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L66"},"packages/router/src/types/history.ts:66")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"redirectedfrom"},"redirectedFrom"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"redirectedFrom"),": ",(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/router/modules#pathrecord"},(0,i.kt)("inlineCode",{parentName:"a"},"PathRecord"))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L116"},"packages/router/src/types/history.ts:116")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"search"},"search"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"search"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"A URL search string, beginning with a ?."),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/router/interfaces/Path"},"Path"),".",(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api/router/interfaces/Path#search"},"search")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L72"},"packages/router/src/types/history.ts:72")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"state"},"state"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"state"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"S")),(0,i.kt)("p",null,"An object of arbitrary data associated with this location."),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/shuvijs/shuvi/blob/8776f169/packages/router/src/types/history.ts#L122"},"packages/router/src/types/history.ts:122")))}d.isMDXComponent=!0}}]);