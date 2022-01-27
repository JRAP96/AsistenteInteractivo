const barriba = document.getElementById('bt1');
const babajo = document.getElementById('bt2');
const bderecha = document.getElementById('bt3');
const bizquiera = document.getElementById('bt4');
const play = document.getElementById('bt');
const espacio = document.getElementById('espacio');
const trayectoria = document.getElementById('trayectoria');
const replay = document.getElementById('replay');
const resultado = document.getElementById('resultado');
const V1 = document.getElementById('V1');
const V2 = document.getElementById('V2');
const V3 = document.getElementById('V3');
const res = document.getElementById('res');
const veri1 = document.getElementById('veri1');
const res2 = document.getElementById('res2');
const veri2 = document.getElementById('veri2');
const V13 = document.getElementById('V13');
const V23 = document.getElementById('V23');
const V33 = document.getElementById('V33');
const veri3 = document.getElementById('veri3');
const res3 = document.getElementById('res3');

// Se inicializa el lienzo, es importante ver que le llamamos b.
let b = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [0, 20, 20, 0], axis: false, showCopyright: false, showNavigation:false});
// Creamos la malla con la imagen ajustando al cuadrado original (2,2) y (18,18).
let lagrid = b.create('image',['imagenes/gridones.png',[2,2],[16.5,16]],{fixed:true, opacity:1});

// Creamos el raton para esta reticula, en orden los términos indican:
// 1,2: posici'on inicial del rat'on en la reticula. Ahora las posiciones son random, fueron borradas.
// 3,4: cantidad de unidades por paso en x y por paso en y respectivamente. Tomar en cuenta que se considera un cuadrado de jsxgraph de (2,2) y (18,18).
// Para este caso los pasos se especifican de 8 para que solo de 2 por lado.
// 5,6: el largo y el ancho de nuestra grid, respectivamente para x y para y.
// 7: es un valor booleano que me indica si se ve o no se ve el raton cuando este se mueve.
// 8: A modo de string se debe meter la direccion de la imagen que sirve como malla.
let raton1 = new Raton(2,8,16,16,true,'imagenes/gridones.png');
// variable de conteo de pasos
let pasoTotal = 0;
// variable de conteo de pasos cortos
let pasoCorto = 0;

//Eventos y salida en pantalla del algoritmo seguido por el raton
//Se incluye un if que nos indica si se ha alcanzado el queso y en ese momento salen medios aleatorios valores de pasos que ha dado el raton.
//Se llama con un evento de boton la verificacion de si es correcta la seleccion o no, todo esto cuando se ha alcanzado el queso, sino se saca letrero de que no se ha alcanzado.
//Tambien se incluye un conteo de pasos cortos, solo para D e I y verificacion de opcion elegida con el IF del evento veri3
play.addEventListener('click',()=>raton1.crearRaton());
barriba.addEventListener('click',
    function(){
        raton1.moverarr(); 
        trayectoria.innerHTML+='A';
        pasoTotal++;
        if(Math.abs(raton1.pRxpRy[0]-raton1.pQxpQy[0])<=1 && Math.abs(raton1.pRxpRy[1]-raton1.pQxpQy[1])<=1){
            let erroneo1 = pasoTotal-1;
            let erroneo2 = pasoTotal+1;
            let erroneo13 = pasoCorto-2;
            let erroneo23 = pasoCorto+2;
            V1.innerText=`${erroneo1}`;
            V2.innerText=`${pasoTotal}`;
            V3.innerText=`${erroneo2}`;
            V13.innerText=`${pasoCorto}`;
            V23.innerText=`${erroneo13}`;
            V33.innerText=`${erroneo23}`;
                veri1.addEventListener('click',()=> {
                    if(document.getElementById('uno').checked) {
                        res.innerText=`Erroneo, piense en otro`;
                        return
                        }else if(document.getElementById('dos').checked) {
                            res.innerText=`Correcto ha dado ${pasoTotal} pasos`;
                            return
                        }else if (document.getElementById('tres').checked) {
                            res.innerText=`Erroneo, piense en otro`;
                            return
                        }
                });
                veri3.addEventListener('click',()=> {
                    if(document.getElementById('uno3').checked) {
                        res3.innerText=`Correcto ha dado ${pasoCorto} pasos cortos`;
                        return
                        }else if(document.getElementById('dos3').checked) {
                            res3.innerText=`Erroneo, piense en otro`;
                            return
                        }else if (document.getElementById('tres3').checked) {
                            res3.innerText=`Erroneo, piense en otro`;
                            return
                        }
                });
        }
        else {
            resultado.innerText=`Aún no llega al queso...`;
        }
    });
bderecha.addEventListener('click',
    function(){
        raton1.moverder(); 
        trayectoria.innerHTML+='D';
        pasoTotal++;
        pasoCorto++;
        if(Math.abs(raton1.pRxpRy[0]-raton1.pQxpQy[0])<=1 && Math.abs(raton1.pRxpRy[1]-raton1.pQxpQy[1])<=1){
            let erroneo1 = pasoTotal-2;
            let erroneo2 = pasoTotal+2;
            let erroneo13 = pasoCorto-2;
            let erroneo23 = pasoCorto+2;
            V1.innerText=`${erroneo1}`;
            V2.innerText=`${erroneo2}`;
            V3.innerText=`${pasoTotal}`;
            V13.innerText=`${erroneo13}`;
            V23.innerText=`${pasoCorto}`;
            V33.innerText=`${erroneo23}`;
                veri1.addEventListener('click',()=> {
                    if(document.getElementById('uno').checked) {
                        res.innerText=`Erroneo, piense en otro`;
                        return
                        }else if(document.getElementById('dos').checked) {
                            res.innerText=`Erroneo, piense en otro`;
                            return
                        }else if (document.getElementById('tres').checked) {
                            res.innerText=`Correcto ha dado ${pasoTotal} pasos`;
                            return
                        }
                });
                veri3.addEventListener('click',()=> {
                    if(document.getElementById('uno3').checked) {
                        res3.innerText=`Erroneo, piense en otro`;
                        return
                        }else if(document.getElementById('dos3').checked) {
                            res3.innerText=`Correcto ha dado ${pasoCorto} pasos cortos`;
                            return
                        }else if (document.getElementById('tres3').checked) {
                            res3.innerText=`Erroneo, piense en otro`;
                            return
                        }
                });
        }
        else {
            resultado.innerText=`Aún no llega al queso...`;
        }
    });
babajo.addEventListener('click',
    function(){
        raton1.moveraba(); 
        trayectoria.innerHTML+='B';
        pasoTotal++;
        if(Math.abs(raton1.pRxpRy[0]-raton1.pQxpQy[0])<=1 && Math.abs(raton1.pRxpRy[1]-raton1.pQxpQy[1])<=1){
            let erroneo1 = pasoTotal-1;
            let erroneo2 = pasoTotal+1;
            let erroneo13 = pasoCorto-2;
            let erroneo23 = pasoCorto+2;
            V1.innerText=`${pasoTotal}`;
            V2.innerText=`${erroneo2}`;
            V3.innerText=`${erroneo1}`;
            V13.innerText=`${erroneo23}`;
            V23.innerText=`${pasoCorto}`;
            V33.innerText=`${erroneo13}`;
                veri1.addEventListener('click',()=> {
                    if(document.getElementById('uno').checked) {
                        res.innerText=`Correcto ha dado ${pasoTotal} pasos`;
                        return
                        }else if(document.getElementById('dos').checked) {
                            res.innerText=`Erroneo, piense en otro`;
                            return
                        }else if (document.getElementById('tres').checked) {
                            res.innerText=`Erroneo, piense en otro`;
                            return
                        }
                });
                veri3.addEventListener('click',()=> {
                    if(document.getElementById('uno3').checked) {
                        res3.innerText=`Erroneo, piense en otro`;
                        return
                        }else if(document.getElementById('dos3').checked) {
                            res3.innerText=`Correcto ha dado ${pasoCorto} pasos cortos`;
                            return
                        }else if (document.getElementById('tres3').checked) {
                            res3.innerText=`Erroneo, piense en otro`;
                            return
                        }
                });
        }
        else {
            resultado.innerText=`Aún no llega al queso...`;
        }
    });
bizquiera.addEventListener('click',
    function(){
        raton1.moverizq(); 
        trayectoria.innerHTML+='I';
        pasoTotal++;
        pasoCorto++;
        if(Math.abs(raton1.pRxpRy[0]-raton1.pQxpQy[0])<=1 && Math.abs(raton1.pRxpRy[1]-raton1.pQxpQy[1])<=1){
            let erroneo1 = pasoTotal-2;
            let erroneo2 = pasoTotal+2;
            let erroneo13 = pasoCorto-2;
            let erroneo23 = pasoCorto+2;
            V1.innerText=`${erroneo1}`;
            V2.innerText=`${pasoTotal}`;
            V3.innerText=`${erroneo2}`;
            V13.innerText=`${erroneo13}`;
            V23.innerText=`${erroneo23}`;
            V33.innerText=`${pasoCorto}`;
                veri1.addEventListener('click',()=> {
                    if(document.getElementById('uno').checked) {
                        res.innerText=`Erroneo, piense en otro`;
                        return
                        }else if(document.getElementById('dos').checked) {
                            res.innerText=`Correcto ha dado ${pasoTotal} pasos`;
                            return
                        }else if (document.getElementById('tres').checked) {
                            res.innerText=`Erroneo, piense en otro`;
                            return
                        }
                });
                veri3.addEventListener('click',()=> {
                    if(document.getElementById('uno3').checked) {
                        res3.innerText=`Erroneo, piense en otro`;
                        return
                        }else if(document.getElementById('dos3').checked) {
                            res3.innerText=`Erroneo, piense en otro`;
                            return
                        }else if (document.getElementById('tres3').checked) {
                            res3.innerText=`Correcto ha dado ${pasoCorto} pasos cortos`;
                            return
                        }
                });
        }
        else {
            resultado.innerText=`Aún no llega al queso...`;
        }
    });


// Verificador de la pregunta de que tipo de pasos son
veri2.addEventListener('click',()=> {
        if(document.getElementById('bueno').checked) {
            res2.innerText=`Correcto, A y B son pasos largos`;
            return
            }else if(document.getElementById('erroneo').checked) {
                res2.innerText=`Erroneo, D e I son pasos cortos`;
                return
            }
});

// Borramos los pasos del raton que por defecto se quedan.
barriba.addEventListener('mousedown',()=>raton1.borrarPasos());
bderecha.addEventListener('mousedown',()=>raton1.borrarPasos());
babajo.addEventListener('mousedown',()=>raton1.borrarPasos());
bizquiera.addEventListener('mousedown',()=>raton1.borrarPasos());

replay.addEventListener('click',()=>{location.reload()});

