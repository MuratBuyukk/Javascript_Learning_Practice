//add
const newListElement = document.createElement('li');
newListElement.className = 'liste-item';
newListElement.textContent = 'Rome';
console.log(newListElement);


const cities = document.querySelector("ul");
cities.appendChild(newListElement);
console.log(cities);

//replace
const newTopicH6 = document.createElement('h6');
console.log(newTopicH6);
newTopicH6.id = 'h6Id';
newTopicH6.textContent = 'New Topic';

const topicH2 = document.querySelector("h2");
console.log(topicH2);

const topicParent = document.querySelector("body");
console.log(topicParent);

topicParent.replaceChild(newTopicH6,topicH2)


// remove
const listItem = document.querySelector("li");
listItem.remove();
console.log(listItem);

document.querySelector("ul").removeChild(document.querySelectorAll('li')[2]);
