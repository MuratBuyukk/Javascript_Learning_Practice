class Person{
    constructor(firstname,lastname,mail){
        this.firstname = firstname;
        this.lastname = lastname;
        this.mail = mail;
    }
}

class Util{
    static checkEmptyField(...fields){
        let result = true;
        fields.forEach(f => {
            if(f.length === 0){
                result = false;
                return false;
            } 
        });
        return result;
    }

    static emailIsValid(email) {
        return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ) !== null;
    }
}

class Window{
    constructor(){
        this.firstname = document.getElementById('ad');
        this.lastname = document.getElementById('soyad');
        this.mail = document.getElementById('mail');
        this.saveUpdateButton = document.querySelector('.kaydetGuncelle');
        this.form = document.getElementById('form-rehber');
        this.form.addEventListener('submit', this.saveUpdate.bind(this));
        this.personList = document.querySelector('.kisi-listesi');
        this.personList.addEventListener('click', this.updateOrDelete.bind(this));
        this.storage = new Storage();
        this.selectedRow = undefined;
        this.printPersonToScreen();
    }

    clearFields(){
        this.firstname.value = '';
        this.lastname.value = '';
        this.mail.value = '';
    }

    updateOrDelete(e){
        const clickArea = e.target;
        if(clickArea.classList.contains('btn--delete')){
            this.selectedRow = clickArea.parentElement.parentElement;
            this.removePersonToScreen();
        }else if(clickArea.classList.contains('btn--edit')){
            this.selectedRow = clickArea.parentElement.parentElement;
            this.saveUpdateButton.value = 'Güncelle';
            this.firstname.value = this.selectedRow.cells[0].textContent;
            this.lastname.value = this.selectedRow.cells[1].textContent;
            this.mail.value = this.selectedRow.cells[2].textContent;
        }
    }

    printPersonToScreen(){
        this.storage.allPersons.forEach(person => {
            this.addPersonToScreen(person)
        });
    }
    
    createInformation(message, state){
        const info = document.querySelector('.bilgi');
        info.innerHTML = message;
        info.classList.add(state ? 'bilgi--success' : 'bilgi--error');
    
        setTimeout(function(){
            info.className = 'bilgi';
        },2000);
    }

    addPersonToScreen(person){
        const createdTr = document.createElement('tr');
        createdTr.innerHTML = `<td>${person.firstname}</td>
        <td>${person.lastname}</td>
        <td>${person.mail}</td>
        <td>
            <button class="btn btn--edit"><i class="far fa-edit"></i></button>
            <button class="btn btn--delete"><i class="far fa-trash-alt"></i></button>
        </td>`;

        this.personList.appendChild(createdTr);
    }

    removePersonToScreen(){
        this.selectedRow.remove();
        const mail = this.selectedRow.cells[2].textContent;
        this.storage.removePerson(mail);
        this.clearFields();
        this.selectedRow = undefined;
        this.createInformation('kişi rehberden silindi', true);
    }

    updatePersonToScreen(person){
        this.storage.updatePerson(person, this.selectedRow.cells[2].textContent);

        this.selectedRow.cells[0].textContent = person.firstname;
        this.selectedRow.cells[1].textContent = person.lastname;
        this.selectedRow.cells[2].textContent = person.mail;

        this.clearFields();
        this.selectedRow = undefined;
        this.saveUpdateButton.value = 'Kaydet';
        this.createInformation('kişi güncellendi', true);

    }

    saveUpdate(e){
        e.preventDefault();
        const person = new Person(this.firstname.value , this.lastname.value, this.mail.value);
        const filled = Util.checkEmptyField(person.firstname,person.lastname, person.mail);
        const isValidEmail = Util.emailIsValid(person.mail);
        if(filled){
            if(!isValidEmail){
                this.createInformation('Geçerli bir email adresi girin', false);
                return;
            }

            if(this.selectedRow){
                this.updatePersonToScreen(person);
            }else{
                const result = this.storage.addPerson(person);
                if(result){
                    this.createInformation('Başarıyla kaydedildi', true);
                    this.addPersonToScreen(person);
                    this.clearFields();
                }else{
                    this.createInformation('Bu mail kullanımda', false);
                } 
            }
        }else{
            this.createInformation('boş alanları doldurunuz', false);
        }        
    }
}

class Storage{
    constructor(){
        this.allPersons = this.getAllPersons();
    }

    getAllPersons(){
        let allPersons;
        if(localStorage.getItem('allPersons') === null){
            allPersons = [];
        }else{
            allPersons = JSON.parse(localStorage.getItem('allPersons'));
        }
        return allPersons;
    }

    emailIsUnique(mail){
        const result = this.allPersons.find(p => {
            return p.mail === mail;
        });

        if(result) {
            console.log('used'); 
            return false;
        }
        else {
            console.log('not used'); 
            return true;
        }
    }

    addPerson(person){
        if(this.emailIsUnique){
            this.allPersons.push(person);
            localStorage.setItem('allPersons', JSON.stringify(this.allPersons));
            return true;
        }else{
            return false;
        }
        
    }

    removePerson(mail){
        this.allPersons.forEach((person,index) => {
            if(person.mail === mail){
                this.allPersons.splice(index,1);
            }
        });
        localStorage.setItem('allPersons', JSON.stringify(this.allPersons));
    }

    updatePerson(personUpdate, mail){
        this.allPersons.forEach((person,index) => {
            if(person.mail === mail){
                this.allPersons[index] = personUpdate;
            }
        });
        localStorage.setItem('allPersons', JSON.stringify(this.allPersons));
    }

}

document.addEventListener('DOMContentLoaded', function (e){
    const window = new Window();
});