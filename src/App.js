import './App.css';
import {Route} from "react-router-dom";
import NavBar from './Components/NavBar'
import AboutPage from './Components/AboutPage'
import HomePage from './Components/HomePage'
import Video from './Components/Video';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState();

  return (
    <div className="App">
      <NavBar />
      <Route path="/videos/:id" component={Video}/>
      <Route path="/AboutPage" component={AboutPage}/>
      <Route exact path="/">
        <HomePage search={search} setSearch={setSearch}/>
      </Route>
    </div>
  );
}

export default App;
