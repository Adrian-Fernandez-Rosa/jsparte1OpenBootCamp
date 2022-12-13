
//Jquery

// $(selector).accion()

// document ready se ejecuta cuando se
// termine de cargar todo el documento
$(document).ready(() => {
    // Selectores 
    // id= # 
    // class="el-1" => .el-1
   // $("#el-1").hide();

   $(".hide-btn").click(() => {
   // console.log("Ocultando boton");
      //  $("h1").hide();
    $("h1").fadeOut()

   })

   $(".show-btn").click(() => {
      //  $("h1").show()
      $("h1").fadeIn()
   })

   $("li").dblclick(() => { //doble click
    $("h1").css({ color: "red"})
   })

   $(".new-element").click(() =>{
   // $("ul").append("<li>New Element</li>")
   // Si quisieramos ponerlo al principio.

   $("ul").prepend("<li>New Element</li>")
   })

   $("li").mouseenter((elem) => {
    elem.target.style.color = "blue";
   })

   $("li").mouseleave(elem => {
    elem.target.style.color = "black";
   })

})