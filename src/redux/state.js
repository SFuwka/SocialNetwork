const ADD_POST = 'ADD-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SELECT_DIALOG = 'SELECT-DIALOG'
const store = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: 1,
                    name: "Jian YANG",
                    msg: "Hey Erlich",
                    avaSrc: process.env.REACT_APP_JIAN_YANG_AVA_SRC,
                    likesCount: 2022,
                },
                {
                    id: 2,
                    name: "Jian YANG",
                    msg: "I eat fish",
                    avaSrc: process.env.REACT_APP_JIAN_YANG_AVA_SRC,
                    likesCount: 5602,
                },
                {
                    id: 3,
                    name: "Jian YANG",
                    msg: "Free rent for one year",
                    avaSrc: process.env.REACT_APP_JIAN_YANG_AVA_SRC,
                    likesCount: 30002,
                },
                {
                    id: 4,
                    name: "Richard Hendricks",
                    msg: "Jobs was a poser, he didn't even write code.",
                    avaSrc: process.env.REACT_APP_RICHARD_AVA_SRC,
                    likesCount: 3034,
                },
                {
                    id: 5,
                    name: "Secret User",
                    msg: "Every day feels like I've died and gone to Hell.",
                    likesCount: "99999+",
                },
            ],
        },
        messagesPage: {
            dialogItems: [
                {
                    id: 1, name: "Jian YANG",
                    messages:
                        [{ id: 1, msg: 'my id 1', self: false },
                        { id: 2, msg: "What the hell 2", self: true },
                        { id: 3, msg: "What the hell 3", self: false },
                        { id: 4, msg: "What the hell 4 some long long long very very very long message maybe a litle bit longer and so on so on and so on btw React is cool and node.js cool too express i like and so maybe enought with that hmmmmm...", self: true },
                        { id: 5, msg: "message with id 5 and for other side i need to use the same thing i know about lorem ipsum but i want to write in english so probably i learn something anyway this message is for test purposes only hmmm did i spell this word right? Or not? tell me if you read this", self: false },
                        { id: 5, msg: "message with id 6 and for other side i need to use the same thing i know about lorem ipsum but i want to write in english so probably i learn something anyway this message is for test purposes only hmmm did i spell this word right? Or not? tell me if you read this", self: true },
                        { id: 6, msg: "Yo", self: false },]
                },
                {
                    id: 2, name: "Richard Hendricks",
                    messages:
                        [{ id: 1, msg: 'Hey Richard 1', self: true },
                        { id: 2, msg: "hey Erlich", self: false },
                        { id: 3, msg: "message with id 3 with Richard", self: false },
                        { id: 4, msg: "Yo", self: false },]
                },
                {
                    id: 3, name: "Bertram Gilfoyle",
                    messages:
                        [{ id: 1, msg: 'Hey Gilfoyle 1', self: true },
                        { id: 2, msg: "hey Erlich", self: false },
                        { id: 3, msg: "message with id 3 with Richard", self: false },
                        { id: 4, msg: "Yo", self: false },]
                },
                {
                    id: 4, name: "Jared Dunn",
                    messages:
                        [{ id: 1, msg: 'Hey Jared 1', self: true },
                        { id: 2, msg: "hey Erlich", self: false },
                        { id: 3, msg: "message with id 3 with Richard", self: false },
                        { id: 4, msg: "Yo", self: false },]
                },
            ],
            newMessageBody: '',
            selectedDialog: NaN,
        },
        friendsPage: {
            friends: [
                { id: 1, name: 'Nelson Bighetti', avaSrc: process.env.REACT_APP_NELSON_AVA_SRC },
                { id: 2, name: 'Monica Hall', avaSrc: process.env.REACT_APP_MONICA_AVA_SRC },
                { id: 3, name: 'Dinesh Chugtai', avaSrc: process.env.REACT_APP_DINESH_AVA_SRC },
                { id: 4, name: 'Russ Hanneman', avaSrc: process.env.REACT_APP_RUSS_AVA_SRC }
            ]
        }

    },
    subscribe(observer) {  // Observer pattern read later
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    _addPost(post) {
        this._state.profilePage.postsData.unshift({ id: this._state.profilePage.postsData.length + 1, name: 'test', msg: post, likesCount: 0 })
        this._callSubscriber();
    },
    _callSubscriber() {
        console.log('state changed')
    },
    dispatch(action) {
        switch (action.type) {
            case (ADD_POST):
                this._addPost(action.payload)
                break
            case (ADD_MESSAGE):
                if (!this._state.messagesPage.selectedDialog && this._state.messagesPage.selectedDialog !== 0) {
                    return
                }
                this._state.messagesPage.dialogItems[this._state.messagesPage.selectedDialog].messages.push(
                    { id: 2, msg: this._state.messagesPage.newMessageBody, self: true })
                this._state.messagesPage.newMessageBody = ''
                this._callSubscriber()
                break
            case (UPDATE_NEW_MESSAGE_BODY):
                this._state.messagesPage.newMessageBody = action.newText
                this._callSubscriber()
                break
            case (SELECT_DIALOG):
                this._state.messagesPage.selectedDialog = action.selectedDialog
                this._callSubscriber()
                break
            case (''):
                console.log('TO_DO')
                break
            default:
                return
        }
    }

}

export const selectDialogCreator = (payload) => ({ type: SELECT_DIALOG, selectedDialog: payload - 1 })

export const updateNewMessageBodyCreator = (payload) => ({ type: UPDATE_NEW_MESSAGE_BODY, newText: payload })

export const addPostActionCreator = (payload) => ({ type: ADD_POST, payload })

export const addMessageActionCreator = (payload) => ({ type: ADD_MESSAGE, id: payload })



export default store