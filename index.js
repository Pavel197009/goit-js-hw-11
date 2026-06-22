/* empty css                      */import{a as d,S as u,i as o}from"./assets/vendor-CVWx-W0A.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();d.defaults.baseURL="https://pixabay.com/api/";const p="28194821-49041d995ecd04735d9e20d11",f=`?key=${p}`;function g(s){const i={q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:20};return d.get(f,{params:i}).then(e=>e.data)}const a={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),body:document.querySelector("body"),searchInput:document.querySelector(".search-form-input"),searchBtn:document.querySelector(".search-form-btn"),loader:document.querySelector(".loader")};let m=null;v();function y(s){const i=s.map(e=>`<li class="gallery-item">
<a class="gallery-link" href="${e.largeImageURL}" >
    <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" /> 
</a>
<div class="gallery-item-describe">
  <ul class="describe-items">
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Likes</p>
        <p class="describe-item-value">${e.likes}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Views</p>
        <p class="describe-item-value">${e.views}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Comments</p>
        <p class="describe-item-value">${e.comments}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Downloads</p>
        <p class="describe-item-value">${e.downloads}</p>
      </div>
    </li>
  </ul>
</div>
</li>
`);a.gallery.innerHTML=i.join(" "),m.refresh()}function n(){a.gallery.innerHTML=""}function h(){a.loader.style.visibility="visible"}function b(){a.loader.style.visibility="hidden"}function v(){m=new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}a.form.addEventListener("submit",L);function L(s){if(s.preventDefault(),s.currentTarget.elements.search_text.value.trim().length===0){o.error({position:"topRight",message:"Search text is empty. Enter the text, please"});return}let i=s.currentTarget.elements.search_text.value.trim().split(" ").join("+");n(),h(),g(i).then(e=>{e.total?y(e.hits):o.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(e=>{o.error({position:"topRight",message:"Something went wrong!"}),n()}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map
