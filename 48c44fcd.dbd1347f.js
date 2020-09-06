(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{103:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),i=p(r),u=a,O=i["".concat(c,".").concat(u)]||i[u]||o[u]||b;return r?n.a.createElement(O,s(s({ref:t},l),{},{components:r})):n.a.createElement(O,s({ref:t},l))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=r.length,c=new Array(b);c[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<b;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},72:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return m})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(6),b=(r(0),r(103)),c={id:"_urx_src_streams_",title:"urx/src/streams",sidebar_label:"urx/src/streams"},s={unversionedId:"modules/_urx_src_streams_",id:"modules/_urx_src_streams_",isDocsHomePage:!1,title:"urx/src/streams",description:'Documentation \u203a "urx/src/streams"',source:"@site/docs/modules/_urx_src_streams_.md",permalink:"/docs/modules/_urx_src_streams_",editUrl:"https://github.com/petyosi/urx/edit/master/packages/docs/docs/docs/modules/_urx_src_streams_.md",sidebar_label:"urx/src/streams",sidebar:"typedoc",previous:{title:"urx/src/operators",permalink:"/docs/modules/_urx_src_operators_"},next:{title:"urx/src/system",permalink:"/docs/modules/_urx_src_system_"}},m=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"eventHandler",id:"eventhandler",children:[]},{value:"statefulStream",id:"statefulstream",children:[]},{value:"statefulStreamFromEmitter",id:"statefulstreamfromemitter",children:[]},{value:"stream",id:"stream",children:[]},{value:"streamFromEmitter",id:"streamfromemitter",children:[]}]}],l={rightToc:m};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/index"}),"Documentation")," \u203a ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/modules/_urx_src_streams_"}),'"urx/src/streams"')),Object(b.b)("p",null,"Streams are the basic building blocks of a reactive system. Any stream instance acts as both an ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter")," and ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.publisher"}),"Publisher"),", and allows multiple subscriptions to its values.\nStateful streams are used to maintain the state of the system - they persist the last passed value, immediately publising it to any new subscription.\nEvent handlers are suitable for exposing event properties for UI Components, allowing only one subscription at a time."),Object(b.b)("h2",{id:"index"},"Index"),Object(b.b)("h3",{id:"functions"},"Functions"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/modules/_urx_src_streams_#eventhandler"}),"eventHandler")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/modules/_urx_src_streams_#statefulstream"}),"statefulStream")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/modules/_urx_src_streams_#statefulstreamfromemitter"}),"statefulStreamFromEmitter")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/modules/_urx_src_streams_#stream"}),"stream")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/modules/_urx_src_streams_#streamfromemitter"}),"streamFromEmitter"))),Object(b.b)("h2",{id:"functions-1"},"Functions"),Object(b.b)("h3",{id:"eventhandler"},"eventHandler"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"eventHandler"),"\u2039",Object(b.b)("strong",{parentName:"p"},"T"),"\u203a(",Object(b.b)("inlineCode",{parentName:"p"},"emitter"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter"),"\u2039T\u203a): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter"),"\u2039T\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/887b6c0/packages/urx/src/streams.ts#L55"}),"urx/src/streams.ts:55"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type parameters:")),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"T")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"emitter")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter"),"\u2039T\u203a")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter"),"\u2039T\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"statefulstream"},"statefulStream"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"statefulStream"),"\u2039",Object(b.b)("strong",{parentName:"p"},"T"),"\u203a(",Object(b.b)("inlineCode",{parentName:"p"},"initial"),": T): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_actions_.statefulstream"}),"StatefulStream"),"\u2039T\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/887b6c0/packages/urx/src/streams.ts#L35"}),"urx/src/streams.ts:35"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type parameters:")),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"T")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"initial")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"T")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_actions_.statefulstream"}),"StatefulStream"),"\u2039T\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"statefulstreamfromemitter"},"statefulStreamFromEmitter"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"statefulStreamFromEmitter"),"\u2039",Object(b.b)("strong",{parentName:"p"},"T"),"\u203a(",Object(b.b)("inlineCode",{parentName:"p"},"emitter"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter"),"\u2039T\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"initial"),": T): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_actions_.statefulstream"}),"StatefulStream"),"\u2039T\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/887b6c0/packages/urx/src/streams.ts#L76"}),"urx/src/streams.ts:76"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type parameters:")),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"T")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"emitter")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter"),"\u2039T\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"initial")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"T")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_actions_.statefulstream"}),"StatefulStream"),"\u2039T\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"stream"},"stream"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"stream"),"\u2039",Object(b.b)("strong",{parentName:"p"},"T"),"\u203a(): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_actions_.stream"}),"Stream"),"\u2039T\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/887b6c0/packages/urx/src/streams.ts#L11"}),"urx/src/streams.ts:11"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type parameters:")),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"T")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_actions_.stream"}),"Stream"),"\u2039T\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"streamfromemitter"},"streamFromEmitter"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"streamFromEmitter"),"\u2039",Object(b.b)("strong",{parentName:"p"},"T"),"\u203a(",Object(b.b)("inlineCode",{parentName:"p"},"emitter"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter"),"\u2039T\u203a): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_actions_.stream"}),"Stream"),"\u2039T\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/887b6c0/packages/urx/src/streams.ts#L72"}),"urx/src/streams.ts:72"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type parameters:")),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"T")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"emitter")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter"),"\u2039T\u203a")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/interfaces/_urx_src_actions_.stream"}),"Stream"),"\u2039T\u203a")))}p.isMDXComponent=!0}}]);