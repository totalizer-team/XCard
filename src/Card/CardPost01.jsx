import Button from '@mui/material/Button';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default ({ sx = {}, ...other }) => {
  return (
    <Card sx={{ position: 'relative', borderRadius: 4, ...sx }} {...other}>
      <CardMedia sx={{ height: 240 }} image="/card-2.webp" />
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Stack spacing={0.5} color={'GrayText'}>
            <Typography fontSize={14}>Aug</Typography>
            <Divider></Divider>
            <Typography fontSize={14}>13</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography
              fontSize={20}
              sx={{
                overflow: 'hidden',
                display: '-webkit-box',
                textOverflow: 'ellipsis',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
              }}
            >
              The Future of Renewable Energy: Innovations and Challenges Ahead
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',

                overflow: 'hidden',
                display: '-webkit-box',
                textOverflow: 'ellipsis',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ pt: 1 }}
            >
              <Box component={Avatar} src="/avatar/avatar-2.webp" />
              <ListItemText
                primary="Jayvin Hale"
                secondary="CEO"
                sx={{ p: 0 }}
                slotProps={{
                  primary: { sx: { fontSize: 14 } },
                  secondary: {
                    sx: {
                      fontSize: 12,
                    },
                  },
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
