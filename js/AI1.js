const barriba = document.getElementById('bt1');
const babajo = document.getElementById('bt2');
const bderecha = document.getElementById('bt3');
const bizquiera = document.getElementById('bt4');
const play = document.getElementById('bt');
const espacio = document.getElementById('espacio');
const trayectoria = document.getElementById('trayectoria');
const sutrayectoria = document.getElementById('sutrayectoria');
const resultado = document.getElementById('resultado');
const checar = document.getElementById('checar');
const replay = document.getElementById('replay');

// Se inicializa el lienzo, es importante ver que le llamamos b.
let b = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [0, 20, 20, 0], axis: false, showCopyright: false, showNavigation:false});

/* Trabajamos con las imagenes de la grid, el rat'on y el queso
   Nuestro grid, considerando el sistema coordenado, comienza en (2,2) y va de 4 en cuatro hasta (11,18), es decir 5 pasos del rat'on de tama;o 4.
   Asociamos el movimiento de un punto al movimiento del rat'on, para mover con mayor comodidad al punto y por defecto el rat'on esta bien colocado.
   Con respecto a la direcci[on del rat'on la cuidaremos en cada paso que de.
*/
let lagrid = b.create('image',['imagenes/reticula.png',[2,2],[16.5,16]],{fixed:true, opacity:1});

/* 
Vamos a intentar crear una clase Raton, que tenga como instancias ratones, aunque solo usemos uno, incluidos sus metodos y propiedades
En los m'etodos ya estamos pensando en los movimientos del rat'on, que simplemente ser'an pasos siguiendo la grid y cambio de direcci'on auxiliados de jsxgraph
Esta clase esta construida de forma tal que inicialmente el raton y el queso aparecen en posiciones aleatorias, se puede considerar como interface para que los alumnos ejerciten sus algoritmos
En principio con esta clase podemos adaptar ya diversos escenarios del mismo problema del raton y el queso: por ejemplo, con otras grid.
*/


// Creamos el raton para esta reticula, en orden los términos indican:
// 1,2: posici'on inicial del rat'on en la reticula. Ahora las posiciones son random, fueron borradas.
// 3,4: cantidad de unidades por paso en x y por paso en y respectivamente. Tomar en cuenta que se considera un cuadrado de jsxgraph de (2,2) y (18,18).
// 5,6: el largo y el ancho de nuestra grid, respectivamente para x y para y.
// 7: es un valor booleano que me indica si se ve o no se ve el raton cuando este se mueve.
// 8: indicamos la ruta de la malla.
let raton1 = new Raton(4,4,16,16,true,"imagenes/reticula.png");


//Eventos y salida en pantalla del algoritmo seguido por el raton
play.addEventListener('click',()=>raton1.crearRaton());
botonarriba = barriba.addEventListener('click',
    function(){
        raton1.moverarr(); 
        trayectoria.innerHTML+='A'});
bderecha.addEventListener('click',
    function(){
        raton1.moverder(); 
        trayectoria.innerHTML+='D'});
babajo.addEventListener('click',
    function(){
        raton1.moveraba(); 
        trayectoria.innerHTML+='B'});
bizquiera.addEventListener('click',
    function(){
        raton1.moverizq(); 
        trayectoria.innerHTML+='I'});
barriba.addEventListener('mousedown',()=>raton1.borrarPasos());
bderecha.addEventListener('mousedown',()=>raton1.borrarPasos());
babajo.addEventListener('mousedown',()=>raton1.borrarPasos());
bizquiera.addEventListener('mousedown',()=>raton1.borrarPasos());


//Función que lee el string que el alumno propone como algoritmo
function leerAlg() {
    let admitidas='ABDI';
    let Alg = sutrayectoria.value.trim().toUpperCase(); //Evita el espacio antes y despues de la cadena, convirtiendo todo a mayusculas sin importar que tipo sea, ya que no sabemos 
    // si los niños pueden introducir mayusculas.
    // Filtramos toda la cadena para ver si tiene solamente las palabras ABDI
    for (let i = 0; i < Alg.length; i++) {
        if (admitidas.indexOf(Alg.charAt(i)) != -1){
            continue    // Si todo ok, sale del ciclo y continua.
        } else {        // Si hay alguna letra que no esta admitida obliga a refrescar la pagina con un alert
            if (window.confirm("DEBE INTRODUCIR SOLAMENTE LAS LETRAS 'ABDI'")) {
                location.reload(true);
            } else {
                location.reload(true);
            }
            break
        }
    }
    // Hacemos el arreglo de instrucciones del algoritmo
    let arrAlg=Alg.split('');
    //console.log(arrAlg);

    // Vamos a crear 4 promesas que cuando se resuelven nos generan el paso del raton
    const promesa = new Promise((resolve) => {
        for (const comando in arrAlg) {
        setTimeout(
                       () => {
                            //La funcion que se ejecuta despues de determinado tiempo es verificar si ese comando en turno coincide con alguna de las 4 instrucciones 
                            //y se resolvera haciendo el movimiento del raton.
                            if (arrAlg[comando]==='A') {
                                resolve(raton1.moverarr());
                            }
                        }
                        ,comando*2000
        );
        }
    });

    const promesa2 = new Promise((resolve) => {
        for (const comando in arrAlg) {
        setTimeout(
                       () => {
                        
                            if (arrAlg[comando]==='B') {
                                resolve(raton1.moveraba());
                            }
                       }
                       ,comando*2000
        );
        }
    });

    const promesa3 = new Promise((resolve) => {
        for (const comando in arrAlg) {
        setTimeout(
                       () => {
                        
                            if (arrAlg[comando]==='D') {
                                resolve(raton1.moverder());
                            }
                       }
                       ,comando*2000
        );
        }
    });

    const promesa4 = new Promise((resolve) => {
        for (const comando in arrAlg) {
        setTimeout(
                       () => {
                        
                            if (arrAlg[comando]==='I') {
                                resolve(raton1.moverizq());
                            }
                       }
                       ,comando*2000
        );
        }
    });
    // En la promesa consideramos un ciclo para cada elemento del arreglo y cuando se resuelve la promesa llamamos la accion con promesa.then().
    promesa.then();
    promesa2.then();
    promesa3.then();
    promesa4.then();

}
checar.addEventListener('click',leerAlg);
replay.addEventListener('click',()=>{location.reload()});



