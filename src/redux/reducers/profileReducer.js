const ADD_POST = 'ADD-POST'

const initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_POST):
            state.postsData.unshift({ id: state.postsData.length + 1, name: 'test', msg: action.payload, likesCount: 0 })
            return state
        default:
            return state

    }
}

export const addPostActionCreator = (payload) => ({ type: ADD_POST, payload })


export default profileReducer