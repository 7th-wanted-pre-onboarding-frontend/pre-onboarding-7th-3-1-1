import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './components/GlobalStyle';
import Pages from './components/pages';
import store from './utils/store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Pages.Home />
        <GlobalStyle />
      </Provider>
    </div>
  );
}

export default App;
