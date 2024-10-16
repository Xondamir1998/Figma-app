import './App.css';
import HeaderTop from './components/headerTop/HeaderTop';
import Navbar from './components/navbar/Navbar';
import Place_order from './components/head/Head';
import About_us from './components/content_1/Content_1';
import How_it_works from './components/content_2/Content_2';
import Our_menu from './components/content_3/Content3';
import FAQ from './components/content_4/Content_4';
import Phone from './components/content_5/Content_5';
import Order_now from './components/content_6/Content_6';
import Footer from './components/content_7/Content_7';


function App() {
  return (
    <div className="App">
      <HeaderTop/>
      <Navbar/>
      <Place_order/>
      <About_us/>
      <How_it_works/>
      <Our_menu/>
      <FAQ/>
      <Phone/>
      <Order_now/>
      <Footer/>
    </div>
  );
}

export default App;
