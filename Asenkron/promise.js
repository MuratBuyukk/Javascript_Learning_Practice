const myPromise = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        //resolve('3 second oepration');
        reject('cannot acces');
    }, 1000);
});

myPromise
.then(result =>{ console.log(result); })
.catch(err => { console.log(err); });



function getStudents(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const arr = [];
            for(let i = 0; i<30; i++){
                arr.push({fname: 'student ' + (i+1), id: i+1});
            }

            resolve(arr);
            //reject('Error occurred')
        }, 2000);
    });
}


function printStudents(arr){
    console.log(arr);
}

function printError(err){
    console.log(err);
}

getStudents()
    .then(studentArr => { printStudents(studentArr)})
    .catch(err => printError(err));

Promise.all([getStudents,myPromise])
    .then(res => console.log(res))
    .catch(err => console.log(err));