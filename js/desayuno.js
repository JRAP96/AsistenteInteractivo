const barriba = document.getElementById('bt1');
const babajo = document.getElementById('bt2');
const bderecha = document.getElementById('bt3');
const bizquiera = document.getElementById('bt4');
const play = document.getElementById('bt');
const espacio = document.getElementById('espacio');
const trayectoria = document.getElementById('trayectoria');
const replay = document.getElementById('replay');
const resultado = document.getElementById('resultado');

// Se inicializa el lienzo, es importante ver que le llamamos b.
let b = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [0, 20, 20, 0], axis: false, showCopyright: false, showNavigation:false});
// Creamos la malla con la imagen ajustando al cuadrado original (2,2) y (18,18).
let lagrid = b.create('image',['imagenes/malla3x3.jpg',[2,2],[16.5,16]],{fixed:true, opacity:1});


// Creamos el raton para esta reticula, en orden los términos indican:
// 1,2: posici'on inicial del rat'on en la reticula. Ahora las posiciones son random, fueron borradas.
// 3,4: cantidad de unidades por paso en x y por paso en y respectivamente. Tomar en cuenta que se considera un cuadrado de jsxgraph de (2,2) y (18,18).
// Para este caso los pasos se especifican de 8 para que solo de 2 por lado.
// 5,6: el largo y el ancho de nuestra grid, respectivamente para x y para y.
// 7: es un valor booleano que me indica si se ve o no se ve el raton cuando este se mueve.
// 8: A modo de string se debe meter la direccion de la imagen que sirve como malla.
let raton1 = new Raton(8,8,16,16,true,'imagenes/malla3x3.jpg');

//Eventos y salida en pantalla del algoritmo seguido por el raton
play.addEventListener('click',()=>raton1.crearRaton());
barriba.addEventListener('click',
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

replay.addEventListener('click',()=>{location.reload()});