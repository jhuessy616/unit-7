import './App.css';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
// import EmployeeInformation from './components/employeeInformation/EmployeeInformation';
// import Employees from './components/employeeInformation/Employees';
import PresidentVoting from './components/voting/PresidentVoting';


function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Hello from app</h1>
     {/* <Employees/>
      <EmployeeInformation name="Connor Shields" city="Orlando" state="Florida" />
      <EmployeeInformation name="Isaac Haynes" city="Atlanta" state="Georgia"/> */}
      <PresidentVoting/>
      <Footer/>
    </div>
  );
}

export default App;