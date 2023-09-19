import { showSuccessMsg } from "../../services/event-bus.service.js"
import { contactService } from "../../services/contact.service.js"
import { ADD_CONTACT, SET_CONTACTS, REMOVE_CONTACT, SET_IS_LOADING } from "../reducers/contact.reducer.js"
import { store } from "../store.js"

export function loadContacts() {

    store.dispatch({ type: SET_IS_LOADING, isLoading: true })
    return contactService.query()
        .then(contacts => {
            showSuccessMsg('Contacts Reloaded successfully')
            store.dispatch({ type: SET_CONTACTS, contacts })
        })
        .catch(err => {
            console.log('contact action -> cannot load contacts', err)
            throw err
        })
        .finally(() => {
            store.dispatch({ type: SET_IS_LOADING, isLoading: false })
        })
}

export function removeContact(contactId) {
    return contactService.remove(contactId)
        .then(() => {
            store.dispatch({ type: REMOVE_CONTACT, contactId })
        })
        .catch(err => {
            console.log('contact action -> cannot remove contact', err)
            throw err
        })
}

export function addContact(contact) {
    return contactService.save(contact)
        .then((res) => { store.dispatch({ type: ADD_CONTACT, contact: res }) })
        .catch(err => {
            console.log('Error:', err)
            throw err
        })
}