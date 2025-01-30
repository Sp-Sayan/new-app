const signup = (req, res) => {
    res.send("Signup Route");
}
const login = (req, res) => {
    res.send("login Route");
}
const logout = (req, res) => {
    res.send("logout Route");
}

export { signup, login, logout };