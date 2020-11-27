import { API } from '../config'

export const signup = (user) => {
    //console.log(values)
    return fetch(`${API}/signup`, {
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

export const signin = (user) => {
    //console.log(values)
    return fetch(`${API}/signin`, {
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
