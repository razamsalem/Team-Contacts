const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from './cmps/AppHeader.jsx'
import { Home } from './views/Home.jsx'

export function App() {
    return (
        <Router>
            <section className="app">
                <AppHeader />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </section>
        </Router>
    )
}
