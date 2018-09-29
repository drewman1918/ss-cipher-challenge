import react, { Component } from 'react'

let decryptedArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let encryptedArr = ['z', 'h', 'i', 'm', 'n', 'e', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'l', 'k', 'j', 'g', 'f', 'd', 'c', 'b', 'a']

let encrypt = (obj) => {
    let { decrypted } = obj.state
    let answer = decrypted.split('').map( c => {
        if (decryptedArr.includes(c.toLowerCase())) {
            let uppercase = (c === c.toUpperCase())
            let index = decryptedArr.indexOf(c.toLowerCase())

            if (uppercase) return encryptedArr[index].toUpperCase()
            return encryptedArr[index]
        }
        return c
    }).join('')
    obj.setState({
        encrypted: answer
    })
}

let decrypt = (obj) => {
    let { encrypted } = obj.state
    let answer = encrypted.split('').map( c => {
        if (encryptedArr.includes(c.toLowerCase())) {
            let uppercase = (c === c.toUpperCase())
            let index = encryptedArr.indexOf(c.toLowerCase())

            if (uppercase) return decryptedArr[index].toUpperCase()
            return decryptedArr[index]
        }
        return c
    }).join('')
    obj.setState({
        decrypted: answer
    })
}

export { encrypt, decrypt }