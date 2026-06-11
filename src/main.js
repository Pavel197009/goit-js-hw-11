import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

//import { createMarkup } from './js/render-functions';
import { getImagesByQuery } from './js/PixabayAPI';
import { clearGallery, createGallery, hideLoader, showLoader } from './js/render-functions';
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
    clearGallery();
    showLoader();
//    const pixabay = new PixabayAPI;
    let data = getImagesByQuery(searchString).then(res => {
        if (!res.data.total) {
            iziToast.error({ position: 'topRight', message: `Sorry, there are no images matching your search query. Please try again!` });
        } else {
            createGallery(res.data.hits);
        }
        hideLoader();
    });    
}
