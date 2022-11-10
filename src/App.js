import './App.css';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';
import Category from './components/Category';
import Chefs from './components/Chefs';
import Choose from './components/Choose';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Home from './components/Home';
import OurMenu from './components/OurMenu';
import Support from './components/Support';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="main-container">
      {/* <div className="home"></div> */}
      <Home/>
      <AboutUs/>
      <Category/>
      <Choose/>
      <Clients/>
      <OurMenu/>
      <Chefs/>
      <Testimonials/>
      <Blogs/>
      <Support/>
      <Footer/>
      {/* <Title align="left">
        <h2>Its Quick &amp; Amusing!</h2>
        <h1><span>Th</span>e Art of speed food Quality</h1>
      </Title>
      <Button>See Menu</Button> */}
    </div>
  );
}

export default App;
