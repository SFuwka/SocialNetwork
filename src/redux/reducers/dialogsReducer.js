const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SELECT_DIALOG = 'SELECT-DIALOG'

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            if (!state.selectedDialog && state.selectedDialog !== 0) {
                return
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



