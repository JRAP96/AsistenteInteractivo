class Raton{
    constructor(px,py,lx,ly,ver,malla){
        this.px=px;
        this.py=py;
        this.lx=lx;
        this.ly=ly;
        this.ver=ver;
        this.malla=malla;

        function random() {
            // funcion para hacer random las posiciones del queso de acuerdo con la grid
            // Hacemos dos listas con todas las intersecciones de nuestra grid
            let listax = [];
            let listay = [];
            for (let i = 0; i < lx/px+1; i++) {
                let sumando=2;
                let sumandos=sumando+px*i;
                listax.push(sumandos);
            }
            for (let j = 0; j < ly/py+1; j++) {
                let sumando=2;
                let sumandos=sumando+py*j;
                listay.push(sumandos);
            }
            // funcion que ordena una copia de los array de forma random en sintaxis simple del if
            let pQx = listax.slice().sort(()=>Math.random()>0.5 ? 1 : -1);
            let pQy = listay.slice().sort(()=>Math.random()>0.5 ? 1 : -1);
            
            // Elegimos solamente el valor de una entrada de los array para trabajar
            let pQxpQy=[pQx[0]-1,pQy[0]-1];
            return pQxpQy;
        }
        this.pQxpQy=random();

        function random2() {
            // funcion para hacer random las posiciones del queso de acuerdo con la grid
            // Hacemos dos listas con todas las intersecciones de nuestra grid
            let listax = [];
            let listay = [];
            for (let i = 0; i < lx/px+1; i++) {
                let sumando=2;
                let sumandos=sumando+px*i;
                listax.push(sumandos);
            }
            for (let j = 0; j < ly/py+1; j++) {
                let sumando=2;
                let sumandos=sumando+py*j;
                listay.push(sumandos);
            }
            // funcion que ordena una copia de los array de forma random
            let pRx = listax.slice().sort(()=>Math.random()>0.5 ? 1 : -1);
            let pRy = listay.slice().sort(()=>Math.random()>0.5 ? 1 : -1);
            
            // Elegimos solamente el valor de una entrada de los array para trabajar
            let pRxpRy=[pRx[0],pRy[0]];
            return pRxpRy;
        }
        this.pRxpRy=random2();
    }
    crearRaton(){
        // la creacion inicial del queso y el raton
        if(!((this.pQxpQy[0]+1)===this.pRxpRy[0] && (this.pQxpQy[1]+1)===this.pRxpRy[1])){
        let praton = b.create('point',[this.pRxpRy[0],this.pRxpRy[1]], {size:1, opacity:0.1, name:' ', visible:false});
        let raton = b.create('image',['imagenes/mouse.png',[()=>praton.X()-1,()=>praton.Y()-1],[2,2]]);
        let rotacion1 = b.create('transform',[Math.PI/2,praton.X()+0.3,praton.Y()],{type:'rotate'});
        rotacion1.bindTo(raton);
        let pQueso = b.create('point',[this.pQxpQy[0],this.pQxpQy[1]], {size:1, opacity:0.1, name:' ', visible:false});
        let elQueso = b.create('image',['imagenes/cheese.png',[pQueso.X(),pQueso.Y()],[2.5,1.4]],{fixed:true, opacity:1});
        b.update();
        return
        }
        this.pRxpRy[0]=2;
        this.pRxpRy[1]=2;
    }
    moverder(){
        if(this.pRxpRy[0]+this.px<=18) {
                let praton = b.create('point',[this.pRxpRy[0]+=this.px,this.pRxpRy[1]], {size:1, opacity:0.1, name:' ', visible:false});
                let raton = b.create('image',['imagenes/mouse.png',[()=>praton.X()-1,()=>praton.Y()-1],[2,2]],{visible:this.ver});
                let rotacion1 = b.create('transform',[Math.PI/2,praton.X()+0.3,praton.Y()],{type:'rotate'});
                rotacion1.bindTo(raton);
                b.update();
                    if(Math.abs(this.pRxpRy[0]-this.pQxpQy[0])<=1 && Math.abs(this.pRxpRy[1]-this.pQxpQy[1])<=1){
                        espacio.innerText=`CONSIGUIO LLEGAR AL QUESO`;
                        resultado.innerText='EXITO';
                    }
                return
        }
        alert('Su ratón se ha salido el camino, se cayo al precipio/agua, NO sigas por ese camino, PULSA INICIAR');
    }
    moveraba(){
        if (this.pRxpRy[1]-this.py>=2) {
                let praton = b.create('point',[this.pRxpRy[0],this.pRxpRy[1]-=this.py], {size:1, opacity:0.1, name:' ', visible:false});
                let raton = b.create('image',['imagenes/mouse.png',[()=>praton.X()-1,()=>praton.Y()-1],[2,2]],{visible:this.ver});
                let rotacion1 = b.create('transform',[0,praton.X()+0.3,praton.Y()],{type:'rotate'});
                rotacion1.bindTo(raton);
                b.update();
                    if(Math.abs(this.pRxpRy[0]-this.pQxpQy[0])<=1 && Math.abs(this.pRxpRy[1]-this.pQxpQy[1])<=1){
                        espacio.innerText=`CONSIGUIO LLEGAR AL QUESO`;
                        resultado.innerText='EXITO';
                    }
                return
        }
        alert('Su ratón se ha salido el camino, se cayo al precipio/agua, NO sigas por ese camino, PULSA INICIAR');
    }
    moverarr(){
        if (this.pRxpRy[1]+this.py<=18) {
                let praton = b.create('point',[this.pRxpRy[0],this.pRxpRy[1]+=this.py], {size:1, opacity:0.1, name:' ', visible:false});
                let raton = b.create('image',['imagenes/mouse.png',[()=>praton.X()-1,()=>praton.Y()-1],[2,2]],{visible:this.ver});
                let rotacion1 = b.create('transform',[Math.PI,praton.X()+0.3,praton.Y()],{type:'rotate'});
                rotacion1.bindTo(raton);
                b.update();
                    if(Math.abs(this.pRxpRy[0]-this.pQxpQy[0])<=1 && Math.abs(this.pRxpRy[1]-this.pQxpQy[1])<=1){
                        espacio.innerText=`CONSIGUIO LLEGAR AL QUESO`;
                        resultado.innerText='EXITO';
                    }
                return
        }
        alert('Su ratón se ha salido el camino, se cayo al precipio/agua, NO sigas por ese camino, PULSA INICIAR');
    }
    moverizq(){
        if(this.pRxpRy[0]-this.px>=2) {
                let praton = b.create('point',[this.pRxpRy[0]-=this.px,this.pRxpRy[1]], {size:1, opacity:0.1, name:' ', visible:false});
                let raton = b.create('image',['imagenes/mouse.png',[()=>praton.X()-1,()=>praton.Y()-1],[2,2]],{visible:this.ver});
                let rotacion1 = b.create('transform',[3*Math.PI/2,praton.X()+0.3,praton.Y()],{type:'rotate'});
                rotacion1.bindTo(raton);
                b.update();
                    if(Math.abs(this.pRxpRy[0]-this.pQxpQy[0])<=1 && Math.abs(this.pRxpRy[1]-this.pQxpQy[1])<=1){
                        espacio.innerText=`CONSIGUIO LLEGAR AL QUESO`;
                        resultado.innerText='EXITO';
                    }
                return
        }
        alert('Su ratón se ha salido el camino, se cayo al precipio/agua, NO sigas por ese camino, PULSA INICIAR');
    }
    borrarPasos(){
        b = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [0, 20, 20, 0], axis: false, showCopyright: false, showNavigation:false});
        let lagrid = b.create('image',[this.malla,[2,2],[16.5,16]],{fixed:true, opacity:1});
        let pQueso = b.create('point',[this.pQxpQy[0],this.pQxpQy[1]], {size:1, opacity:0.1, name:' ', visible:false});
        let elQueso = b.create('image',['imagenes/cheese.png',[pQueso.X(),pQueso.Y()],[2.5,1.4]],{fixed:true, opacity:1});
    }
}