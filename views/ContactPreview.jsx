export function ContactPreview({ contact }) {
    return (
        <article className="contact-preview">
            <h4>{contact.firstName} {contact.lastName}</h4>
            <h5>{contact.email}</h5>
            <p>{contact.phone}</p>
        </article>
    )
}
