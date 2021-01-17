import React, { useState } from 'react'
import Select from 'react-select'

const Score = () => {  
    //should make into an API
    
    const option = [
        {value: 1, label: '1 Point'}, 
        {value: 2, label: '2 Points'},
        {value: 3, label: '3 Points'}
    ]
    const items = [
        {value: 0, label: 'none'},
        {value: 3, label: 'Jar'},
        {value: 4, label: 'Onyx'},
        {value: 5, label: 'Fang'},
        {value: 5, label: 'Visage'},
        {value: 10, label: 'Mutagen'},
        {value: 10, label: 'Pet'},
     
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
    const [selectedItems, setSelectedItems] = useState(null)
    
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
    const handleItems = obj => {
        setSelectedItems(obj)
    }
    
    const submitHandler = () => {
        //api fetch here

        alert(`${selectedValue}`)
    }

    const submitTotal = (e) => {
        //can have admin review and add 
        //   for (let i = 0; i <option.value; ++i) {
        //       let option = option.value[i]
        
          }

        alert({option})
    


    

    return (
        <>
            <h3>Add your points</h3>
            <div className="scoreSheet">
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
                Did you recieve an Item:
                <Select
                    value={selectedItems}
                    options={items}
                    onChange={handleItems}
                />

                <button 
                onClick={submitHandler}>
                    Enter Score
                </button>

                <br />
                {/* add point calculator */}
                <b>Total Points: {submitTotal} </b>
                <br />

                <button onClick={submitTotal}>
                    Submit Total
                </button>

                
            </div>
        </>
    )
}

export default Score
