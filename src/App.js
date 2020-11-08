import logo from './logo.svg';
import './App.css';
import store from './app/store';
import Grid from './components/Grid';
import { Provider } from 'react-redux';


function App() {
  return (
    <div>
      <Provider store={store}>
        <Grid />
      </Provider>
    </div>
  );
}

export default App;
