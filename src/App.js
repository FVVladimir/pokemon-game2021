import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

import Bg2 from './pic/bg2.jpg';
import './App.css';

const App = () => {

  return (
    <>
      <Header

        title='POCKEMON GAME'
      />
      <Layout
        urlBg={Bg2}
      />
      <Layout
        colorBg='lightgray'
      />
      <Layout
        colorBg='red'
        title='therd layout'
      />
      <Footer />
    </>

  );
}

export default App;
