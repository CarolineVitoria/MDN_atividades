function meuEscopo(){
    const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

    const myRequest = new XMLHttpRequest();

    myRequest.open('Get', requestURL);
    myRequest.responseType = 'json';
    myRequest.send();

    myRequest.addEventListener('load', function(){ //load acontece quando a a resposta é recebida com sucesso
        const response = myRequest.response;
        console.log(response.squadName);
        console.log(response.members[2].name);
    })
}
meuEscopo();