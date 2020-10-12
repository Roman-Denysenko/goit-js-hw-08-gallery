import galleryItems from "./gallery-items.js";

 //console.log(galleryItems);

  /* <li class="gallery__item">
    <a
        class="gallery__link"
        href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
    >
        <img
            class="gallery__image"
            src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
            data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
            alt="Tulips"
        />
    </a>
</li> */

const galleryRef = document.querySelector(`.js-gallery`);
const modalContainer = document.querySelector(`.lightbox`);
const modalCloseContainerBtn = document.querySelector(`[ data-action="close-lightbox"]`);
const modalImgRef = document.querySelector(`.lightbox__image`);
const overlayRef = document.querySelector(`.lightbox__overlay`);


galleryRef.addEventListener(`click`, onGalleryContainerclick);
modalCloseContainerBtn.addEventListener(`click`, onModalClose);
overlayRef.addEventListener(`click`, onCloseModalFromOverlay);
window.addEventListener(`keydown`, onCloseModalKey);
// window.addEventListener(`keydown`, onSliderModal);

function creatCardsGallery() 
{
    
    const creatCards = galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
    <a
        class="gallery__link"
        href="${original}"
    >
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</li>`
    }).join(``)

   return creatCards;
 
}
 
galleryRef.insertAdjacentHTML(`afterbegin`, creatCardsGallery());

function onGalleryContainerclick(event) {
    event.preventDefault();
    event.target.dataset.source;
    modalContainer.classList.add(`is-open`);
    modalImgRef.src = event.target.dataset.source;
     modalImgRef.alt = event.target.alt

    
}
    
function onModalClose() {
    modalContainer.classList.remove(`is-open`);
    modalImgRef.src = ``;
    modalImgRef.alt = ``;
   
}

 
function onCloseModalFromOverlay(event) {
        if (event.target === event.currentTarget) {
            modalContainer.classList.remove(`is-open`);
             modalImgRef.src = ``;
    modalImgRef.alt = ``;
}
}
    
function onCloseModalKey(event) {
    if (event.code === `Escape`) {
     modalContainer.classList.remove(`is-open`);
             modalImgRef.src = ``;
    modalImgRef.alt = ``;   
    }
}

// function onSliderModal(event) {
//     console.log(event.code);
//     if (event.code === `ArrowRight`) {
//         modalImgRef = .nextElementSibling;
//     }
// }