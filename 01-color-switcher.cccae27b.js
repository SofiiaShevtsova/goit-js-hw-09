!function(){const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");let d=null;function o(){n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}e.disabled=!0,t.addEventListener("click",(function(){o(),t.disabled=!0,d=setInterval(o,1e3),e.disabled=!1})),e.addEventListener("click",(function(){e.disabled=!0,clearInterval(d),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.cccae27b.js.map