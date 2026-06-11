import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

//import { createMarkup } from './js/render-functions';
import { getPhotos } from './js/PixabayAPI';
import { createMarkup } from './js/render-functions';
import { refs } from './js/refs';

//const form = document.querySelector('.search-form');
refs.form.addEventListener("submit", handleSearchPhoto);


  
function handleSearchPhoto(e) {
    e.preventDefault();
    console.log(e.currentTarget.elements.search_text.value, e.currentTarget.elements.search_text.value.length);
/*    if (e.currentTarget.elements.search_text.value.length === 0)
    {
        iziToast.error({ position: 'topRight', message: 'Search text is empty. Enter the text, please' });
    } */
    let searchString = e.currentTarget.elements.search_text.value.split(" ").join("+");
    refs.gallery.innerHTML = "";
    refs.loadingText.style.visibility = 'visible';
//    const pixabay = new PixabayAPI;
    let data = getPhotos(searchString).then(res => {
        if (!res.data.total) {
            iziToast.error({ position: 'topRight', message: `Sorry, there are no images matching your search query. Please try again!` });
        } else {
            const markup = createMarkup(res.data.hits);
            refs.gallery.innerHTML = markup;
            const lightbox = new SimpleLightbox('.gallery a', {
                captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
            });
        }
        refs.loadingText.style.visibility = 'hidden';
    });    
}
