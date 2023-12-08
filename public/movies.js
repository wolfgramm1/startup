  class Movies {

    constructor() {
      const playerNameEl = document.querySelector('.user-name');
      playerNameEl.textContent = this.getPlayerName();
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
  }
  




  function generateRandomName() {
    const firstNames = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Henry",
    "Isabel", "Jack", "Katherine", "Leo", "Mia", "Nathan", "Olivia", "Peter",
    "Quinn", "Rachel", "Samuel", "Tara", "Ulysses", "Violet", "William", "Xander",
    "Yasmine", "Zachary"];
    const lastNames = ["Johnson", "Smith", "Williams", "Davis", "Brown", "Miller", "Wilson", "Moore",
    "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson",
    "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker",
    "Hall", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez", "Hill", "Scott",
    "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez",
    "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins"];

    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${randomFirstName} ${randomLastName}`;
  }


  
  setInterval(() => {
    const randomName = generateRandomName();
    const chatText = document.querySelector('#user-messages');
    chatText.innerHTML =
      `<div class="event"><span class="user-event">${randomName}</span> is online</div>` + chatText.innerHTML;
  }, 15000);
  