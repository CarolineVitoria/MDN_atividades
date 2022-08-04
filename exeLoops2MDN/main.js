function meuEscopo(){
    const bt = document.getElementById('bt');
    const pPermitidos = document.getElementById('per');
    const pNegados = document.getElementById('neg');
    const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
    let aPer = [];
    let aNeg = [];
    let contador = 0;
    function preencher(){
        for(let i =0; i<people.length; i++){
            if(people[i]==='Phil' || people[i]=== 'Lola'){
                aNeg.push(people[i]);
                
            }else{
                aPer.push(people[i]);
            }
        }
        impressao(aPer, pPermitidos);
        impressao(aNeg, pNegados);
    }
    function impressao(array, paragrafo){
        for(let i=0; i<array.length; i++){
            console.log(array[i]);
            if(i===(array.length-1)){
                array[i]=array[i]+'.';
            }else{
                array[i]=array[i]+', ';   
            }
            paragrafo.textContent+=array[i];
        }
        desabilitar(1);
    }
    function desabilitar(i){
        contador+=i;
        if(contador>0){
            bt.disabled=true;
        }
    }

    bt.addEventListener('click', preencher);
}
meuEscopo();