(()=>{"use strict";(()=>{const e=document.querySelector("#header"),l=(document.querySelector("body"),document.querySelector(".header-modal")),t=document.querySelector(".overlay");document.querySelector(".header-modal__close").addEventListener("click",(()=>{console.log("headerModalClose.click"),l.style.display="none",t.style.display="none"})),e.addEventListener("click",(e=>{e.preventDefault(),e.target.closest(".btn")&&(l.style.display="block",t.style.display="block")}))})()})();