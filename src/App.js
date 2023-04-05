import { Route, Routes } from 'react-router-dom';
import HomePage from './PAGES/home/HomePage';
import SinglePropertyForSalePage from './PAGES/property for sale single/SinglePropertyForSalePage';
import FullPropertyListForSalePage from './PAGES/property for sale/FullPropertyListForSalePage';
import PropertyPage from './PAGES/property/PropertyPage';
import SellPage from './PAGES/selling/SellPage';
import Nav from './REUSE COMPONENTS/navbar/Nav';
import FullPropertyListForRentPage from './PAGES/property for rent/FullPropertyForRentPage';
import SinglePropertyForRentPage from './PAGES/property for rent single/SinglePropertyForSalePage';
import ContactPage from './PAGES/Contact/ContactPage';

function App() {
  return (
    <div>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/properties" element={<PropertyPage />} />
          <Route
            path="/property-for-sale"
            element={<FullPropertyListForSalePage />}
          />
          <Route
            path="/single-property-for-sale"
            element={<SinglePropertyForSalePage />}
          />
          <Route
            path="/property-for-rent"
            element={<FullPropertyListForRentPage />}
          />
          <Route
            path="/single-page-property-for-rent"
            element={<SinglePropertyForRentPage />}
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
