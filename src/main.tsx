import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ErrorBoundary from './_errorBoundary'
import App from './app'
import './globals.css'

createRoot(document.querySelector('#root')!).render(
    <StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </StrictMode>
)
