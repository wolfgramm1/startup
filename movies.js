  class Movies {
    reviews;
    review;
    
    
    // have somthing that will grab the list reviews 
  
    constructor() {
      this.reviews = localStorage.getItem("reviews");
      this.review = localStorage.getItem("review");

    
    setInterval(() => {
        const chatText = document.querySelector('#movie-review-barbie');
        chatText.innerHTML = localStorage.getItem("movie-review-barbie");
      }, 5000);
      setInterval(() => {
        const chatText = document.querySelector('#movie-review-batman');
        chatText.innerHTML = localStorage.getItem("movie-review-batman");
      }, 5000);
      setInterval(() => {
        const chatText = document.querySelector('#movie-review-holy');
        chatText.innerHTML = localStorage.getItem("movie-review-holy");
      }, 5000);


      const playerNameEl = document.querySelector('.user-name');
      playerNameEl.textContent = this.getPlayerName();
    }
  

    getPlayerName() {
      return localStorage.getItem('userName') ?? 'Mystery player';
    }
  
  }
  
  const game = new Movies();
  
  function submitReviewHoly() {
    // Get the input value
    var userName = localStorage.getItem('userName');
    var reviewInput = document.getElementById('review-holy').value;
    localStorage.setItem("movie-review-holy", document.getElementById('movie-review-holy').innerHTML + `<div>${userName}: ${reviewInput} </div>`);

    // Update the text inside the specified div
    document.getElementById('movie-review-holy').innerHTML += `<div>${userName}: ${reviewInput} </div>`;
  }
  function submitReviewBarbie() {
    // Get the input value
     var userName = localStorage.getItem('userName');
     var reviewInput = document.getElementById('review-barbie').value;
     localStorage.setItem("movie-review-barbie", document.getElementById('movie-review-barbie').innerHTML + `<div>${userName} :  ${reviewInput} </div>`);
 
     // Update the text inside the specified div
     document.getElementById('movie-review-barbie').innerHTML += `<div>${userName}:  ${reviewInput} </div>`;
  }

  function submitReviewBatman() {
    // Get the input value
    var userName = localStorage.getItem('userName');
    var reviewInput = document.getElementById('review-batman').value;
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
  }, 5000);
  