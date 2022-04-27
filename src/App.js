import React from 'react';
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import NavBar from './components/NavBar/Index'
import './App.css';
import Welcome from './Pages/Welcome/Index';

function App() {
  return (
<>
<NavBar />
<Routes>
<Route path="/" element={<Welcome />}/ >
</Routes>
    </>
  );
}

export default App;
