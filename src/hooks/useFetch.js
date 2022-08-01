import { useState, useEffect } from 'react'

function useFetch(url) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setData(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [url])

    return data
}

export default useFetch
