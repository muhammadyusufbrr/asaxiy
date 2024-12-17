import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'

const App = lazy(() => import('./App.jsx'))

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<div></div>}>
    <StrictMode>
      <App />
    </StrictMode>
  </Suspense>
)
