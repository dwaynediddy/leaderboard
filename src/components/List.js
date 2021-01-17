import React from 'react'

const List = (props) => {
    const toggleDone = ({target, id}) => {
        props.setList((prev) => prev.map((item) => 
        item.id === id ? { ...item, done: target.checked } : item ))}

    return (
        <div>
            {props.list.map((item) => (
            <div>
                <input 
                type='checkbox' 
                onChange={({ target }) => toggleDone({ target, id: item.id })} />
                {item.text}
            </div>
            ))}
        </div>
    )
}

export default List
