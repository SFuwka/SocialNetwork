const ADD_POST = 'ADD-POST'

const profileReducer = (state, action) => {
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