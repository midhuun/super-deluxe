import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import MenuContext from './context/MenuContext.tsx'
import store from './store/store.ts'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <MenuContext>
    <Provider store={store}>
    <App />
    </Provider>
    </MenuContext>
  </StrictMode>,
)
