console.log("afficher");

const icone = document.querySelector('i');
const button = document.querySelector('button');
console.log(icone,button);

icone.addEventListener('click',()=>{
    icone.classList.toggle ('fa-face-smile');
    icone.classList.add ('smile');
    icone.classList.toggle ('fa-face-meh-blank');
    
});

 button.addEventListener('click',()=>{
     console.log('btn cliquée');
     button.classList.toggle ('Abonné(e)');
     button.classList.add('Abonné');
    
     button.classList.toggle ('Abonnez-vous!');
    
     if (button.innerText ==='Abonné(e)') {
        button.innerText = 'Abonnez-vous!';
     } else {
        button.innerText = 'Abonné(e)';
     }
    
 })
