export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 border-t-8 border-y2k-pink text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <h3 className="font-display font-bold text-3xl tracking-widest text-y2k-green">
          EONNIE TRINKLETS
        </h3>
        
        <div className="font-medium flex items-center gap-2 text-lg">
          made with <span className="text-y2k-pink">♡</span> + <span className="text-y2k-blue">✦</span>
        </div>

        <div className="pixel-text text-gray-500 text-xs mt-4">
          © {new Date().getFullYear()} EONNIE TRINKLETS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
