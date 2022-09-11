function meuEscopo(){
    const URL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    const promise = new Promise(function(resolve, reject){
        const request = new XMLHttpRequest();
        request.open('Get', URL);
        request.responseType = 'json';
        
        request.addEventListener('load', ()=>{
            let myJson = request.response;
            if(request.status =200){
                resolve(myJson);
            }else{
                reject(new Error('falha na operação'));
            }
        })
        request.send();
    })
    promise.then(result=>{
        console.log(result.squadName);
    })
    .catch((error)=>{
        console.log(error);
    })
}
meuEscopo();
