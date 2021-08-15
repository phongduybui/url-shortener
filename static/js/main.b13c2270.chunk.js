(this["webpackJsonpurl-shortener"]=this["webpackJsonpurl-shortener"]||[]).push([[0],{46:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(10),r=n.n(c),a=n(3),i=n(4),o=n(21),l=n.n(o).a.create({baseURL:"https://api-ssl.bitly.com/v4",headers:{Authorization:"Bearer ".concat("ef6d22ddb9b26bb778caf3f76b3a4e6e218997d7"),"Content-Type":"application/json"}}),d=(n(46),n(1)),b=function(e){var t=e.formRef;return Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)("h2",{className:"footer__title",children:"Boost your links today"}),Object(d.jsx)("div",{className:"btn btn--rounded btn--large",onClick:function(){return t.current.scrollIntoView({behavior:"smooth",block:"center"})},children:Object(d.jsx)("span",{children:"Get Started"})})]})},j=n(6),h=n(23),u=function(e){var t=e.onFormSubmit,n=e.formRef,s=e.loading,c=Object(h.a)(),r=c.register,a=c.handleSubmit,i=c.setError,o=c.formState.errors;return Object(d.jsx)("form",{onSubmit:a((function(e){var n=e.link;t(n,i)})),className:"form-input",ref:n,children:Object(d.jsxs)("div",{className:"form-input__wrapper",children:[Object(d.jsxs)("div",{className:"form-input__inner",children:[Object(d.jsx)("input",Object(j.a)(Object(j.a)({},r("link",{required:{value:!0,message:"Please add a link"},pattern:{value:/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm,message:"Invalid link! Example valid: https://www.google.com/"}})),{},{className:"form-input__input ".concat(o.link&&"error"),placeholder:"Shorten a link here..."})),o.link&&Object(d.jsx)("p",{className:"error-message",children:o.link.message})]}),Object(d.jsxs)("button",{className:"form-input__btn btn btn--rounded",children:[Object(d.jsx)("div",{className:"ui active dimmer",style:{visibility:s?"visible":"hidden"},children:Object(d.jsx)("div",{className:"ui indeterminate text loader"})}),Object(d.jsx)("span",{style:{visibility:s?"hidden":"visible"},children:"Shorten It!"})]})]})})},m=n.p+"static/media/logo.83464303.svg",O=function(e){var t=e.collapse;return Object(d.jsxs)("div",{className:"navbar ".concat(t?"navbar--collapse":""),children:[Object(d.jsxs)("ul",{className:"navbar__menu",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{href:"javascript:void(0)",className:"nav-link active",children:"Features"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{href:"javascript:void(0)",className:"nav-link",children:"Pricing"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{href:"javascript:void(0)",className:"nav-link",children:"Resources"})})]}),Object(d.jsxs)("div",{className:"navbar__button",children:[Object(d.jsx)("button",{className:"btn btn--no-bg",children:Object(d.jsx)("span",{children:"Login"})}),Object(d.jsx)("button",{className:"btn btn--rounded",children:Object(d.jsx)("span",{children:"Sign Up"})})]})]})},p=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"burger ".concat(n?"burger--open":""),onClick:function(){return c(!n)},children:[Object(d.jsx)("div",{className:"burger__bar"}),Object(d.jsx)("div",{className:"burger__bar"}),Object(d.jsx)("div",{className:"burger__bar"})]}),Object(d.jsx)(O,{collapse:n})]})},x=function(){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("div",{className:"header__logo",children:Object(d.jsx)("img",{src:m,alt:"logo"})}),Object(d.jsx)(p,{})]})},v=n.p+"static/media/illustration-working.c9b5ef54.svg",f=function(e){var t=e.formRef;return Object(d.jsxs)("section",{className:"hero",children:[Object(d.jsx)("img",{src:v,className:"hero__cover"}),Object(d.jsxs)("div",{className:"hero__content",children:[Object(d.jsx)("h1",{className:"hero__title",children:"More than just shorter links"}),Object(d.jsx)("p",{className:"hero__desc",children:"Build your brand's recognition and get detailed insights on how your links are performing."}),Object(d.jsx)("button",{className:"btn btn--rounded btn--large",onClick:function(){return t.current.scrollIntoView({behavior:"smooth",block:"center"})},children:Object(d.jsx)("span",{children:"Get Started"})})]})]})},g=function(e){var t=e.iconName,n=e.title,s=e.desc;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card__icon",children:Object(d.jsx)("img",{src:t,alt:"icon"})}),Object(d.jsx)("h3",{className:"card__title",children:n}),Object(d.jsx)("p",{className:"card__desc",children:s})]})},_=[{iconName:n.p+"static/media/icon-brand-recognition.c349d3b6.svg",title:"Brand Recognition",desc:"Boost your brand recognition with each click. Generic links don't mean athing. Branded links help instil confidence in your content."},{iconName:n.p+"static/media/icon-detailed-records.265c8aea.svg",title:"Detailed Records",desc:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."},{iconName:n.p+"static/media/icon-fully-customizable.a1532a74.svg",title:"Fully Customizable",desc:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."}],N=function(){return Object(d.jsxs)("section",{className:"intro",children:[Object(d.jsxs)("div",{className:"intro__top",children:[Object(d.jsx)("h2",{className:"intro__title",children:"Advanced Statistics"}),Object(d.jsx)("p",{className:"intro__desc",children:"Track how your links are performing across the web with our advanced statistics dashboard."})]}),Object(d.jsx)("div",{className:"intro__content",children:_.map((function(e,t){return Object(s.createElement)(g,Object(j.a)(Object(j.a)({},e),{},{key:t}))}))})]})},k=n(22),w=function(e){var t=e.id,n=e.link,c=e.long_url,r=Object(s.useState)(!1),a=Object(i.a)(r,2),o=a[0],l=a[1];return Object(d.jsxs)("div",{className:"shortened-item",children:[Object(d.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",className:"shortened-item__source",children:c}),Object(d.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",className:"shortened-item__link",children:t}),Object(d.jsx)(k.CopyToClipboard,{text:t,onCopy:function(){l(!0),setTimeout((function(){return l(!1)}),3e3)},children:Object(d.jsx)("button",{className:"shortened-item__btn btn btn--rounded ".concat(o&&"copied"),children:o?"Copied!":"Copy"})})]})},y=function(e){var t=e.results;return Object(d.jsx)("div",{className:"shortened-list",children:Object(d.jsx)("div",{className:"shortened-list__wrapper",children:t.map((function(e,t){return Object(d.jsx)(w,Object(j.a)({},e),e.id+t)}))})})},S=n(12),C=(n(52),function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(!1),o=Object(i.a)(r,2),j=o[0],h=o[1],m=Object(s.useRef)(null);return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(x,{}),Object(d.jsx)(f,{formRef:m}),Object(d.jsx)(u,{onFormSubmit:function(e,t){var s='{"long_url": "'.concat(e,'"}');n.find((function(t){return t.long_url===e}))?S.b.warning("This link has been shortened!"):(h(!0),l.post("/shorten",s).then((function(e){c((function(t){return[e.data].concat(Object(a.a)(t))}))})).catch((function(e){t("link",{type:"APIFailed",message:e.message})})).finally((function(){h(!1)})))},loading:j,formRef:m}),Object(d.jsx)(y,{results:n}),Object(d.jsx)(N,{}),Object(d.jsx)(b,{formRef:m}),Object(d.jsx)(S.a,{position:"bottom-right",autoClose:3e3})]})});r.a.render(Object(d.jsx)(C,{}),document.querySelector("#root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.b13c2270.chunk.js.map