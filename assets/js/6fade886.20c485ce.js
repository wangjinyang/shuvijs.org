"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[6509],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7901:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=n(7813),i=n(7044),o=(n(9496),n(9613)),r=["components"],l={sidebar_position:1,id:"Introduction"},s=void 0,u={unversionedId:"guide/features/Routes/Introduction",id:"guide/features/Routes/Introduction",title:"Introduction",description:"Pages",source:"@site/docs/guide/features/Routes/introduction.md",sourceDirName:"guide/features/Routes",slug:"/guide/features/Routes/Introduction",permalink:"/shuvijs.org/docs/guide/features/Routes/Introduction",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/features/Routes/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"Introduction"},sidebar:"guideSidebar",previous:{title:"Basic Support",permalink:"/shuvijs.org/docs/guide/features/Basic Support"},next:{title:"Dynamic Routes",permalink:"/shuvijs.org/docs/guide/features/Routes/Dynamic Routes"}},p={},d=[{value:"Pages",id:"pages",level:2},{value:"Routing",id:"routing",level:2},{value:"Index routes",id:"index-routes",level:3},{value:"Nested routes",id:"nested-routes",level:3},{value:"Dynamic route segments",id:"dynamic-route-segments",level:3},{value:"Linking between pages",id:"linking-between-pages",level:3},{value:"Linking to dynamic paths",id:"linking-to-dynamic-paths",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pages"},"Pages"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"page")," is a ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/components-and-props.html"},"React Component")," exported from a ",(0,o.kt)("inlineCode",{parentName:"p"},".js"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".jsx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".ts"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},".tsx")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pages")," directory. "),(0,o.kt)("p",null,"Each page is associated with a route based on its file name."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),": If you create ",(0,o.kt)("inlineCode",{parentName:"p"},"pages/about.js")," that exports a React component like below, it will be accessible at ",(0,o.kt)("inlineCode",{parentName:"p"},"/about"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function About() {\n  return <div>About</div>\n}\n\nexport default About\n")),(0,o.kt)("h2",{id:"routing"},"Routing"),(0,o.kt)("p",null,"shuvi has a file-system based router built on the ",(0,o.kt)("a",{parentName:"p",href:"#pages"},"concept of pages"),"."),(0,o.kt)("p",null,"When a file is added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pages")," directory, it's automatically available as a route."),(0,o.kt)("p",null,"The files inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"pages")," directory can be used to define most common patterns."),(0,o.kt)("h3",{id:"index-routes"},"Index routes"),(0,o.kt)("p",null,"The router will automatically route files named ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," to the root of the directory."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pages/index.js")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"li"},"/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pages/blog/index.js")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"li"},"/blog"))),(0,o.kt)("h3",{id:"nested-routes"},"Nested routes"),(0,o.kt)("p",null,"The router supports nested files. If you create a nested folder structure, files will automatically be routed in the same way still."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pages/blog/first-post.js")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"li"},"/blog/first-post")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pages/dashboard/settings/username.js")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"li"},"/dashboard/settings/username"))),(0,o.kt)("h3",{id:"dynamic-route-segments"},(0,o.kt)("a",{parentName:"h3",href:"/shuvijs.org/docs/guide/features/Routes/Dynamic%20Routes"},"Dynamic route segments")),(0,o.kt)("p",null,"To match a dynamic segment, you can use the bracket syntax. This allows you to match named parameters."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pages/blog/[slug].js")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"li"},"/blog/:slug")," (",(0,o.kt)("inlineCode",{parentName:"li"},"/blog/hello-world"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pages/[username]/settings.js")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"li"},"/:username/settings")," (",(0,o.kt)("inlineCode",{parentName:"li"},"/foo/settings"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pages/post/[...all].js")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"li"},"/post/*")," (",(0,o.kt)("inlineCode",{parentName:"li"},"/post/2020/id/title"),")")),(0,o.kt)("h3",{id:"linking-between-pages"},"Linking between pages"),(0,o.kt)("p",null,"The shuvi router allows you to do client-side route transitions between pages, similar to a single-page application."),(0,o.kt)("p",null,"A React component called ",(0,o.kt)("inlineCode",{parentName:"p"},"Link")," is provided to do this client-side route transition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Link } from \'@shuvi/runtime\'\n\nfunction Home() {\n  return (\n    <ul>\n      <li>\n        <Link to="/">\n          <a>Home</a>\n        </Link>\n      </li>\n      <li>\n        <Link to="/about">\n          <a>About Us</a>\n        </Link>\n      </li>\n      <li>\n        <Link to="/blog/hello-world">\n          <a>Blog Post</a>\n        </Link>\n      </li>\n    </ul>\n  )\n}\n\nexport default Home\n')),(0,o.kt)("p",null,"The example above uses multiple links. Each one maps a path (",(0,o.kt)("inlineCode",{parentName:"p"},"href"),") to a known page:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"li"},"pages/index.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/about")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"li"},"pages/about.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/blog/hello-world")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"li"},"pages/blog/[slug].js"))),(0,o.kt)("h3",{id:"linking-to-dynamic-paths"},"Linking to dynamic paths"),(0,o.kt)("p",null,"You can also use interpolation to create the path, which comes in handy for ",(0,o.kt)("a",{parentName:"p",href:"#dynamic-route-segments"},"dynamic route segments"),". For example, to show a list of posts which have been passed to the component as a prop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Link } from '@shuvi/runtime'\n\nfunction Posts({ posts }) {\n  return (\n    <ul>\n      {posts.map((post) => (\n        <li key={post.id}>\n          <Link to={`/blog/${post.slug}`}>\n            <a>{post.title}</a>\n          </Link>\n        </li>\n      ))}\n    </ul>\n  )\n}\n\nexport default Posts\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To access the ",(0,o.kt)("inlineCode",{parentName:"p"},"router")," object in a React component you can use ",(0,o.kt)("a",{parentName:"p",href:"#index"},(0,o.kt)("inlineCode",{parentName:"a"},"useRouter")),".")))}m.isMDXComponent=!0}}]);