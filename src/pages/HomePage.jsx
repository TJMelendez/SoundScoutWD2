import Banner from '/src/components/Banner.jsx';
import TypeOfEvent from '/src/components/EventCards/TypeOfEvent.jsx'
import PopularEvents from '/src/components/EventCards/PopularEvents.jsx'
import PopularArtists from '/src/components/EventCards/PopularArtists.jsx'
import CommunityEvents from '/src/components/EventCards/CommunityEvents.jsx'
import TopMusicTeachers from '/src/components/EventCards/TopMusicTeachers.jsx'

const HomePage = () => {
    return (
        <div>
            <Banner title='Uncover new musical experiences in your city' backgroundImage='https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
            <TypeOfEvent />
            <h2 className='text-purple-800'>Browse Events</h2>
            <h3>Popular Events</h3>
            <PopularEvents />
            <h3>Popular Artists</h3>
            <PopularArtists />
            <h3>Community Events</h3>
            <CommunityEvents />
            <h3>Top Music Teachers</h3>
            <TopMusicTeachers />
        </div>
    )
}

export default HomePage;