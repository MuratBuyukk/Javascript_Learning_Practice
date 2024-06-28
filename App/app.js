const fname = document.getElementById('ad');
const surname = document.getElementById('soyad');
const mail = document.getElementById('mail');

const form = document.getElementById('form-rehber');
const personList = document.querySelector('.kisi-listesi');

let selectedRow = undefined;
const saveUpdateButton = document.querySelector('.kaydetGuncelle');
form.addEventListener('submit', save);
personList.addEventListener('click', doPersonOperations);
const allPersonsList = []; 

function save(e){
    e.preventDefault();

    const person = {
        fname : fname.value,
        surname : surname.value,
        mail : mail.value,
    }

    const result = checkData(person);
    
    if(result.state) {
        if(selectedRow){
            updatePerson(person);
         }else{
            addPerson(person);
         }
    }else{
        createInformation(result.message, result.state);
    }
        
}

function checkData(person){
    for(const value in person){
        if(person[value]){
            console.log(person[value]);
        }else{
            return {
                state: false,
                message: 'Fill all field..!',
            }
        }
    }
    clearFields();
    return {
        state: true,
        message: 'Saved'
    }
}

function createInformation(message, state){
    const info = document.createElement('div');
    info.textContent = message;
    info.classList.add(state ? 'bilgi--success' : 'bilgi--error');

    document.querySelector('.container').insertBefore(info,form);
    setTimeout(function(){
        info.remove();
    },2000);
}

function clearFields(){
    surname.value = '';
    fname.value = '';
    mail.value = '';
}

function addPerson(person){
    console.log(personList);
    const elementTr = document.createElement('tr');
    elementTr.innerHTML = `<td>${person.fname}</td>
    <td>${person.surname}</td>
    <td>${person.mail}</td>
    <td>
        <button class="btn btn--edit"><i class="far fa-edit"></i></button>
        <button class="btn btn--delete"><i class="far fa-trash-alt"></i></button>
    </td>`;
    personList.appendChild(elementTr);
    allPersonsList.push(person);

    createInformation('Saved', true);
}

function doPersonOperations(event){
    const selectedTr = event.target.parentElement.parentElement;
    const itemMail = selectedTr.cells[2].textContent;
    if(event.target.classList.contains('btn--delete')){
        remeveToList(selectedTr,itemMail);
    }else if (event.target.classList.contains('btn--edit')){
        saveUpdateButton.value = 'Güncelle';
        fname.value = selectedTr.cells[0].textContent;
        surname.value = selectedTr.cells[1].textContent;
        mail.value = itemMail;
        selectedRow = selectedTr;

        console.log(personList);

    }
}

function remeveToList(elementTr, mail){
    elementTr.remove();

    allPersonsList.forEach((person, index) => {
        if(person.mail === mail){
            allPersonsList.splice(index,1);
        }
    });

    clearFields();
    saveUpdateButton.value = 'Kaydet';

}

 function updatePerson(person){

    for(let i = 0; i< personList.lenght; i++){
        if(personList[i] === selectedRow.cells[2].textContent){
            personList[i] = person;
            break;
        }
    }

    selectedRow.cells[0].textContent = person.fname;
    selectedRow.cells[1].textContent = person.surname;
    selectedRow.cells[2].textContent = person.mail;

    saveUpdateButton.value = 'Kaydet';
    selectedRow = undefined;
    console.log(personList);
}