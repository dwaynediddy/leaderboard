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

    return (
        <div>
           <input onChange={onInPutChange} />
           <button onClick={onItemSubmit}>
                Add
           </button>
        </div>
    )
}

export default Form
