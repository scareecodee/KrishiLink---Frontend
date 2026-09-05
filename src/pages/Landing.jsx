import { Link } from 'react-router-dom';

const features = [
  { icon: '📊', title: 'Real-Time Price Discovery', desc: 'Compare prices across 50+ mandis instantly. Never undersell again.' },
  { icon: '🤝', title: 'Smart Buyer Matching', desc: 'AI-powered matching connects you with the best buyers for your crop.' },
  { icon: '📈', title: 'AI Price Predictions', desc: 'LSTM model predicts prices for next 7, 15, 30 days with confidence intervals.' },
  { icon: '🚚', title: 'Logistics Integration', desc: 'Get transport cost estimates and connect with verified logistics providers.' },
  { icon: '📦', title: 'Order Management', desc: 'Track orders from listing to payment. Generate invoices automatically.' },
  { icon: '🌍', title: 'Demand Heat Maps', desc: 'See where demand is highest for your crop across regions.' },
];

const steps = [
  { step: '1', title: 'List Your Produce', desc: 'Enter crop type, quantity, quality grade, and location.' },
  { step: '2', title: 'Compare Prices', desc: 'See live prices from nearby mandis and AI predictions.' },
  { step: '3', title: 'Connect & Sell', desc: 'Match with verified buyers and complete secure transactions.' },
];

const testimonials = [
  { name: 'Ramesh Patel', location: 'Nashik, Maharashtra', crop: 'Onion Farmer', quote: 'KrishiLink helped me get 18% more for my onion crop by connecting me with buyers in Delhi APMC.' },
  { name: 'Sunita Devi', location: 'Karnal, Haryana', crop: 'Wheat Farmer', quote: 'The price prediction feature told me to wait 2 weeks. I did and made an extra ₹8,000 on 50 quintals.' },
  { name: 'Krishnaswamy R.', location: 'Coimbatore, Tamil Nadu', crop: 'Banana Grower', quote: 'Found a bulk buyer for 2 tonnes within 24 hours. The matching score was 94 – perfect match!' },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-green-600 flex items-center gap-2">
            🌾 KrishiLink
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-green-600 font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-green-600 font-medium">How it Works</a>
            <a href="#testimonials" className="text-gray-600 hover:text-green-600 font-medium">Testimonials</a>
          </nav>
          <div className="flex items-center space-x-3">
            <Link to="/login" className="text-gray-700 hover:text-green-600 font-medium px-4 py-2">Login</Link>
            <Link to="/register" className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 shadow-md transition-colors">Get Started Free</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10 text-9xl select-none pointer-events-none flex flex-wrap gap-8 p-8">
          {['🌾','🌽','🍅','🥦','🌿','🌱'].map((e,i) => <span key={i}>{e}</span>)}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            🏆 Smart India Hackathon 2026 – Problem ID: 26132
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            Sell Smarter,<br />
            <span className="text-green-600">Earn More</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            KrishiLink connects farmers directly with verified buyers, powered by AI price predictions and real-time mandi data. No middlemen, maximum profit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="bg-green-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-green-700 shadow-xl transition-all transform hover:scale-105">
              I'm a Farmer 🌾
            </Link>
            <Link to="/register" className="bg-white text-green-600 border-2 border-green-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-green-50 shadow-xl transition-all transform hover:scale-105">
              I'm a Buyer 🏪
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-green-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { val: '10,000+', label: 'Farmers Registered' },
              { val: '500+', label: 'Verified Buyers' },
              { val: '50+', label: 'Mandis Covered' },
              { val: '₹50Cr+', label: 'Trade Facilitated' },
            ].map((s,i) => (
              <div key={i}>
                <div className="text-4xl font-extrabold">{s.val}</div>
                <div className="mt-2 text-green-100 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900">Everything a Farmer Needs</h2>
            <p className="mt-4 text-lg text-gray-500">One platform to discover prices, find buyers, and manage your entire agricultural trade.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f,i) => (
              <div key={i} className="p-6 border border-gray-100 rounded-2xl hover:border-green-200 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">{f.title}</h3>
                <p className="text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-500">Start selling in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s,i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900">Trusted by Farmers Across India</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t,i) => (
              <div key={i} className="p-6 border border-gray-100 rounded-2xl shadow-sm">
                <div className="flex mb-3">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-lg">★</span>)}
                </div>
                <p className="text-gray-600 italic mb-4">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.crop} · {t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">Ready to Get the Best Price for Your Crop?</h2>
          <p className="text-green-100 text-lg mb-8">Join 10,000+ farmers who are already selling smarter with KrishiLink.</p>
          <Link to="/register" className="bg-white text-green-600 font-bold px-10 py-4 rounded-xl text-lg hover:bg-green-50 shadow-xl transition-all transform hover:scale-105 inline-block">
            Start for Free Today →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold text-white mb-2">🌾 KrishiLink</div>
          <p className="text-sm">Smart Market Linkage & Price Discovery Platform</p>
          <p className="text-sm mt-2">Team EXCEPTION · Smart India Hackathon 2026 · Problem ID: 26132</p>
        </div>
      </footer>
    </div>
  );
};
export default Landing;
