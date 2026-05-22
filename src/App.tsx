import type { FC } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';

const App: FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#07070f]">
        <Header />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
