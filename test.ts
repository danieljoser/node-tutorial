type UserRole = "guest" | "member" | "admin";

type username = {
    id: number,
    name: string,
    password: string,
    role: UserRole
};

type updatedUser = Partial<username>
let newUserId = 1;

const users: username[] = [
    {id: newUserId++, name: "max", password: "hello123", role: "guest"},
    {id: newUserId++, name: "herb", password: "hello12223", role: "member"},
    {id: newUserId++, name: "paul", password: "hi123", role: "admin"}
];

function updateUser(id: number, updates: updatedUser) {
    let userFound = users.find(element => element.id === id);
    if (!userFound) {
        console.error("User not found");
        return;
    };
    return Object.assign(userFound, updates); 
};

function addNewUser(newUser: Omit<username, "id">): username {
    let user: username = {id: newUserId++, ...newUser};
    users.push(user);
    return user;
};

function fetchUserDetails(username: string): username {
    const user = users.find(user => user.name === username);
    if (!user) {
        throw new Error(`User with username: ${username} does not exists`)
    };
    return user;
};

updateUser(1, {name: "new_max"});
updateUser(3, {password: "saferpassword!"});

addNewUser({name: "Angel", password: "helloboy", role:"admin"});
addNewUser({name:"ben", password:"ben123", role:"member"});

console.log(users);
