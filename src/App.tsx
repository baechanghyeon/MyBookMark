import { Global } from '@emotion/react';
import Router from './routes/Router';
import reset from './styles/reset';

function App() {
  return (
    <div>
      <Global styles={reset} />
      <Router />
    </div>
  );
}

export default App;
