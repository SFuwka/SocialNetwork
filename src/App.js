import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import ContentContainer from './components/Content/ContentContainer'
import { BrowserRouter as Router } from "react-router-dom";
import Friends from './components/Friends/Friends';



function App(props) {
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Friends friendsList = {props.state.friendsPage}/>
        <ContentContainer state={props.state} />
      </div>
    </Router >
  );
}

export default App
