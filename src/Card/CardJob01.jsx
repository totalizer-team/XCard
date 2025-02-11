import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddchartIcon from '@mui/icons-material/Addchart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PlaceIcon from '@mui/icons-material/Place';

export default ({ sx = {}, ...other }) => {
  return (
    <Card sx={{ position: 'relative', borderRadius: 2, ...sx }} {...other}>
      <Checkbox
        color="error"
        onChange={() => {}}
        icon={<FavoriteBorderIcon />}
        checkedIcon={<FavoriteIcon />}
        sx={{ position: 'absolute', right: 16, top: 16 }}
      />
      <Box sx={{ p: 2 }}>
        <Box
          component="img"
          src="/company/company-1.webp"
          sx={{
            width: 60,
            height: 60,
            borderRadius: 1,
            mb: 2,
          }}
        />

        <Typography variant="body2" sx={{ color: 'info.main' }}>
          The North Face
        </Typography>

        <Typography color="inherit" fontSize={20} noWrap>
          Project Manager
        </Typography>
      </Box>
      <Divider sx={{ borderStyle: 'dashed' }} />
      <Box
        gap={1.5}
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        sx={{
          typography: 'body2',
          color: 'text.secondary',
          p: 2,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <PlaceIcon fontSize="small" />
          <Typography fontSize={14}>China, Beijing</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <CalendarMonthIcon fontSize="small" />
          <Typography fontSize={14}>Post at: 05/01/2025</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <AddchartIcon fontSize="small" />
          <Typography fontSize={14}>5 year exp</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <AccessTimeIcon fontSize="small" />
          <Typography fontSize={14}>Full time</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <MonetizationOnIcon fontSize="small" />
          <Typography fontSize={14}> 12,000</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <PersonPinIcon fontSize="small" />
          <Typography fontSize={14}> Manager</Typography>
        </Stack>
      </Box>
    </Card>
  );
};
