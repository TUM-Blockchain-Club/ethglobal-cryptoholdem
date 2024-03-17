import React from 'react';
import './App.css';
import MainPage from "./components/MainPage";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <MainPage/>
    </div>
  );
}

export default App;
