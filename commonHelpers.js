import{S as u,i as d}from"./assets/vendor-9310f15c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f=document.querySelector(".form"),c=document.querySelector(".gallery"),i=document.querySelector(".loader"),l={key:"12371278-ee82e7e687c0227bfbef9a885",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0},m=new u(".gallery a",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0});function p(){c.innerHTML=""}function y(){i.style.display="block"}function g(){i.style.display="none"}function h(o){return fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(({hits:t})=>{if(t.length>0){const s=t.reduce((a,e)=>a+`<li class="gallery-item">
        <a href=${e.largeImageURL}> 
          <img class="gallery-img" src =${e.webformatURL} alt=${e.tags}/>
        </a>
        <div class="gallery-text-box">
          <p>Likes: <span class="text-value">${e.likes}</span></p>
          <p>views: <span class="text-value">${e.views}</span></p>
          <p>comments: <span class="text-value">${e.comments}</span></p>
          <p>downloads: <span class="text-value">${e.downloads}</span></p>
      </div>
      </li>`,"");c.innerHTML=s,m.refresh()}else d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>{console.log(t.message)}).finally(()=>{g()})}f.addEventListener("submit",o=>{o.preventDefault(),p(),y(),l.q=o.target.elements.search.value.trim();const t=new URLSearchParams(l);h(t),o.currentTarget.reset()});
//# sourceMappingURL=commonHelpers.js.map
