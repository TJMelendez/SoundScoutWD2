import EventBanner from '/src/components/Miscellaneous/EventBanner.jsx';
import EventInfo from '/src/components/InfoDisplay/EventInfo.jsx';

function EventDetails() {
    return (
        <div role="main" aria-label='Event Details'>
            <EventBanner title='Event Name' backgroundImage='https://images.pexels.com/photos/1749822/pexels-photo-1749822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
            <EventInfo />
        </div>
    )
}

export default EventDetails;