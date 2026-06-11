import{a as n,S as o,i as d}from"./assets/vendor-BezXTN6Z.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();function m(s){const r={q:s};return n.defaults.baseURL="https://pixabay.com/api/",n.get("?key=28194821-49041d995ecd04735d9e20d11",{params:r})}const a={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),body:document.querySelector("body"),searchInput:document.querySelector(".search-form-input"),searchBtn:document.querySelector(".search-form-btn"),loadingText:document.querySelector(".loading-text")};function u(s){const r=s.map(t=>`<li class="gallery-item">
<a class="gallery-link" href="${t.largeImageURL}" >
    <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" /> 
</a>
<div class="gallery-item-describe">
  <ul class="describe-items">
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Likes</p>
        <p class="describe-item-value">${t.likes}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Views</p>
        <p class="describe-item-value">${t.views}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Comments</p>
        <p class="describe-item-value">${t.comments}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Downloads</p>
        <p class="describe-item-value">${t.downloads}</p>
      </div>
    </li>
  </ul>
</div>
</li>
`);a.gallery.innerHTML=r.join(" "),new o(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function f(){a.gallery.innerHTML=""}function g(){a.loadingText.style.visibility="visible"}function y(){a.loadingText.style.visibility="hidden"}a.form.addEventListener("submit",p);function p(s){s.preventDefault(),console.log(s.currentTarget.elements.search_text.value,s.currentTarget.elements.search_text.value.length);let r=s.currentTarget.elements.search_text.value.split(" ").join("+");f(),g(),m(r).then(t=>{t.data.total?u(t.data.hits):d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),y()})}
//# sourceMappingURL=index.js.map
