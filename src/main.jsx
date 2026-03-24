import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as bootstrap from 'bootstrap'
import './index.css'
import App from './App.jsx'
import { BudgetProvider } from './components/context/BudgetContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BudgetProvider>
      <App />
    </BudgetProvider>

  </StrictMode>,
)
