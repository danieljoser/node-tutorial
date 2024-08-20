var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var newUserId = 1;
var users = [
    { id: newUserId++, name: "max", password: "hello123", role: "guest" },
    { id: newUserId++, name: "herb", password: "hello12223", role: "member" },
    { id: newUserId++, name: "paul", password: "hi123", role: "admin" }
];
function updateUser(id, updates) {
    var userFound = users.find(function (element) { return element.id === id; });
    if (!userFound) {
        console.error("User not found");
        return;
    }
    ;
    return Object.assign(userFound, updates);
}
;
function addNewUser(newUser) {
    var user = __assign({ id: newUserId++ }, newUser);
    users.push(user);
    return user;
}
;
function fetchUserDetails(username) {
    var user = users.find(function (user) { return user.name === username; });
    if (!user) {
        throw new Error("User with username: ".concat(username, " does not exists"));
    }
    ;
    return user;
}
;
updateUser(1, { name: "new_max" });
updateUser(3, { password: "saferpassword!" });
addNewUser({ name: "Angel", password: "helloboy", role: "admin" });
addNewUser({ name: "ben", password: "ben123", role: "member" });
console.log(users);
