"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[799],{9613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),f=o,m=c["".concat(l,".").concat(f)]||c[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3288:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7813),o=n(7044),a=(n(9496),n(9613)),i=["components"],s={id:"fast-refresh",title:"Fast Refresh"},l="Fast Refresh",u={unversionedId:"guide/features/fast-refresh",id:"guide/features/fast-refresh",title:"Fast Refresh",description:"Fast Refresh is a shuvi feature that gives you instantaneous feedback on",source:"@site/docs/guide/features/fast-refresh.md",sourceDirName:"guide/features",slug:"/guide/features/fast-refresh",permalink:"/shuvijs.org/docs/guide/features/fast-refresh",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/features/fast-refresh.md",tags:[],version:"current",frontMatter:{id:"fast-refresh",title:"Fast Refresh"},sidebar:"guideSidebar",previous:{title:"custom server",permalink:"/shuvijs.org/docs/guide/features/custom-server"},next:{title:"Router Match Rules",permalink:"/shuvijs.org/docs/guide/features/router-match-rules"}},d={},p=[{value:"How It Works",id:"how-it-works",level:2},{value:"Error Resilience",id:"error-resilience",level:2},{value:"Syntax Errors",id:"syntax-errors",level:3},{value:"Runtime Errors",id:"runtime-errors",level:3},{value:"Limitations",id:"limitations",level:2},{value:"Tips",id:"tips",level:2},{value:"Fast Refresh and Hooks",id:"fast-refresh-and-hooks",level:2}],c={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fast-refresh"},"Fast Refresh"),(0,a.kt)("p",null,"Fast Refresh is a shuvi feature that gives you instantaneous feedback on\nedits made to your React components. Fast Refresh is enabled by default.\nWith Next.js Fast Refresh enabled, most edits should be visible within a second, ",(0,a.kt)("strong",{parentName:"p"},"without losing component\nstate"),"."),(0,a.kt)("h2",{id:"how-it-works"},"How It Works"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you edit a file that ",(0,a.kt)("strong",{parentName:"li"},"only exports React component(s)"),", Fast Refresh will\nupdate the code only for that file, and re-render your component. You can edit\nanything in that file, including styles, rendering logic, event handlers, or\neffects."),(0,a.kt)("li",{parentName:"ul"},"If you edit a file with exports that ",(0,a.kt)("em",{parentName:"li"},"aren't")," React components, Fast Refresh\nwill re-run both that file, and the other files importing it. So if both\n",(0,a.kt)("inlineCode",{parentName:"li"},"Button.js")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Modal.js")," import ",(0,a.kt)("inlineCode",{parentName:"li"},"theme.js"),", editing ",(0,a.kt)("inlineCode",{parentName:"li"},"theme.js")," will update\nboth components."),(0,a.kt)("li",{parentName:"ul"},"Finally, if you ",(0,a.kt)("strong",{parentName:"li"},"edit a file")," that's ",(0,a.kt)("strong",{parentName:"li"},"imported by files outside of the\nReact tree"),", Fast Refresh ",(0,a.kt)("strong",{parentName:"li"},"will fall back to doing a full reload"),". You\nmight have a file which renders a React component but also exports a value\nthat is imported by a ",(0,a.kt)("strong",{parentName:"li"},"non-React component"),". For example, maybe your\ncomponent also exports a constant, and a non-React utility file imports it. In\nthat case, consider migrating the constant to a separate file and importing it\ninto both files. This will re-enable Fast Refresh to work. Other cases can\nusually be solved in a similar way.")),(0,a.kt)("h2",{id:"error-resilience"},"Error Resilience"),(0,a.kt)("h3",{id:"syntax-errors"},"Syntax Errors"),(0,a.kt)("p",null,"If you make a syntax error during development, you can fix it and save the file\nagain. The error will disappear automatically, so you won't need to reload the\napp. ",(0,a.kt)("strong",{parentName:"p"},"You will not lose component state"),"."),(0,a.kt)("h3",{id:"runtime-errors"},"Runtime Errors"),(0,a.kt)("p",null,"If you make a mistake that leads to a runtime error inside your component,\nyou'll be greeted with a contextual overlay. Fixing the error will automatically\ndismiss the overlay, without reloading the app."),(0,a.kt)("p",null,"Component state will be retained if the error did not occur during rendering. If\nthe error did occur during rendering, React will remount your application using\nthe updated code."),(0,a.kt)("p",null,"If you have ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/error-boundaries.html"},"error boundaries"),"\nin your app (which is a good idea for graceful failures in production), they\nwill retry rendering on the next edit after a rendering error. This means having\nan error boundary can prevent you from always getting reset to the root app\nstate. However, keep in mind that error boundaries shouldn't be ",(0,a.kt)("em",{parentName:"p"},"too")," granular.\nThey are used by React in production, and should always be designed\nintentionally."),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"Fast Refresh tries to preserve local React state in the component you're\nediting, but only if it's safe to do so. Here's a few reasons why you might see\nlocal state being reset on every edit to a file:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Local state is not preserved for class components (only function components\nand Hooks preserve state)."),(0,a.kt)("li",{parentName:"ul"},"The file you're editing might have ",(0,a.kt)("em",{parentName:"li"},"other")," exports in addition to a React\ncomponent."),(0,a.kt)("li",{parentName:"ul"},"Sometimes, a file would export the result of calling a higher-order component\nlike ",(0,a.kt)("inlineCode",{parentName:"li"},"HOC(WrappedComponent)"),". If the returned component is a\nclass, its state will be reset."),(0,a.kt)("li",{parentName:"ul"},"Anonymous arrow functions like ",(0,a.kt)("inlineCode",{parentName:"li"},"export default () => <div />;")," cause Fast Refresh to not preserve local component state. For large codebases should named component.",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export default function NamedComponent() {\n  return <div>Hello World</div>\n}\n")))),(0,a.kt)("p",null,"As more of your codebase moves to function components and Hooks, you can expect\nstate to be preserved in more cases."),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fast Refresh preserves React local state in function components (and Hooks) by\ndefault."),(0,a.kt)("li",{parentName:"ul"},"Sometimes you might want to ",(0,a.kt)("em",{parentName:"li"},"force")," the state to be reset, and a component to\nbe remounted. For example, this can be handy if you're tweaking an animation\nthat only happens on mount. To do this, you can add ",(0,a.kt)("inlineCode",{parentName:"li"},"// @refresh reset"),"\nanywhere in the file you're editing. This directive is local to the file, and\ninstructs Fast Refresh to remount components defined in that file on every\nedit."),(0,a.kt)("li",{parentName:"ul"},"You can put ",(0,a.kt)("inlineCode",{parentName:"li"},"console.log")," into the components you edit during\ndevelopment.")),(0,a.kt)("h2",{id:"fast-refresh-and-hooks"},"Fast Refresh and Hooks"),(0,a.kt)("p",null,"When possible, Fast Refresh attempts to preserve the state of your component\nbetween edits. In particular, ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useRef")," preserve their previous\nvalues as long as you don't change their arguments or the order of the Hook\ncalls."),(0,a.kt)("p",null,"Hooks with dependencies\u2014such as ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback"),"\u2014will\n",(0,a.kt)("em",{parentName:"p"},"always")," update during Fast Refresh. Their list of dependencies will be ignored\nwhile Fast Refresh is happening."),(0,a.kt)("p",null,"For example, when you edit ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo(() => x * 2, [x])")," to\n",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo(() => x * 10, [x])"),", it will re-run even though ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," (the dependency)\nhas not changed. If React didn't do that, your edit wouldn't reflect on the\nscreen!"),(0,a.kt)("p",null,"Sometimes, this can lead to unexpected results. For example, even a ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect"),"\nwith an empty array of dependencies would still re-run once during Fast Refresh."),(0,a.kt)("p",null,"However, writing code resilient to occasional re-running of ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect")," is a good practice even\nwithout Fast Refresh. It will make it easier for you to introduce new dependencies to it later on."))}f.isMDXComponent=!0}}]);