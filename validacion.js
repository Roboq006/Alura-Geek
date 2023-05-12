//VALIDAR NOMBRE
const CampoNombre = document.querySelector("[name=nombre]");
const campo01 = document.querySelector("#campo01");

// CampoNombre.addEventListener("blur", function(){
//     console.log("verficar blur")
// });

const ValidarNombre = (e) => {
    const ValorCampo = e.target.value;
    if (ValorCampo.length===0){
        campo01.textContent = "***Campo no puede estar vacio";
    }
    else{ 
        campo01.textContent="";
}

};
CampoNombre.addEventListener("blur", ValidarNombre);

//*********************enter */

const Nextcampo = document.querySelector("[name=mensaje]");
const Entercampo = (e) =>{

    if(e.keyCode ==13){
        e.preventDefault();
        Nextcampo.focus();
    }
}

CampoNombre.addEventListener("keydown", Entercampo);


//************************************** */
//VALIDAR MENSAJE

const CampoMensaje = document.querySelector("[name=mensaje]");
const campo02 = document.querySelector("#campo02");

const ValidarMensaje = (e) =>{

    const MensajeCampo = e.target.value;
    if(MensajeCampo.length==0){
        campo02.textContent = "***Llenar campo";
    }
    else{
        campo02.textContent= "";

    }

}

CampoMensaje.addEventListener("blur",ValidarMensaje);

//*********************enter */

const Nextcamp = document.querySelector("[name=boton]");
const Entermensaje = (e) =>{

    if(e.keyCode==13){
        e.preventDefault();
        Nextcamp.focus();

    }
   

}

CampoMensaje.addEventListener("keydown",Entermensaje);

