import logo from './logo.svg';
import './App.css';
import AppRouter from './component/AppRouter';
import ContextProduct from './Context/ProductContex';

function App() {
  return<>
  <div>
  <ContextProduct>
      <AppRouter/>
  </ContextProduct>
  </div>
  </>
}

export default App;
