function displayPicture() {

    var randomMovieArray = [
        "The Godfather", "Citizen Kane", "Schindler's List", "The Shawshank Redemption", "Pulp Fiction", "The Dark Knight", "Casablanca", "Gone with the Wind",
        "The Wizard of Oz", "2001: A Space Odyssey", "Lawrence of Arabia", "Apocalypse Now", "Forrest Gump", "The Silence of the Lambs", "The Matrix",
        "Goodfellas", "The Godfather: Part II", "Star Wars: Episode IV - A New Hope", "Blade Runner", "The Lord of the Rings: The Fellowship of the Ring","The Seven Samurai",
        "Rear Window", "The Breakfast Club", "The Grand Budapest Hotel", "Spirited Away", "City Lights", "The Usual Suspects", "The Graduate", "Pan's Labyrinth",
        "The Pianist", "The Great Dictator", "Amelie", "The Deer Hunter", "Eternal Sunshine of the Spotless Mind", "Memento", "The Bridge on the River Kwai",
        "A Clockwork Orange", "The Green Mile", "Inception" ];
    var randomNumber = Math.floor((Math.random() * randomMovieArray.length - 1) + 1);
    var randomMovie = randomMovieArray[randomNumber];
    console.log(randomNumber);
    console.log(randomMovie);
  fetch(`http://www.omdbapi.com/?apikey=5966d1ce&t=`+ randomMovie)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.Poster);
        console.log(data.Title);
    
    const containerEl = document.querySelector('#picture');

    const width = containerEl.offsetWidth;
    const height = containerEl.offsetHeight;

    const imgUrl = data.Poster;
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', imgUrl);
    containerEl.appendChild(imgEl);

    const containerE2 = document.querySelector('#quote');

    const quoteEl = document.createElement('p');
    quoteEl.classList.add('quote');
    quoteEl.textContent = data.Title;
    containerE2.appendChild(quoteEl);
    });
}

// function displayQuote(data) {
//   fetch('https://api.quotable.io/random')
//     .then((response) => response.json())
//     .then((data) => {
//       const containerEl = document.querySelector('#quote');

//       const quoteEl = document.createElement('p');
//       quoteEl.classList.add('quote');
//       const authorEl = document.createElement('p');
//       authorEl.classList.add('author');

//       quoteEl.textContent = data.content;
//       authorEl.textContent = data.author;

//       containerEl.appendChild(quoteEl);
//       containerEl.appendChild(authorEl);
//     });
// }

displayPicture();
// displayQuote();