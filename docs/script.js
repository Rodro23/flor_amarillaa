window.onload = init;
var petalos;
var Flor_amarilla;
var valores;

function init(){
	petalos = document.getElementsByClassName("petalo");
	asignarEvento();
  Flor_amarilla = document.getElementById("Floramarilla");
  Flor_amarilla.addEventListener("click",abrirJuego);
}
function asignarValores(){
  var numero_aleatorio = Math.round(Math.random()*10);
  var moneda = numero_aleatorio > 5;
  valores = [];
  for(var i=0;i<petalos.length;i++)
	{
    valores[i] = moneda;
    moneda = !moneda;
  }
}
function abrirJuego(){
  var ventana_actual = document.getElementById("intro");
  var ventana_juego = document.getElementById("juego");
  ventana_actual.className = "hidden";
  ventana_juego.className = "animated fadeIn";
  asignarValores();
}
function asignarEvento(){
	for(var i=0;i<petalos.length;i++)
	{
		petalos[i].addEventListener("click",animar);
	}
}
function colorAleatorio(){
  var r = Math.round(Math.random()*255);
  var g = Math.round(Math.random()*255);
  var b = Math.round(Math.random()*255);
  return "rgb("+r+","+g+","+b+")";
}
function animar(event){
  var id_petalo = event.target.id;
  var petalo = document.getElementById(""+id_petalo);
  //petalo.style.backgroundColor = colorAleatorio(); 
  petalo.className = "petalo animated fadeOutDown";
  validarJugada(id_petalo);
}

function validarJugada(petalo){
  var indice = parseInt(petalo.substr(5));
  var str;
  
  if(valores[indice-5])
  {
    str = "Que hiciste salamina!!";
  
  }
  else
  {
    str = "Que hiciste salamina!!";
  
  }
  //alert(mensaje);
  texto_mensaje.innerHTML = str;
  mensaje.className = "mostrar animated fadeIn";
  setTimeout(()=>{
    mensaje.className = "hidden";
  },1000);
}
/*window.onload = init;
var petalos;
var contador;

function init(){
	var boton = document.getElementById("boton");
	boton.addEventListener("click",animar);
	contador = 0;
	petalos =         document.getElementsByClassName("petalo");
}

function animar(){
	if(contador+1<=petalos.length)
	{
		petalos[contador].className = "petalo animated bounce infinite";
		contador = contador+1;
	}
}*/