"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[4833],{461:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?o.createElement(f,u(u({ref:t},l),{},{components:n})):o.createElement(f,u({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var s=2;s<a;s++)u[s]=n[s];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8985:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var o=n(2848),r=n(9213),a=(n(9496),n(461)),u=["components"],c={sidebar_position:82,id:"Custom Document"},i=void 0,s={unversionedId:"guide/Custom Document",id:"guide/Custom Document",title:"Custom Document",description:"shuvi generate HTML by ejs engine.",source:"@site/docs/guide/custom-document.md",sourceDirName:"guide",slug:"/guide/Custom Document",permalink:"/shuvijs.org/docs/guide/Custom Document",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/custom-document.md",tags:[],version:"current",sidebarPosition:82,frontMatter:{sidebar_position:82,id:"Custom Document"},sidebar:"guideSidebar",previous:{title:"Custom Runtime",permalink:"/shuvijs.org/docs/guide/Custom Runtime"},next:{title:"Custom Error",permalink:"/shuvijs.org/docs/guide/Custom Error"}},l={},m=[{value:"How to Custom Document",id:"how-to-custom-document",level:2},{value:"Why Need To Custom Document",id:"why-need-to-custom-document",level:2}],p={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,u);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"shuvi generate HTML by ",(0,a.kt)("a",{parentName:"p",href:"https://ejs.co/"},"ejs engine"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-template"},"// default template\n<!doctype html>\n<html<%- htmlAttrs %>>\n<head>\n  <%- head %>\n</head>\n<body>\n  <%- main %>\n  <%- script %>\n</body>\n</html>\n")),(0,a.kt)("p",null,"Intervention HTML with handle ",(0,a.kt)("inlineCode",{parentName:"p"},"documentProps"),", Keyof ",(0,a.kt)("inlineCode",{parentName:"p"},"documentProps")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"htmlAttrs, headTags, mainTags, scriptTags"),", all is ejs variables."),(0,a.kt)("p",null,"handle ",(0,a.kt)("inlineCode",{parentName:"p"},"documentProps")," in function ",(0,a.kt)("inlineCode",{parentName:"p"},"onDocumentProps")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"modifyHtml"),"."),(0,a.kt)("blockquote",null),(0,a.kt)("h2",{id:"how-to-custom-document"},"How to Custom Document"),(0,a.kt)("p",null,"There is way to modify default ejs template, add ",(0,a.kt)("inlineCode",{parentName:"p"},"src/document.ejs"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-template"},'// /src/document.ejs\n<!doctype html>\n<html<%- htmlAttrs %>>\n<head>\n  <%- head %>\n</head>\n<body test="<%= test %>">\n  <%- main %>\n  <%- script %>\n</body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'test="<%= test %>"')," is new variable."),(0,a.kt)("p",null,"To create a custom error page you can create a ",(0,a.kt)("inlineCode",{parentName:"p"},"src/document.js")," file.\n",(0,a.kt)("inlineCode",{parentName:"p"},"document.js")," collaboratively with ",(0,a.kt)("a",{parentName:"p",href:"#how-to-custom-document"},(0,a.kt)("inlineCode",{parentName:"a"},"document.ejs")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// src/document.js\nexport function getTemplateData() {\n  return { test: 1 }; // inject data to ejs template\n}\n\nexport function onDocumentProps(documentProps) {\n  documentProps.headTags.push({ // modify documentProps \n    tagName: "meta",\n    attrs: {\n      name: "test",\n      content: "1"\n    }\n  });\n\n  return documentProps;\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"document.ejs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"document.js")," can work independently or collaboratively. In the example, they work collaboratively.")),(0,a.kt)("p",null,"render results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-template"},'// html\n<!doctype html>\n<html>\n<head>\n<meta name="test" content="1">    \n</head>\n<body test="1">\n</body>\n</html>\n')),(0,a.kt)("h2",{id:"why-need-to-custom-document"},"Why Need To Custom Document"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"import some external resources, such as CDN")))}d.isMDXComponent=!0}}]);