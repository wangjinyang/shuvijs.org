"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[118],{9613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6411:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(7813),a=n(7044),i=(n(9496),n(9613)),o=["components"],u={id:"middleware",title:"Middleware"},l="Middleware",s={unversionedId:"guide/features/pages/middleware",id:"guide/features/pages/middleware",title:"Middleware",description:"Middleware enables you to use code over configuration. This gives you full flexibility in shuvi, because you can run code before a request is completed.",source:"@site/docs/guide/features/pages/middleware.md",sourceDirName:"guide/features/pages",slug:"/guide/features/pages/middleware",permalink:"/shuvijs.org/docs/guide/features/pages/middleware",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/features/pages/middleware.md",tags:[],version:"current",frontMatter:{id:"middleware",title:"Middleware"},sidebar:"guideSidebar",previous:{title:"Introduction",permalink:"/shuvijs.org/docs/guide/features/pages/introduction"},next:{title:"On Demand Transpilation",permalink:"/shuvijs.org/docs/guide/features/pages/on-demand-transpilation"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Execution Order",id:"execution-order",level:2}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"middleware"},"Middleware"),(0,i.kt)("p",null,"Middleware enables you to use code over configuration. This gives you full flexibility in shuvi, because you can run code before a request is completed. "),(0,i.kt)("p",null,"Based on the user's incoming request, you can modify the response by rewriting, redirecting, adding headers."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Middleware is created by using a ",(0,i.kt)("inlineCode",{parentName:"p"},"middleware")," function that lives inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"_middleware")," file."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"_middleware.ts")," file under your ",(0,i.kt)("inlineCode",{parentName:"p"},"/pages")," directory.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally, export a middleware function from the ",(0,i.kt)("inlineCode",{parentName:"p"},"_middleware.ts")," file."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// pages/_middleware.ts\n\nimport { RuntimeServer } from '@shuvi/runtime'\n\nexport function middleware(req, res, next) {\n  console.log('req.url :', req.url);\n  return next();\n}\n")),(0,i.kt)("h2",{id:"execution-order"},"Execution Order"),(0,i.kt)("p",null,"If your Middleware is created in ",(0,i.kt)("inlineCode",{parentName:"p"},"/pages/_middleware.ts"),", it will run on all routes within the ",(0,i.kt)("inlineCode",{parentName:"p"},"/pages")," directory. The below example assumes you have ",(0,i.kt)("inlineCode",{parentName:"p"},"about.tsx")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"teams.tsx")," routes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"- package.json\n- /pages\n    _middleware.ts # Will run on all routes under /pages\n    index.tsx\n    about.tsx\n    teams.tsx\n")),(0,i.kt)("p",null,"If you ",(0,i.kt)("em",{parentName:"p"},"do")," have sub-directories with nested routes, Middleware will run from the top down. For example, if you have ",(0,i.kt)("inlineCode",{parentName:"p"},"/pages/about/_middleware.ts")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/pages/about/team/_middleware.ts"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/about")," will run first and then ",(0,i.kt)("inlineCode",{parentName:"p"},"/about/team"),". The below example shows how this works with a nested routing structure."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"- package.json\n- /pages\n    index.tsx\n    - /about\n      _middleware.ts # Will run first\n      about.tsx\n      - /teams\n        _middleware.ts # Will run second\n        teams.tsx\n")))}m.isMDXComponent=!0}}]);