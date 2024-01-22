//import logo from './logo.svg';
import "./App.css";
import { RecoilRoot } from "recoil";
import { Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import MainLayout from "./shared/MainLayout";
import Store from "./store/Store";
import UsersItems from "./usersItems/UsersItems";

function App() {
    return (
        <RecoilRoot>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index path="/" element={<Main />} />
                    <Route path="store" element={<Store />} />
                    <Route path="usersItems" element={<UsersItems />} />
                </Route>
            </Routes>
        </RecoilRoot>
    );
}

export default App;
