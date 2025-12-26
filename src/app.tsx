import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router'
import './i18n/i18n'
import { store } from './store/store'
import { LandingScreen } from './views'

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingScreen />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
