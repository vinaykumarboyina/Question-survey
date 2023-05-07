import './App.css';
import Mysurveys from './components/Surveys/mysurveys';
import CreateSurvey from './components/Surveys/createSurvey';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/login';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Mysurveys />} />
      <Route path='/createSurvey' element={<CreateSurvey />} />
     </Routes>
    </div>
  );
}

export default App;
