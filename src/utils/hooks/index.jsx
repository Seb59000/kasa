import { useState, useEffect } from 'react'
import '../../data/recipes.json'

const url = '../../data/recipes.json'

function useFetch() {
    const [logementsList, setLogementsList] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!url) return
        setLoading(true)
        async function fetchLogements() {
            const response = await fetch(url);
            const logementsList = await response.json()
            console.log('yo')
            console.log(logementsList)
            prompt('yo')
            setLogementsList(logementsList)
            try {
                const response = await fetch(url);
                const logementsList = await response.json()
                console.log('yo'.logementsList)
                setLogementsList(logementsList)
            } catch (err) {
                console.log('===== error =====', err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchLogements()
    }, [url])
    return { isLoading, logementsList, error }
}

export default useFetch