import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import Box from '@mui/material/Box';
import useFetchEvents from '/src/components/hooks/useFetchEvents.js';
import { useState } from 'react';

export default function ActionAreaCard() {
    const [cards, setCards] = useState([...Array(4)]);
    const { data } = useFetchEvents();
    console.log(data);

    const addCards = () => {
        setCards([ ...cards, ...Array(4)]); 

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
        {data && data._embedded && data._embedded.events.map((event, i) => (
            <Card key={i} sx={{ maxWidth: 225 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="225"
                image={event.images[0].url}
                alt="Artist/Group Image"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {event.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {event.dates.start.localDate} 
                    {event._embedded.venues[0].name}, 
                    {event._embedded.venues[0].city.name}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        ))}
        <Button onClick={addCards} variant="contained" color="primary">
            Add More Cards
        </Button>
        </Box>
    );
}