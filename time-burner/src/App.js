//import logo from './logo.svg';
import './App.css';
import {RecoilRoot} from 'recoil'
import { Route, Routes } from 'react-router-dom';
import Main from './main/Main';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </RecoilRoot>
  );
}

export default App;
