import React, { useState } from 'react'
import Select from 'react-select'


const Score = () => {
    
    const option = [
        {value: 1, label: '1 Point'}, 
        {value: 2, label: '2 Points'},
        {value: 3, label: '3 Points'}
    ]
    const loot = [
        {value: 1, label: '1 Point'}, 
        {value: 2, label: '2 Points'},
        {value: 3, label: '3 Points'}
    ]
    const time = [
        {value: 1, label: '1 Point'}, 
        {value: 2, label: '2 Points'},
        {value: 3, label: '3 Points'}
    ]

    const [selectedValue, setSelectedValue ] = useState(null)
    const [selectedLoot, setSelectedLoot ] = useState(null)
    const [selectedTime, setSelectedTime ] = useState(null)

    const handleChange = obj => {
        setSelectedValue(obj)
    }
    const handleLoot = obj => {
        setSelectedLoot(obj)
    }
    const handleTime = obj => {
        setSelectedTime(obj)
    }

    return (
        <>
            <h3>Add your points</h3>
            <div>
                How many points did you get for Scales:
                <Select
                    value={selectedValue}
                    options={option}
                    onChange={handleChange}
                />
                How many points did you get for Loot:
                <Select
                    value={selectedLoot}
                    options={loot}
                    onChange={handleLoot}
                />
                How many points did you get for Time:
                <Select
                    value={selectedTime}
                    options={time}
                    onChange={handleTime}
                />

                <br />
                <b>Selected Value: </b>
                <pre>{JSON.stringify(selectedValue, selectedTime, selectedLoot, null, 2)}</pre>
                
            </div>
        </>
    )
}

export default Score
