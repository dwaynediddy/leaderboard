import React, { useState } from 'react'
import Select from 'react-select'

const option = [
    {value: 1, label: '1 Point'}, 
    {value: 2, label: '2 Points'},
    {value: 3, label: '3 Points'}
]

const Score = () => {

    const [selectedValue, setSelectedValue ] = useState(null)

    return (
        <>
            <h3>Add your points</h3>
            <div>
                How many points did you get for Scales:
                <Select
                    value={selectedValue}
                    options={option}
                />
                How many points did you get for Loot:
                <Select
                    value={selectedValue}
                    options={option}
                />
                How many points did you get for Time:
                <Select
                    value={selectedValue}
                    options={option}
                />

                <br />
                <b>Selected Value: </b>
                <pre>{JSON.stringify(selectedValue, null, 2)}</pre>
                
            </div>
        </>
    )
}

export default Score
