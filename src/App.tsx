/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Collection } from './components/Collection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen antialiased selection:bg-y2k-pink selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Collection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
