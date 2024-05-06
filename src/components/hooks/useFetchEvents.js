import $ from 'jquery';
import { useState, useEffect } from 'react';

const useFetchEvents = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
        $.ajax({
            type: "GET",
            url: "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&size=4&apikey=T0BVS5icJGtLXtTAG8E8lLGVXrS9Fxvr",
            async: true,
            dataType: "json",
            success: function(json) {
            console.log(json);
            // Parse the response.
            // Do other things.
            setData(json);
        },
      });
    };

    fetchEvents();
  }, []);

  return { data };
};

export default useFetchEvents;
