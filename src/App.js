import './scss/style.scss';
import './fonts/fonts.css';

import Footer from './components/common/Footer';
import Header from './components/common/Header.js';
import RichMediaSection from './components/richMediaSection';

function App() {
  return (
    <div className="App">
      <Header />
      <RichMediaSection />
      <Footer />
    </div>
  );
}

export default App;
