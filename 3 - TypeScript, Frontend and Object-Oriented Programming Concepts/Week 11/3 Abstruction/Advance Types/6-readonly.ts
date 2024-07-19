type userType = {
    id: number,
    name?: string, // optional
    age?: string, //optional
    salary: number,
    address?: string
}
const showData = (userDetails: Readonly<userType>) => {
    // userDetails.age = "100";
    // userDetails.name = "asdasd";
    console.log(userDetails)
}

showData({
    id: 10,
    salary: 5000,
    age: "10",
    name: "asdasd",
})

interface IUserDetails {
    name: string;
    salary: number;
}


const readOnlyUser: Readonly<IUserDetails> = {
    name: "asdasd",
    salary: 1000,
};

// readOnlyUser.name = "asdasd";