import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, type Product } from '../data/products';
import { ProductModal } from '../components/ProductModal';

export function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen antialiased selection:bg-y2k-pink selection:text-white relative overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section
        id="hero"
        className="bg-transparent relative min-h-screen pt-28 pb-10 flex flex-col items-center justify-center overflow-hidden scroll-mt-0"
      >
        {/* Logo Image */}
        <div className="relative z-10 w-full mx-auto px-4 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: -3 }}
            transition={{ type: 'spring', bounce: 0.4, duration: 1 }}
            className="relative flex flex-col items-center"
          >
            <div className="hero-logo-window">
              <motion.div
                className="hero-wordmark"
                data-text="EONNIE"
                animate={{ rotate: [-2, 0, -2] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              >
                EONNIE
              </motion.div>
              <div className="hero-wordmark-stars" aria-hidden="true">
                <span>*</span><span>*</span><span>*</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex justify-center -mt-20 md:-mt-28 -rotate-2"
            >
              <span className="chrome-plate inline-block text-black font-display font-bold text-sm sm:text-lg md:text-2xl px-5 py-1.5 md:px-8 md:py-2">
                ANIK-ANIK
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Tagline + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative z-10 text-center mt-8 md:mt-12 px-4"
        >
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/trinklets"
              className="inline-flex items-center gap-2 bg-[#d8ff68] text-black font-bold text-base md:text-lg px-7 py-3.5 rounded-full shadow-[4px_4px_0px_0px_#ff3fa4] border-2 border-black hover:bg-y2k-pink hover:text-black transition-colors"
            >
              ENTER SHOP
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== FEATURED PRODUCTS SECTION ===== */}
      <section className="bg-transparent py-24 px-4 relative overflow-hidden">

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-4xl md:text-6xl mb-4">
              <span className="y2k-white-text">FEATURED</span> <span className="chrome-text">DROPS</span>
            </h2>
            <p className="pixel-text text-gray-100">
              Sneak peek at what's trending
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedProduct(product)}
                className="product-card border-4 border-black brutal-shadow group flex flex-col bg-gradient-to-br from-white to-[#fcf0f8] hover:from-[#fcf0f8] hover:to-[#e8e4ff]"
              >
                <div className="card-img-wrap aspect-square bg-y2k-blue/10 border-b-4 border-black relative overflow-hidden rounded-t-[1.25rem] p-6">
                  {product.label && (
                    <div className="absolute top-4 left-4 z-10 bg-y2k-pink text-white font-bold pixel-text text-xs px-3 py-1.5 rounded-full border-2 border-black brutal-shadow rotate-[-5deg]">
                      {product.label}
                    </div>
                  )}
                  <div className="w-full h-full rounded-xl border-4 border-black brutal-shadow overflow-hidden bg-white">
                    <img
                      src={product.mainImage}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between rounded-b-[1.25rem]">
                  <div>
                    <div className="pixel-text text-xs text-gray-500 mb-2 uppercase">
                      {product.category}
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-bold text-xl">{product.price}</span>
                    <span className={`text-xs font-bold px-2 py-1 rounded border border-black ${
                      product.status === 'sold-out' ? 'bg-red-500 text-white' : 'bg-black text-white'
                    }`}>
                      {product.status === 'sold-out' ? 'SOLD OUT' : 'AVAILABLE'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/trinklets"
                className="inline-flex items-center gap-2 bg-[#d8ff68] text-black font-bold text-base px-8 py-3.5 rounded-full shadow-[4px_4px_0px_0px_#ff3fa4] border-2 border-black hover:bg-y2k-pink transition-colors"
              >
                VIEW ALL TRINKLETS
              </Link>
            </motion.div>
          </div>
        </div>

        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </section>
    </div>
  );
}
