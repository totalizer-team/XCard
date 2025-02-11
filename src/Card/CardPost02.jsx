import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default ({ sx = {}, ...other }) => {
  return (
    <Card
      sx={{ position: 'relative', borderRadius: 4, p: 0, ...sx }}
      {...other}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack spacing={1} sx={{ p: 2, pr: 1 }}>
          <Stack direction="row" justifyContent="space-between" sx={{ pb: 1 }}>
            <Chip label="PUBLISH" color="primary" size="small" />
            <Typography fontSize={14} color="textSecondary">
              05 Aug 2024
            </Typography>
          </Stack>
          <Typography
            fontSize={20}
            sx={{
              overflow: 'hidden',
              display: '-webkit-box',
              textOverflow: 'ellipsis',
              WebkitLineClamp: 2,
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
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>

          <Box flexGrow={1}></Box>
          <Stack direction="row" alignItems="center" spacing={1}>
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
        <Box sx={{ p: 1 }}>
          <CardMedia
            sx={{
              borderRadius: 2,
              width: 150,
              height: 240,
            }}
            image="/card-2.webp"
          />
        </Box>
      </Stack>
    </Card>
  );
};
