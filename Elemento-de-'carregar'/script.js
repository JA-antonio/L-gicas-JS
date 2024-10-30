
document.querySelector('input#button').addEventListener('click' ,  function(){

    document.querySelector('div#loading').style.display = 'flex';

    setTimeout(function(){
        document.querySelector('div#loading').style.display = 'none';
    }, 1000);

})