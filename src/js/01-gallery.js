import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const markup = galleryItems.map(({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`).join('');

const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML("afterbegin", markup);


let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  showCounter: false,
});
