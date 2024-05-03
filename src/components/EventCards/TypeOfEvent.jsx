import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {cards.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 225, aspectRatio: '1/1', borderRadius: '50%' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image={card.image}
              alt={card.title}
              sx={{ height: 100, width: 100, borderRadius: '50%' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1rem' }}>
                {card.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}