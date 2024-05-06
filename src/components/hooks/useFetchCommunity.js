import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchCommunity = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://www.eventbriteapi.com/v3/events/search/', {
          params: {
            location: 'London',
            categories: 'Music',
            token: 'QT5RFIPP7YTC6MYCPP'
          }
        });
        setEvents(response.data.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return { events };
};

export default useFetchCommunity;
