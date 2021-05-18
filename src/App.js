import './App.css';
import {Route} from "react-router-dom";
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className="App">
      <h1>Fauxtube</h1>
      <NavBar />
      <Route path="/AboutPage" component={NavBar}/>
    </div>
  );
}

export default App;
