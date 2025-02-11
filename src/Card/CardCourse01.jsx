import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
            aspectRatio: '4/3',
            borderRadius: 2,
          }}
        ></Box>
        <Chip
          label="Andy"
          avatar={<Avatar src="/avatar/avatar-1.webp" />}
          size="small"
          color="warning"
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            borderRadius: 1,
          }}
        />
      </Box>
      <Box sx={{ p: 2, pt: 1 }}>
        <Stack
          direction={'row'}
          spacing={1}
          alignItems={'center'}
          sx={{ mb: 1 }}
        >
          <Chip
            label="1h 40m"
            icon={<AccessTimeIcon />}
            size="small"
            sx={{ borderRadius: 1 }}
          />
          <Chip
            label="1.3k"
            icon={<GroupsIcon />}
            size="small"
            sx={{ borderRadius: 1 }}
          />
        </Stack>
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
          <Button variant="contained" size="small">
            <ShoppingCartIcon fontSize="small" />
          </Button>
        </Stack>
      </Box>
    </Card>
  );
};
