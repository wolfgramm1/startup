import React from 'react';
import './about.css';

export function About(props) {
  const [imageUrl, setImageUrl] = React.useState('');
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    var randomMovieArray = [
        "The Godfather", "Citizen Kane", "Schindler's List", "The Shawshank Redemption", "Pulp Fiction", "The Dark Knight", "Casablanca", "Gone with the Wind",
        "The Wizard of Oz", "2001: A Space Odyssey", "Lawrence of Arabia", "Apocalypse Now", "Forrest Gump", "The Silence of the Lambs", "The Matrix",
        "Goodfellas", "The Godfather: Part II", "Star Wars: Episode IV - A New Hope", "Blade Runner", "The Lord of the Rings: The Fellowship of the Ring",
        "Rear Window", "The Breakfast Club", "The Grand Budapest Hotel", "Spirited Away", "City Lights", "The Usual Suspects", "The Graduate", "Pan's Labyrinth",
        "The Pianist", "The Great Dictator", "The Deer Hunter", "Eternal Sunshine of the Spotless Mind", "Memento", "The Bridge on the River Kwai",
        "A Clockwork Orange", "The Green Mile", "Inception", "The Social Network", "No Country for Old Men", "The Shining", "The Good, the Bad and the Ugly",
        "The Princess Bride", "Gladiator", "Inglourious Basterds", "The Terminator", "The Big Lebowski", "Gandhi", "The Truman Show", "Jurassic Park", ];
    var randomNumber = Math.floor((Math.random() * randomMovieArray.length - 1) + 1);
    var randomMovie = randomMovieArray[randomNumber];
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://www.omdbapi.com/?apikey=5966d1ce&t=`+ randomMovie)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');

        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
        const apiUrl = data.Poster;;
        setImageUrl(apiUrl);
      })
      .catch();

      fetch(`https://www.omdbapi.com/?apikey=5966d1ce&t=`+ randomMovie)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.Title);
      })
      .catch();
  }, []);

  let imgEl = '';

  if (imageUrl) {
    imgEl = <img src={imageUrl} alt='stock background' />;
  }

  return (
    <main className='container-fluid bg-secondary text-center'>
        <h2>About Us</h2>

        <p>Welcome to Cheddar Bob's Movie Review 
        – your ultimate destination for insightful and
         engaging movie reviews! At Cheddar Bob, we 
         are passionate about cinema, and our mission 
         is to provide you with honest, informative, 
         and entertaining reviews that help you make 
         informed decisions about your movie choices.</p>
        
        
        <h2>Who We Are</h2>
        
        <p>We are a team of dedicated film enthusiasts
        who live and breathe movies. From the latest blockbusters
        to hidden cinematic gems, our diverse team brings a wide 
        range of tastes and perspectives to our reviews. 
        This diversity allows us to cater to all kinds of movie lovers,
        ensuring that you find reviews that resonate with your preferences.</p>
        
       
        <h2>Our Approach</h2>
        <p>At Cheddar Bob, we believe that every film deserves a fair
        and thoughtful evaluation. Our reviews are unbiased, objective,
        and spoiler-free, ensuring that you can read them before or after
        watching a movie without fear of ruining the experience. 
        We explore various aspects of a film, including its plot,
        acting, direction, cinematography, and overall impact,
        providing you with a comprehensive understanding of what to expect.</p>

        <div className="card-group">
          <div className="card">
            <div id="picture" className="picture-box">{imgEl}</div>
            <div className="card-body">
              <h3 className="card-title">Movie Recomendation:</h3>
              <div id="quote" className="quote-box bg-white text-dark">{quote}</div>
            </div>
          </div>
        </div>

        {/* <div id='picture' className='picture-box'>
          {imgEl}
        </div>

        <div className='quote-box bg-light text-dark'>
          <p className='quote'>{quote}</p>
        </div> */}
    </main>
  );
}