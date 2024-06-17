document.querySelector('.link').addEventListener('click', clicked);
document.querySelector('.link').addEventListener('dblclick', clicked);

document.querySelector('.link').addEventListener('mousedown', clicked);
document.querySelector('.link').addEventListener('mouseup', clicked);

document.querySelector('.container').addEventListener('mouseenter', clicked);
document.querySelector('.container').addEventListener('mouseleave', clicked);

document.querySelector('.container').addEventListener('mousemove', changeBackgroundColor);
document.querySelector('.container').addEventListener('mouseout', clicked);

document.querySelector('.container').addEventListener('mousemove', showMouseLocation);


function clicked(e){
    let value;
    value = e.type;

    console.log(value);
    e.preventDefault();
}

function changeBackgroundColor(e){
    document.querySelector('.container').style.backgroundColor = `rgb(${e.clientX%255},${e.clientY%255}, ${(e.clientX + e.clientY)%255})`;
}

function showMouseLocation(e){
    document.querySelector('.text').textContent = `r:${e.clientX%255}, g:${e.clientY%255}, b:${(e.clientX + e.clientY)%255}`;
}


const myform = document.querySelector('#form');
const formName = document.querySelector('#name');
myform.addEventListener('submit',takeEvent);
formName.addEventListener('keydown', keyboardEvent);
formName.addEventListener('keyup', keyboardEvent);
formName.addEventListener('keypress', keyboardEvent);
formName.addEventListener('focus', keyboardEvent);
formName.addEventListener('blur', keyboardEvent);
formName.addEventListener('cut', keyboardEvent);
formName.addEventListener('paste', keyboardEvent);
formName.addEventListener('input', keyboardEvent);

const cities = document.querySelector("#city");
cities.addEventListener('change', selectEvent);
function takeEvent(e){
    console.log(`Event name: ${e.type}`);
    document.querySelector('.formLink').textContent = formName.value;
    console.log(`Name value: ${formName.value}`)
    e.preventDefault();
};

function keyboardEvent(e){
    document.querySelector('.formText').textContent = e.type;
}

function selectEvent(e){
    document.querySelector('.formText').textContent = e.type;
}
