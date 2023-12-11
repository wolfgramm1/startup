// Event messages
const GameStartEvent = 'gameStart';

class Movies {
  socket;

  constructor() {
    const playerNameEl = document.querySelector('.user-name');
    playerNameEl.textContent = this.getPlayerName();

    this.configureWebSocket();
  }

  async loadBarbie() {
    let allReviews = await loadReview()
    const chatText = document.querySelector('#movie-review-barbie');
    
    for (let i = 0; i < allReviews[0].length; i++) {
      chatText.innerText += allReviews[0][i].name +  ': ' + allReviews[0][i].review + '\n';
    }
     
  }
  async loadBatman() {
  let allReviews = await loadReview()

  const chatText = document.querySelector('#movie-review-batman');
  
  for (let i = 0; i < allReviews[1].length; i++) {
    chatText.innerText += allReviews[1][i].name +  ': ' + allReviews[1][i].review + '\n';
  }
    
  }
  async loadHoly() {
  let allReviews = await loadReview()
  const chatText = document.querySelector('#movie-review-holy');
  
  for (let i = 0; i < allReviews[2].length; i++) {
    chatText.innerText += allReviews[2][i].name +  ': ' + allReviews[2][i].review + '\n';
  }
      
  }


  getPlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }

  // Functionality for peer communication using WebSocket

  configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
      this.displayMsg('system', this.getPlayerName(), 'is online');
    };
    this.socket.onclose = (event) => {
      this.displayMsg('system', this.getPlayerName(), 'is offline');
    };
    this.socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === GameStartEvent) {
        this.displayMsg('player', msg.from, `posted a review`);
      }
    };
  }

  displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#user-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

  broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  }

}
const movie = new Movies()
movie.loadBarbie();
movie.loadBatman();
movie.loadHoly();



function getPlayerName() {
  return localStorage.getItem('userName') ?? 'Mystery player';
}

async function loadReview() {
  let allReviews = [];
  
  // Get the latest high scores from the service
  const response = await fetch('/api/scores');
  allReviews = await response.json();
  console.log(allReviews)
  return allReviews    
}

async function saveReview(reviewInput, movieid) {
  const userName = getPlayerName();
  const newReview = {name: userName, review: reviewInput, movie: movieid};


  const response = await fetch('/api/score', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(newReview),
  });

  // Store what the service gave us as the high scores
  const review = await response.json();

}  


function submitReviewHoly() {
  // Get the input value
  var userName = localStorage.getItem('userName');
  var reviewInput = document.getElementById('review-holy').value;
  var movieId = 'holy'
  saveReview(reviewInput, movieId);
  localStorage.setItem("movie-review-holy", document.getElementById('movie-review-holy').innerHTML + `<div>${userName}: ${reviewInput} </div>`);

  // Update the text inside the specified div
  document.getElementById('movie-review-holy').innerHTML += `<div>${userName}: ${reviewInput} </div>`;

  movie.broadcastEvent(this.getPlayerName(), GameStartEvent, {});
      
}
function submitReviewBarbie() {
  // Get the input value
  var userName = localStorage.getItem('userName');
  var reviewInput = document.getElementById('review-barbie').value;
  var movieId = 'barbie'
  saveReview(reviewInput, movieId);
  
  localStorage.setItem("movie-review-barbie", document.getElementById('movie-review-barbie').innerHTML + `<div>${userName} :  ${reviewInput} </div>`);
  
  // Update the text inside the specified div
  document.getElementById('movie-review-barbie').innerHTML += `<div>${userName}:  ${reviewInput} </div>`;

  movie.broadcastEvent(this.getPlayerName(), GameStartEvent, {});
 
}

function submitReviewBatman() {
  // Get the input value
  var userName = localStorage.getItem('userName');
  var reviewInput = document.getElementById('review-batman').value;
  var movieId = 'batman'
  saveReview(reviewInput, movieId);
  localStorage.setItem("movie-review-batman", document.getElementById('movie-review-batman').innerHTML + `<div>${userName}: ${reviewInput} </div>`);

  // Update the text inside the specified div
  document.getElementById('movie-review-batman').innerHTML += `<div>${userName}: ${reviewInput} </div>`;

  movie.broadcastEvent(this.getPlayerName(), GameStartEvent, {});
}
