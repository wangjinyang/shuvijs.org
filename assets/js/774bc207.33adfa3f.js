"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[4750],{9613:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var o=t(9496);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=o.createContext({}),c=function(e){var r=o.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return o.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(t),d=n,f=m["".concat(u,".").concat(d)]||m[d]||l[d]||s;return t?o.createElement(f,i(i({ref:r},p),{},{components:t})):o.createElement(f,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var c=2;c<s;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},281:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=t(2081),n=(t(9496),t(9613));const s={sidebar_position:2,id:"custom-error",title:"Custom Error"},i=void 0,a={unversionedId:"guides/custom-behaviors/custom-error",id:"guides/custom-behaviors/custom-error",title:"Custom Error",description:"How to Custom Error Page",source:"@site/docs/guides/custom-behaviors/custom-error.md",sourceDirName:"guides/custom-behaviors",slug:"/guides/custom-behaviors/custom-error",permalink:"/shuvijs.org/docs/guides/custom-behaviors/custom-error",draft:!1,editUrl:"https://github.com/shuvijs/shuvijs.org/tree/master/docs/guides/custom-behaviors/custom-error.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"custom-error",title:"Custom Error"},sidebar:"guides",previous:{title:"Custom App",permalink:"/shuvijs.org/docs/guides/custom-behaviors/custom-app"},next:{title:"Custom Server",permalink:"/shuvijs.org/docs/guides/custom-behaviors/custom-server"}},u={},c=[{value:"How to Custom Error Page",id:"how-to-custom-error-page",level:2}],p={toc:c};function l(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"how-to-custom-error-page"},"How to Custom Error Page"),(0,n.kt)("p",null,"If an error occurred, shuvi render error page. To create a custom error page you can create a ",(0,n.kt)("inlineCode",{parentName:"p"},"src/error.js")," file and export a component:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { Link } from "@shuvi/runtime";\n\nexport default ({ errorCode, errorDesc }) => {\n  const [showError, setErrorStatus] = React.useState(false);\n  React.useEffect(() => {\n    setErrorStatus(true);\n  });\n  return (\n    <div style={{ color: "red" }}>\n      <div id="error">\n        custom error {errorCode} {errorDesc}\n      </div>\n      <br />\n      <Link id="to-about" to="/about">\n        about\n      </Link>\n      {showError ? (\n        <div id="error-show-client">error only in client for test</div>\n      ) : null}\n    </div>\n  );\n};\n')))}l.isMDXComponent=!0}}]);