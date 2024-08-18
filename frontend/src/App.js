import Navbar from "./components/navbar/Navbar";
import Main from "./pages/main/Main";
import Details from "./pages/details/Details";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/details" element={<Details />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
