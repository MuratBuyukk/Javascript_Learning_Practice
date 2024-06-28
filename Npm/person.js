const fs = require('fs');

const addPerson = (name,tel) => {
    const personList = readPersonFromFiles();
    const filteredList = personList.filter(p => p.name === name );
    if(filteredList.length === 0){
        personList.push({
            name: name,
            tel: tel
        });
        console.log("added => name: " + name + " tel: " + tel);
        writePersonToFile(personList);
    }else{
        console.log("not added (existing) => name: " + name + " tel: " + tel);
    }
    
}

const writePersonToFile = (personList) =>
{
    const jsonData = JSON.stringify(personList);
    fs.writeFileSync("person.json", jsonData)
}

const readPersonFromFiles = function (){
    try{
        const dataBuffer = fs.readFileSync('person.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
     }
    catch(err) {
        console.log(err);
    }
}

const deletePerson = function (name){
    const personList = readPersonFromFiles();
    const filteredList = personList.filter(p => p.name !== name);

    if(personList.length  >filteredList.length){
        writePersonToFile(filteredList);
        console.log("deleted => name: " + name);
    }else{
        console.log("not deleted (not exist)=> name: ");
    }

}

const showPerson = (name) =>{
    const personList = readPersonFromFiles();
    const person = personList.find(p => p.name === name);
    if(person){
        console.log("show => name: " + name + " tel: " + person.tel);
    }else{
        console.log("not show (not exist)=> name: " + name);
    }
    
}

const listPerson =  () => {
    const personList = readPersonFromFiles();
    console.log("List:");
    personList.forEach(element => console.log("item => name: " + element.name + " tel: " + element.tel));
}

module.exports = {
    addPerson : addPerson,
    deletePerson : deletePerson,
    showPerson : showPerson,
    listPerson : listPerson
}
