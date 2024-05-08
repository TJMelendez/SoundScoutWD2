import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';

const cards = [
    {
      image: 'https://media.istockphoto.com/id/1184468843/vector/rock-on-gesture-glyph-icon.jpg?s=612x612&w=0&k=20&c=8c4s03VZLcVdE_WI6eEPTIIHa5vETzeCTF8Lw3rU9cU=',
      title: 'Concerts',
    },
    {
      image: 'https://media.istockphoto.com/id/1287458193/vector/party-popper-icon-isolated-party-popper-symbol-vector.jpg?s=612x612&w=0&k=20&c=O2hpxLRG2Fk-vTnf5_Px47MywxQBh13yXy5MmlqxXqk=',
      title: 'Festivals',
    },
    {
      image: 'https://static.thenounproject.com/png/1071933-200.png',
      title: 'Community',
    },
    {
      image: 'https://static.vecteezy.com/system/resources/thumbnails/041/886/566/small_2x/teaching-icon-training-education-icon-in-flat-style-school-classroom-lesson-illustration-vector.jpg',
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