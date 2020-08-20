const User = (() => {

    const getEmail = () => {
        if(localStorage.getItem("email")) return localStorage.getItem("email")
        else return null
    }

    const setEmail = (email) => {
        localStorage.setItem("email", email)
    }

    return {
        getEmail,
        setEmail
    }

}) ()

export default User