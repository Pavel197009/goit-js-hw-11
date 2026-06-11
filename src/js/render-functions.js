
// import * as bootstrap from 'bootstrap';
import { refs } from './refs';

import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

export function createGallery(photos) {
  const strings = photos
    .map(
      photo => 
        `<li class="gallery-item">
<a class="gallery-link" href="${photo.largeImageURL}" >
    <img class="gallery-img" src="${photo.webformatURL}" alt="${photo.tags}" /> 
</a>
<div class="gallery-item-describe">
  <ul class="describe-items">
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Likes</p>
        <p class="describe-item-value">${photo.likes}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Views</p>
        <p class="describe-item-value">${photo.views}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Comments</p>
        <p class="describe-item-value">${photo.comments}</p>
      </div>
    </li>
    <li class="describe-item">
      <div class="describe-item-div">
        <p class="describe-item-name">Downloads</p>
        <p class="describe-item-value">${photo.downloads}</p>
      </div>
    </li>
  </ul>
</div>
</li>
`
  );
  refs.gallery.innerHTML = strings.join(" ");
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
})
}

export function clearGallery() {
  refs.gallery.innerHTML = "";
}

export function showLoader() {
  refs.loadingText.style.visibility = 'visible';
} 

export function hideLoader() {
  refs.loadingText.style.visibility = 'hidden';
} 