import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useEventDetails from '/src/components/hooks/useEventDetails.js';
import { useSelector } from 'react-redux';

function useEvent() {
  const [event, setEvent] = useState();
  const eventDetails = useEventDetails(); 

  useEffect(() => {
    if (eventDetails) {
      setEvent(eventDetails); 
    }
  }, [eventDetails]); 

  return event;
}

function EventInfo() {
  const location = useLocation();
  const eventId = location.state ? location.state.eventId: null;
  const selectedEvent = useSelector(state => state.soundScout.selectedEvent);

  const EventButton = ({ url }) => {
    const redirectToTicketmaster = () => {
      const url = 'https://www.ticketmaster.co.uk/'
      window.location.href = url
    };

    return (
      <button onClick={redirectToTicketmaster} className='bg-lime-300 hover:bg-lime-700 font-bold py-2 px-4 rounded border border-black mt-8 m-8'>
        Book Tickets
      </button>
    );
  }

  if (selectedEvent) {
    const name = selectedEvent.name ? selectedEvent.name : 'No Name';
    const description = selectedEvent.description ? selectedEvent.description : 'No Description';
    const startDate = selectedEvent.dates && selectedEvent.dates.start ? selectedEvent.dates.start.localDate : 'No Start Date';
    const venueName = selectedEvent._embedded && selectedEvent._embedded.venues && selectedEvent._embedded.venues[0] ? selectedEvent._embedded.venues[0].name : 'No Venue';
    const cityName = selectedEvent._embedded && selectedEvent._embedded.venues && selectedEvent._embedded.venues[0] && selectedEvent._embedded.venues[0].city ? selectedEvent._embedded.venues[0].city.name : 'No City';

    return (
      <div>
        <h2 className='pl-10 pt-5 text-5xl font-semibold tracking-tight text-fuchsia-800 leading-[72px] max-md:pl-5 max-md:pt-5 max-md:max-w-full max-md:text-4xl'>{name}</h2>
        <p className='self-center mt-3 text-2xl font-medium tracking-tight leading-7 max-md:max-w-full pl-10 pr-10'>{description}</p>
        <p className='self-center mt-3 text-2xl font-medium tracking-tight leading-7 max-md:max-w-full pl-10 pr-10'>{startDate}</p>
        <p className='self-center mt-3 text-2xl font-medium tracking-tight leading-7 max-md:max-w-full pl-10 pr-10'>{venueName}, {cityName}</p>
        <EventButton url={window.location.href} />
      </div>
    );
  } 
}


export default EventInfo;