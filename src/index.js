import './styles/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './scripts/App'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './scripts/components/ScroolToTop'

ReactDOM.render(
<React.StrictMode>
    <BrowserRouter>
        <ScrollToTop/>
        <App />
    </BrowserRouter>
</React.StrictMode>
, document.querySelector("#root"))