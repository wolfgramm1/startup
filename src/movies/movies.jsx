import React, { useState, useEffect } from 'react';
import './movies.css';

const GameStartEvent = 'gameStart';

export function Movies() {
  const [userName, setUserName] = useState('Mystery player');
  const [barbieReviews, setBarbieReviews] = useState([]);
  const [batmanReviews, setBatmanReviews] = useState([]);
  const [holyReviews, setHolyReviews] = useState([]);

  useEffect(() => {
    setUserName(localStorage.getItem('userName') ?? 'Mystery player');
    console.log(localStorage.getItem('userName'))
    loadReviews();
    console.log('reviews loaded')
    configureWebSocket();

    return () => {
      // Cleanup (if needed)
    };
  }, []);

  const loadReviews = async () => {
    const allReviews = await loadReview();
    console.log(allReviews)
    setBarbieReviews(allReviews[0]);
    setBatmanReviews(allReviews[1]);
    setHolyReviews(allReviews[2]);
  };

  const configureWebSocket = () => {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onopen = () => {
      displayMsg('system', userName, 'is online');
    };
    socket.onclose = () => {
      displayMsg('system', userName, 'is offline');
    };
    socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === GameStartEvent) {
        displayMsg('player', msg.from, 'posted a review');
        loadReviews();
      }
    };
  };

  const displayMsg = (cls, from, msg) => {
    const chatText = document.querySelector('#user-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  };

  const loadReview = async () => {
    const response = await fetch('/api/scores');
    const allReviews = await response.json();
    return allReviews;
  };

  const saveReview = async (reviewInput, movieId) => {
    const newReview = { name: userName, review: reviewInput, movie: movieId };

    await fetch('/api/score', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newReview),
    });

    loadReviews();
  };

  const submitReview = (inputId, movieId) => {
    const reviewInput = document.getElementById(inputId).value;
    saveReview(reviewInput, movieId);

    // Update local storage
    const localStorageKey = `movie-review-${movieId}`;
    localStorage.setItem(localStorageKey, document.getElementById(`movie-review-${movieId}`).innerHTML + `<div>${userName} :  ${reviewInput} </div>`);

    // Update the text inside the specified div
    document.getElementById(`movie-review-${movieId}`).innerHTML += `<div>${userName}:  ${reviewInput} </div>`;

    // // Broadcasting event (if needed)
    // broadcastEvent(this.getPlayerName(), GameStartEvent, {});
  };

  return (
    <main className="container-fluid bg-secondary text-center">
    <div className="users">
      User:
      <span className="user-name">{userName}</span>
      <div id="user-messages">
        <div className="event"><span className="system-event">Tim</span> is online</div>
        <div className="event"><span className="system-event">Linus</span> is online</div>
        <div className="event"><span className="system-event">Jaren</span> is online</div>
      </div>
    </div>

    <div>
      <h1>List Of Movies</h1>
      <div className="card-group">
        <div className="card">
          <img className="card-img-top" src="https://www.themoviedb.org/t/p/original/u5kboZR4OMi4QdbOhawCZuzMVWJ.jpg" alt="barbieposter" height="600px" />
          <div className="card-body">
            <h3 className="card-title">Barbie:</h3>
            <div id="movie-review-barbie"></div>
            <input type="text" id="review-barbie" placeholder="Your review here" />
            <button className="btn btn-primary" onClick={() => submitReview('review-barbie', 'barbie')}>submit</button>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" src="https://m.media-amazon.com/images/I/51rF2-tvXVL._AC_UF894,1000_QL80_.jpg" alt="batmanposter" height="600px" />
          <div className="card-body">
            <h3 className="card-title">The Dark Knight:</h3>
            <div id="movie-review-batman"></div>
            <input type="text" id="review-batman" placeholder="Your review here" />
            <button className="btn btn-primary" onClick={() => submitReview('review-batman', 'batman')}>submit</button>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top" alt="holygrailposter" src="https://flxt.tmsimg.com/assets/p629_p_v8_af.jpg" height="600px" />
          <div className="card-body">
            <h3 className="card-title">Monty Python and the Holy Grail:</h3>
            <div id="movie-review-holy"></div>
            <input type="text" id="review-holy" placeholder="Your review here" />
            <button className="btn btn-primary" onClick={() => submitReview('review-holy', 'holy')}>submit</button>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}
