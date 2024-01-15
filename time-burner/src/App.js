import logo from './logo.svg';
import './App.css';
import {RecoilRoot} from 'recoil'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path='/' element={<div>a</div>}/>
        <Route path='/b' element={<div>b</div>}/>
      </Routes>
    </RecoilRoot>
  );
}

export default App;
