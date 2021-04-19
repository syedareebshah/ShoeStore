import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./comp/About";
import ErrorPage from "./comp/Error";
import Footer from "./comp/Footer";
import Home from './comp/Home'
import Nav from "./comp/Nav";
import SingleProduct from "./comp/SingleProduct";
import Store from "./comp/Store";

function RouterComp() {
    return (
        <div>
            <Router>
                <Nav />
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<About />} path="/About" />
                    <Route element={<Store />} path="/Store" />
                    <Route element={<SingleProduct />} path="/Details:id" />
                    <Route element={<ErrorPage />} path="/*" />


                </Routes>
                <Footer />
            </Router>
        </div>

    );
}

export default RouterComp;
