import React from 'react'

const Form = (props) => {
    const onInputChange = ({ target }) => {
        props.setList((prev) => [...prev, 
            { ...props.itemSchema, 
            id: prev.length + 1, 
            text: target.value 
        },])
    }

    return (
        <div>
           <input onChange={onInPutChange} /> 
        </div>
    )
}

export default Form
