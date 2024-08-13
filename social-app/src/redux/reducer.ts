type stateType = {
    users: IUser[],
    auth: IAuth,
}
const initialState: stateType = {
    users: [
        {
            id: 1,
            name: "John Doe",
            profilePicture: "/images/john.jpg",
            statusMessage: "Feeling great!",
            friends: [2, 3],
        },
        {
            id: 2,
            name: "Jane Smith",
            profilePicture: "/images/jane.jpg",
            statusMessage: "Loving life!",
            friends: [1],
        },
        {
            id: 3,
            name: "Alice Johnson",
            profilePicture: "/images/alice.jpg",
            statusMessage: "Excited for the weekend!",
            friends: [1],
        },
    ],
    auth: {
        isLoggedIn: false,
        currentUserId: null,
    },
};

//reducer updates the state based on diffrent condiations(action.type)
const reducer = (state: stateType = initialState, action: {
    //is the data that you pass to Dispatch method, the data that need to be processeed
    type: string,
    user: {
        id?: number, //for registeration id=null
        name: string,
    },
}): stateType => {
    switch (action.type) {
        case "CREATE_USER":
            const newState = {
                ...state, //state.auth
                users: [
                    ...state.users,
                    {
                        ...action.user, //name: action.user.name, (from registeration form)
                        id: Math.floor(Math.random() * 1000),
                    }
                ]
            }
            return newState;
        case "LOGIN":
            if (action.user.id) {
                const newState: stateType = {
                    ...state, //state.users
                    auth: {
                        isLoggedIn: true,
                        currentUserId: action.user.id, //from input field
                    }
                }
                return newState;
            } else {
                console.log("You have to provide ID for login");
                return state;
            }
        default:
            return state;

    }

}

export default reducer;