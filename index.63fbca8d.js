const e=document.querySelector(".rating"),t=document.querySelector(".success"),c=document.querySelector(".rating__count"),r=(document.querySelector(".rating__submit"),document.querySelector(".success__info")),n=document.querySelector(".rating-form");let s,o=-1;const u=Array.from(c.children);u.forEach((e=>{e.addEventListener("click",(t=>{o>=0&&o<u.length&&u[o].classList.remove("number__active"),o=u.indexOf(e),s=e,e.classList.add("number__active")}))})),n.addEventListener("submit",(c=>{c.preventDefault(),-1!==o&&(e.classList.add("rating--hide"),t.classList.add("success--show"),r.innerHTML=`You selected ${s.innerHTML} out of ${u.length}`)}));
//# sourceMappingURL=index.63fbca8d.js.map