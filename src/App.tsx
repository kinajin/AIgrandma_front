
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LanguagePage from './pages/LanguagePage';
import CuisinePage from './pages/CuisinePage';
import IngredientPage from './pages/IngredientPage';
import RecipePage from './pages/RecipePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LanguagePage />} />
        <Route path="/cuisine" element={<CuisinePage />} />
        <Route path="/ingredients" element={<IngredientPage />} />
        <Route path="/recipe" element={<RecipePage />} />
      </Routes>
    </Router>
  );
}

export default App;
