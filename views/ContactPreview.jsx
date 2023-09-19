const { useNavigate } = ReactRouterDOM

export function ContactPreview({ contact }) {
    const navigate = useNavigate()

    return (
        <article className="contact-preview" onClick={() => { navigate(`/contact/${contact._id}`) }}>
            <h4>{contact.firstName} {contact.lastName}</h4>
            <h5>{contact.email}</h5>
            <p>{contact.phone}</p>
        </article>
    )
}
