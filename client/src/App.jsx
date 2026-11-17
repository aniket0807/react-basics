import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Products from "./pages/Products";

import "./App.css";

function App() {
    return (
        <>
            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/registration"
                    element={<Registration />}
                />

                <Route
                    path="/products"
                    element={<Products />}
                />

                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>
        </>
    );
}

export default App;