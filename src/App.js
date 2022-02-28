import './App.css';

import { BrowserRouter, Route, Link, Routes, Outlet } from 'react-router-dom'

import TopBar from './components/TopBar';
import Banner from './components/Banner';
import StoreListing from './components/StoreListing'

function App() {
  return (
    <div className="App">
      <TopBar />
      <Banner />
      <StoreListing />
    </div>
  );
}

export default App;
