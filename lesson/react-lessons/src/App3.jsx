import './App.css';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Presidents from './components/presidents/Presidents';



function App() {
  return (
    <div className="App">
      <Header/>
<Presidents />
      <Footer/>
    </div>
  );
}

export default App;
