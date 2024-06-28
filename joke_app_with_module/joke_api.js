class JokeApi{
    constructor(){
        this.baseURL = 'https://api.chucknorris.io';
        this.axiosObject = axios.create({
            baseURL : this.baseURL,
        });
    }

    async getRandomJoke(){
        try{
            const response = await this.axiosObject.get('/jokes/random');
            return response.data.value;
        } catch(err){
            console.log(err);
        }
    }
}

export default async function getJoke(){
    return await new JokeApi().getRandomJoke();
}
