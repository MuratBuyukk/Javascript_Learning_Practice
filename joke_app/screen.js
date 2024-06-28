class Screen{
    constructor(){
        this.getJokeBtn = document.querySelector('#get');
        this.getJokeBtn.addEventListener('click', this.getJoke.bind(this));
    }
    
    async getJoke(){
        const randomPhoto = await new UnsplashApi().getRandomPhoto();
        const randomJoke = await new JokeApi().getRandomJoke();
        const results = {
            randomPhoto,
            randomJoke
        }
        this.printScreen(results);
    }

    printScreen(result){
        document.querySelector('.sonuc').innerHTML = `<div class="card">
    <div class="card-image">
      <figure class="image is-16by9">
        <img src="${result.randomPhoto}" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="subtitle is-4 has-text-danger is-bold">${result.randomJoke}</p>
        </div>
      </div>
    </div>
  </div>`;
    }
}

