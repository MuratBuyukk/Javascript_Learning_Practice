// single
console.log(document.getElementById("topic"));
console.log(document.getElementById("topic").className);

const topic = document.getElementById("topic");
topic.style.backgroundColor = "red";
topic.style.color = "white";
topic.style.padding = "2rem";

topic.textContent = "Changed Topic";
console.log(topic.textContent);

topic.innerText = "New Topic";
topic.innerHTML = '<img src="https://www.w3schools.com/w3images/lights.jpg" alt="" style="width:10rem">';


console.log(document.querySelector('h2'));
console.log(document.querySelector('#list'));
console.log(document.querySelector('.list-item'));
console.log(document.querySelector('.link.link-google'));

const myList = document.querySelector('li');
myList.style.color = 'blue';

document.querySelector('li:last-child').style.color = 'yellow';
document.querySelector('li:nth-child(3)').style.color = 'orange';
document.querySelector('li:nth-child(odd)').style.color = 'yellow';
document.querySelector('li:nth-child(even)').style.color = 'blue';

//multiple

const links = document.getElementsByClassName('link');
console.log(links[2]);

links[0].style.color = 'red';
links[2].textContent = 'Instagram Link';

console.log(document.querySelector('ul').getElementsByClassName('list-item'));

const citiesOdd = document.querySelectorAll('ul .list-item:nth-child(odd)');
const citiesEven = document.querySelectorAll('ul .list-item:nth-child(even)');

citiesOdd.forEach(item => {
    item.style.backgroundColor = 'yellow'; 
    item.style.color = 'navy';}
);
citiesEven.forEach(item => {
    item.style.backgroundColor = 'navy'; 
    item.style.color = 'yellow';});

console.log(citiesOdd);
console.log(citiesEven);
