# Startup
### Elevator Pitch
Introducing Cheddar Bob, your one-stop destination for all things movies! Are you a film enthusiast or a casual moviegoer looking for the perfect film to watch tonight? Look no further. Cheddar Bob is your go-to platform for discovering, sharing, and discussing your favorite films.

With "Cheddar Bob", you can effortlessly browse through a library of movie reviews written by passionate cinephiles just like you. Get honest, real-world insights into the latest blockbusters, hidden gems, and timeless classics. Whether you're searching for heart-pounding action, heartwarming dramas, or laugh-out-loud comedies, our user-generated reviews help you make informed decisions about your next movie night.

But that's not all! "Cheddar Bob" also empowers you to become a part of our vibrant community of film buffs. Share your thoughts, opinions, and critiques by writing your own movie reviews. Express your passion for cinema, engage in spirited discussions, and connect with fellow movie lovers from around the globe.
### Design
![Screenshot](screenshot.png)

### Key Features
- Secure login over HTTPS
- Ability to select the movie to read a review
- Display of movies
- Ability to select, write, and publish a review
- Reviews from all users displayed in realtime
- Reviews are persistently stored
- Ability to see who online currently
- Users also get suggested a random movie to watch on the about page
### Technologies
I am going to use the required technologies in the following ways.

- HTML - Three HTML pages. One for login, one for viewing and reviewing movies and on for an about page that also recomneds a movie to you.
- CSS - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- JavaScript - Provides login, choice display, backend endpoint calls.
- Service - Backend service with endpoints for:
  * login
  * retrieving movies
  * submitting reviews
  * retrieving movies to watch
- DB - Store users, movies, and reviews in database.
- Login - Register and login users. Credentials securely stored in database.
- WebSocket - As each user gets on their presence is broadcast to all other users.
- React - Application ported to use the React web framework.
