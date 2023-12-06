  class Movies {
    reviews;
    review;
    
    
    // have somthing that will grab the list reviews 
  
    constructor() {
      this.reviews = localStorage.getItem("reviews");
      this.review = localStorage.getItem("review");

    //   forloop of all movies
    setInterval(() => {
        const chatText = document.querySelector('#movie-review-barbie');
        chatText.innerHTML =
          `<div class="card-text"><span class="card-text">Barbie movie review</span>` + chatText.innerHTML;
      }, 5000);
      setInterval(() => {
        const chatText = document.querySelector('#movie-review-batman');
        chatText.innerHTML =
          `<div class="card-text"><span class="card-text">Batamn movie review</span>` + chatText.innerHTML;
      }, 5000);
      setInterval(() => {
        const chatText = document.querySelector('#movie-review-holy');
        chatText.innerHTML =
          `<div class="card-text"><span class="card-text">Holy movie review</span>` + chatText.innerHTML;
      }, 5000);


      const playerNameEl = document.querySelector('.user-name');
      playerNameEl.textContent = this.getPlayerName();
    }
  
    async writeReview(button) {
      if (this.allowPlayer) {
        this.allowPlayer = false;
        await this.buttons.get(button.id).press(1.0);
  
        if (this.sequence[this.playerPlaybackPos].el.id === button.id) {
          this.playerPlaybackPos++;
          if (this.playerPlaybackPos === this.sequence.length) {
            this.playerPlaybackPos = 0;
            this.addButton();
            this.updateScore(this.sequence.length - 1);
            await this.playSequence();
          }
          this.allowPlayer = true;
        } else {
          this.saveScore(this.sequence.length - 1);
          this.mistakeSound.play();
          await this.buttonDance(2);
        }
      }
    }
  
    async reset() {
      this.allowPlayer = false;
      this.playerPlaybackPos = 0;
      this.sequence = [];
      this.updateScore('--');
      await this.buttonDance(1);
      this.addButton();
      await this.playSequence();
      this.allowPlayer = true;
    }
  
    getPlayerName() {
      return localStorage.getItem('userName') ?? 'Mystery player';
    }
  
    async playSequence() {
      await delay(500);
      for (const btn of this.sequence) {
        await btn.press(1.0);
        await delay(100);
      }
    }
  
    addButton() {
      const btn = this.getRandomButton();
      this.sequence.push(btn);
    }
  
    updateScore(score) {
      const scoreEl = document.querySelector('#score');
      scoreEl.textContent = score;
    }
  
    async buttonDance(laps = 1) {
      for (let step = 0; step < laps; step++) {
        for (const btn of this.buttons.values()) {
          await btn.press(0.0);
        }
      }
    }
  
    getRandomButton() {
      let buttons = Array.from(this.buttons.values());
      return buttons[Math.floor(Math.random() * this.buttons.size)];
    }
  
    saveScore(score) {
      const userName = this.getPlayerName();
      let scores = [];
      const scoresText = localStorage.getItem('scores');
      if (scoresText) {
        scores = JSON.parse(scoresText);
      }
      scores = this.updateScores(userName, score, scores);
  
      localStorage.setItem('scores', JSON.stringify(scores));
    }
  
    updateScores(userName, score, scores) {
      const date = new Date().toLocaleDateString();
      const newScore = { name: userName, score: score, date: date };
  
      let found = false;
      for (const [i, prevScore] of scores.entries()) {
        if (score > prevScore.score) {
          scores.splice(i, 0, newScore);
          found = true;
          break;
        }
      }
  
      if (!found) {
        scores.push(newScore);
      }
  
      if (scores.length > 10) {
        scores.length = 10;
      }
  
      return scores;
    }
  }
  
  const game = new Movies();
  
  function delay(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, milliseconds);
    });
  }
  
  function loadSound(filename) {
    return new Audio('assets/' + filename);
  }
  
  setInterval(() => {
    const score = Math.floor(Math.random() * 3000);
    const chatText = document.querySelector('#user-messages');
    chatText.innerHTML =
      `<div class="event"><span class="user-event">Eich</span> scored ${score}</div>` + chatText.innerHTML;
  }, 5000);
  