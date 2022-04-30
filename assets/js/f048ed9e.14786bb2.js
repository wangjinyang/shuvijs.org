"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[9962],{461:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,v=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(v,o(o({ref:t},s),{},{components:n})):r.createElement(v,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7728:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(2848),i=n(9213),a=(n(9496),n(461)),o=["components"],l={id:"getting-started",title:"Getting Started"},u=void 0,p={unversionedId:"introduction/getting-started",id:"introduction/getting-started",title:"Getting Started",description:"Introduction",source:"@site/docs/introduction/getting-started.md",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/shuvijs.org/docs/introduction/getting-started",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/introduction/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"introductionSidebar"},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"System Requirements",id:"system-requirements",level:2},{value:"Start",id:"start",level:2},{value:"Development",id:"development",level:2},{value:"production",id:"production",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"shuvi is a front-end application development solution that integrates modern tool chains, focuses on improving development experience and efficiency."),(0,a.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nodejs/Release"},"node ^14.x"))),(0,a.kt)("h2",{id:"start"},"Start"),(0,a.kt)("p",null,"Create a new directory and init ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir my-app && cd my-app\nnpm init -y\n")),(0,a.kt)("p",null,"Install shuvi"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm i shuvi\n")),(0,a.kt)("p",null,"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages")," directory, then generate a page with ",(0,a.kt)("inlineCode",{parentName:"p"},"hello, world"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'mkdir -p src/pages && \necho "export default () => <div>hello, world</div>" > ./src/pages/index.js\n')),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," and add the following ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "dev": "shuvi dev",\n    "build": "shuvi build",\n    "serve": "shuvi serve"\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shuvi dev")," - which starts shuvi in development mode"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shuvi build")," - which builds the application for production usage"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shuvi serve")," - which starts a shuvi production server")),(0,a.kt)("p",null,"Shuvi is built around the concept of React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory."),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"run development command and visit ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},"localhost:3000")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run dev\n")),(0,a.kt)("h2",{id:"production"},"production"),(0,a.kt)("p",null,"run production command to bundle application"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build\n")),(0,a.kt)("p",null,"start a server for visit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run serve\n")))}m.isMDXComponent=!0}}]);