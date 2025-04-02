import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Details from "./pages/details/Details";
import Footer from "./components/footer/Footer";
import CategoryBasedPosts from "./pages/category based posts/CategoryBasedPosts";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/details/:slug" element={<Details />} />
                <Route path="/category/:id" element={<CategoryBasedPosts />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
