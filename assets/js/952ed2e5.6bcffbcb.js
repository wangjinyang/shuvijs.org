"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[466],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5303:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=n(7813),o=n(7044),i=(n(9496),n(9613)),r=["components"],l={sidebar_position:1,id:"Basic Support"},s=void 0,p={unversionedId:"guide/features/Basic Support",id:"guide/features/Basic Support",title:"Basic Support",description:"Supported Browsers and Features",source:"@site/docs/guide/features/basic-support.md",sourceDirName:"guide/features",slug:"/guide/features/Basic Support",permalink:"/shuvijs.org/docs/guide/features/Basic Support",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/features/basic-support.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"Basic Support"},sidebar:"guideSidebar",previous:{title:"Overview",permalink:"/shuvijs.org/docs/guide/overview"},next:{title:"Introduction",permalink:"/shuvijs.org/docs/guide/features/Routes/Introduction"}},u={},m=[{value:"Supported Browsers and Features",id:"supported-browsers-and-features",level:2},{value:"Polyfills",id:"polyfills",level:2},{value:"client-Side Polyfills",id:"client-side-polyfills",level:3},{value:"JavaScript Language Features",id:"javascript-language-features",level:2},{value:"Typescript Support",id:"typescript-support",level:2},{value:"CSS Support",id:"css-support",level:2},{value:"Adding a Global Stylesheet",id:"adding-a-global-stylesheet",level:3},{value:"Import styles from <code>node_modules</code>",id:"import-styles-from-node_modules",level:3},{value:"Adding Component-Level CSS",id:"adding-component-level-css",level:3},{value:"Sass Support",id:"sass-support",level:3},{value:"Runtime Config",id:"runtime-config",level:2},{value:"Dotenv",id:"dotenv",level:2},{value:"Dynamic Import",id:"dynamic-import",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"With named exports",id:"with-named-exports",level:3},{value:"With custom loading component",id:"with-custom-loading-component",level:3},{value:"With no SSR",id:"with-no-ssr",level:3},{value:"Dynamic Invalid",id:"dynamic-invalid",level:3},{value:"Serving Static Files",id:"serving-static-files",level:2},{value:"Change Public Path",id:"change-public-path",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"supported-browsers-and-features"},"Supported Browsers and Features"),(0,i.kt)("p",null,"Shuvi supports ",(0,i.kt)("strong",{parentName:"p"},"IE11 and all modern browsers")," (Edge, Firefox, Chrome, Safari, Opera, et al) with no required configuration."),(0,i.kt)("h2",{id:"polyfills"},"Polyfills"),(0,i.kt)("p",null,"We transparently inject polyfills required for IE11 compatibility. In addition, we also inject widely used polyfills, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},(0,i.kt)("strong",{parentName:"a"},"Promise"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},(0,i.kt)("strong",{parentName:"a"},"fetch"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"},(0,i.kt)("strong",{parentName:"a"},"Object.assign")),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol"},(0,i.kt)("strong",{parentName:"a"},"Symbol")),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"},(0,i.kt)("strong",{parentName:"a"},"Spread syntax (...)")),".")),(0,i.kt)("h3",{id:"client-side-polyfills"},"client-Side Polyfills"),(0,i.kt)("p",null,"Use node native module belows on client-side, will not throw error when bundled."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/stream-browserify"},"stream")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/path-browserify"},"path")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/crypto-browserify"},"crypto")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/buffer"},"buffer, Buffer")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/vm-browserify"},"vm")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/process"},"process")," ")),(0,i.kt)("h2",{id:"javascript-language-features"},"JavaScript Language Features"),(0,i.kt)("p",null,"shuvi allows you to use the latest JavaScript features out of the box. "),(0,i.kt)("p",null,"javascript files can be extended with ",(0,i.kt)("inlineCode",{parentName:"p"},".js, .jsx, .ts, or .tsx"),";"),(0,i.kt)("p",null,"In addition to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukehoban/es6features"},"ES6 features"),", also supports:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tc39/ecmascript-asyncawait"},"Async/await")," (ES2017)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-object-rest-spread"},"Object Rest/Spread Properties")," (ES2018)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-dynamic-import"},"Dynamic ",(0,i.kt)("inlineCode",{parentName:"a"},"import()"))," (ES2020)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-optional-chaining"},"Optional Chaining")," (ES2020)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-nullish-coalescing"},"Nullish Coalescing")," (ES2020)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-class-fields"},"Class Fields")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-static-class-features"},"Static Properties")," (part of stage 3 proposal)"),(0,i.kt)("li",{parentName:"ul"},"and more!")),(0,i.kt)("h2",{id:"typescript-support"},"Typescript Support"),(0,i.kt)("p",null,"shuvi has built-in TypeScript support. shuvi provide types both runtime and plugins."),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","link runtime and plugins type, ",(0,i.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/basic-features/typescript"},"https://nextjs.org/docs/basic-features/typescript"))),(0,i.kt)("h2",{id:"css-support"},"CSS Support"),(0,i.kt)("p",null,"shuvi allows you to import CSS files from a JavaScript file.\nThis is possible because shuvi extends the concept of ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"},(0,i.kt)("inlineCode",{parentName:"a"},"import"))," beyond JavaScript."),(0,i.kt)("h3",{id:"adding-a-global-stylesheet"},"Adding a Global Stylesheet"),(0,i.kt)("p",null,"To add a stylesheet to your application, import the CSS file within ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app.js"),"."),(0,i.kt)("p",null,"For example, consider the following stylesheet named ",(0,i.kt)("inlineCode",{parentName:"p"},"styles.css"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"body {\n  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',\n    'Arial', sans-serif;\n  padding: 20px 20px 60px;\n  max-width: 680px;\n  margin: 0 auto;\n}\n")),(0,i.kt)("p",null,"Create a ",(0,i.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/guide/features/Custom%20App"},(0,i.kt)("inlineCode",{parentName:"a"},"pages/src.js")," file")," if not already present.\nThen, ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"},(0,i.kt)("inlineCode",{parentName:"a"},"import"))," the ",(0,i.kt)("inlineCode",{parentName:"p"},"styles.css")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import '../styles.css'\nexport default (App) => <App />;\n")),(0,i.kt)("p",null,"These styles (",(0,i.kt)("inlineCode",{parentName:"p"},"styles.css"),") will apply to all pages and components in your application.\nDue to the global nature of stylesheets, and to avoid conflicts, you may ",(0,i.kt)("strong",{parentName:"p"},"only import them inside ",(0,i.kt)("a",{parentName:"strong",href:"/shuvijs.org/docs/guide/features/Custom%20App"},(0,i.kt)("inlineCode",{parentName:"a"},"src/app.js"))),"."),(0,i.kt)("p",null,"In development, expressing stylesheets this way allows your styles to be hot reloaded as you edit them\u2014meaning you can keep application state."),(0,i.kt)("p",null,"In production, all CSS files will be automatically concatenated into a single minified ",(0,i.kt)("inlineCode",{parentName:"p"},".css")," file."),(0,i.kt)("h3",{id:"import-styles-from-node_modules"},"Import styles from ",(0,i.kt)("inlineCode",{parentName:"h3"},"node_modules")),(0,i.kt)("p",null,"For global stylesheets, like ",(0,i.kt)("inlineCode",{parentName:"p"},"bootstrap")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"nprogress"),", you should import the file inside ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app.js"),".\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// src/app.js\nimport 'bootstrap/dist/css/bootstrap.css'\nexport default (App) => <App />;\n")),(0,i.kt)("p",null,"For importing CSS required by a third party component, you can do so in your component. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"// components/ExampleDialog.js\nimport { useState } from 'react'\nimport { Dialog } from '@reach/dialog'\nimport VisuallyHidden from '@reach/visually-hidden'\nimport '@reach/dialog/styles.css'\n\nfunction ExampleDialog(props) {\n  const [showDialog, setShowDialog] = useState(false)\n  const open = () => setShowDialog(true)\n  const close = () => setShowDialog(false)\n\n  return (\n    <div>\n      <button onClick={open}>Open Dialog</button>\n      <Dialog isOpen={showDialog} onDismiss={close}>\n        <button className=\"close-button\" onClick={close}>\n          <VisuallyHidden>Close</VisuallyHidden>\n          <span aria-hidden>\xd7</span>\n        </button>\n        <p>Hello there. I am a dialog</p>\n      </Dialog>\n    </div>\n  )\n}\n")),(0,i.kt)("h3",{id:"adding-component-level-css"},"Adding Component-Level CSS"),(0,i.kt)("p",null,"shuvi supports ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"[name].module.css")," file naming convention."),(0,i.kt)("p",null,"CSS Modules locally scope CSS by automatically creating a unique class name.\nThis allows you to use the same CSS class name in different files without worrying about collisions."),(0,i.kt)("p",null,"This behavior makes CSS Modules the ideal way to include component-level CSS.\nCSS Module files ",(0,i.kt)("strong",{parentName:"p"},"can be imported anywhere in your application"),"."),(0,i.kt)("p",null,"For example, consider a reusable ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," component in the ",(0,i.kt)("inlineCode",{parentName:"p"},"components/")," folder:"),(0,i.kt)("p",null,"First, create ",(0,i.kt)("inlineCode",{parentName:"p"},"components/Button.module.css")," with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"/*\nYou do not need to worry about .error {} colliding with any other `.css` or\n`.module.css` files!\n*/\n.error {\n  color: white;\n  background-color: red;\n}\n")),(0,i.kt)("p",null,"Then, create ",(0,i.kt)("inlineCode",{parentName:"p"},"components/Button.js"),", importing and using the above CSS file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import styles from \'./Button.module.css\'\n\nexport function Button() {\n  return (\n    <button\n      type="button"\n      // Note how the "error" class is accessed as a property on the imported\n      // `styles` object.\n      className={styles.error}\n    >\n      Destroy\n    </button>\n  )\n}\n')),(0,i.kt)("p",null,"CSS Modules are an ",(0,i.kt)("em",{parentName:"p"},"optional feature")," and are ",(0,i.kt)("strong",{parentName:"p"},"only enabled for files with the ",(0,i.kt)("inlineCode",{parentName:"strong"},".module.css")," extension"),".\nRegular ",(0,i.kt)("inlineCode",{parentName:"p"},"<link>")," stylesheets and global CSS files are still supported."),(0,i.kt)("p",null,"In production, all CSS Module files will be automatically concatenated into ",(0,i.kt)("strong",{parentName:"p"},"many minified and code-split")," ",(0,i.kt)("inlineCode",{parentName:"p"},".css")," files.\nThese ",(0,i.kt)("inlineCode",{parentName:"p"},".css")," files represent hot execution paths in your application, ensuring the minimal amount of CSS is loaded for your application to paint."),(0,i.kt)("h3",{id:"sass-support"},"Sass Support"),(0,i.kt)("p",null,"shuvi allows you to import Sass using both the ",(0,i.kt)("inlineCode",{parentName:"p"},".scss")," and ",(0,i.kt)("inlineCode",{parentName:"p"},".sass")," extensions.\nYou can use component-level Sass via CSS Modules and the ",(0,i.kt)("inlineCode",{parentName:"p"},".module.scss")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".module.sass")," extension."),(0,i.kt)("p",null,"Sass support has the same benefits and restrictions as the built-in CSS support detailed above."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),": Sass supports ",(0,i.kt)("a",{parentName:"p",href:"https://sass-lang.com/documentation/syntax"},"two different syntaxes"),", each with their own extension.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},".scss")," extension requires you use the ",(0,i.kt)("a",{parentName:"p",href:"https://sass-lang.com/documentation/syntax#scss"},"SCSS syntax"),",\nwhile the ",(0,i.kt)("inlineCode",{parentName:"p"},".sass")," extension requires you use the ",(0,i.kt)("a",{parentName:"p",href:"https://sass-lang.com/documentation/syntax#the-indented-syntax"},'Indented Syntax ("Sass")'),"."),(0,i.kt)("p",{parentName:"blockquote"},"If you're not sure which to choose, start with the ",(0,i.kt)("inlineCode",{parentName:"p"},".scss"),' extension which is a superset of CSS, and doesn\'t require you learn the\nIndented Syntax ("Sass").')),(0,i.kt)("h2",{id:"runtime-config"},"Runtime Config"),(0,i.kt)("p",null,"Runtime config is a Store for application storage constants values. "),(0,i.kt)("p",null,"Users can get the Store by call ",(0,i.kt)("inlineCode",{parentName:"p"},"getRuntimeConfig")," everywhere both client-side and server-side."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getRuntimeConfig } from '@shuvi/runtime';\n\nconst isServer = typeof window === 'undefined';\nconst runtimeConfig = getRuntimeConfig();\n\nconst getApp = App => () =>\n  (\n    <div>\n      <div id=\"app\">{isServer ? null : runtimeConfig.a}</div>\n      <App />\n    </div>\n  );\n\nexport default getApp;\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Store key which start with ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," only can be got on server-side.")),(0,i.kt)("h2",{id:"dotenv"},"Dotenv"),(0,i.kt)("p",null,"shuvi support ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/motdotla/dotenv"},"dotenv")," by default. Loads environment variables from a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file into ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/docs/latest/api/process.html#process_process_env"},"process.env"),"."),(0,i.kt)("p",null,"shuvi can loaded env files that under application root directory, Special files name (such as development ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," or production ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),") should include ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV"),", The priority and file name rules as showed below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const mode = process.env.NODE_ENV;\n// Priority top to bottom\nconst dotenvFiles = [\n  `.env.${mode}.local`,\n  `.env.local`,\n  `.env.${mode}`,\n  '.env'\n];\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"low priority ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file content will be override by higher priority ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file content, it dependencies ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV"),".\ndefault ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"development")," when ",(0,i.kt)("inlineCode",{parentName:"p"},"shuvi dev")," mode and ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," when ",(0,i.kt)("inlineCode",{parentName:"p"},"shuvi build")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"shuvi serve"),".\nrecommend split all ",(0,i.kt)("inlineCode",{parentName:"p"},"env variable")," to ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),"(common env), ",(0,i.kt)("inlineCode",{parentName:"p"},".env.development"),"(env for development) and ",(0,i.kt)("inlineCode",{parentName:"p"},".env.production"),"(env for production)."),(0,i.kt)("h2",{parentName:"blockquote",id:"global-constant"},"Global Constant")),(0,i.kt)("p",null,"shuvi inject some global constant to replaces variables in your code with other values or expressions at ",(0,i.kt)("strong",{parentName:"p"},"compile")," time. ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/plugins/define-plugin/#usage"},"examples usage")),(0,i.kt)("p",null,"collect constants form ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"config.env")," and some is shuvi defined."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"process.env"),": The key should startWith ",(0,i.kt)("inlineCode",{parentName:"p"},"SHUVI_PUBLIC_"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"config.env"),": The key should match Regex ",(0,i.kt)("inlineCode",{parentName:"p"},"/^(?:NODE_.+)|^(?:__.+)$/i"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"shuvi defined"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production')")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__BROWSER__: isClientSide?true:false,")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'process.env': JSON.stringify('{}')")," ",(0,i.kt)("strong",{parentName:"li"},"only inject on client-side"))))),(0,i.kt)("h2",{id:"dynamic-import"},"Dynamic Import"),(0,i.kt)("p",null,"shuvi supports ES2020 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-dynamic-import"},"dynamic ",(0,i.kt)("inlineCode",{parentName:"a"},"import()"))," for JavaScript. With it you can import JavaScript modules dynamically and work with them. They also work with SSR."),(0,i.kt)("p",null,"In the following example, we implement fuzzy search using ",(0,i.kt)("inlineCode",{parentName:"p"},"fuse.js")," and only load the module dynamically in the browser after the user types in the search input:"),(0,i.kt)("p",null,"You can think of dynamic imports as another way to split your code into manageable chunks."),(0,i.kt)("p",null,"React components can also be imported using dynamic imports, but in this case we use it in conjunction with ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic")," to make sure it works like any other React Component. Check out the sections below for more details on how it works."),(0,i.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,i.kt)("p",null,"In the following example, the module ",(0,i.kt)("inlineCode",{parentName:"p"},"../components/hello")," will be dynamically loaded by the page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { dynamic } from '@shuvi/runtime';\n\nconst Hello = dynamic(() => import('../components/helloComponent'));\n\nexport default Hello;\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"helloComponent")," will be the default component returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"../components/helloComponent"),". It works like a regular React Component, and you can pass props to it as you normally would."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),": In ",(0,i.kt)("inlineCode",{parentName:"p"},"import('path/to/component')"),", the path must be explicitly written. It can't be a template string nor a variable. Furthermore the ",(0,i.kt)("inlineCode",{parentName:"p"},"import()")," has to be inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic()")," call for shuvi to be able to match webpack bundles / module ids to the specific ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic()")," call and preload them before rendering. ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic()")," can't be used inside of React rendering as it needs to be marked in the top level of the module for preloading to work, similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"React.lazy"),".")),(0,i.kt)("h3",{id:"with-named-exports"},"With named exports"),(0,i.kt)("p",null,"If the dynamic component is not the default export, you can use a named export too. Consider the module ",(0,i.kt)("inlineCode",{parentName:"p"},"../components/hello.js")," which has a named export ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"export function Hello() {\n  return <p>Hello!</p>\n}\n")),(0,i.kt)("p",null,"To dynamically import the ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello")," component, you can return it from the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise")," returned by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-dynamic-import#example"},(0,i.kt)("inlineCode",{parentName:"a"},"import()")),", like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { dynamic } from \"@shuvi/runtime\";\n\nconst DynamicComponent = dynamic(() =>\n  import('../components/hello').then((mod) => mod.Hello)\n)\n\nfunction Mod() {\n  return (\n    <div>\n      <Header />\n      <DynamicComponent />\n    </div>\n  )\n}\n\nexport default Mod\n")),(0,i.kt)("h3",{id:"with-custom-loading-component"},"With custom loading component"),(0,i.kt)("p",null,"An optional ",(0,i.kt)("inlineCode",{parentName:"p"},"loading")," component can be added to render a loading state while the dynamic component is being loaded. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { dynamic } from \"@shuvi/runtime\";\n\nconst DynamicComponentWithCustomLoading = dynamic(\n  () => import('../components/hello'),\n  { loading: () => <p>LOADING</p> }\n)\n\nfunction Load() {\n  return (\n    <div>\n      <Header />\n      <DynamicComponentWithCustomLoading />\n    </div>\n  )\n}\n\nexport default Load\n")),(0,i.kt)("h3",{id:"with-no-ssr"},"With no SSR"),(0,i.kt)("p",null,"You may not always want to include a module on server-side. For example, when the module includes a library that only works in the browser."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { dynamic } from \"@shuvi/runtime\";\n\nconst DynamicComponentWithNoSSR = dynamic(\n  () => import('../components/hello'),\n  { ssr: false }\n)\n\nfunction NoSSR() {\n  return (\n    <div>\n      <Header />\n      <DynamicComponentWithNoSSR />\n    </div>\n  )\n}\n\nexport default NoSSR\n")),(0,i.kt)("h3",{id:"dynamic-invalid"},"Dynamic Invalid"),(0,i.kt)("p",null,"If there is already a normal module by ",(0,i.kt)("inlineCode",{parentName:"p"},"import"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic")," will be invalid."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'import { dynamic } from "@shuvi/runtime";\nimport Welcome from "../components/welcome";\n\nconst Welcome2 = dynamic(() => import("../components/welcome"));\n\nexport default () => (\n  <div>\n    <Welcome name="normal" />\n    <Welcome2 name="dynamic" />\n  </div>\n);\n')),(0,i.kt)("h2",{id:"serving-static-files"},"Serving Static Files"),(0,i.kt)("p",null,"To serve static files such as images, CSS files, and JavaScript files, All files under the ",(0,i.kt)("inlineCode",{parentName:"p"},"/public")," will be static resources for visit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// /public/user.json\n{\n   "name": "foo"\n}\n')),(0,i.kt)("p",null,"   visit url: ",(0,i.kt)("inlineCode",{parentName:"p"},"/_shuvi/user.json")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"_shuvi")," is publicPath, ",(0,i.kt)("inlineCode",{parentName:"p"},"user.json")," is relative path to ",(0,i.kt)("inlineCode",{parentName:"p"},"/public"))),(0,i.kt)("h2",{id:"change-public-path"},"Change Public Path"),(0,i.kt)("p",null,"Default publicPath is ",(0,i.kt)("inlineCode",{parentName:"p"},"_shuvi"),", There is a way to override runtime publicPath:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// /src/document\nimport { IDENTITY_RUNTIME_PUBLICPATH } from '@shuvi/shared/lib/constants';\n\nexport function onDocumentProps(documentProps) {\n   documentProps.headTags.push({\n      tagName: 'script',\n      attrs: {\n         name: 'test',\n      },\n      innerHTML: `${IDENTITY_RUNTIME_PUBLICPATH} = \"/client-overwrite/\"`\n   });\n\n   return documentProps;\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"override code should run ahead of other codes")))}d.isMDXComponent=!0}}]);