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
//trying to use enter to submit
    const handleKeyPress = e => {
        if (e.keyCode === 'enter') {
            onItemSubmit()
        }
    }

    return (
        <div>
           <input onChange={onInPutChange} onKeyPress={handleKeyPress} />
           <button onClick={onItemSubmit} type="submit">
                Add
           </button>
        </div>
    )
}

export default Form
