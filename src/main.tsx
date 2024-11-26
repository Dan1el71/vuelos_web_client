import { createRoot } from 'react-dom/client'
import '@styles/index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} future={{ v7_startTransition: true }} />
)
