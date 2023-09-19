import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { addContact, loadContacts, removeContact } from "../store/actions/contact.action.js"
const { useEffect } = React
const { useSelector } = ReactRedux

export function ContactIndex() {
    const contacts = useSelector(storeState => storeState.contactModule.contacts)

    useEffect(() => {
        loadContacts()
            .catch(err => console.log(err))
    }, [])

    function onAddContact(ev, contact) {
        ev.preventDefault()
        addContact(contact)
            .then(showSuccessMsg('Added new contact!'))
            .catch(err => showErrorMsg(err))
    }

    function onRemoveContact(contactId) {
        removeContact(contactId)
            .then(showSuccessMsg(`Removed contact -${contactId}`))
            .catch(err => showErrorMsg(err))
    }

    return (
        <section className="contact-index">
            {/* <ContactList contacts={contacts} /> */}
            <h1>Contact Index</h1>
            {JSON.stringify(contacts)}
        </section>
    )
}