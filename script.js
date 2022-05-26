let inputText = document.querySelector("#input-text");
let mensaje = document.querySelector(".textArea");
let avisoUsuario = document.querySelector(".sinTextoEncriptado");
let btnCopiar = document.querySelector(".boton-copiar");

// funcion para que el btn encriptar encripte o capture la funcion encriptar
function btnEncriptar() {
	const textoEncriptado = encriptar(inputText.value);
	mensaje.value = textoEncriptado;
}

function encriptar(textoParaEncriptar) {
	let matrizCodigo = [
		["e", "enter"],
		["i", "imes"],
		["a", "ai"],
		["o", "ober"],
		["u", "ufat"],
	];
	textoParaEncriptar = textoParaEncriptar.toLowerCase();
	for (let i = 0; i < matrizCodigo.length; i++) {
		if (textoParaEncriptar.includes(matrizCodigo[i][0])) {
			textoParaEncriptar = textoParaEncriptar.replaceAll(
				matrizCodigo[i][0],
				matrizCodigo[i][1]
			);
			avisoUsuario.style.display = "none";
			mensaje.style.display = "block";
		}
	}

	return textoParaEncriptar;
}

// funcion para que el btn desencriptar desencripte o capture la funcion desencriptar
function btnDesencriptar() {
	const textoDesencriptado = desencriptar(inputText.value);
	mensaje.value = textoDesencriptado;
	inputText.value = " ";
}
// funcion para desencriptar el texto
function desencriptar(texto) {
	let matrizCodigo = [
		["enter", "e"],
		["imes", "i"],
		["ai", "a"],
		["ober", "o"],
		["ufat", "u"],
	];
	texto = texto.toLowerCase();
	for (let i = 0; i < matrizCodigo.length; i++) {
		if (texto.includes(matrizCodigo[i][0])) {
			texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

			mensaje.style.display = "block";
		}
	}
	return texto;
}

function copiarTexto() {
	let texto = document.getElementById("texto-encriptado").value;
	document.getElementById("input-text").value = texto;
	document.getElementById("texto-encriptado").value = " ";
}
