function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequire11ff;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire11ff=n);var i=n("eWCmQ");const f=document.querySelector(".form"),l={};function a(t,o){new Promise(((e,r)=>{const n=Math.random()>.3;setTimeout((()=>{n?e(`✅ Fulfilled promise ${t} in ${o}ms`):r(`❌ Rejected promise ${t} in ${o}ms`)}),o)})).then((t=>e(i).Notify.success(t))).catch((t=>e(i).Notify.failure(t)))}f.addEventListener("submit",(function(e){e.preventDefault();new FormData(e.currentTarget).forEach(((e,t)=>{l[t]=e})),f.reset();for(let e=1;e<=l.amount;e+=1)a(e,l.delay),l.delay=Math.floor(l.delay)+Math.floor(l.step)}));
//# sourceMappingURL=03-promises.b211998b.js.map