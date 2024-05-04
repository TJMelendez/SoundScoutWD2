import EventBanner from '/src/components/Miscellaneous/EventBanner.jsx';

function EventDetails() {
    return (
        <div>
            <EventBanner title='Event Name' backgroundImage='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
            <h1>This is the Info for this event!</h1>
        </div>
    )
}

export default EventDetails;