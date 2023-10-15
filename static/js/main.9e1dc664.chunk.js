(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t(29)},29:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(19),r=t.n(o),c=t(3);function s(){var e=Object(l.useState)("Dark Mode"),a=Object(c.a)(e,2),t=a[0],o=a[1],r=Object(l.useState)({color:"black",backgroundColor:"white"}),s=Object(c.a)(r,2),i=s[0],m=s[1];return n.a.createElement("div",{className:"container my-3",style:i},n.a.createElement("h1",null,"About Us"),n.a.createElement("div",{className:"container"},"TextUtils is a website that offers a range of text-related tools and utilities for manipulating and analyzing text. Its main features include:"),n.a.createElement("div",{className:"accordion accordion-flush",id:"accordionFlushExample"},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header"},n.a.createElement("button",{className:"accordion-button collapsed",style:i,type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne"},n.a.createElement("strong",null,"Word Count"))),n.a.createElement("div",{id:"flush-collapseOne",className:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},n.a.createElement("div",{className:"accordion-body",style:i},"TextUtils allows users to input text and instantly find out how many words are in the provided text. This is helpful for writers, students, and professionals who need to keep track of their document's word count."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header"},n.a.createElement("button",{className:"accordion-button collapsed",style:i,type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseTwo","aria-expanded":"false","aria-controls":"flush-collapseTwo"},n.a.createElement("strong",null,"Remove Blank Spaces"))),n.a.createElement("div",{id:"flush-collapseTwo",className:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},n.a.createElement("div",{className:"accordion-body",style:i},"The website offers a tool to remove extra spaces and formatting from text. This feature is useful for cleaning up text copied from various sources, ensuring it's more readable and consistent."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header"},n.a.createElement("button",{className:"accordion-button collapsed",style:i,type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseThree","aria-expanded":"false","aria-controls":"flush-collapseThree"},n.a.createElement("strong",null,"Convert to Uppercase and Lowercase"))),n.a.createElement("div",{id:"flush-collapseThree",className:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},n.a.createElement("div",{className:"accordion-body",style:i},"TextUtils allows users to convert text to uppercase, making it easy to create titles, headlines, or text that needs to be emphasized. Conversely, users can convert text to lowercase, which can be handy for standardizing text, making it more uniform and readable.")))),n.a.createElement("div",{className:"container my-3"},n.a.createElement("button",{type:"button",onClick:function(){"white"===i.color?(m({color:"black",backgroundColor:"white"}),o("Dark Mode")):(m({color:"white",backgroundColor:"black"}),o("Light Mode"))},className:"btn btn-primary"},t)))}function i(e){return n.a.createElement("div",{className:"text-center my-3",style:{color:"dark"===e.mode?"white":"black"}},"By ",n.a.createElement("span",{role:"img"},"\u2764\ufe0f"),"KundanRPatil")}var m=t(9);function d(e){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid "},n.a.createElement(m.b,{className:"navbar-brand",to:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{className:"nav-link ","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{className:"nav-link",to:"/about"},e.link))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{onClick:e.toggleMode,className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Dark Mode"))))))}function u(e){var a=Object(l.useState)("Write here..."),t=Object(c.a)(a,2),o=t[0],r=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h3",null,"Try TextUtils- Word counter,Character counter, Remove extra spaces"),n.a.createElement("div",{className:"mb-3 my-3"},n.a.createElement("textarea",{className:"form-control",value:o,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"gray":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"6"})),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-2",onClick:function(){var a=o.toUpperCase();r(a),e.showAlert("Coverted to Uppercase","success")}},"Convert to UpperCase"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-2",onClick:function(){var a=o.toLowerCase();r(a),e.showAlert("Coverted to Lowercase","success")}},"Convert to LowerCase"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-2",onClick:function(){for(var a="",t=o.length-1;t>=0;t--)a+=o[t];r(a),e.showAlert("reversed","success")}},"Reverse"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-2",onClick:function(){navigator.clipboard.writeText(o),e.showAlert("Copied","success")}},"Copy"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-2 my-2",onClick:function(){var a=o.split(/[ ]+/);r(a.join(" ")),e.showAlert("Removed Extra Spaces","danger")}},"Remove Extra Spaces"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-danger mx-2 my-2",onClick:function(){r(""),e.showAlert("Cleared","danger")}},"Clear")),n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h6",null,"No of Words: ",o.split(/\s+/).filter(function(e){return 0!==e.length}).length),n.a.createElement("h6",null,"No of Characters: ",o.length)))}function b(e){return n.a.createElement("div",{style:{height:"50px"}},e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)),": ",e.alert.msg))}var p=t(1);var h=function(){var e=Object(l.useState)("light"),a=Object(c.a)(e,2),t=a[0],o=a[1],r=Object(l.useState)(null),h=Object(c.a)(r,2),g=h[0],E=h[1],v=function(e,a){E({msg:e,type:a}),setTimeout(function(){E(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{basename:"/textUtils-krp"},n.a.createElement(d,{title:"KRP",link:"About",mode:t,toggleMode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="#665887",v("Dark mode enabled","success")):(o("light"),document.body.style.backgroundColor="white",v("Light mode enabled","success"))}}),n.a.createElement(b,{alert:g}),n.a.createElement(p.c,null,n.a.createElement(p.a,{exact:!0,path:"/textUtils-krp",element:n.a.createElement(u,{mode:t,showAlert:v})}),n.a.createElement(p.a,{path:"/about",element:n.a.createElement(s,null)})),n.a.createElement(i,{mode:t})))},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,r=a.getTTFB;t(e),l(e),n(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null))),g()}},[[20,1,2]]]);
//# sourceMappingURL=main.9e1dc664.chunk.js.map