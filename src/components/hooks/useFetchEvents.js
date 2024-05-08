import $ from 'jquery';
import { useState, useEffect } from 'react';

const useFetchEvents = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
        $.ajax({
            type: "GET",
            url: "https://app.ticketmaster.com/discovery/v2/events.json?",
            data: {
              apikey: "T0BVS5icJGtLXtTAG8E8lLGVXrS9Fxvr",
              city: "London",
              classificationName: "music",
              sort: "date,asc",
              size: "120"
            },

            async: true,
            dataType: "json",
            success: function(json) {
            console.log(json);
            setData(json);
        },
      });
    };

    fetchEvents();
  }, []);

  return { data };
};

export default useFetchEvents;
