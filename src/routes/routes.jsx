import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../pages/Home';
import Repositorio from "../pages/repositorio";


export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/repositorio' element={<Repositorio />} />
            </Routes>
        </BrowserRouter>
    );
}