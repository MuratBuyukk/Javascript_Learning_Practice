//Local Storage: Stores data locally, remains even after browser is closed
//localStorage.setItem('firstname','murat');
//localStorage.setItem('age','25');

// Session Storage: Stores data locally, deleted when browser is closed.
//sessionStorage.setItem('city','Istanbul');

// console.log(localStorage.getItem('firstname'));
// localStorage.removeItem('age');
// localStorage.clear();
document.querySelector('#form').addEventListener('submit', e =>{
    const firstname = document.querySelector('#firstname').value;
    let nameArray; 
    if(localStorage.getItem('nameList') === null){
        nameArray = [];
    }else{
        nameArray = JSON.parse(localStorage.getItem('nameList'));
    }
    nameArray.push(firstname);
    localStorage.setItem('nameList',JSON.stringify(nameArray));
    const item = document.createElement('li');
    item.textContent = firstname;
    ulList.appendChild(item);
    e.preventDefault();
});

const ulList = document.querySelector('.list');
const nameList = JSON.parse(localStorage.getItem('nameList')) || [];

nameList.forEach(element => {
    const item = document.createElement('li');
    item.textContent = element;
    ulList.appendChild(item);
});