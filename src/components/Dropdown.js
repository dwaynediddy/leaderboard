import React from 'react'
import Select from 'react-select'
// import { FaSlidersH } from 'react-icons/fa'

const options = [
    {value: 'Zulrah', label: 'Zulrah'},
    {value: 'Raid', label: 'Raid'},
    {value: 'GWD', label: 'GWD'}
]

const Dropdown = () => {
    return (
        <>

                <Select options={options} isMulti />


            
        </>
    )
}

export default Dropdown
