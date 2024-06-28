const btnGetText = document.getElementById('btn-get-text');
btnGetText.addEventListener('click',getText);
const textResultDiv = document.getElementById('text-result');


function getText(e){
    e.preventDefault();

    fetch('test.txt')
    .then(response => response.text())
    .then(result => textResultDiv.innerHTML = result)
    .catch(e => console.log(e));
};

const btnGetStudent = document.getElementById('btn-get-student');
btnGetStudent.addEventListener('click',getStudent);
const studentResultDiv = document.getElementById('student-result');

function getStudent(e){
    e.preventDefault();

    fetch('students.json')
    .then(response => response.json())
    .then(result => {
        let text = '';
        result.forEach(element => {
            text += `student name: ${element.name}, id: ${element.id} \n`
        });
        studentResultDiv.innerText = text;
    })
    .catch(e => console.log(e));
}

const btnGetJsonFromApi = document.getElementById('btn-get-json-from-api');
const btnAddJsonToApi = document.getElementById('btn-add-json-to-api');
btnGetJsonFromApi.addEventListener('click',getFromApi);
btnAddJsonToApi.addEventListener("click", addToApi);
const apiResultTable = document.getElementById('api-result-table');

function getFromApi(e){
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => printScreen(result))   
}

function addToApi(e){
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          name: 'murat buyuk',
          username: 'muratbuyuk',
          email: 'muratbuyuk@buyuk.com',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

async function addToApiAsync(e){
    e.preventDefault();

    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
          name: 'murat buyuk',
          username: 'muratbuyuk',
          email: 'muratbuyuk@buyuk.com',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        const result = await response.json();
        console.log(result);
}

function printScreen(datas){
    let output = '';
    datas.forEach(data =>{
        output += `
        <tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.username}</td>
        <td>${data.email}</td>
        </tr>`;
    });
    apiResultTable.innerHTML += output;
}