"use strict";(self.webpackChunksimpleiot=self.webpackChunksimpleiot||[]).push([[540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={id:"twin",title:"Digital Twins"},o=void 0,l={unversionedId:"documentation/data/twin",id:"documentation/data/twin",title:"Digital Twins",description:"Ask different people what Digital Twin means to them, and you will likely hear a range of (possibly contradictory) definitions.",source:"@site/docs/documentation/data/twin.md",sourceDirName:"documentation/data",slug:"/documentation/data/twin",permalink:"/simpleiot-build/docs/documentation/data/twin",draft:!1,tags:[],version:"current",frontMatter:{id:"twin",title:"Digital Twins"},sidebar:"theSidebar",previous:{title:"Data vs. Events",permalink:"/simpleiot-build/docs/documentation/data/events"},next:{title:"MQTT Topics",permalink:"/simpleiot-build/docs/documentation/data/mqtt"}},s={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ask different people what ",(0,i.kt)("em",{parentName:"p"},"Digital Twin")," means to them, and you will likely hear a range of (possibly contradictory) definitions."),(0,i.kt)("p",null,"In the SimpleIOT universe, the definition is intentionally kept lightweight and simple. A ",(0,i.kt)("em",{parentName:"p"},"Digital Twin")," is an instance of a device that mirrors the state of a physical one. For example, assume we have a ",(0,i.kt)("strong",{parentName:"p"},"Model")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"Lightbulb"),"."),(0,i.kt)("p",null,"When a physical Lightbulb is seen for the first time on the system, it is assigned a ",(0,i.kt)("strong",{parentName:"p"},"Project"),", a ",(0,i.kt)("strong",{parentName:"p"},"Model"),", and a unique serial number to help disambiguate it from other instances."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"/simpleiot-build/img/data/model-twin.png",width:"60%"})),(0,i.kt)("p",null),(0,i.kt)("p",null,"For each instance of a ",(0,i.kt)("strong",{parentName:"p"},"Device"),", a record is maintained in the SimpleIOT database. Likewise, for each ",(0,i.kt)("strong",{parentName:"p"},"Datatype")," defined for the ",(0,i.kt)("strong",{parentName:"p"},"Model"),", a corresponding ",(0,i.kt)("strong",{parentName:"p"},"Data")," record is also created. This record will maintain the last-known value of that element."),(0,i.kt)("p",null,"Applications can GET these values via REST calls and, if subscribed to that ",(0,i.kt)("strong",{parentName:"p"},"Data")," element, will receive events indicating the value has changed (either from the device itself or via the REST APIs)."),(0,i.kt)("p",null,"Conversely, applications can SET those values via REST calls. Then, if a device is on and connected to the cloud, it will receive the change in that value in real-time and act accordingly."),(0,i.kt)("p",null,"Under this definition, the instance of the ",(0,i.kt)("strong",{parentName:"p"},"Device")," is a live Digital Twin. Therefore, you can query it and receive the last-known value, update it and have the physical device update in real-time."),(0,i.kt)("p",null,"You can retrieve a log of all settings and activities for each device from the DynamoDB database and the Timestream time-series feed. "),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"/simpleiot-build/img/data/dynamodb-console.png",width:"90%"})),(0,i.kt)("p",null),(0,i.kt)("p",null,"The last-known value is always kept in the RDS database, accessible via a simple GET call via the REST API."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The Digital Twin can also help visualize the actual device in dashboards, mobile apps, or AR/VR applications.")))}d.isMDXComponent=!0}}]);