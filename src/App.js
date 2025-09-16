import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GroupsGrid from './components/GroupsGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />

      <HeroSection />

      <div className="container my-5">
        <GroupsGrid />
      </div>

      <Footer />
    </div>
  );
}

export default App;
