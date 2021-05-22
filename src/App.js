import './App.css';
import {Route} from "react-router-dom";
import NavBar from './Components/NavBar'
import AboutPage from './Components/AboutPage'
import HomePage from './Components/HomePage'
import YoutubeAPICalls from './Components/YoutubeAPICalls';
import Video from './Components/Video';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/videos/:id" component={Video}/>
      <Route path="/AboutPage" component={AboutPage}/>
      <Route exact path="/" component={HomePage}/>
    </div>
  );
}

export default App;
