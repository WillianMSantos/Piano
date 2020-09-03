//Pegar todas as teclas
const keys = document.querySelectorAll(".key");

//Play notes
function playNote(event){
    //key code
    let audioKeyCode = getKeyCode(event);
    //tecla pressionada
    const key = document.querySelector(`.key[data-key = "${audioKeyCode}"]`)
    //if key exist(validar)
    const cantFoundAnyKey = !key;


    if(cantFoundAnyKey){ //se a tecla nao existe
        return;
    }

    //Play Audio (produzir audio)
    const audio = document.querySelector(`audio[data-key = "${audioKeyCode}"]`)
    audio.correntTime = 0;
    audio.play()
}

function getKeyCode(event){
    let keyCode;

    const isKeyboard = event.type == "keydown"

    if(isKeyboard){
        keyCode = event.keyCode;//Teclado
    }else{
        keyCode = event.target.dataset.key; //Mouse
    }

    return keyCode;
}

//click whit mouse (quando pelo mouse)
keys.forEach(function(key){
    key.addEventListener("click", playNote)

});

//keyboard type(pelo teclado)
window.addEventListener("keydown", playNote)