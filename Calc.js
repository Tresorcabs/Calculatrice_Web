const info = document.querySelector("info")
const allbtn = document.querySelectorAll("input[type='button']")

function val(resultat){
 form.fenetre.value = form.fenetre.value + resultat
}

function calcul(){
    if(form.fenetre.value == ""){
        info.innerText = "Veuillez écrire un chiffre";
        allbtn.forEach(btns =>{
            btns.addEventListener("click", function(){
                info.innerText = ""
            })
        })
    }
    else{
        form.fenetre.value = eval(form.fenetre.value)
    }
}

function suppr(){
    form.fenetre.value = ""
}