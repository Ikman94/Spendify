import './App.css';
import AboutUs from './Component/AboutUs';
import Blog from './Component/Blog';
import ContactUs from './Component/ContactUs';
import Features from './Component/Features';
import Header from './Component/Header';
import Questions from './Component/Questions';
import Slider from './Component/Slider';


function App() {

  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Slider />
      </div>

      <div className="" id="aboutUs">
        <AboutUs />
      </div>

      <div id="features">
        <Features />
      </div>

      <div className="features-bg mb-5 pb-5" id="questions">
        <Questions />
      </div>

      <div className="features-bg pb-5" id="blog">
        <Blog />
      </div>

      <div className="features-bg pb-5" id="contactUs">
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
