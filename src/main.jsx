import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Testimonios from './assets/components/testimonios'


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App />
<Testimonios/>
</BrowserRouter>
)
