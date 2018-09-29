import React, { Component } from 'react'
import './Input.css'

export default class Input extends Component {
    render() {
        const { header, value, changeFn, buttonText, buttonFn } = this.props
        return (
            <div className = 'input-container'>
                <h1
                    className='spy-title'
                >
                    {header}
                </h1>
                
                <textarea
                    value= {value}
                    className='spy-input'
                    onChange={changeFn}
                    spellCheck = 'false'
                >
                </textarea>

                <button
                    onClick={buttonFn}
                    className = 'spy-button'
                >
                    {buttonText}
                </button>
            </div>
        )
    }
}
