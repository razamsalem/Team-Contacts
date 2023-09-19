import { loadContacts } from '../store/actions/contact.action.js'

const { useEffect } = React
const { useSelector } = ReactRedux

export function Home() {
    const contacts = useSelector(storeState => storeState.contactModule.contacts)

    useEffect(() => {
        loadContacts()

            .catch(err => {
                console.log(err)
            })
        console.log('sup')
    }, [])


    return <section className="home">
        <h1>Welcome to home page!</h1>
    </section>
}