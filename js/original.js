const veri11 = document.querySelector('.veri11');

veri11.addEventListener('click',()=> {
    if(document.getElementById('uno').checked) {
        res.innerText=`Eror, siga practicando con el asistente`;
        return
        }else if(document.getElementById('dos').checked) {
            res.innerText=`Eror, siga practicando con el asistente`;
            return
        }else if (document.getElementById('tres').checked) {
            res.innerText=`Correcto, pruebe el capítulo 3 para practicar`;
            return
        }else if (document.getElementById('cuatro').checked) {
            res.innerText=`Eror, siga practicando con el asistente`;
            return
        }
});