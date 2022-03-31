// Single Thread
/*
process module is the global object that allows to access to anywhere
*/
/*
Process
#

Source Code: lib/process.js

The process object is a global that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using require(). It can also be explicitly accessed using require():

const process = require('process');

Process events
#

The process object is an instance of EventEmitter.
*/
'use strict'

function singleThread() {
	// each thing that I want to aggregate to the single thread of the node process, I can execute them in the method 'process'

	// I can send more arguments
	//
	process.argv[2] = 'Estamos aprendiendo Node.js'
	process.argv[3] = 19
	process.argv[4] = null
	process.argv[5] = true

	// by each line of code it's printing an element
	// position 0 - Executable of node
	// position 1 - File executed
	// position 2 - aggregated text chain
	// position 3 - number
	// position 4 - null
	// position 5 - boolean true
	/*
	/usr/local/bin/node
	/Users/migueldominguezsanchez/Desktop/MiguelDominguez_SeedTag/Courses_Tackled/Courses/Node/jonmircha/nodejs/01ModulosCore/01-single-thread.js
	Estamos aprendiendo Node.js
	19
	null
	true
	*/

	console.log('-------------------------------------------- ----')
	console.log('               EL PROCESO DE NODE.JS             ')
	console.log('Id del proceso ................... ' + process.pid)
	console.log('Título ........................... ' + process.title)
	console.log('Dirección de Node ................ ' + process.execPath)
	console.log('Dirección Actual ................. ' + process.cwd())
	console.log('Versión de Node .................. ' + process.version)
	console.log('Versiones Dependencias ........... ' + process.versions)
	console.log('Plataforma (S.O.) ................ ' + process.platform)
	console.log('Arquitectura (S.O.) .............. ' + process.arch)
	console.log('Tiempo activo de Node ............ ' + process.uptime())
	console.log('Argumentos del proceso ........... ' + process.argv)
	console.log('-------------------------------------------- ----')

	/*
	console.log(
		// array
		// 0 position is the route where node id being executed
		process.argv[0],
		// 1 position is the file I am executing
		process.argv[1]
		)
		*/
	var key = 0
	// for in go through arrays || objects
	for (key in process.argv) {
		// if there are arguments in process.argv
		// print position key
		console.log(process.argv[key])
	}
}

singleThread()

/*
               EL PROCESO DE NODE.JS             
Id del proceso ................... 36745 // Single Thread Identifier
Título ........................... node
Dirección de Node ................ /usr/local/bin/node
Dirección Actual ................. /Users/migueldominguezsanchez/Desktop/MiguelDominguez_SeedTag/Courses_Tackled/Courses/Node/jonmircha/nodejs/01ModulosCore
Versión de Node .................. v14.15.5
Versiones Dependencias ........... [object Object]
Plataforma (S.O.) ................ darwin
Arquitectura (S.O.) .............. x64
Tiempo activo de Node ............ 0.214257923
Argumentos del proceso ........... /usr/local/bin/node,/Users/migueldominguezsanchez/Desktop/MiguelDominguez_SeedTag/Courses_Tackled/Courses/Node/jonmircha/nodejs/01ModulosCore/01-single-thread.js
-------------------------------------------- ----
*/

/*
///
console.log('Id del proceso ................... ' + process.pid)
/
Id del proceso ................... 36745
/
'process.pid' is the method that gives me the process id,
in other words the internal memory of node, each time I execute run a process,
it gives an id dynamically, for example, here it gave it the id 36745.

If I execute the file again, the id changes to another dynamic id,
it is very important, because, we will see it.
in production stage an node app.
But when we will build a node app in production.
We will have to manage actively that process,
and if after it, we will execute, reset, or stop, or come back, or ...
stop, modify some things, and we reinitialize.
It is very important that we know the process id,
each time that node runs an application, it will give a process id; and it is important, because we can access to the manipulation of the same process.
///
console.log('Título ........................... ' + process.title)
/
Título ........................... node
/
Accessing to process.title
process.title is practically the process title.
In this case it is not executed from a web browser, not from an application, but from the console, that's why it says 'node'
///
console.log('Dirección de Node ................ ' + process.execPath)
/
Dirección de Node ................ /usr/local/bin/node
/
This param 'execPath' is practically where node is executed innerly in my machine. Obviously, I have a mac platform, that's why it says above written
///
	console.log('Dirección Actual ................. ' + process.cwd())
/
Dirección Actual ................. /Users/migueldominguezsanchez/Desktop/MiguelDominguez_SeedTag/Courses_Tackled/Courses/Node/jonmircha/nodejs/01ModulosCore
/
*/

/*
Id del proceso ................... 36745 // Single Thread Identifier // The way of how its managing the request in a single thread, and as it is finalizing then in an asynchronous, it is returning them to the client who  is demanding them
In a single server, if you have the necessity of executing several node application, you can do it.
The id of process, it is the identifier of the single thread.
So we can have as many processes executing att the same point, as our app project needs is demanding.
Imaging we are running in the port 80 the website that is made of express, or maybe we have blog with 'ghost', which is a platform with node.js, and with that we have the official site of thee company, but innerly we manage an intranet, for the workers, and maybe that we launch it in the port 80:80, and also we have an exclusive intranet for the clients, and that we run it in  another port, ie port 3000. And three applications, both the intranet as the website are running in the same server, sharing resources, even sharing the database.
And each one is executed in a different process.
If I have to give maintenance, because I am going to register a new website version, but the intranets are not going to be affected. I stop the process of the website, but the intranets, both the clients and the workers, continued actives, in the mean time I did the updating of the website.
It is important this of the single thread.
Understand that we can launch as many process as we need in our server.
We talked about thee process that node has.
*/
