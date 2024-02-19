
import {
  BrowserRouter as Router,Routes,
  Route
} from "react-router-dom";
import './App.css';
import LoginForm from './Componet/LoginForm/LoginForm';
import RegistrationForm from "./Componet/LoginForm/RegistrationForm";
function App() {
  return (
    <div >
      <Router>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/RegistrationForm" element={<RegistrationForm />} />
                </Routes>
                </Router>
    </div>
  );
}

export default App;
