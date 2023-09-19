const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter
const { Provider } = ReactRedux

import { AppHeader } from './cmps/AppHeader.jsx'
import { store } from './store/store.js'
import { ContactIndex } from './views/ContactIndex.jsx'
import { ContactDetails } from './views/ContactDetails.jsx'
import { Home } from './views/Home.jsx'

export function App() {

    return (
        <Provider store={store}>
            <Router>
                <section className="app">
                    <AppHeader />
                    <Routes>
                        <Route path="/" element={<ContactIndex />} />
                    </Routes>
                </section>
            </Router>
        </Provider>
    )
}
