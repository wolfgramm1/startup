import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import { Login } from './login/login';
import { Movies } from './movies/movies';
// import { Scores } from './scores/scores';
import { About } from './about/about';



export default function App() {
  return (
    <BrowserRouter>
        <div className='body bg-dark text-light'>
        <header className='container-fluid'>
        <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
            Cheddar Bob<sup></sup>
            </div>
            <menu className='navbar-nav'>
            <li className='nav-item'>
                <NavLink className='nav-link' href='index.html'>
                Home
                </NavLink>
            </li>
            <li className='nav-item'>
            <NavLink className='nav-link' href='movies.html'>
                Movies
                </NavLink>
            </li>
            <li className='nav-item'>
            <NavLink className='nav-link' href='about.html'>
                About
                </NavLink>
            </li>
            </menu>
        </nav>
        </header>

        <main>App components go here</main>

        <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/movies' element={<Movies />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className='bg-dark text-white-50'>
        <div className='container-fluid'>
            <span className='text-reset'>Author Name(s)</span>
            <a className='text-reset' href='https://github.com/webprogramming260/simon-react'>
            Source
            </a>
        </div>
        </footer>
    </div>
  </BrowserRouter>
    
  );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }