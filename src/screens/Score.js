import React, { useState } from 'react'
import Select from 'react-select'


const Score = () => {
    
    const option = [
        {value: 1, label: '1 Point'}, 
        {value: 2, label: '2 Points'},
        {value: 3, label: '3 Points'}
    ]
    const deaths = [
        {value: 0, label: '0'},
        {value: -1, label: '1'},
        {value: -2, label: '2'},
        {value: -3, label: '3'},
        {value: -4, label: '4'},
        {value: -5, label: '5'}
    ]


    const [selectedValue, setSelectedValue ] = useState(null)
    const [selectedLoot, setSelectedLoot ] = useState(null)
    const [selectedTime, setSelectedTime ] = useState(null)
    const [selectedDeaths, setSelectedDeaths] = useState(null)

    const handleChange = obj => {
        setSelectedValue(obj)
    }
    const handleLoot = obj => {
        setSelectedLoot(obj)
    }
    const handleTime = obj => {
        setSelectedTime(obj)
    }
    const handleDeaths = obj => {
        setSelectedDeaths(obj)
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
                    options={option}
                    onChange={handleLoot}
                />
                How many points did you get for Time:
                <Select
                    value={selectedTime}
                    options={option}
                    onChange={handleTime}
                />
                How many times did you Die Noob:
                <Select
                    value={selectedDeaths}
                    options={deaths}
                    onChange={handleDeaths}
                />

                <br />
                <b>Selected Value: </b>

                <pre>{JSON.stringify(selectedValue, selectedTime, selectedLoot, selectedDeaths, null, 2)}</pre>
                
            </div>
        </>
    )
}

export default Score
