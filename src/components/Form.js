import React, { useState } from 'react'

const Form = (props) => {
    const [text, setText] = useState('')

    const onInPutChange = ({ target }) => {
        setText(target.value)
    }

    const onItemSubmit = ({ target }) => {
        props.setList((prev) => [...prev, 
            { ...props.itemSchema, 
            id: prev.length + 1, 
            text
        },])
    }

    const handleKeyPress = ({ target }) => {
        if (target.keyCode === 13) {
            onItemSubmit()
        }
    }

    return (
        <div>
           <input onChange={onInPutChange} onKeyPress={onItemSubmit} />
           <button onClick={onItemSubmit} type="submit">
                Add
           </button>
        </div>
    )
}

export default Form
