import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { HashRouter } from 'react-router-dom'
import ContextProvider from './Features/ContextProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
       <ContextProvider>
         <App />
       </ContextProvider>
    </HashRouter>
  </StrictMode>,
)
