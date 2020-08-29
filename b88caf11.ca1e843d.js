(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),i=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=i(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=i(r),m=a,O=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return r?n.a.createElement(O,p(p({ref:t},l),{},{components:r})):n.a.createElement(O,p({ref:t},l))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return i}));var a=r(2),n=r(6),o=(r(0),r(104)),c={id:"_urx_src_operators_.operator",title:"Operator",sidebar_label:"Operator"},p={unversionedId:"interfaces/_urx_src_operators_.operator",id:"interfaces/_urx_src_operators_.operator",isDocsHomePage:!1,title:"Operator",description:'Documentation \u203a "urx/src/operators" \u203a Operator',source:"@site/docs/interfaces/_urx_src_operators_.operator.md",permalink:"/docs/interfaces/_urx_src_operators_.operator",editUrl:"https://github.com/petyosi/urx/edit/master/packages/docs/docs/docs/interfaces/_urx_src_operators_.operator.md",sidebar_label:"Operator",sidebar:"typedoc",previous:{title:"Comparator",permalink:"/docs/interfaces/_urx_src_operators_.comparator"},next:{title:"System",permalink:"/docs/interfaces/_urx_src_system_.system"}},b=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],l={rightToc:b};function i(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/index"}),"Documentation")," \u203a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/modules/_urx_src_operators_"}),'"urx/src/operators"')," \u203a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_operators_.operator"}),"Operator")),Object(o.b)("p",null,"Operators transform and control the flow of values.\nThe ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/modules/_urx_src_transformers_#pipe"}),"pipe")," transformer is used to transform one Emitter into another by stacking operators to its values."),Object(o.b)("h2",{id:"type-parameters"},"Type parameters"),Object(o.b)("p",null,"\u25aa ",Object(o.b)("strong",{parentName:"p"},"Input")),Object(o.b)("p",null,"\u25aa ",Object(o.b)("strong",{parentName:"p"},"Output")),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Operator"))),Object(o.b)("h2",{id:"callable"},"Callable"),Object(o.b)("p",null,"\u25b8 (",Object(o.b)("inlineCode",{parentName:"p"},"done"),": function): ",Object(o.b)("em",{parentName:"p"},"function")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/petyosi/urx/blob/be9145f/packages/urx/src/operators.ts#L9"}),"urx/src/operators.ts:9"))),Object(o.b)("p",null,"Operators transform and control the flow of values.\nThe ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/modules/_urx_src_transformers_#pipe"}),"pipe")," transformer is used to transform one Emitter into another by stacking operators to its values."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("p",null,"\u25aa ",Object(o.b)("strong",{parentName:"p"},"done"),": ",Object(o.b)("em",{parentName:"p"},"function")),Object(o.b)("p",null,"\u25b8 (",Object(o.b)("inlineCode",{parentName:"p"},"value"),": Output): ",Object(o.b)("em",{parentName:"p"},"void")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"value")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Output")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"function")),Object(o.b)("p",null,"\u25b8 (",Object(o.b)("inlineCode",{parentName:"p"},"value"),": Input): ",Object(o.b)("em",{parentName:"p"},"void")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"value")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Input")))))}i.isMDXComponent=!0}}]);