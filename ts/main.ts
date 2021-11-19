
import {displayProducts} from "../ts/clothes";
displayProducts();


    let slideIndex = 0;

function slideShow(){
    const slides = document.querySelectorAll('#slides img')!;
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].className = 'hidden';
    }
    slides[slideIndex].className = '';
    slideIndex++;
    
    if (slideIndex > slides.length - 1){
        slideIndex = 0;
    }


    setTimeout(slideShow, 5000);
}
slideShow();
