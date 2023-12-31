import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import demoData from './demo-data.service.js'

const STORAGE_KEY = 'contactsDB'

export const contactService = {
    query,
    getById,
    save,
    remove,
    getEmptyContact,
}

_createContacts()

function query(filterBy = { name: '' }) {
    // return axios.get(BASE_URL).then(res => res.data)
    return storageService.query(STORAGE_KEY)
        .then(contacts => {
            //     if (filterBy.txt)
            //         contacts = contacts.filter(t => t.title.toLowerCase().includes(filterBy.txt.toLowerCase()))
            //     if (filterBy.status === 'done') return contacts.filter(t => t.isDone)
            //     else if (filterBy.status === 'active') return contacts.filter(t => !t.isDone)

            return contacts
        }
    )
}
function getById(contactId) {
    return storageService.get(STORAGE_KEY, contactId)
}
function remove(contactId) {
    // return Promise.reject('Not now!')
    return storageService.remove(STORAGE_KEY, contactId)
}

function save(contact) {
    if (contact._id) {
        return storageService.put(STORAGE_KEY, contact)
    } else {
        // when switching to backend - remove the next line
        // todo.owner = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, contact)
    }
}

function getEmptyContact() {
    return {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        desc: ''
    }
}


function _createContacts() {
    let contacts = utilService.loadFromStorage(STORAGE_KEY)
    if (!contacts || !contacts.length) {
        contacts = demoData
        utilService.saveToStorage(STORAGE_KEY, contacts)
    }
}