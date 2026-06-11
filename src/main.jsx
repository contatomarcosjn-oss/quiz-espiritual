import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import { installMetaPixelPageViewTracking } from './lib/metaPixel.js'

installMetaPixelPageViewTracking()

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
