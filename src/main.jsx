import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SmoothScroll from './components/SmoothScroll.jsx'
import 'remixicon/fonts/remixicon.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScroll />
    <RouterProvider router={router} />
  </StrictMode>,
)
