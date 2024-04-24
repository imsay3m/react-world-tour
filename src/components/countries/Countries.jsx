import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './Countries.css'
import { getCountriesLS, removeCountriesLS, setCountriesLS } from "../../utilities/localStorage";
import Visited from "../visited/Visited";
/*
TODO:  https://react.dev/learn/updating-arrays-in-state
filter or slice
*/
function Countries() {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    //Load Countries From Local Storage
    useEffect(() => {
        const savedCountry = []
        // console.log("called the useEffect", visitedCountries.length);
        if (countries.length > 0) {
            const getVisitedCca3 = getCountriesLS()
            // console.log(getVisitedCca3);
            for (const cca3 of getVisitedCca3) {
                // console.log(cca3);
                const country = countries.find(country => country.cca3 == cca3)
                country && savedCountry.push(country)
            }
            setVisitedCountries(savedCountry)
        }
    }, [countries])

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
        setCountriesLS(country.cca3)
    }

    const handleRemoveVisited = (country) => {
        //Visually remove and Local Store Remove
        const remainingVisitedCountries = visitedCountries.filter(i => i.cca3 !== country.cca3)
        setVisitedCountries(remainingVisitedCountries)
        removeCountriesLS(country.cca3)
    }

    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <div>
                <div style={{ margin: "20px auto", textAlign: "center" }}>
                    <h3>Visited Countries: {visitedCountries.length}</h3>
                    <div className="visited-countries">
                        {
                            visitedCountries.map(country => {
                                return <Visited key={country.cca3} handleRemoveVisited={handleRemoveVisited} country={country}></Visited>
                            })
                        }
                    </div>
                </div>
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