import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import Box from '@mui/material/Box';
import useFetchEvents from '/src/components/hooks/useFetchEvents.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedEvent } from '/src/redux/Slice.js';

export default function ActionAreaCard() {
    const { data } = useFetchEvents();
    const [eventIndex, setEventIndex] = useState(0);
    console.log(data);

    const dispatch = useDispatch();
    const onEventClick = event => {
        dispatch(setSelectedEvent(event));
    };

    useEffect(() => {
        if (data && data._embedded && data._embedded.events.length > 4) {
            setEventIndex(0);
        }
    }, [data]);

    const nextEvent = () => {
        setEventIndex((prevIndex) => prevIndex + 4 % data._embedded.events.length);
    };

    const prevEvent = () => {
        setEventIndex((prevIndex) => (prevIndex - 4 + data._embedded.events.length) % data._embedded.events.length);
    };

    return (
        <Box
        sx={{
            justifyContent: 'space-around', 
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            overflowX: 'auto',
            width: '225',
            p: 1,
            gap: 2
        }}
        >
        <Button onClick={prevEvent} variant="contained">
            Prev
        </Button>
        {data && data._embedded && data._embedded.events.slice(eventIndex, eventIndex + 4).map((_event, index) => (
            <Card key={index} sx={{ maxWidth: 225 }}>
            <Link to={{ pathname: '/event-details', state: { eventId: _event.id } }} className='link-class'>
                <CardActionArea onClick={(() => onEventClick(_event))}>
                    <CardMedia
                    component="img"
                    height="225"
                    image={_event.images[0].url}
                    alt="Artist/Group Image"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {_event.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {_event.dates.start.localDate} 
                    {_event._embedded.venues[0].name}, 
                    {_event._embedded.venues[0].city.name}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            </Card>
        ))}
        <Button onClick={nextEvent} variant="contained">
            Next
        </Button>
        </Box>
    );
}