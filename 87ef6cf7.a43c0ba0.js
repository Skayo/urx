(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,O=m["".concat(c,".").concat(u)]||m[u]||o[u]||s;return n?r.a.createElement(O,b(b({ref:t},p),{},{components:n})):r.a.createElement(O,b({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=u;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var p=2;p<s;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),s=(n(0),n(103)),c={id:"_urx_src_system_",title:"urx/src/system",sidebar_label:"urx/src/system"},b={unversionedId:"modules/_urx_src_system_",id:"modules/_urx_src_system_",isDocsHomePage:!1,title:"urx/src/system",description:'Documentation \u203a "urx/src/system"',source:"@site/docs/modules/_urx_src_system_.md",permalink:"/docs/modules/_urx_src_system_",editUrl:"https://github.com/petyosi/urx/edit/master/packages/docs/docs/docs/modules/_urx_src_system_.md",sidebar_label:"urx/src/system",sidebar:"typedoc",previous:{title:"urx/src/streams",permalink:"/docs/modules/_urx_src_streams_"},next:{title:"urx/src/transformers",permalink:"/docs/modules/_urx_src_transformers_"}},i=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Type aliases",id:"type-aliases",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Type aliases",id:"type-aliases-1",children:[{value:"SystemConstructor",id:"systemconstructor",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"<code>Const</code> id",id:"const-id",children:[]},{value:"init",id:"init",children:[]},{value:"system",id:"system",children:[]}]}],p={rightToc:i};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/index"}),"Documentation")," \u203a ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/modules/_urx_src_system_"}),'"urx/src/system"')),Object(s.b)("p",null,Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/modules/_urx_src_system_#system"}),"system")," is a construction utility to define and initialize sets of connected streams.\nSystems can list other systems as their dependencies, and optionally act as singletons in the dependency tree."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"@import { subscribe, publish, system, init, tup, connect, map, pipe } from 'urx'\n\n// a simple system with two streams\nconst sys1 = system(() => {\n const a = stream<number>()\n const b = stream<number>()\n\n connect(pipe(a, map(value => value * 2)), b)\n return { a, b }\n})\n\n// a second system which depends on the streams from the first one\nconst sys2 = system(([ {a, b} ]) => {\n const c = stream<number>()\n connect(pipe(b, map(value => value * 2)), c)\n // re-export the `a` stream, keep `b` internal\n return { a, c }\n}, tup(sys1))\n\n// init will recursively initialize sys2 dependencies, in this case sys1\nconst { a, c } = init(sys2)\nsubscribe(c, c => console.log(`Value multiplied by 4`, c))\npublish(a, 2)\n")),Object(s.b)("h2",{id:"index"},"Index"),Object(s.b)("h3",{id:"interfaces"},"Interfaces"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/interfaces/_urx_src_system_.system"}),"System")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/interfaces/_urx_src_system_.systemspec"}),"SystemSpec"))),Object(s.b)("h3",{id:"type-aliases"},"Type aliases"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/modules/_urx_src_system_#systemconstructor"}),"SystemConstructor"))),Object(s.b)("h3",{id:"functions"},"Functions"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/modules/_urx_src_system_#const-id"}),"id")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/modules/_urx_src_system_#init"}),"init")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/modules/_urx_src_system_#system"}),"system"))),Object(s.b)("h2",{id:"type-aliases-1"},"Type aliases"),Object(s.b)("h3",{id:"systemconstructor"},"SystemConstructor"),Object(s.b)("p",null,"\u01ac ",Object(s.b)("strong",{parentName:"p"},"SystemConstructor"),": ",Object(s.b)("em",{parentName:"p"},"function")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Defined in ",Object(s.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/887b6c0/packages/urx/src/system.ts#L91"}),"urx/src/system.ts:91"))),Object(s.b)("p",null,"The system constructor is a function which initializes and connects streams and returns them as a ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_system_.system"}),"System"),".\nIf the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/modules/_urx_src_system_#system"}),"system")," call specifies system dependencies, the constructor receives the dependencies as an array argument."),Object(s.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(s.b)("p",null,"\u25b8 (",Object(s.b)("inlineCode",{parentName:"p"},"dependencies"),": SpecResults\u2039D\u203a): ",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_system_.system"}),"System"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Parameters:")),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"dependencies")),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SpecResults\u2039D\u203a")))),Object(s.b)("h2",{id:"functions-1"},"Functions"),Object(s.b)("h3",{id:"const-id"},Object(s.b)("inlineCode",{parentName:"h3"},"Const")," id"),Object(s.b)("p",null,"\u25b8 ",Object(s.b)("strong",{parentName:"p"},"id"),"(): ",Object(s.b)("em",{parentName:"p"},"string")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Defined in ",Object(s.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/887b6c0/packages/urx/src/system.ts#L131"}),"urx/src/system.ts:131"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Returns:")," ",Object(s.b)("em",{parentName:"p"},"string")),Object(s.b)("hr",null),Object(s.b)("h3",{id:"init"},"init"),Object(s.b)("p",null,"\u25b8 ",Object(s.b)("strong",{parentName:"p"},"init"),"\u2039",Object(s.b)("strong",{parentName:"p"},"SS"),"\u203a(",Object(s.b)("inlineCode",{parentName:"p"},"systemSpec"),": SS): ",Object(s.b)("em",{parentName:"p"},"SR\u2039SS\u203a")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Defined in ",Object(s.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/887b6c0/packages/urx/src/system.ts#L138"}),"urx/src/system.ts:138"))),Object(s.b)("p",null,"Initializes a ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_system_.systemspec"}),"SystemSpec")," by recursively initializing its dependencies."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Type parameters:")),Object(s.b)("p",null,"\u25aa ",Object(s.b)("strong",{parentName:"p"},"SS"),": ",Object(s.b)("em",{parentName:"p"},"AnySystemSpec")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Parameters:")),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"systemSpec")),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SS"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the system spec to initialize.")))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Returns:")," ",Object(s.b)("em",{parentName:"p"},"SR\u2039SS\u203a")),Object(s.b)("p",null,"the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_system_.system"}),"System")," constructed by the spec constructor."),Object(s.b)("hr",null),Object(s.b)("h3",{id:"system"},"system"),Object(s.b)("p",null,"\u25b8 ",Object(s.b)("strong",{parentName:"p"},"system"),"\u2039",Object(s.b)("strong",{parentName:"p"},"F"),", ",Object(s.b)("strong",{parentName:"p"},"D"),"\u203a(",Object(s.b)("inlineCode",{parentName:"p"},"constructor"),": F, ",Object(s.b)("inlineCode",{parentName:"p"},"dependencies"),": D, ",Object(s.b)("inlineCode",{parentName:"p"},"__namedParameters"),": object): ",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_system_.systemspec"}),"SystemSpec"),"\u2039D, F\u203a")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Defined in ",Object(s.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/887b6c0/packages/urx/src/system.ts#L118"}),"urx/src/system.ts:118"))),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"system")," defines a specification of a system - its constructor, dependencies and if it should act as a singleton in a system dependency tree.\nWhen called, system returns a ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_system_.systemspec"}),"SystemSpec"),", which is then initialized along with its dependencies by passing it to ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/modules/_urx_src_system_#init"}),"init"),"."),Object(s.b)("p",null,"By default, systems will be initialized only once if encountered multiple times in the dependency tree.\nIn the below dependency system tree, systems ",Object(s.b)("inlineCode",{parentName:"p"},"b")," and ",Object(s.b)("inlineCode",{parentName:"p"},"c")," will receive the same stream instances from system ",Object(s.b)("inlineCode",{parentName:"p"},"a")," when system ",Object(s.b)("inlineCode",{parentName:"p"},"d")," is initialized."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-txt"}),"  a\n / \\\nb   c\n \\ /\n  d\n")),Object(s.b)("p",null,"If system ",Object(s.b)("inlineCode",{parentName:"p"},"a")," gets ",Object(s.b)("inlineCode",{parentName:"p"},"{singleton: false}")," as last argument, two separate instances will be created."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Type parameters:")),Object(s.b)("p",null,"\u25aa ",Object(s.b)("strong",{parentName:"p"},"F"),": ",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/modules/_urx_src_system_#systemconstructor"}),"SystemConstructor"),"\u2039D\u203a")),Object(s.b)("p",null,"\u25aa ",Object(s.b)("strong",{parentName:"p"},"D"),": ",Object(s.b)("em",{parentName:"p"},"SystemSpecs")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Parameters:")),Object(s.b)("p",null,"\u25aa ",Object(s.b)("strong",{parentName:"p"},"constructor"),": ",Object(s.b)("em",{parentName:"p"},"F")),Object(s.b)("p",null,"the system constructor function. Initialize and connect the streams in its body."),Object(s.b)("p",null,"\u25aa",Object(s.b)("inlineCode",{parentName:"p"},"Default value"),"  ",Object(s.b)("strong",{parentName:"p"},"dependencies"),": ",Object(s.b)("em",{parentName:"p"},"D"),"= ([] as unknown) as D"),Object(s.b)("p",null,"the system dependencies, which the constructor will receive as arguments.\nUse the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/modules/_urx_src_utils_#tup"}),"tup")," utility ",Object(s.b)("strong",{parentName:"p"},"For TypeScript type inference to work correctly"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const sys3 = system(() => { ... }, tup(sys2, sys1))\n")),Object(s.b)("p",null,"\u25aa",Object(s.b)("inlineCode",{parentName:"p"},"Default value"),"  ",Object(s.b)("strong",{parentName:"p"},"__namedParameters"),": ",Object(s.b)("em",{parentName:"p"},"object"),"= { singleton: true }"),Object(s.b)("p",null,"Options"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},"singleton")),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"should the system act as a singleton in other system dependency tree.")))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Returns:")," ",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_system_.systemspec"}),"SystemSpec"),"\u2039D, F\u203a")))}l.isMDXComponent=!0}}]);