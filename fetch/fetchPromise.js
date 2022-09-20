const URL = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let promise = fetch(URL);
promise.then(response=>{
    if(response.ok){
        return response.json();
    }else{
        throw new Error('falha na operaçaõ');
    }
}).then(response=>console.log(response[0].author.login))
.catch(console.log);