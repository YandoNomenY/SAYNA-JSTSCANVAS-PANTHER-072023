const enigme1 = document.getElementById('enigme1');// l'enigme numero 1
const enigme2 = document.getElementById('enigme2'); // l'enigme numero 2
const enigme3 = document.getElementById('enigme3');// l'enigme numero 3


// Vérification de la réponse des joueurs

const wup = document.getElementById("wup"); // le contenu du message de retour dans le popup (what's up)
const now = document.getElementById("now"); // le bouton du popup 
const answer = document.getElementById("answer");// la réponse du joueur
const popupcontainer = document.getElementById("popupcontainer"); // récupérer la div popup
const popup = document.getElementById("popup");

//envoie de la réponse donnée
const submit = document.getElementById('submit');
// Gestionnaire d'événement pour le clic sur une case à cocher

  
    submit.addEventListener('click', function begin () {
       // Récupérez la valeur dans la réponse
       const donatedValue = answer.value;

       // Récupérez le label de la case à cocher cochée
       const label = answer.parentNode;

       //  la bonne réponse 
       const bonneReponse = "SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS."; 

       
       if (donatedValue === bonneReponse) {
           enigme1.style.display = 'none';
           popup.style.marginLeft = '23vw';
           wup.innerHTML = "Bien jouer!";
           now.innerHTML = "SUIVANT";
           popupcontainer.style.display = 'block';
           now.addEventListener ('click', function () {
            popupcontainer.style.display = 'none';
            enigme2.style.display = 'block';
            enigme2.style.display = 'flex';
           })
       } else {
           enigme1.style.display = 'none';
           popup.style.marginLeft = '23vw';
           wup.innerHTML = "Désolé, c'est pas la bonne !";
           now.innerHTML = "RECOMMENCER";
           popupcontainer.style.display = 'block';
               now.addEventListener ('click', function () {
                   popupcontainer.style.display = 'none';
                   location.reload();
               });
       }
    

    });
  
const submit2 = document.getElementById ("submit2");
const answer2 = document.getElementById ('answer2');
const submit3 = document.getElementById ("submit3");

submit2.addEventListener('click', function eni2 () {
    // Récupérez la valeur dans la réponse
    const donatedValue = answer2.value;

    // Récupérez le label de la case à cocher cochée
    const label = answer.parentNode;

    //  la bonne réponse 
    const bonneReponse = "Je suis fier d'apprendre le chiffrement par César. Il m'est déjà arrivé de décoder des messages secrets en utilisant cette autre méthode très simple mais efficace."; 

    
    if (donatedValue === bonneReponse) {
        enigme2.style.display = 'none';
        popup.style.marginLeft = '23vw';
        wup.innerHTML = "Bien jouer!";
        now.innerHTML = "DERNIERE QUESTION";
        popupcontainer.style.display = 'block';
        now.addEventListener ('click', function () {
         popupcontainer.style.display = 'none';
         enigme3.style.display = 'block';
         enigme2.style.display = 'none';
         enigme3.style.display = 'flex';
        })
    } else {
        enigme2.style.display = 'none';
        popup.style.marginLeft = '23vw';
        wup.innerHTML = "Désolé, c'est pas la bonne !";
        now.innerHTML = "RECOMMENCER";
        popupcontainer.style.display = 'block';
            now.addEventListener ('click', function () {
                popupcontainer.style.display = 'none';
                enigme2.style.display = 'block';
                enigme2.style.display = 'flex';
                    submit2.addEventListener('click', function () {
                        eni2 ();
                    })
            });
    }
 

 });

   
const answer3 = document.getElementById ('answer3');



  
    submit3.addEventListener('click', function eni3 () {
       // Récupérez la valeur dans la réponse
       const donatedValue = answer3.value;

       // Récupérez le label de la case à cocher cochée
       const label = answer3.parentNode;

       //  la bonne réponse 
       const bonneReponse = "SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS."; 

       
       if (donatedValue === bonneReponse) {
           enigme3.style.display = 'none';
           popup.style.marginLeft = '23vw';
           wup.innerHTML = "TON INITIATION EST TERMINEE !";
           now.innerHTML = "RETOURNER A L'ACCUEIL";
           popupcontainer.style.display = 'block';
           now.addEventListener ('click', function () {
            Window.location.href = "../index.html";
           })
       } else {
           enigme1.style.display = 'none';
           popup.style.marginLeft = '23vw';
           wup.innerHTML = "Désolé, c'est pas la bonne !";
           now.innerHTML = "RECOMMENCER";
           popupcontainer.style.display = 'block';
           now.addEventListener ('click', function () {
            popupcontainer.style.display = 'none';
            enigme3.style.display = 'block';
            enigme3.style.display = 'flex';
                submit2.addEventListener('click', function () {
                    eni3 ();
                })
        });
       }
    

    });



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