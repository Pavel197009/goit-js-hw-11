import axios from 'axios';

export function getPhotos(searchString) {
  const params = {
    q: searchString,
  };

  axios.defaults.baseURL = 'https://pixabay.com/api/';
  const API_KEY = '28194821-49041d995ecd04735d9e20d11';
  const urlAXIOS = `?key=${API_KEY}`;
  // const urlAXIOS = `?key=${API_KEY}&q=${this.#query}&page=${this.#page}&per_page=${this.#per_page}`;

  return axios.get(urlAXIOS, { params });
}

 class PixabayAPI {
  #page = 1;
  #per_page = 40;
  #query = '';
  #totalPhotos = 0;



  //get query() {
    // this.#query;
  //  return this.#query;
  //}

  //set query(newQuery) {
  //  this.#query = newQuery;
  //}

  //incrementPage() {
  //  this.#page += 1;
  //}

  //resetPage() {
  //  this.#page = 1;
  //}

  //setTotal(total) {
  //  this.#totalPhotos = total;
  //}

  //hasMorePhotos() {
    // console.log('page', this.#page);
    // console.log('totalPhotos', this.#totalPhotos);
    // console.log('per_page', this.#per_page);
  //  return this.#page < Math.ceil(this.#totalPhotos / this.#per_page);
  //}
}