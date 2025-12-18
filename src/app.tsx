import { BrowserRouter, Route, Routes } from 'react-router'
import { HomeScreen } from './views'
import './i18n/i18n'
import { Provider } from 'react-redux'
import { store } from './store/store'

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
