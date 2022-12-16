
const parrafos = document.querySelectorAll(".parrafo");

const secciones = document.querySelectorAll(".seccion");

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Inicio de arrastre");
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText);

        //agregamos clase dragging 
        parrafo.classList.add("dragging");

        event.dataTransfer.setData("id", parrafo.id);
        //
        const elemento_fantasma = document.querySelector(".imagen_fantasma");
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0);
    })

    parrafo.addEventListener("dragend", () => {
        console.log("He terminado de arrastrar");
        parrafo.classList.remove("dragging");
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", (e) => {
        e.preventDefault() 
        //prevemimos el comportamiento por defecto ya que sino no se puede usar el evento drop luego
       // console.log("Drag over")
       e.dataTransfer.dropEffect ="copy";
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id");
        console.log("Párrafo id: ", id_parrafo);
        const parrafo = document.getElementById(id_parrafo);

       if(seccion.classList.contains('papelera')){
        parrafo.remove()
       }else{

        seccion.appendChild(parrafo);
    }
        
    })
})

    const papelera = document.querySelector("#papelera");

    papelera.addEventListener("drop", e => {
        const id_parrafo = e.dataTransfer.getData("id");
        console.log("Párrafo id: ", id_parrafo);
        const parrafo = document.getElementById(id_parrafo);
        parrafo.remove;
    })