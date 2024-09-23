import './App.css';
import HeaderTop from './components/headerTop/HeaderTop';
import Navbar from './components/navbar/Navbar';
import Head from './components/head/Head';
import Content_1 from './components/content_1/Content_1';
import Content_2 from './components/content_2/Content_2';
import Content_3 from './components/content_3/Content3';
import Content_4 from './components/content_4/Content_4';
import Content_5 from './components/content_5/Content_5';
import Content_6 from './components/content_6/Content_6';
import Content_7 from './components/content_7/Content_7';


function App() {
  return (
    <div className="App">
      <HeaderTop/>
      <Navbar/>
      <Head/>
      <Content_1/>
      <Content_2/>
      <Content_3/>
      <Content_4/>
      <Content_5/>
      <Content_6/>
      <Content_7/>
    </div>
  );
}

export default App;
