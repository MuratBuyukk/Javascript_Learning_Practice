function getUser(id){
    console.log(`id: ${id}, loading..`);

    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve({name: 'murat', id: id});
        },2000); 
    });
}

function getCourses(username){
    console.log(`${username}'s courses, loading..`);

    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            reject("when courses loaded..")
            //resolve(['course1','course2','course3']);
        },2000); 
    });
}

function getComments(coursename){
    console.log(`${coursename}'s comments, loading..`);

    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve('this is a comment..');
        },2000); 
    });
}

getUser(5)
   .then(usr => getCourses(usr.name))
   .then(courses => getComments(courses [0]))
   .then(comment => console.log(comment))
   .catch(err => console.log(err));


async function showComments(){
    try{
        const user = await getUser(45236);
        const courses = await getCourses(user.name);
        const comments = await getComments(courses[0]);
        console.log(comments);
    }catch(err){
        console.log('Error occured ' + err);
    }
    
}

showComments();