import { useEffect, useState } from "react"

 const useCountry = (name =  'bangladesh') => {
    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchCountryInfo = async () => {
            try{
                setLoading(true)
                const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
                const data = await response.json()
                setCountry(data)
            } catch(error){
                console.error(error)
                setError('Something went wrong')
            } finally{
                setLoading(false)
            }
        }

        fetchCountryInfo();
    }, [name]);

    return {
        country,
        loading,
        error
    }
 }

 export default useCountry;