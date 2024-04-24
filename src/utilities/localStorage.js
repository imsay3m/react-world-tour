const getCountriesLS=()=>{
    const countriesStringified=localStorage.getItem('visited_countries')
    if (countriesStringified) {
        const visited_countries=JSON.parse(countriesStringified)
        return visited_countries
    }
    return []
}
const setCountriesLS=(countries_cca3)=>{
    const visited_countries=getCountriesLS()
    visited_countries.push(countries_cca3)
    const countriesStringified=JSON.stringify(visited_countries)
    localStorage.setItem('visited_countries',countriesStringified)
}

const removeCountriesLS=(countries_cca3)=>{
    const visited_countries=getCountriesLS()
    const remaining=visited_countries.filter(i=>i!==countries_cca3)
    const countriesStringified=JSON.stringify(remaining)
    localStorage.setItem('visited_countries',countriesStringified)
}
export {getCountriesLS,setCountriesLS,removeCountriesLS}