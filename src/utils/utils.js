import react, {Component} from 'react'

let handleInput = (e, property, obj) => {
    obj.setState({
        [property]: e.target.value
    })
}

export { handleInput }