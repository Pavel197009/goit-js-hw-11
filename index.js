/* empty css                      */import{a as m,S as p,i as c}from"./assets/vendor-CVWx-W0A.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();m.defaults.baseURL="https://pixabay.com/api/";const f="28194821-49041d995ecd04735d9e20d11",g=`?key=${f}`;async function y(s){const i={q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:20};return(await m.get(g,{params:i})).data}const a={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),body:document.querySelector("body"),searchInput:document.querySelector(".search-form-input"),searchBtn:document.querySelector(".search-form-btn"),loader:document.querySelector(".loader")};let u=null;v();function h(s){const i=s.map(t=>`<li class="gallery-item">
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
`);a.gallery.innerHTML=i.join(" "),u.refresh()}function n(){a.gallery.innerHTML=""}function b(){a.loader.style.visibility="visible"}function d(){a.loader.style.visibility="hidden"}function v(){u=new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}a.form.addEventListener("submit",L);async function L(s){if(s.preventDefault(),s.currentTarget.elements.search_text.value.trim().length===0){c.error({position:"topRight",message:"Search text is empty. Enter the text, please"});return}let i=s.currentTarget.elements.search_text.value.trim().split(" ").join("+");n(),b();try{let t=await y(i);t.total?h(t.hits):c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),d()}catch{c.error({position:"topRight",message:"Something went wrong!"}),n(),d()}}
//# sourceMappingURL=index.js.map
