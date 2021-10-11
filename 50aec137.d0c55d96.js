(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{131:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(9),p=(a(0),a(143)),l={id:"dynamic-routes",title:"dynamic routes",description:"Dynamic Routes are pages and apis that allow you to add custom params to your URLs."},b=[{value:"Catch all routes",id:"catch-all-routes",children:[]},{value:"Optional catch all routes",id:"optional-catch-all-routes",children:[]},{value:"general rules",id:"general-rules",children:[]}],c={id:"pre6-feature/dynamic-routes",title:"dynamic routes",description:"Dynamic Routes are pages and apis that allow you to add custom params to your URLs.",source:"@site/../docs/pre6-feature/dynamic-routes.md",permalink:"/shuvijs.org/docs/pre6-feature/dynamic-routes",editUrl:"https://github.com/shuvijs/shuvijs.org/tree/master/website/../docs/pre6-feature/dynamic-routes.md",sidebar:"docs",previous:{title:"api routes",permalink:"/shuvijs.org/docs/pre6-feature/api-routes"},next:{title:"router match rules",permalink:"/shuvijs.org/docs/pre6-feature/router-match-rules"}},o={rightToc:b,metadata:c},i="wrapper";function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(p.b)(i,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h1",{id:"dynamic-routes"},"Dynamic Routes"),Object(p.b)("p",null,"Defining routes by using predefined paths is not always enough for complex applications. In shuvi you can add brackets to a page (",Object(p.b)("inlineCode",{parentName:"p"},"[param]"),") to create a dynamic route (a.k.a. url slugs, pretty urls, and others)."),Object(p.b)("p",null,"Consider the following page ",Object(p.b)("inlineCode",{parentName:"p"},"pages/post/[pid].js"),":"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { useCurrentRoute } from '@shuvi/app'\n\nconst Post = () => {\n  const { params } = useCurrentRoute()\n  const { pid } = params;\n\n  return <p>Post: {pid}</p>\n}\n\nexport default Post\n")),Object(p.b)("p",null,"Any route like ",Object(p.b)("inlineCode",{parentName:"p"},"/post/1"),", ",Object(p.b)("inlineCode",{parentName:"p"},"/post/abc"),", etc. will be matched by ",Object(p.b)("inlineCode",{parentName:"p"},"pages/post/[pid].js"),". "),Object(p.b)("p",null,"For example, the route ",Object(p.b)("inlineCode",{parentName:"p"},"/post/abc")," will have the following ",Object(p.b)("inlineCode",{parentName:"p"},"params")," object:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{ "pid": "abc" }\n')),Object(p.b)("p",null,"Similarly, the route ",Object(p.b)("inlineCode",{parentName:"p"},"/post/abc?foo=bar")," will have the following ",Object(p.b)("inlineCode",{parentName:"p"},"params")," and ",Object(p.b)("inlineCode",{parentName:"p"},"query")," object:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'// params\n{"pid": "abc"}\n// query\n{ "foo": "bar" }\n')),Object(p.b)("p",null,"Multiple dynamic route segments work the same way. The page ",Object(p.b)("inlineCode",{parentName:"p"},"pages/post/[pid]/[comment].js")," will match the route ",Object(p.b)("inlineCode",{parentName:"p"},"/post/abc/a-comment")," and its ",Object(p.b)("inlineCode",{parentName:"p"},"params")," object will be:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{ "pid": "abc", "comment": "a-comment" }\n')),Object(p.b)("h3",{id:"catch-all-routes"},"Catch all routes"),Object(p.b)("p",null,"Dynamic routes can be extended to catch all paths by adding three dots (",Object(p.b)("inlineCode",{parentName:"p"},"..."),") inside the brackets. For example:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"pages/post/[...slug].js")," matches ",Object(p.b)("inlineCode",{parentName:"li"},"/post/a"),", but also ",Object(p.b)("inlineCode",{parentName:"li"},"/post/a/b"),", ",Object(p.b)("inlineCode",{parentName:"li"},"/post/a/b/c")," and so on.")),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},Object(p.b)("strong",{parentName:"p"},"Note"),": You can use names other than ",Object(p.b)("inlineCode",{parentName:"p"},"slug"),", such as: ",Object(p.b)("inlineCode",{parentName:"p"},"[...param]"))),Object(p.b)("p",null,"Matched parameters will be sent as a query parameter (",Object(p.b)("inlineCode",{parentName:"p"},"slug")," in the example) to the page, and it will always be an array, so, the path ",Object(p.b)("inlineCode",{parentName:"p"},"/post/a")," will have the following ",Object(p.b)("inlineCode",{parentName:"p"},"params")," object:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{ "slug": ["a"] }\n')),Object(p.b)("p",null,"And in the case of ",Object(p.b)("inlineCode",{parentName:"p"},"/post/a/b"),", and any other matching path, new parameters will be added to the array, like so:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{ "slug": ["a", "b"] }\n')),Object(p.b)("h3",{id:"optional-catch-all-routes"},"Optional catch all routes"),Object(p.b)("p",null,"Catch all routes can be made optional by including the parameter in double brackets (",Object(p.b)("inlineCode",{parentName:"p"},"[[...slug]]"),")."),Object(p.b)("p",null,"For example, ",Object(p.b)("inlineCode",{parentName:"p"},"pages/post/[[...slug]].js")," will match ",Object(p.b)("inlineCode",{parentName:"p"},"/post"),", ",Object(p.b)("inlineCode",{parentName:"p"},"/post/a"),", ",Object(p.b)("inlineCode",{parentName:"p"},"/post/a/b"),", and so on."),Object(p.b)("p",null,"The main difference between catch all and optional catch all routes is that with optional, the route without the parameter is also matched (",Object(p.b)("inlineCode",{parentName:"p"},"/post")," in the example above)."),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"params")," objects are as follows:"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{ } // GET `/post` (empty object)\n{ "slug": ["a"] } // `GET /post/a` (single-element array)\n{ "slug": ["a", "b"] } // `GET /post/a/b` (multi-element array)\n')),Object(p.b)("h2",{id:"general-rules"},"general rules"),Object(p.b)("p",null,"files under ",Object(p.b)("inlineCode",{parentName:"p"},"src/pages"),", file path ",Object(p.b)("inlineCode",{parentName:"p"},"pages/*/*.js")),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"path"),Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"route"),Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"matched url"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pages/post/create.js"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/post/create"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/post/create")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pages/post/","[pid]",".js"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/post/:pid"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/post/1, /post/abc")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pages/post/[","[pid]","].js"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/post/:pid?"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/post, /post/1, /post/abc")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pages/post/","[...pid]",".js"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/post/:pid+"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/post/1/2, /post/a/b/c")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pages/post/[","[...pid]","].js"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/post/:pid*"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/post, /post/1/2, /post/a/b/c")))),Object(p.b)("p",null,"files under ",Object(p.b)("inlineCode",{parentName:"p"},"src/apis"),", file path ",Object(p.b)("inlineCode",{parentName:"p"},"apis/*/*.js")),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tip"}),"route prefix can be defined in `shuviConfig` `apiConfig.prefix`, default string`'api'`\n")),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"path"),Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"route"),Object(p.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"matched url"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"apis/post/create.js"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/api/post/create"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/api/post/create")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"apis/post/","[pid]",".js"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/api/post/:pid"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/api/post/1, /api/post/abc")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"apis/post/[","[pid]","].js"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/api/post/:pid?"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/api/post, /api/post/1, /api/post/abc")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"apis/post/","[...pid]",".js"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/api/post/:pid+"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/api/post/1/2, /api/post/a/b/c")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"apis/post/[","[...pid]","].js"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/api/post/:pid*"),Object(p.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/api/post, /api/post/1/2, /api/post/a/b/c")))))}s.isMDXComponent=!0},143:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n),p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)};var c="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},i=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,b=e.parentName,c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),i=l(a),s=n,u=i[b+"."+s]||i[s]||o[s]||p;return a?r.a.createElement(u,Object.assign({},{ref:t},c,{components:a})):r.a.createElement(u,Object.assign({},{ref:t},c))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=i;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b[c]="string"==typeof e?e:n,l[1]=b;for(var s=2;s<p;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}i.displayName="MDXCreateElement"}}]);