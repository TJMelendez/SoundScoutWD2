import { useState, useEffect } from 'react';
import $ from 'jquery';

const useEventDetails = (eventId) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    $.ajax({
      type: "GET",
      url: `https://app.ticketmaster.com/discovery/v2/events.json?`,
      data: {
        apikey: "T0BVS5icJGtLXtTAG8E8lLGVXrS9Fxvr",
        id: eventId
      },

      async: true,
      dataType: "json",
      success: function(json) {
        setData(json);
      },
    });
  }, [eventId]);

  return data;
};

export default useEventDetails;
