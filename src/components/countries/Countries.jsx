import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './Countries.css'

function Countries() {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const handleVisitedCountries = (country) => {
        // console.log(country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => {
                            return <li key={country.cca3}>{country.name.common}</li>
                        })
                    }
                </ul>
            </div>
            <div className="countries-container">
                {
                    countries.map(data => {
                        return <Country key={data.cca2} country={data} handleVisitedCountry={handleVisitedCountries}></Country>
                    })
                }
            </div>
        </div>
    );
}

export default Countries;