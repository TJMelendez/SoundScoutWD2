import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useEventSearch from '/src/components/hooks/useEventSearch.js';

function ResultList({ apiKey, searchTerm, filterTerm }) {
  const data = useEventSearch(apiKey, searchTerm);

  return (
    <div>
      {data ? data._embedded.events.filter(event => event.name.includes(filterTerm)).map((event, index) =>
        <div key={index}>
          <Link to={`/event-details`}>
            <h2>{event.name}</h2>
          </Link>
          <p>{event.description}</p>
          <p>{event.dates.start.localDate}</p>
          <p>{event._embedded.venues[0].name}, {event._embedded.venues[0].city.name}</p>
        </div>
      ) : null}
    </div>
  );
}

ResultList.propTypes = {
  apiKey: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  filterTerm: PropTypes.string.isRequired,
};

export default ResultList;

