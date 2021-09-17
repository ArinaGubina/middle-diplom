(()=>{"use strict";const e=e=>{const t=document.querySelector(e.parent),o=document.querySelector(e.modal),n=document.querySelector(e.overlay);document.querySelector(e.close).addEventListener("click",(()=>{o.style.display="none",n.style.display="none"})),t.addEventListener("click",(t=>{t.preventDefault(),t.target.closest(e.target)&&(o.style.display="block",n.style.display="block")}))},t=e=>{const t=document.querySelector(e.arrowRight),o=document.querySelector(e.arrowLeft),n=document.querySelectorAll(e.items),r=!(window.screen.width>=576);let l=0;if(n[l].parentNode.style.flexWrap="wrap",n[l].parentNode.style.overflow="hidden",n[l].parentNode.style.maxHeight=`${e.rowHeight}px`,r){const t=Math.ceil((window.screen.width-e.itemWidth)/2);n[l].parentNode.style.justifyContent="center",n[l].parentNode.style.padding=`0 ${t}px`}t.addEventListener("click",(()=>{n[l].parentNode.appendChild(n[l]),l=(l+1)%n.length})),o.addEventListener("click",(()=>{n[l].parentNode.insertBefore(n[(l+n.length-1)%n.length],n[l]),l=(l+n.length-1)%n.length}))},o=function(e,t=0){const o=document.querySelectorAll(".count-wrap .count_1 span")[t],n=document.querySelectorAll(".count-wrap .count_2 span")[t],r=document.querySelectorAll(".count-wrap .count_3 span")[t],l=document.querySelectorAll(".count-wrap .count_4 span")[t];a();const s=setInterval((()=>{a()}),1e3);function a(){const t=function(e){const t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),n=Math.floor(t/60%60),r=Math.floor(t/3600%24);return{timeRemaining:t,days:Math.floor(t/3600/24),hours:r,minutes:n,seconds:o}}(e);o.textContent=t.days/10<1?"0"+t.days:t.days,n.textContent=t.hours/10<1?"0"+t.hours:t.hours,r.textContent=t.minutes/10<1?"0"+t.minutes:t.minutes,l.textContent=t.seconds/10<1?"0"+t.seconds:t.seconds,t.timeRemaining<=0&&(o.textContent="00",n.textContent="00",r.textContent="00",l.textContent="00",clearInterval(s))}};var n,r;o("20 september 2021"),(()=>{const e=document.querySelector(".smooth-scroll"),t=document.querySelector("#offer"),o=t.offsetTop+t.offsetHeight;e.style.display="none",document.addEventListener("scroll",(()=>{window.scrollY>o?e.style.display="block":e.style.display="none"})),e.addEventListener("click",(()=>{t.scrollIntoView({block:"start",behavior:"smooth"})}))})(),e({parent:"#header",modal:".header-modal",overlay:".overlay",close:".header-modal__close",target:".btn"}),e({parent:"#services",modal:".services-modal",overlay:".overlay",close:".services-modal__close",target:".service-button"}),t({arrowRight:".benefits__arrow--right",arrowLeft:".benefits__arrow--left",items:".benefits__item",rowHeight:191,itemWidth:195}),t({arrowRight:".services__arrow--right",arrowLeft:".services__arrow--left",items:".services__item",rowHeight:280,itemWidth:545}),o("20 september 2021",1),(()=>{const e=/[^А-Яа-яЁёA-Za-z\s-]/g;document.querySelectorAll('[name="fio"]').forEach((t=>{t.oninput=()=>{t.value=t.value.replace(e,"")},t.onchange=()=>{t.value=t.value.replace(/ +/g," ").trim(),t.value=t.value.replace(/- /g,"-"),t.value=t.value.replace(/ -/g,"-"),t.value=t.value.replace(/-+/g,"-");const e=t.value;let o="";for(let t=0;t<e.length;t++){if(0===t||t===e.length-1){if("-"===e[t])continue;if(0===t){o=e[t].toLocaleUpperCase();continue}}" "===e[t-1]||"-"===e[t-1]?o+=e[t].toLocaleUpperCase():o+=e[t].toLocaleLowerCase()}t.value=o}}));const t=/[^0-9\(\)-\+\)\()]/g;document.querySelectorAll('[name="phone"]').forEach((e=>{e.oninput=()=>{e.value=e.value.replace(t,"")}}))})(),(()=>{const e=document.querySelectorAll("form"),t=document.createElement("div");t.style.cssText="font-size: 1rem; color: red;";const o=document.createElement("img");let n;e.forEach((e=>{const r=e.querySelectorAll("input");e.addEventListener("submit",(l=>{l.preventDefault();const s=e.querySelector("button");if(s.parentNode.insertBefore(t,s),t.textContent="",(e=>{let t=!0;return e.forEach((e=>{if(e.value.length<2)e.style.border="2px solid red",console.log("Ошибка длины: "+e.value.length),t=!1;else if(e.closest("[name=phone]")){const o=e.value;let n=0;for(let e=0;e<o.length;e++)"+"!==o[e]&&"-"!==o[e]&&"("!==o[e]&&")"!==o[e]&&n++;11!==n?(e.style.border="2px solid red",console.log("Ошибка: цифр "+n),t=!1):e.style.border="1px solid #dfdfdf"}else e.style.border="1px solid #dfdfdf"})),t})(r)){(e=>{let t;o.style.cssText="display: block; position: fixed; \n        top: calc(50% - 80px); left: calc(50% - 80px); width: 160px;",o.setAttribute("src","./images/loading.png"),e.appendChild(o);const r=()=>{n=requestAnimationFrame(r),t-=5,o.style.transform=`rotate(${t}deg)`};t=360,o.style.transform=`rotate(${t}deg)`,n=requestAnimationFrame(r)})(e);const l=new FormData(e),a={};l.forEach(((e,t)=>{a[t]=e})),(e=>fetch("./server.php",{method:"POST",mode:"same-origin",credentials:"same-origin",headers:{"Content-type":"aplication/json"},redirect:"follow",referrer:"client",body:JSON.stringify(e)}))(a).then((e=>{if(200!==e.status)throw new Error("status network not 200");cancelAnimationFrame(n),o.remove(),t.textContent="Отлично! Ответ получен!!!",setTimeout((()=>{t.remove();const e=document.querySelector(".overlay"),o=s.closest(".header-modal"),n=s.closest(".services-modal");n&&(n.style.display="none"),o&&(o.style.display="none"),e.style.display="none"}),2500),r.forEach((e=>{"hidden"===!e.type&&(e.value="")})),s.textContent="Успешно отправлено",s.disabled=!0})).catch((e=>{t.textContent="Ошибка отправки формы",console.error(e)}))}else t.textContent="Поле заполнено неверно"}))}))})(),n=565,r=400,document.getElementById("documents").addEventListener("click",(e=>{e.preventDefault();const t=e.target.closest("a").getAttribute("href");if(t){const e=document.createElement("img"),o=document.createElement("div"),l=document.querySelector(".overlay");e.setAttribute("src",t),e.style.cssText=`width: ${r}px; margin: auto;`,l.appendChild(e),o.style.cssText=`background: white; border-radius: 22px; padding: 6px; \n            cursor: pointer; width: 40px; height: 40px; font-size: 40px; color: #0c484a; \n            position: fixed; top: calc(50% - ${n/2+11}px); bottom: 0; \n            left:  calc(50% + ${r/2-30}px); right: 0; z-index: 101;`,o.textContent="✘",l.appendChild(o),l.style.display="flex",o.addEventListener("click",(()=>{l.style.display="none",e.remove(),o.remove()}))}}))})();