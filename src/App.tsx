/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Y2KDecorations } from './components/Y2KDecorations';
import { HomePage } from './pages/Home';
import { TrinkletsPage } from './pages/TrinkletsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const { pathname } = useLocation();
  const decorationVariant = pathname === '/trinklets'
    ? 'trinklets'
    : pathname === '/about'
      ? 'about'
      : pathname === '/contact'
        ? 'contact'
        : 'home';

  return (
    <div className="relative min-h-screen antialiased selection:bg-y2k-pink selection:text-white">
      <Navigation />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trinklets" element={<TrinkletsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Y2KDecorations variant={decorationVariant} />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
