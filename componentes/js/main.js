// DATA
let grupoTarjetas1 = ["ð","ð","ð","ð","ð","ð","ð","ð¥­","ð","ð","ð","ð"];
let grupoTarjetas2 = ["ð","ð","ð","ð","ð","ð","ð","ð¥­","ð","ð","ð","ð"];

// Union de las dos listas
let todasLasTajetas = grupoTarjetas1.concat(grupoTarjetas2);

// Organizar la nueva lista de forma aleatoria
function tarjetasVarajadas(){
    let resultado;
    resultado = todasLasTajetas.sort(function(){
        return 0.5 - Math.random();
    });
    return resultado;
}



function crearTarjetas (){
    let root = document.querySelector("#root");
    
    todasLasTajetas.forEach(function(fruta, indice){ 
        // COMPONENTE
        let tarjeta = document.createElement("div");


        tarjeta.innerHTML = 
        '<div id="tarjeta" class="tarjeta">'+
            '<div class="contenido">' + 
            fruta +
            '</div>'+
        '</div>'    

        // colocar en el DOM
        root.appendChild(tarjeta);
     });
}
crearTarjetas();


// LEVANTANDO CARTAS

let elementos_del_dom = document.querySelectorAll(".tarjeta");

// FUNCIÃN DESCUBRIR CARTAS
function descubrir(){
    this.classList.add("activo");
}


elementos_del_dom.forEach(function(elemento_del_dom){    
    elemento_del_dom.addEventListener("click",descubrir);

});
