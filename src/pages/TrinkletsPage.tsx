import { useState } from 'react';
import { motion } from 'motion/react';
import { products, type Product } from '../data/products';
import { ProductModal } from '../components/ProductModal';

export function TrinkletsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen antialiased selection:bg-y2k-pink selection:text-white relative overflow-hidden">
      {/* Hero Banner */}
      <section className="site-default-background relative pt-28 pb-16 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl mb-4 text-white">
              THE <span className="chrome-text">DROP</span>
            </h1>
            <p className="pixel-text text-white/80 text-lg">
              Select a trinklet to view details
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="site-default-background py-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {products.map((product, idx) => (
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
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
