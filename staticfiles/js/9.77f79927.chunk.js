(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[9],{102:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(87),r=a(88),c=a(62),i=a(2);function s(e){var t=e.children;return Object(i.jsx)(n.a,{className:"py-5",children:Object(i.jsx)("main",{children:Object(i.jsx)(r.a,{className:"justify-content-md-center",style:{width:"100%",margin:"0"},children:Object(i.jsx)(c.a,{xs:12,children:t})})})})}},104:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(4),i=a.n(c),s=a(0),o=a.n(s),l=a(5),u=["bsPrefix","variant","animation","size","children","as","className"],d=o.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.variant,s=e.animation,d=e.size,b=e.children,f=e.as,m=void 0===f?"div":f,j=e.className,p=Object(r.a)(e,u),h=(a=Object(l.a)(a,"spinner"))+"-"+s;return o.a.createElement(m,Object(n.a)({ref:t},p,{className:i()(j,h,d&&h+"-"+d,c&&"text-"+c)}),b)}));d.displayName="Spinner",t.a=d},105:function(e,t,a){"use strict";var n,r=a(1),c=a(3),i=a(4),s=a.n(i),o=a(0),l=a.n(o),u=a(23),d=a(11),b=a(5),f=a(32),m=a(53),j=a(52),p=["className","children"],h=((n={})[f.b]="show",n[f.a]="show",n),O=l.a.forwardRef((function(e,t){var a=e.className,n=e.children,i=Object(c.a)(e,p),u=Object(o.useCallback)((function(e){Object(j.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return l.a.createElement(f.e,Object(r.a)({ref:t,addEndListener:m.a},i,{onEnter:u}),(function(e,t){return l.a.cloneElement(n,Object(r.a)({},t,{className:s()("fade",a,n.props.className,h[e])}))}))}));O.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},O.displayName="Fade";var v=O,y=a(6),x=a.n(y),E=["label","onClick","className"],S={label:x.a.string.isRequired,onClick:x.a.func},g=l.a.forwardRef((function(e,t){var a=e.label,n=e.onClick,i=e.className,o=Object(c.a)(e,E);return l.a.createElement("button",Object(r.a)({ref:t,type:"button",className:s()("close",i),onClick:n},o),l.a.createElement("span",{"aria-hidden":"true"},"\xd7"),l.a.createElement("span",{className:"sr-only"},a))}));g.displayName="CloseButton",g.propTypes=S,g.defaultProps={label:"Close"};var C=g,N=a(96),w=a(24),R=a(30),I=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],k=Object(N.a)("h4");k.displayName="DivStyledAsH4";var T=Object(w.a)("alert-heading",{Component:k}),U=Object(w.a)("alert-link",{Component:R.a}),A={show:!0,transition:v,closeLabel:"Close alert"},L=l.a.forwardRef((function(e,t){var a=Object(u.a)(e,{show:"onClose"}),n=a.bsPrefix,i=a.show,o=a.closeLabel,f=a.className,m=a.children,j=a.variant,p=a.onClose,h=a.dismissible,O=a.transition,y=Object(c.a)(a,I),x=Object(b.a)(n,"alert"),E=Object(d.a)((function(e){p&&p(!1,e)})),S=!0===O?v:O,g=l.a.createElement("div",Object(r.a)({role:"alert"},S?void 0:y,{ref:t,className:s()(f,x,j&&x+"-"+j,h&&x+"-dismissible")}),h&&l.a.createElement(C,{onClick:E,label:o}),m);return S?l.a.createElement(S,Object(r.a)({unmountOnExit:!0},y,{ref:void 0,in:i}),g):i?g:null}));L.displayName="Alert",L.defaultProps=A,L.Link=U,L.Heading=T;t.a=L},151:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(21),r=a(27),c=a(93),i=a(0),s=a(29),o=a(97),l=a(98),u=a(102),d=a(90),b=a(63),f=a(16),m=a(94),j=a(2),p={name:"",email:"",password:""};function h(e){var t=e.history,a=Object(i.useState)(p),h=Object(c.a)(a,2),O=h[0],v=h[1],y=Object(s.b)(),x=Object(s.c)((function(e){return e.userRegister})),E=x.loading,S=x.success,g=x.userInfo,C=x.error,N=function(e){v(Object(r.a)(Object(r.a)({},O),{},Object(n.a)({},e.target.name,e.target.value)))};return Object(i.useEffect)((function(){S&&(y({type:f.a.USER_LOGIN_SUCCESS,payload:g}),t.push("/"))}),[t,S]),Object(j.jsx)(u.a,{style:{marginTop:"10vh"},children:Object(j.jsx)("main",{children:E?Object(j.jsx)(o.a,{}):Object(j.jsxs)(u.a,{style:{marginTop:"10vh"},children:[Object(j.jsx)("h2",{children:"Register"}),Object(j.jsxs)(d.a,{onSubmit:function(e){e.preventDefault(),y(Object(m.a)("/api/users/register/","POST",O,{SUCESS:f.a.USER_REGISTER_SUCCESS,REQUEST:f.a.USER_REGISTER_REQUEST,FAIL:f.a.USER_REGISTER_FAIL}))},children:[Object(j.jsxs)(d.a.Group,{controlId:"user",children:[Object(j.jsx)(d.a.Label,{children:"Nombre de usuario"}),Object(j.jsx)(d.a.Control,{type:"text",placeholder:"Ingresa el nombre de usuario",name:"name",required:!0,onChange:N})]}),Object(j.jsxs)(d.a.Group,{controlId:"email",children:[Object(j.jsx)(d.a.Label,{children:"Correo"}),Object(j.jsx)(d.a.Control,{type:"email",placeholder:"Ingresa el correo",required:!0,name:"email",onChange:N})]}),Object(j.jsxs)(d.a.Group,{controlId:"password",children:[Object(j.jsx)(d.a.Label,{children:"Contrase\xf1a"}),Object(j.jsx)(d.a.Control,{type:"password",placeholder:"Ingresa la contrase\xf1a",required:!0,name:"password",onChange:N})]}),Object(j.jsx)(b.a,{className:"mb-2",type:"submit",variant:"primary",children:"Iniciar sesi\xf3n"}),C&&Object(j.jsx)(l.a,{variant:"danger",style:{marginTop:"25px"},children:"Usuario o contrase\xf1a incorrectos"})]})]})})})}},93:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(o){r=!0,c=o}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return r}))},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(99),r=a.n(n),c=a(100),i=a(101),s=a.n(i),o=function(e,t,a,n){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:void 0;return function(){var l=Object(c.a)(r.a.mark((function c(l){var u,d,b,f,m;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u=n.REQUEST,d=n.SUCESS,b=n.FAIL,r.prev=1,l({type:u}),r.next=5,s()({method:t,url:e,data:a,headers:{"Content-Type":i?"multipart/form-data":"application/json",Authorization:o?"Bearer ".concat(o):""}});case 5:f=r.sent,m=f.data,l({type:d,payload:m}),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(1),console.log(r.t0),l({type:b,payload:r.t0.message});case 14:case"end":return r.stop()}}),c,null,[[1,10]])})));return function(e){return l.apply(this,arguments)}}()}},96:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),i=a(4),s=a.n(i);t.a=function(e){return c.a.forwardRef((function(t,a){return c.a.createElement("div",Object(n.a)({},t,{ref:a,className:s()(t.className,e)}))}))}},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(104),r=a(2);function c(){return Object(r.jsx)(n.a,{animation:"border",role:"status",style:{height:"100px",width:"100px",display:"block",margin:"auto"}})}},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(93),r=a(0),c=a.n(r),i=a(105),s=a(2);function o(e){var t=e.variant,a=e.children,r=c.a.useState(!0),o=Object(n.a)(r,2),l=o[0],u=o[1];return l?Object(s.jsx)(i.a,{variant:t,onClose:function(){return u(!l)},children:a}):null}}}]);
//# sourceMappingURL=9.77f79927.chunk.js.map