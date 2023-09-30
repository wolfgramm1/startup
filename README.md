# Startup
### Elevator Pitch
Introducing Cheddar Bob, your one-stop destination for all things movies! Are you a film enthusiast or a casual moviegoer looking for the perfect film to watch tonight? Look no further. Cheddar Bob is your go-to platform for discovering, sharing, and discussing your favorite films.

With "Cheddar Bob", you can effortlessly browse through a library of movie reviews written by passionate cinephiles just like you. Get honest, real-world insights into the latest blockbusters, hidden gems, and timeless classics. Whether you're searching for heart-pounding action, heartwarming dramas, or laugh-out-loud comedies, our user-generated reviews help you make informed decisions about your next movie night.

But that's not all! "Cheddar Bob" also empowers you to become a part of our vibrant community of film buffs. Share your thoughts, opinions, and critiques by writing your own movie reviews. Express your passion for cinema, engage in spirited discussions, and connect with fellow movie lovers from around the globe.
### Design
Login Page
![Screenshot](IMG_2127.jpg)
Home Page
![Screenshot](IMG_2128.jpg)
About Page
![Screenshot](IMG_2129.jpg)

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
  * retrieving random movie recomendations to watch
- DB - Store users, movies, and reviews in database.
- Login - Register and login users. Credentials securely stored in database.
- WebSocket - As each user gets on their presence is broadcast to all other users.
- React - Application ported to use the React web framework.

### HTML deliverable
For this deliverable I built out the structure of my application using HTML.

- HTML pages - Three HTML page that represent the ability to login and review movies. At somepoint a database will be connected to the index page to store and retrive user login info
- Links - The login page automatically links to the movie review page. The movie page contains movies that can be reviewed. the reviews will be stored on the database as well.
- Images - Each of the movie choices is represented by a picture of the poster as well as the title.
- Login - Input box and submit button for login. Will be stored in a database
- Database - The movie choices represent data pulled from the database. As well as the reviews being stored there with the movies.
- WebSocket - The users currently active will be shown in realtime. There will also be an API used to suggest random movies in the about page. 
