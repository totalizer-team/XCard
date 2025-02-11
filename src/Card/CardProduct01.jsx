import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default ({ sx = {}, ...other }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ position: 'relative', p: 1 }}>
        <Box
          component={'img'}
          src="/card-1.webp"
          sx={{
            width: 1,
            height: 1,
            objectFit: 'cover',
            verticalAlign: 'bottom',
            aspectRatio: '1/1',
            borderRadius: 2,
          }}
        ></Box>
      </Box>
      <Box sx={{ p: 2, pt: 1 }}>
        <Typography
          gutterBottom
          sx={{
            fontSize: 14,
            overflow: 'hidden',
            display: '-webkit-box',
            textOverflow: 'ellipsis',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
          }}
        >
          Classic Leather Loafers
        </Typography>
        <Stack
          alignItems={'center'}
          justifyContent={'space-between'}
          direction="row"
        >
          <Stack direction="row" spacing={1} alignItems={'center'}>
            <Typography>$10.2</Typography>
            <Typography
              sx={{
                fontSize: 12,
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              $12.0
            </Typography>
          </Stack>
          <Chip
            label="new"
            size="small"
            sx={{
              fontSize: 12,
              height: 18,
              lineHeight: '18px',
            }}
          />
        </Stack>
      </Box>
    </Card>
  );
};
