import{a as n,i as o,S as d}from"./assets/vendor-WMWX7bId.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function m(i){const r={q:i};return n.defaults.baseURL="https://pixabay.com/api/",n.get("?key=28194821-49041d995ecd04735d9e20d11",{params:r})}function u(i){return i.map(t=>`<li class="gallery-item">
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
`).join(" ")}const l={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),body:document.querySelector("body"),searchInput:document.querySelector(".search-form-input"),searchBtn:document.querySelector(".search-form-btn"),loadingText:document.querySelector(".loading-text")};l.form.addEventListener("submit",p);function p(i){i.preventDefault(),console.log(i.currentTarget.elements.search_text.value,i.currentTarget.elements.search_text.value.length);let r=i.currentTarget.elements.search_text.value.split(" ").join("+");l.gallery.innerHTML="",l.loadingText.style.visibility="visible",m(r).then(t=>{if(!t.data.total)o.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});else{const a=u(t.data.hits);l.gallery.innerHTML=a,new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}l.loadingText.style.visibility="hidden"})}
//# sourceMappingURL=index.js.map
