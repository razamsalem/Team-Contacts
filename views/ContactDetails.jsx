const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { contactService } from "../services/contact.service.js"
import { showErrorMsg } from "../services/event-bus.service.js"

export function ContactDetails() {
    const [contact, setContact] = useState(null)
    const { contactId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadContact()
    }, [contactId])

    function loadContact() {
        contactService.getById(contactId)
            .then(contact => setContact(contact))
            .catch(err => {
                console.log('Had issues in contact details', err)
                showErrorMsg('Cannot load contact')
                // navigate('/contact')
                // navigate('/')
            })
    }

    if (!contact) return <div>Loading...</div>
    return (
        <section className="contact-details">
            <h1>Name: {contact.firstName + ' ' + contact.lastName}</h1>
            <h3>Email: {contact.email}</h3>
            <h3>Phone: {contact.phone}</h3>
            <p><span className="bold">About me:</span> {contact.desc}</p>
            <Link to="/contact">Back</Link>
        </section>
    )
}