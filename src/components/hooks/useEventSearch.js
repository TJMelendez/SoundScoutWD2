import { useState, useEffect } from 'react';
import $ from 'jquery';
function useEventSearch(apiKey, searchTerm) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await $.ajax({
          url: `https://app.ticketmaster.com/discovery/v2/events.json`,
          method: 'GET',
          data: {
            apikey: apiKey,
            classificationName: 'music',
            city: 'London',
            keyword: searchTerm
          }
        });
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, [apiKey, searchTerm]);

  return data;
}

export default useEventSearch;
