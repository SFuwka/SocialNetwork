const initialState = {
    friends: [
        { id: 1, name: 'Nelson Bighetti', avaSrc: process.env.REACT_APP_NELSON_AVA_SRC },
        { id: 2, name: 'Monica Hall', avaSrc: process.env.REACT_APP_MONICA_AVA_SRC },
        { id: 3, name: 'Dinesh Chugtai', avaSrc: process.env.REACT_APP_DINESH_AVA_SRC },
        { id: 4, name: 'Russ Hanneman', avaSrc: process.env.REACT_APP_RUSS_AVA_SRC }
    ]
}

const friendsReducer = (state = initialState, action) => {
    return state
}

export default friendsReducer