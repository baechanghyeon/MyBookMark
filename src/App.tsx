import { Global } from '@emotion/react';
import Footer from './components/Footer';
import Header from './components/Header';
import Router from './routes/Router';
import reset from './styles/reset';

function App() {
  return (
    <div>
      <Global styles={reset} />
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
