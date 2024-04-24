import './Visited.css'
import PropTypes from 'prop-types'
const Visited = ({ country, handleRemoveVisited }) => {
    const { name, flags } = country
    return (
        <div className="visited-country">
            <img src={flags.svg} alt="" />
            <p>{name.common}</p>
            <button onClick={() => handleRemoveVisited(country)}>Remove</button>
        </div>
    );
};

Visited.propTypes = {
    country: PropTypes.object.isRequired,
    handleRemoveVisited: PropTypes.func.isRequired
}
export default Visited;