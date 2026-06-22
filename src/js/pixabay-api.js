import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';    // URL-путь для запроса
const API_KEY = '28194821-49041d995ecd04735d9e20d11';   // ключ для запроса
const urlAXIOS = `?key=${API_KEY}`; 

export function getImagesByQuery(searchString) {
  const params = {                                        // создаем параметры для запроса
    q: searchString,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page: 1,
    per_page: 20,
  };
  return axios.get(urlAXIOS, { params }).then(response => response.data);                 // axios get-запрос и возврат промиса
}