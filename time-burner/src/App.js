//import logo from './logo.svg';
import "./App.css";
import { RecoilRoot } from "recoil";
import { Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import MainLayout from "./shared/MainLayout";
import Store from "./store/Store";

function App() {
    return (
        <RecoilRoot>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index path="/" element={<Main />} />
                    <Route path="store" element={<Store />} />
                </Route>
            </Routes>
        </RecoilRoot>
    );
}

export default App;
