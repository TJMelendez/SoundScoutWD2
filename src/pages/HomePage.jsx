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
            <h2 className='pl-10 pt-5 text-5xl font-semibold tracking-tight text-fuchsia-800 leading-[72px] max-md:pl-5 max-md:pt-5 max-md:max-w-full max-md:text-4xl'>Browse Events</h2>
            <h3 className='pl-10 pt-5 text-3xl font-semibold tracking-tight leading-[72px] max-md:pl-5 max-md:pt-5 max-md:max-w-full max-md:text-2xl'>Popular Events</h3>
            <PopularEvents />
            <h3 className='pl-10 pt-5 text-3xl font-semibold tracking-tight leading-[72px] max-md:pl-5 max-md:pt-5 max-md:max-w-full max-md:text-2xl'>Popular Artists</h3>
            <PopularArtists />
            <h3 className='pl-10 pt-5 text-3xl font-semibold tracking-tight leading-[72px] max-md:pl-5 max-md:pt-5 max-md:max-w-full max-md:text-2xl'>Community Events</h3>
            <CommunityEvents />
            <h3 className='pl-10 pt-5 text-3xl font-semibold tracking-tight leading-[72px] max-md:pl-5 max-md:pt-5 max-md:max-w-full max-md:text-2xl'>Top Music Teachers</h3>
            <TopMusicTeachers />
        </div>
    )
}

export default HomePage;