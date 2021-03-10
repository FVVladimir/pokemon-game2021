import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

import Bg from '../src/pic/bg2.jpg';
import './App.css';

const App = () => {

  return (
    <>
      <Header />
      <Layout
        title={'hello'}
        desc={'world'}
      />
      <Layout
        colorBg={Bg}
      />
      <Layout />
      <Footer />
    </>

  );
}

export default App;
