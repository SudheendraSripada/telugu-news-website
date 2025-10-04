import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import ArticleDetail from "@/react-app/pages/ArticleDetail";
import CategoryPage from "@/react-app/pages/CategoryPage";
import StatesPage from "@/react-app/pages/StatesPage";
import StateDetailPage from "@/react-app/pages/StateDetailPage";
import DistrictNewsPage from "@/react-app/pages/DistrictNewsPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:slug" element={<ArticleDetail />} />
        <Route path="/category/:categorySlug" element={<CategoryPage />} />
        <Route path="/states" element={<StatesPage />} />
        <Route path="/state/:stateSlug" element={<StateDetailPage />} />
        <Route path="/district/:stateSlug/:districtSlug" element={<DistrictNewsPage />} />
      </Routes>
    </Router>
  );
}
