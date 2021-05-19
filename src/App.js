import './App.css';
import {Route} from "react-router-dom";
import NavBar from './Components/NavBar'
import AboutPage from './Components/AboutPage'
import HomePage from './Components/HomePage'

function App() {
  return (
    <div className="App">
      <h1>Fauxtube</h1>
      <NavBar />
      <Route path="/AboutPage" component={AboutPage}/>
      <Route path="/HomePage" component={HomePage}/>
    </div>
  );
}

export default App;
