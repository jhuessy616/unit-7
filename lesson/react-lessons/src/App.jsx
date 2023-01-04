import './App.css';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Monkey from './components/monkey/Monkey';




function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Hi from app.js</h1>
      <Monkey />
      <Footer/>
    </div>
  );
}

export default App;
