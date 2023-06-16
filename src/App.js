import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import AddNewPerson from './Components/AddNewPerson';
import RetriveInformation from './Components/RetriveInformation';

function App() {
  return (
    <>
    <Header/>
    

    <Routes>
      <Route path='/addnewperson' element={<AddNewPerson/>}/>
      <Route path='/retriveinformation' element={<RetriveInformation/>}/>
    </Routes>
    </>
  );
}

export default App;
