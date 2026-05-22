import type { FC } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

const App: FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
