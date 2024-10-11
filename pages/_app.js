import React from 'react';
import { store } from '../redux/store'
import GlobalStyles from '@iso/assets/styles/globalStyle';
import { Provider } from 'react-redux'

function App({ Component, pageProps }) {

  return <Provider store={store}>
      <GlobalStyles />
    <Component {...pageProps} />
  </Provider>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

export default App
