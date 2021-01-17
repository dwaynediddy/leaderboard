import React from 'react'

const List = (props) => {
    return (
        <div>
            {props.list.map((item) => (
            <div>{item.text}</div>
            ))}
        </div>
    )
}

export default List
