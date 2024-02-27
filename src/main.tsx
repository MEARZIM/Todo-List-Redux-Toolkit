import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'; 
import { Store } from './app/Store.ts'

import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
    <App />
  </Provider>,
)
