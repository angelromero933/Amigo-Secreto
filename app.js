// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const d = document,
  $amigo = d.getElementById("amigo"),
  $lugar = d.getElementById("listaAmigos"),
  $resultado = d.getElementById("resultado");

function agregarAmigo() {
  if (validarAmigo($amigo.value)) {
    amigos.push($amigo.value);
    console.log(amigos);
  }
  $amigo.value = "";
  actualizarAmigos(amigos);
}


function validarAmigo(amigo) {
  let regNum = /[0-9]/;
  let regEspeciales = /[!@#$%^&*()\-=+\\|[\]{};:/?.<>]/;
  if (!amigo) {
    alert("Por favor, inserte un nombre")
    console.warn("campo vacio ingresado, ingrese un nombre valido");
    return false;
  } else if (amigo.match(regNum)) {
    console.warn("contiene numeros, ingrese un nombre valido");
    return false;
  } else if (amigo.match(regEspeciales)) {
    console.warn("contiene caracteres especiales, ingrese un nombre valido");
    return false;
  }

  return true;
}

function actualizarAmigos(amigos) {
  let $lista = "";
  amigos.forEach(amigo => {
    $lista += `<li>${amigo}</li>`;
  });
  $lugar.innerHTML = $lista;
}

function sortearAmigo() {
  if (!amigos || amigos.length === 0)
    console.warn("Lista de amigos a sortear vacia");

  let indice, ganador;

  indice = Math.floor(Math.random() * amigos.length);
  ganador = amigos[indice];

  $resultado.innerHTML = `¡El ganador es: ${ganador}! 🎉`;
}