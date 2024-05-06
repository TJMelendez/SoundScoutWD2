import EventBanner from '/src/components/Miscellaneous/EventBanner.jsx';
{/*import PopularEvents from '/src/components/EventCards/PopularEvents.jsx';
import PopularArtists from '/src/components/EventCards/PopularArtists.jsx';
import CommunityEvents from '/src/components/EventCards/CommunityEvents.jsx';
import TopMusicTeachers from '/src/components/EventCards/TopMusicTeachers.jsx';
import EventResults from '/src/pagesEventResults.jsx'*/}

function EventDetails() {
    return (
        <div>
            <EventBanner title='Event Name' backgroundImage='https://images.pexels.com/photos/1749822/pexels-photo-1749822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
            <h1>This is the Info for this event!</h1>
        </div>
    )
}

export default EventDetails;