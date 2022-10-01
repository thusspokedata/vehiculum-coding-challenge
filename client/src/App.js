import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SearchResultPage } from './pages/SearchResultPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<SearchResultPage />} />
        <Route path="/card/:id" element={<ProductDetailPage />} />
        <Route path="/*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export default App;
