import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';

const cards = [
    {
      image: '/src/images/akar-icons--rock-on.png',
      title: 'Concerts',
    },
    {
      image: '/src/images/material-symbols--celebration-outline.png',
      title: 'Festivals',
    },
    {
      image: '/src/images/iconoir--community.png',
      title: 'Community',
    },
    {
      image: '/src/images/mdi--teach.png',
      title: 'Music Lessons',
    },
  ];

export default function ActionAreaCard() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1, m: 1 }}>
      {cards.map((card, index) => (
        <Box key={index} sx={{ flex: 1, p: 1, m: 1 }}>
          <Card sx={{ maxWidth: 200, aspectRatio: '1/1', borderRadius: '50%', m: 'auto', border: 1, borderColor: 'black' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image={card.image}
                alt={card.title}
                sx={{ height: 100, width: 100, borderRadius: '50%', m: 'auto', display: 'block', mt: 4.5 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1rem', textAlign: 'center', fontWeight: 'semi-bold' }}>
                  {card.title}
                </Typography>
              </CardContent>
            </CardActionArea>
        </Card>
        </Box>
      ))}
    </Box>
  );
}