/**
Organización de Código JS
  librerías/módulos
  constantes
  objetos/variables
  funciones
  eventos
  ejecuciones

Usar camelCase
  Cuando la instrucción tenga una sola palabra, va en minúsculas p.e require()
  Solo las clases rompen esta regla, siempre va en mayúscula la letra inicial p.e EventEmitter()
  Cuando una instrucción tenga 2 o más palabras, a partir de la segunda la primera letra va en mayúscula p.e. createServer()
 */
'use strict'

console.log('Hola mundo desde Node.js, esto se vera en la terminal de comandos')

console.log(2 + 5)

// console.log(window)

console.log(global)

setInterval(function () {
	console.log('Hola Node.js')
}, 1000)

// Ctrl + C detengo la ejecución de un script en la consola
