import React from 'react'
import ReactDOM from 'react-dom/client'
import AppLayout from './components/AppLayout'
import './scss/style.scss'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>,
)
