
let palabra0; 
let palabra;

const API = 'https://random-word-api.herokuapp.com/word?length=5&lang=es';

async function fetchWord() {
  try {
    const response = await fetch(API);
    const data = await response.json();
    palabra0 = data[0];
    palabra = palabra0.toUpperCase();
    return palabra;
  } catch (error) {
    console.log(error);
  }
}

(async () => {
  await fetchWord();
  console.log(palabra); 
})();


  
  // Función para configurar y ejecutar los efectos
function triggerEffects() {
    // Configuración de fireworks
    $('div').fireworks({
        opacity: 0.9,
        width: '100%',
        height: '100%'
    });

    // Configuración de ScrollReveal.js para h1
    ScrollReveal().reveal('h1', {
        delay: 2000,
        duration: 2000,
        distance: '400%',
        origin: 'top',
        opacity: null
    });

    // Configuración de ScrollReveal.js para p
    ScrollReveal().reveal('p', {
        delay: 3000,
        duration: 3000,
        distance: '400%',
        origin: 'bottom',
        opacity: null
    });
}

let intentos = 6;
        let button = document.getElementById("guess-button");
        button.addEventListener("click", intentar);
        const remainingAttemps = document.getElementById("remaining-attempts");
            remainingAttemps.innerHTML=intentos;
       
    
      

        function leerIntento() {
            let intento = document.getElementById("guess-input").value;
            intento = intento.toUpperCase(); 
            remainingAttemps.innerHTML='';
            return intento;
        }

        function intentar() {
            const INTENTO = leerIntento();
            
            if (INTENTO.length !== 5) {
                alert("El intento debe tener exactamente 5 letras.");
                return;
            }
            
            const GRID = document.getElementById("grid");
            const ROW = document.createElement('div');
            ROW.className = 'row';
            
            for (let i in palabra) {
                const SPAN = document.createElement('span');
                SPAN.className = 'letter';
                
                if (INTENTO[i] === palabra[i]) { // VERDE
                    SPAN.innerHTML = INTENTO[i];
                    SPAN.style.backgroundColor = 'green';
                } else if (palabra.includes(INTENTO[i])) { // AMARILLO
                    SPAN.innerHTML = INTENTO[i];
                    SPAN.style.backgroundColor = 'yellow';
                } else { // GRIS
                    SPAN.innerHTML = INTENTO[i];
                    SPAN.style.backgroundColor = 'grey';
                }
                
                ROW.appendChild(SPAN);
                const restartButton = document.getElementById("restart-button");
                
                restartButton.style.display = 'block'; 
            }

            GRID.appendChild(ROW);
            intentos--;
            const remainingAttemps = document.getElementById("guesses");
            remainingAttemps.innerHTML=intentos;
            
            if (INTENTO === palabra) {
                terminar("<h1>¡GANASTE! 😀</h1>", true);
                return;
            }
        

            if (intentos === 0) {
                terminar(`<h1>PERDISTE! 😖</h1><p>La palabra era: ${palabra}</p>`);
            }
            document.getElementById("guess-input").value = '';
      

            function terminar(mensaje, ganaste) {
                const INPUT = document.getElementById("guess-input");
                const BOTON = document.getElementById("guess-button");
                
                INPUT.disabled = true;
                BOTON.disabled = true;
                let contenedor = document.getElementById('guesses');
                contenedor.innerHTML = mensaje;
            
                if (ganaste) {
                    const winMessage = document.getElementById("win-message");
                    winMessage.classList.remove("hidden");
                    triggerEffects();
                }
            }
            
        }
    function reiniciarJuego() {
        
        
        intentos = 6;
        const GRID = document.getElementById('grid');
        const remainingattempts = document.getElementById("remaining-attempts");
        document.getElementById("guess-input").value = '';
         GRID.innerHTML = ''; 
         let contenedor = document.getElementById('guesses');
         contenedor.innerHTML = '';

         fetchWord().then(() => {
            console.log('Palabra reiniciada:', palabra);
            const INPUT = document.getElementById("guess-input");
           INPUT.disabled=false;
           const BOTON = document.getElementById("guess-button");
           BOTON.disabled = false;
           remainingAttemps.innerHTML=intentos;
          });
          const restartButton = document.getElementById("restart-button");
             restartButton.style.display = 'none'
             const winMessage = document.getElementById("win-message");
                winMessage.classList.add("hidden");
          
        }
             
      
      
      
      document.getElementById("restart-button").addEventListener("click", reiniciarJuego);
      document.getElementById("win-restart-button").addEventListener("click", reiniciarJuego);
new Vivus(
  'my-svg',
  {
    type: 'delayed',
    duration: 200,
    animTimingFunction: Vivus.EASE
    
  }, 
  
);
        document.addEventListener('DOMContentLoaded', () => {
            const svgElement = document.getElementById('my-svg');
          
            if (!svgElement) {
              console.error('Element with ID "my-svg" not found.');
              return;
            }
          
            const animateSVG = () => {
              new Vivus('my-svg', {
                type: 'delayed',
                duration: 200,
                animTimingFunction: Vivus.EASE,
              }, () => {
                svgElement.classList.add('finished'); 
                setTimeout(() => {
                  svgElement.classList.remove('finished');
                  animateSVG(); 
                }, 2000); 
              });
            };
          
            animateSVG();
          });
 