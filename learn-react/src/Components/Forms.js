import {useState} from 'react'


const Forms = () => {
    const [Name, setName] = useState('')
    const [lastName, setLastName]  = useState('')



    const handleChange = (e) => {
        const Name = e.target.value
        setName(Name)
    }
    const handleChangeLastName = (e) => {
        const lastName = e.target.value
        setLastName(lastName)
    }

    return (
        <div style={{border: "1px solid black", margin: '1%', padding: '1%'}}>
            <h1>This div about the Froms</h1>
            <div>
                <label style={{margin: '10px'}} htmlFor='value'>Name</label>
                <input 
                    id='value'
                    onChange={handleChange}
                    placeholder = 'Write Your Name'
                    value={Name}
                />
            </div>
            <div>
            <label style={{margin: '10px'}} htmlFor='value2'>Name</label>
                <input 
                    id='value2'
                    onChange={handleChangeLastName}
                    placeholder = 'Write Your Name'
                    value={lastName}
                />
            </div>
            <div>
                <h3>{Name}</h3>
                <h3>{lastName}</h3>
            </div>
        </div>
    )
}

export default Forms