import { ContactPreview } from "./ContactPreview.jsx"

export function ContactList({ contacts }) {
    return (
        <ul>
            {contacts.map(contact => <ContactPreview key={contact._id} contact={contact} />)}
        </ul>
    )
}