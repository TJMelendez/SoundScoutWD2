{/*import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function ActionAreaCard() {
    const [cards, setCards] = useState([...Array(4)]);
    const [state, setState] = useState('initialState');

    const addCards = () => {
        setCards([ ...Array(4)]); 

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
        {cards.map((_, i) => (
            <Card key={i} sx={{ maxWidth: 225 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="225"
                image="/src/images/pexels-martin-lopez-2240771 (1).jpg"
                alt="Artist/Group Image"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Concert this date: 01-01-25
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This artist is playing in your area
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
    }*/}