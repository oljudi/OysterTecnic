import React, { Component, createContext } from 'react';
import { withRouter } from "react-router-dom";
import AUTH_SERVICE from "./services/auth";

export const MyContext= createContext()

class MyProvider extends Component {
    state = {
        formSignUp: {
            name: "",
            email: "",
            password: "",
            accountType: ""
        },
        formLogin: {
            email: "",
            password: ""
        },
        user: null,
        isLogged: false
    }

    handleLoginInput = e => {
        const { formLogin } = this.state
        const { name, value } = e.target
        formLogin[name] = value
        this.setState({ formLogin })
    }

    handleLoginSubmit = (e) => {
        e.preventDefault()
        const form = this.state.formLogin
        return AUTH_SERVICE.login(form)
            .then(({data: { user }}) => {
                this.setState({
                    user,
                    isLogged: true
                })
                return {user, msg: "Bienvenido a tu cuenta Oyster!!"}
            })
            .catch(err => {
                this.setState({
                    user: null,
                    isLogged: false,
                    formLogin: {
                        email: "",
                        password: ""
                    }
                })
                return { user: null, msg: "Usuario o contraseña incorrectos!!"}
            })
            .finally(() => this.setState({ formLogin: {email: "", password: ""}}))
    }

    handleSignupInput = e => {
        const { formSignUp } = this.state
        const { name, value } = e.target
        formSignUp[name] = value
        this.setState({ formSignUp })
    }

    handleSignupRadio = e => {
        const { formSignUp } = this.state
        const { value } = e.target
        formSignUp["accountType"] = value
        this.setState({ formSignUp })
    }

    handleSignupSubmit = async (e, pass) => {
        e.preventDefault()
        const {formSignUp} = this.state
        formSignUp["password"] = pass
        this.setState({formSignUp})
        const form = this.state.formSignUp
        this.setState({
            formSignUp: {name: '', email: '', password: '', accountType: ''}
        })
        return await AUTH_SERVICE.signup(form)
    }

    handleLogout = async () => {
        await AUTH_SERVICE.logOut()
        this.props.history.push('/')
        this.setState({ isLogged: false, user: null })
    } 

    render() {
        const {
            state,
            handleLoginInput,
            handleLoginSubmit,
            handleSignupInput,
            handleSignupRadio,
            handleSignupSubmit,
            handleLogout
        } = this
        return (
            <MyContext.Provider
                value = {{
                    state,
                    handleLoginInput,
                    handleLoginSubmit,
                    handleSignupInput,
                    handleSignupRadio,
                    handleSignupSubmit,
                    handleLogout
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default withRouter(MyProvider);