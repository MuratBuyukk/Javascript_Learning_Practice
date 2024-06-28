class UnsplashApi{
    constructor(){
        this.baseURL = 'https://api.unsplash.com';
        this.clientID = 'Authorization: Client-ID lTO8v8SeJkbwKXuNWdA7hnu-9D-JbKvd1vNif8hR2es';
        this.axiosObject = axios.create({
            baseURL : this.baseURL,
            headers : {
                Authorization : this.clientID
            },
            params: {
                query : 'animal',
                count : 1
            }
        });
    }

    async getRandomPhoto(){
        try{
            const response = await this.axiosObject.get('/photos/random');
            return response.data[0].urls.regular;
        }catch(err){
            console.log(err);
        }
    }
}

export default async function getPhoto(){
    return await new UnsplashApi().getRandomPhoto();
}