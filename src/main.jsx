import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Utils/router.jsx'
import Context from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router}></RouterProvider>
    </Context>
  </StrictMode>,
)
