import './App.css';
import HeaderTop from './components/headerTop/HeaderTop';
import Navbar from './components/navbar/Navbar';
import Place_order from './components/place_order/Head';
import About_us from './components/about_us/Content_1';
import How_it_works from './components/how_works/Content_2';
import Our_menu from './components/menu/Content3';
import FAQ from './components/faq/Content_4';
import Phone from './components/phone/Content_5';
import Order_now from './components/order/Content_6';
import Footer from './components/footer/Content_7';


function App() {
  return (
    <div className="App">
      <div id='home'><HeaderTop/></div>
      <Navbar/>
      <Place_order/>
      <div id='about_us'><About_us/></div>
      <div id='how_works'><How_it_works/></div>
      <Our_menu/>
      <div id='faq'><FAQ/></div>
      <div id='contact'><Phone/></div>
      <Order_now/>
      <Footer/>
    </div>
  );
}

export default App;
