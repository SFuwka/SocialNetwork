const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SELECT_DIALOG = 'SELECT-DIALOG'

const initialState = {
    dialogItems: [
        {
            id: 1, name: "Jian YANG",
            messages: [{ id: 1, msg: 'my id 1', self: false },
            { id: 2, msg: "What the hell 2", self: true },
            { id: 3, msg: "What the hell 3", self: false },
            { id: 4, msg: "What the hell 4 some long long long very very very long message maybe a litle bit longer and so on so on and so on btw React is cool and node.js cool too express i like and so maybe enought with that hmmmmm...", self: true },
            { id: 5, msg: "message with id 5 and for other side i need to use the same thing i know about lorem ipsum but i want to write in english so probably i learn something anyway this message is for test purposes only hmmm did i spell this word right? Or not? tell me if you read this", self: false },
            { id: 5, msg: "message with id 6 and for other side i need to use the same thing i know about lorem ipsum but i want to write in english so probably i learn something anyway this message is for test purposes only hmmm did i spell this word right? Or not? tell me if you read this", self: true },
            { id: 6, msg: "Yo", self: false },]
        },
        {
            id: 2, name: "Richard Hendricks",
            messages: [{ id: 1, msg: 'Hey Richard 1', self: true },
            { id: 2, msg: "hey Erlich", self: false },
            { id: 3, msg: "message with id 3 with Richard", self: false },
            { id: 4, msg: "Yo", self: false },]
        },
        {
            id: 3, name: "Bertram Gilfoyle",
            messages: [{ id: 1, msg: 'Hey Gilfoyle 1', self: true },
            { id: 2, msg: "hey Erlich", self: false },
            { id: 3, msg: "message with id 3 with Richard", self: false },
            { id: 4, msg: "Yo", self: false },]
        },
        {
            id: 4, name: "Jared Dunn",
            messages: [{ id: 1, msg: 'Hey Jared 1', self: true },
            { id: 2, msg: "hey Erlich", self: false },
            { id: 3, msg: "message with id 3 with Richard", self: false },
            { id: 4, msg: "Yo", self: false },]
        },
    ],
    newMessageBody: '',
    selectedDialog: NaN,
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:

            if (!state.selectedDialog && state.selectedDialog !== 0) {
                return state
            }
            state.dialogItems[state.selectedDialog].messages.push(
                { id: 2, msg: state.newMessageBody, self: true })
            state.newMessageBody = ''
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText
            return state
        case SELECT_DIALOG:
            state.selectedDialog = action.selectedDialog
            return state
        default:
            return state
    }
}

export const selectDialogCreator = (payload) => ({ type: SELECT_DIALOG, selectedDialog: payload - 1 })
export const updateNewMessageBodyCreator = (payload) => ({ type: UPDATE_NEW_MESSAGE_BODY, newText: payload })
export const addMessageActionCreator = (payload) => ({ type: ADD_MESSAGE, id: payload })

export default dialogsReducer



