const ADD_POST = 'ADD-POST'
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
                { id: 1, name: "Jian YANG" },
                { id: 2, name: "Richard Hendricks" },
                { id: 3, name: "Bertram Gilfoyle" },
                { id: 4, name: "Jared Dunn" },
            ],
            messages: [
                { id: 1, msg: ["1,", "wd", "Another Message"] },
                { id: 2, msg: ["What the hell"] },
                { id: 3, msg: ["messages with id 3"] },
                { id: 4, msg: ["Yo"] },
            ]
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
            case (''):
                console.log('TO_DO')
                break
            default:
                return
        }
    }

}

export const addPostActionCreator = (payload) => {
    return { type: ADD_POST, payload }
}


export default store