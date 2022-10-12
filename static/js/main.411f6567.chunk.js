(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),c=t.n(r),o=(t(13),t(1));t(15);function m(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,e.alert.type)," : ",e.alert.msg)}function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},"TextUtil"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/about"},"About"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark")))))}function i(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),r=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h1",{className:"text-center border border-primary p-1"},e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",id:"myBox",rows:"10",value:r,onChange:function(e){console.log("on change"),c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"gray":"white",color:"dark"===e.mode?"white":"#042743"},placeholder:"Enter Your message"})),l.a.createElement("button",{className:"btn btn-primary mt-4 mx-1",onClick:function(){console.log("Uppercase was clicked"),c(r.toUpperCase())}},"Convert Uppercase"),l.a.createElement("button",{className:"btn btn-primary mt-4 mx-1",onClick:function(){console.log("Uppercase was clicked"),c(r.toLowerCase())}},"Convert Lowercase"),l.a.createElement("button",{className:"btn btn-primary mt-4 mx-1",onClick:function(){c("")}},"Clear"),l.a.createElement("button",{className:"btn btn-primary mt-4 mx-1",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value)}},"Copy Text"),l.a.createElement("button",{className:"btn btn-primary mt-4 mx-1",onClick:function(){var e=r.split(/[ ]+/);c(e.join(" "))}},"Remove Extra Spaces")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h1",null,"Your text Summary"),l.a.createElement("p",null,r.split(" ").length," words and ",r.length," characters"),l.a.createElement("p",null,.008*r.split(" ").length," Minutes read"),l.a.createElement("h3",null,"Preview"),l.a.createElement("p",null,r)))}var u=function(){var e=Object(n.useState)("light"),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),d=u[0],b=u[1],g=function(e,a){b({msg:a,type:e}),setTimeout(function(){b(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{mode:t,toggleMode:function(){"light"===t?(r("dark"),document.body.style.backgroundColor="#042743",g("success","Dark mode has been enabled")):(r("light"),document.body.style.backgroundColor="white",g("success","Light mode has been enabled"))}}),l.a.createElement(m,{alert:d}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(i,{heading:"Word Counter Application",mode:t})))},d=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,18)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,a,t){e.exports=t(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.411f6567.chunk.js.map