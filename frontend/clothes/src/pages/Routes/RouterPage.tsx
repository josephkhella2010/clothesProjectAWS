import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "../AboutUs/AboutUsPage";
import RegisterPage from "../Register/RegisterPage";
import LoginPage from "../Login/LoginPage";
import HomePage from "../Home/HomePage";
import ProductPage from "../Product/ProductPage";
import NavigationPage from "../Navigation/NavigationPage";
import FooterSection from "../Footer/FooterSection";
import SingleProductPage from "../SingleProduct/SingleProductPage";

export default function RouterPage() {
  return (
    <Router>
      <NavigationPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/singleproduct/:id" element={<SingleProductPage />} />
      </Routes>
      <FooterSection />
    </Router>
  );
}
