import React, { useState, useEffect } from 'react'
import List from '../components/List'
import Form from '../components/Form'

const itemSchema = {
    id: 0, 
    text: '',
    done: false
}

export const TickOffMulti = () => {
    const [ list, setList ] = useState(JSON.parse(localStorage.getItem('todoList')) ?? [])
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(list))
    }, [list])
    return (
        <div className='todo'>
            <h2>Add Multi Selections</h2>
            <Form itemSchema={itemSchema} setList={setList} />
            <List list={list} setList={setList} />
        </div>
      );
    }

    export default TickOffMulti
