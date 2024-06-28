const getBtn = document.getElementById('get');
const postBtn = document.getElementById('post');
const putPatchBtn = document.getElementById('put-patch');
const deleteBtn = document.getElementById('delete');
const synchRequestBtn = document.getElementById('synch-request');
const headersBtn = document.getElementById('headers');
const hataBtn = document.getElementById('hata');

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);
putPatchBtn.addEventListener('click', putPatchData);
deleteBtn.addEventListener('click', deleteItem);
synchRequestBtn.addEventListener('click', synchRequestData);
headersBtn.addEventListener('click', customHeader);
hataBtn.addEventListener('click', hataIslemleri)

function getData(){
    // axios({
    //     method: 'Get',
    //     url: 'https://jsonplaceholder.typicode.com/users',   
    //     params: {
    //         _limit: 5
    //     }
    // })
    // .then(response => printScreen(response))
    // .catch(error => console.log(error))
    // .then(_ => console.log('Get request ended..'));

    // axios.get('https://jsonplaceholder.typicode.com/users',{
    //     params: {
    //         _limit: 1,
    //     }
    // })
    //  .then(response => printScreen(response))
    // .catch(error => console.log(error))
    // .then(_ => console.log('Get request ended..'));

    axios.get('https://jsonplaceholder.typicode.com/users?_limit=1')
        .then(response => printScreen(response))
        .catch(error => console.log(error))
        .then(_ => console.log('Get request ended..'));
}

function postData(){
    // axios.post('https://jsonplaceholder.typicode.com/posts',{
    //     title: 'new title',
    //     body: 'new body',
    //     userId: 55
    // })
    // .then(response => printScreen(response))
    // .catch(error => console.log(error))
    // .then(_ => console.log('post request ended..'));

    axios.post('https://jsonplaceholder.typicode.com/users',{
        name: 'murat buyuk',
        username: 'muratbuyuk',
        email: 'muratbuyuk@buyuk.com'
    })
    .then(response => printScreen(response))
    .catch(error => console.log(error))
    .then(_ => console.log('post request ended..'));
    
}

function putPatchData(){
    // axios.put('https://jsonplaceholder.typicode.com/users/1',{
    //     name: 'murat buyuk',
    //     username: 'muratbuyuk',
    //     email: 'muratbuyuk@buyuk.com'
    // })
    // .then(response => printScreen(response))
    // .catch(error => console.log(error))
    // .then(_ => console.log('put request ended..'));

    axios.patch('https://jsonplaceholder.typicode.com/users/1',{
        name: 'murat buyuk',
        username: 'muratbuyuk',
        email: 'muratbuyuk@buyuk.com'
    })
    .then(response => printScreen(response))
    .catch(error => console.log(error))
    .then(_ => console.log('patch request ended..'));
}

function deleteItem (){
    axios.delete('https://jsonplaceholder.typicode.com/users/1') 
    .then(response => printScreen(response))
    .catch(error => console.log(error))
    .then(_ => console.log('put request ended..'));    
}
function synchRequestData (){
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/users'),
        axios.get('https://jsonplaceholder.typicode.com/posts')
    ])
    .then(axios.spread((users,posts) =>{
        console.log(users);
        console.log(posts);
        printScreen(users);
    }))
    .catch(error => console.log(error))
    .then(_ => console.log('synch request ended..'));
}

axios.interceptors.request.use(config =>{
    console.log(`${config.method} request was made to ${config.url}`);
    return config;
});

// axios.interceptors.response.use(response => {
//     if (response.status ===200){
//         response.status = 999;
//     }
//     return response;
// }, error => {
//     return Promise.reject(error)
// });


axios.defaults.headers.common['X-Auth-Token'] = 'apitokenvalue';
axios.defaults.headers.common['MyToken'] = 'mytoken';

const axiosObject = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'X-Requested-With': 'XMLHttpRequest', 'token': 'asdasdad'},
});

function customHeader (){

    axiosObject.get('/users').then(response => console.log(response));
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'token value'
        }
    }
    axios.post('https://jsonplaceholder.typicode.com/users',{
        name: 'murat buyuk',
        username: 'muratbuyuk',
        email: 'muratbuyuk@buyuk.com'
    }, config)
    .then(response => printScreen(response))
    .catch(error => console.log(error))
    .then(_ => console.log('post request ended..'));
}
function hataIslemleri (){
    axios.get('https://jsonplaceholder.typicode.com/usersss?_limit=1')
        .then(response => printScreen(response))
        .catch(error => printError(error))
        .then(_ => console.log('Get request ended..'));
}


function printError(error) {
   
    document.querySelector('.sonuc').innerHTML = ` <div class="notification is-info">
    <div class="columns is-mobile is-vcentered">
        <div class="column"><h1 class="subtitle">Sonuc</h1></div>
        <div class="column"><h1 class="title">
        <pre>${JSON.stringify(error.response, null, 2)}</pre>
        </h1></div>
    </div>
    </div>`;
}

function printScreen(response) {
    document.querySelector('.sonuc').innerHTML = `
    <div class="notification is-info">
    <div class="columns is-mobile is-vcentered">
        <div class="column"><h1 class="subtitle">Sonuc</h1></div>
        <div class="column"><h1 class="title">${response.status}</h1></div>
    </div>
    </div>



    <div class="section">
        <article class="message is-success">
            <div class="message-header">
                <p>Header</p>
            </div>
            <div class="message-body has-background-white has-text-dark">
            <pre>${JSON.stringify(response.headers, null, 4)}</pre>
            </div>
        </article>
    </div>


    <div class="section">
        <article class="message is-warning">
            <div class="message-header">
                <p>Data</p>
            </div>
            <div class="message-body has-background-white has-text-dark">
            <pre>${JSON.stringify(response.data, null, 4)}</pre>
            </div>
        </article>
    </div>


    <div class="section">
        <article class="message is-primary">
            <div class="message-header">
                <p>Config</p>

            </div>
            <div class="message-body has-background-white has-text-dark">
            <pre>${JSON.stringify(response.config, null, 4)}</pre>
            </div>
        </article>
    </div>`;
}