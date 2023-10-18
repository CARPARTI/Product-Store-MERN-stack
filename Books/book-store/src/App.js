import React from "react";
import Header from "./components/Header";
import {  Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import Login from "./components/Login";
import PrivateRoute from "./components/Protected-route";

//Imports components from each directory
function App() {

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/login" element={<Login/>} exact/>
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<Home/>}/>
          </Route>
          <Route path="/add" element={<PrivateRoute />} exact >
              <Route exact path='/add' element={<AddBook/>}/>
          </Route>
          <Route path="/books" element={<PrivateRoute />} exact >
                <Route exact path='/books' element={<Books/>}/>
          </Route>
          <Route path="/about" element={<PrivateRoute/>} exact >
              <Route exact path='/about' element={<About/>}/>
          </Route>
          <Route path="/books/:id" element={<PrivateRoute />} exact >
              <Route exact path='/books/:id' element={<BookDetail/>}/>
          </Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;