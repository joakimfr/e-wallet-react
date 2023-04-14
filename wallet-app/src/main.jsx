import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/cardReducer'

const store = legacy_createStore( // Inititierar en store
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={ store }> { /** Gör Redux store tillgänglig för React-applikationen */ }
      <App />
    </Provider>
  </React.StrictMode>,
)
