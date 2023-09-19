import { addContact } from "../store/actions/contact.action.js"
const { useState } = React

export function EditAddContact() {

    const [contactToEdit, editContact] = useState({})

    function saveContact(ev) {
        ev.preventDefault()
        addContact(contactToEdit)
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break;

            case 'checkbox':
                value = target.checked
                break

            default:
                break;
        }
        editContact({ ...contactToEdit, [field]: value })
    }

    return (
        <section className="edit-add-contact">
            <form onChange={handleChange} onSubmit={saveContact}>
                <label>
                    First name:
                    <input type="text" name="firstName" />
                </label>
                <label>
                    Last name:
                    <input type="text" name="lastName" />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <label>
                    Phone:
                    <input type="text" name="phone" />
                </label>
                <label>
                    DESC:
                    <input type="text" name="desc" />
                </label>
                <button>Add</button>
            </form>
        </section>
    )
}