import './App.css';
import Counter from './components/counter/Counter';
import Todo from './components/todo/Todo';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { getStore } from './redux';
// import reducer from './redux';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const store = createStore(reducer);
  const store = getStore()
  return (
    <div className="app">
      <Provider store={store}>
        {/* <Counter /> */}
        <Todo />
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
