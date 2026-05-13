import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import RecipePage from "./pages/RecipePage";
import AdminPage from "./pages/AdminPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TestPage from "./test/page"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/admin" element={<AdminPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;