import React, { useState } from 'react'
import Layout from '../core/Layout'
import { API } from '../config'

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false,
    })

    const { name, email, password } = values

    const handleChange = (labelled) => (event) => {
        setValues({ ...values, error: false, [labelled]: event.target.value })
    }

    const signup = (user) => {
        //console.log(values)
        fetch(`${API}/signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => {
                return response.json({ user })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        signup({ name, email, password }).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false })
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: true,
                })
            }
        })
    }

    const signUpForm = () => (
        <form action="">
            <div className="form-group">
                <label htmlFor="" className="text-muted">
                    Name
                </label>
                <input
                    onChange={handleChange('name')}
                    type="text"
                    className="form-control"
                    value={name}
                />
            </div>

            <div className="form-group">
                <label htmlFor="" className="text-muted">
                    Email
                </label>
                <input
                    onChange={handleChange('email')}
                    type="email"
                    className="form-control"
                    value={email}
                />
            </div>

            <div className="form-group">
                <label htmlFor="" className="text-muted">
                    Password
                </label>
                <input
                    onChange={handleChange('password')}
                    type="password"
                    className="form-control"
                    value={password}
                />
            </div>

            <button onClick={clickSubmit} className="btn btn-primary">
                Submit
            </button>
        </form>
    )

    return (
        <Layout
            title="Signup"
            description="Signup to Node React E-commerce App"
            className="container col-md-8 offset-md-2"
        >
            {signUpForm()}
            {JSON.stringify(values)}
        </Layout>
    )
}

export default Signup
