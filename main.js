for(let i = 0; i < 1024; i++) {
    document.querySelector(".app").innerHTML += '<div></div>'; 
}

document.body.addEventListener('mouseover', event => {
    if(event.ctrlKey) {
        event.target.innerText = document.querySelector('#text-input').value; 
        let ironMaiden = document.querySelector('.red').value; 
        event.target.style.backgroundColor = 'rgb(' + ironMaiden + ', 0, 0)'; 
    } else if (event.altKey) {
        let green = document.querySelector('.green').value;
        event.target.style.backgroundColor='rgb( 0,' + green + ', 0)';

        
    } else if(event.shiftKey) {
        let blue = document.querySelector('.blue').value;
        event.target.style.backgroundColor='rgb( 0, 0,' + blue + ')';
    }
}); 

document.querySelector('.clear').addEventListener('click', event => {
    document.querySelectorAll('.app div').forEach(element => {
        element.style = ''; 
        element.className = ''; 
    }); 
})
