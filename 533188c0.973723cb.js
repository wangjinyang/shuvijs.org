(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"default",(function(){return d}));var i=n(1),r=n(9),a=(n(0),n(145)),l={id:"getInitialProps",title:"\u6570\u636e\u83b7\u53d6"},c=[{value:"\u9875\u9762\u7ea7\u6570\u636e\u83b7\u53d6",id:"\u9875\u9762\u7ea7\u6570\u636e\u83b7\u53d6",children:[]},{value:"<code>context</code> \u5bf9\u8c61",id:"context-\u5bf9\u8c61",children:[]}],o={id:"getInitialProps",title:"\u6570\u636e\u83b7\u53d6",description:"## \u9875\u9762\u7ea7\u6570\u636e\u83b7\u53d6",source:"@site/../docs/getInitialProps.md",permalink:"/shuvijs.org/docs/getInitialProps",editUrl:"https://github.com/shuvijs/shuvijs.org/tree/master/website/../docs/getInitialProps.md",sidebar:"docs",previous:{title:"\u76ee\u5f55\u7ed3\u6784",permalink:"/shuvijs.org/docs/directory-structure"}},b={rightToc:c,metadata:o},p="wrapper";function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)(p,Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u9875\u9762\u7ea7\u6570\u636e\u83b7\u53d6"},"\u9875\u9762\u7ea7\u6570\u636e\u83b7\u53d6"),Object(a.b)("p",null,"\u6bcf\u4e2a\u9875\u9762\u53ef\u80fd\u6709\u5355\u72ec\u7684\u6570\u636e\u9884\u83b7\u53d6\u903b\u8f91\uff0c\u8fd9\u91cc\u6211\u4eec\u4f1a\u83b7\u53d6\u9875\u9762\u7ec4\u4ef6\u4e0a\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"getInitialProps")," \u9759\u6001\u65b9\u6cd5\uff0c\u6267\u884c\u540e\u5c06\u7ed3\u679c\u6ce8\u5165\u5230\u8be5\u9875\u9762\u7ec4\u4ef6\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"props")," \u4e2d\uff0c\u4f8b\u5982\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),'function Page({ title }) {\n  return <div>{title}</div>;\n}\n\nPage.getInitialProps = async ctx => {\n  return new Promise(resolve => {\n    setTimeout(\n      () =>\n        resolve({\n          title: "Hello World"\n        }),\n      1e3\n    );\n  });\n};\n\nexport default Page;\n')),Object(a.b)("h2",{id:"context-\u5bf9\u8c61"},Object(a.b)("inlineCode",{parentName:"h2"},"context")," \u5bf9\u8c61"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"getInitialProps")," \u63a5\u53d7\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"context")," \u5bf9\u8c61, \u5305\u542b\u5982\u4e0b\u5c5e\u6027\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"isServer")," - \u662f\u5426\u8fd0\u884c\u5728\u670d\u52a1\u7aef"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"pathname")," - \u5f53\u524d url \u7684\u8def\u5f84"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"query")," - \u8def\u7531\u8def\u5f84\u53c2\u6570"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"params")," - url \u8bf7\u6c42\u53c2\u6570"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"redirect")," - \u91cd\u5b9a\u5411\u51fd\u6570",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"redirect('/target')")," "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"redirect(301, '/target')")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"req")," - HTTP request object (server only)")))}d.isMDXComponent=!0}}]);