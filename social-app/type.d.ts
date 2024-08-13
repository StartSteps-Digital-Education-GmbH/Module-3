interface IUser {
    id: number;                  // Unique identifier for each user
    name: string;                // User's name
    profilePicture?: string;      // URL or path to the user's profile picture
    statusMessage?: string;       // User's current status message
    friends?: number[];           // Array of user IDs representing friends
}

interface IAuth {
    isLoggedIn: boolean;         // Indicates if a user is logged in
    currentUserId: number | null;// ID of the currently logged-in user
}

interface UserState {
    users: IUser[];              // Array of all user objects
}

interface AuthState {
    auth: IAuth;                 // Authentication state
}

interface RootState {
    userState: UserState;        // User-related state
    authState: AuthState;        // Authentication-related state
}

const initialUserState: UserState = {
    users: [],                   // Initially, no users in the state
};

const initialAuthState: AuthState = {
    auth: {
        isLoggedIn: false,         // Initially, no user is logged in
        currentUserId: null,       // Initially, no user is logged in
    },
};
