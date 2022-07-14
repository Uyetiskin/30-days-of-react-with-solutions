import {createContext, useState, useEffect} from 'react'

const WheatherContext = createContext();

export const  WheatherProvider = ({children}) => {
    const [data, setData] = useState(false)
    const [city, setCity] = useState('Ankara')
    const apiKey = 'a8f42045640d3c79798418f0074f1cd4'
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`

    const values = {
        data,
        setData,
        city,
        setCity,
    }
    useEffect(()=> {
        fetch(url)
            .then((res)=> res.json())
            .then((data) => setData(data))
    }, [])
    console.log(data)
    return(
        <WheatherContext.Provider value={values}>
            {children}
        </WheatherContext.Provider>
    )
}

export default WheatherContext;