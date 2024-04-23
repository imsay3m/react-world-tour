import { useState } from 'react';
import './Country.css'
function Country({ country, handleVisitedCountry }) {
    const [visited, setVisited] = useState(false)

    const handleVisit = () => {
        setVisited(!visited)
    }

    const { name, flags, region, cca3 } = country
    // console.log(country);
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h4 style={{ color: visited ? "salmon" : "white" }}>{name?.common} </h4>
            <p>Region: {region}</p>
            <img className='flag-img' src={flags.svg} alt="" />
            <p>Code: {cca3}</p>
            <button onClick={handleVisit}>{visited ? 'Visited' : 'Visit Now'}</button>
            <p><small>{visited ? 'I have visited this country' : 'Someday i will visit this country'}</small></p>
            <button onClick={() => {
                handleVisitedCountry(country)
                setVisited(!visited)
            }} >Mark As Visited</button>
        </div>
    );
}
export default Country;