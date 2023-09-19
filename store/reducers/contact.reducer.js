export const SET_CONTACTS = 'SET_CONTACTS'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'
export const ADD_CONTACT = 'ADD_CONTACT'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'

// export const SET_FILTER = 'SET_FILTER'
// export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'
export const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    contacts: [],
    isLoading: false
    // filter: 'all',
    // searchQuery: '',
}

export function contactReducer(state = initialState, action = {}) {
    let contacts
    switch (action.type) {
        case SET_CONTACTS:
            return { ...state, contacts: action.contacts }

        case REMOVE_CONTACT:
            contacts = state.contacts.filter(contact => contact._id !== action.contactId)
            return { ...state, contacts }

        case ADD_CONTACT:
            contacts = [...state.contacts, action.contact]
            return { ...state, contacts }

        case UPDATE_CONTACT:
            contacts = state.contacts.map(contact => contact._id === action.contact._id ? action.contact : contact)
            return { ...state, contacts }

        //Filter
        // case SET_FILTER:
        //     return { ...state, filter: action.newFilter }

        // case SET_SEARCH_QUERY:
        //     return { ...state, searchQuery: action.searchQuery }

        //Contact general
        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading}

        default:
            return state
    }

}