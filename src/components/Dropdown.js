import React from 'react'
import Select from 'react-select'

const options = [
    {value: 'Zulrah', content: 'Zulrah'},
    {value: 'Raid', content: 'Raid'},
    {value: 'GWD', content: 'GWD'}
]

const Dropdown = () => {
    return (
        <>
            <Select options={options} />
        </>
    )
}

export default Dropdown
