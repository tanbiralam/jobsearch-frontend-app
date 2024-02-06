import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint, query) => {
    const [data, setData] = useState(false)
    const [isLoading, setIsLoading] = useState()
    const [error, setError] = useState(false)



    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '179556f8fcmsh8c4e3c00990a872p130113jsn4e7c757d2d9f',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query}
        
    };

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert('there is an error')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return {data,isLoading, error, refetch}
}

export default useFetch