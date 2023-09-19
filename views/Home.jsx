import { loadContacts } from '../store/actions/contact.action.js'
import { ContactIndex } from './ContactIndex.jsx'

const { useEffect } = React
const { useSelector } = ReactRedux

export function Home() {
    const contacts = useSelector(storeState => storeState.contactModule.contacts)

    useEffect(() => {
        loadContacts()

            .catch(err => {
                console.log(err)
            })
    }, [])


    return <section className="home">
        <ContactIndex />
    </section>
}