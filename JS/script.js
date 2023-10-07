// Apparition depuis le bas du formulaire
const downup = document.querySelectorAll('#downup');

function checkElementsInView() {
  
       const elementTop = downup.getBoundingClientRect().top;
       const windowHeight = window.innerHeight;

       if (elementTop < windowHeight) {
        downup.classList.add('visible');
       } else {
        downup.classList.remove('visible');
       }
  
}
window.addEventListener('scroll', checkElementsInView);
window.addEventListener('resize', checkElementsInView);

window.addEventListener('load', checkElementsInView);

// Animation fade in 
const elementsToAnimate = document.querySelectorAll('.fade-left');

function checkElementsInView() {
   elementsToAnimate.forEach((element) => {
       const elementTop = element.getBoundingClientRect().top;
       const windowHeight = window.innerHeight;

       if (elementTop < windowHeight) {
           element.classList.add('visible');
       } else {
           element.classList.remove('visible');
       }
   });
}

window.addEventListener('scroll', checkElementsInView);
window.addEventListener('resize', checkElementsInView);

window.addEventListener('load', checkElementsInView);




