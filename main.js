for(let i = 0; i < 1024; i++) {
    document.querySelector(".app").innerHTML += '<div></div>';

}

document.body.addEventListener('click', event => {
    event.target.style.backgroundColor = '#fff';
    event.target.style.border = '1px solid #000';

});
document.addEventListener('keydown', event => {
    if(event.key === 'z'){
        document.querySelector(".app").style.backgroundColor = '#0f0';
    }
    if(event.key === 'x'){
                document.querySelector(".app").style.backgroundColor = '#ff0';

    }
    if(event.key === 'c'){
        document.querySelector(".app").style.backgroundColor = '#f00'; 
});

document.querySelector('.clear').addEventListener('click', event =>{
    window.location = window.location;

});

document.body.addEventListener('click', event => {
    if(event.zKey){
        event.target.innerText = document.querySelector('#text').Value;
        let red = document.querySelector('.red').value;
        event.target.style.backgroundColor='rgb(' + red + ', 0, 0)';

    }
    if(event.zKey){
        let green = document.querySelector('.green').value;
        event.target.style.backgroundColor='rgb( 0,' + green + ', 0)';

    }

    if(event.cKey){
        let blue = document.querySelector('.blue').value;
        event.target.style.backgroundColor='rgb( 0, 0,' + blue + ')';

    }

});
