import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import './globals.css'
import { LoaderComponent } from './components'

createRoot(document.querySelector('#root')!).render(
    <StrictMode>
        <Suspense fallback={<LoaderComponent />}>
            <App />
        </Suspense>
    </StrictMode>
)
