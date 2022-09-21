async function f(){
    try{
        let promise= await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
        let response = await promise.json();
        console.log(response[0].author.login);  
    }catch(e){
        console.log(e);
    }
}
f();

