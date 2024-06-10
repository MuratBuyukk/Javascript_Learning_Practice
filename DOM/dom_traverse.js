let value;

const myList = document.querySelector('ul.list');
console.log(myList);

value = myList.childNodes;
value = myList.childNodes[0].nodeType;
// 1 element
// 3 text

value = myList.firstChild;
value = myList.firstElementChild;
value = myList.childElementCount;

//parent
value = myList.parentElement.parentElement;

const myInput = document.querySelector('input');
console.log(myInput.parentElement.parentElement);


value = document.querySelector('li').nextElementSibling
.nextElementSibling
.nextElementSibling
.previousElementSibling;
console.log(value);