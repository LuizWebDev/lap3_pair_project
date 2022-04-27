import React from 'react';
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import NavBar from './components/NavBar/Index'
import './App.css';
import Welcome from './Pages/Welcome/Index';
import Search from './Pages/Search/Index';

function App() {
  return (
<>
<NavBar />

<Routes>
<Route path="/" element={<Welcome />}/ >
<Route path="search" element={<Search />}/ >
</Routes>
    </>
  );
}

export default App;
