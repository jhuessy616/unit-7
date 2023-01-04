import './App.css';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import ChallengeOneInstructions from "./components/challenges/ChallengeOneInstructions"
import AboutMe from './components/aboutme/AboutMe';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Hello from app</h1>
      <ChallengeOneInstructions/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;