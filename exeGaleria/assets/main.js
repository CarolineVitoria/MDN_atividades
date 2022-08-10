function meuEscopo(){
    const img_full = document.querySelector('.displayed_img');
    let imgs = document.querySelectorAll('.a');
    const bt = document.querySelector('.link');
    const d_dark = document.querySelector('.d_dark');
    const svgOn= document.querySelector('#svg_on');
    const svgOff= document.querySelector('#svg_off');
    let attSrc;
    let contador=0;

    for(let i =0; i<imgs.length; i++){
        imgs[i].addEventListener('click', function(e){
            attSrc=e.target.getAttribute('src').replace('/175/175', '/900/500');
            img_full.setAttribute('src', attSrc);
        })
    }
    bt.addEventListener('click', function(){
        contador+=1;
        if(contador%2 !== 0){
            svgOff.style.display='none'
            svgOn.style.display='inline-block';
            d_dark.style.display='block';
        }else{
            svgOn.style.display='none';
            svgOff.style.display='inline-block'
            d_dark.style.display='none';
        }
    })
}
meuEscopo();