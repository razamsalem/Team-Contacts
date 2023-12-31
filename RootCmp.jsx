const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter
const { Provider } = ReactRedux

import { AppHeader } from './cmps/AppHeader.jsx'
import { store } from './store/store.js'
import { ContactIndex } from './views/ContactIndex.jsx'
import { ContactDetails } from './views/ContactDetails.jsx'
import { ContactEditAdd } from './cmps/ContactEditAdd.jsx'
import { Home } from './views/Home.jsx'

export function App() {

    return (
        <Provider store={store}>
            <Router>
                <section className="app">
                    <AppHeader />
                    <Routes>
                        <Route path="/" element={<ContactIndex />} />
                        <Route path="/contact/edit" element={<ContactEditAdd />} />
                        <Route path="/contact/:contactId" element={<ContactDetails />} />
                    </Routes>
                </section>
            </Router>
        </Provider>
    )
}
