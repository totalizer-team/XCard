import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { grey } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

function AvatarShape({ sx = {}, ...other }) {
  return (
    <Box
      component="svg"
      width={144}
      height={62}
      fill="none"
      viewBox="0 0 144 62"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ ...sx }}
      {...other}
    >
      <path
        d="m111.34 23.88c-10.62-10.46-18.5-23.88-38.74-23.88h-1.2c-20.24 0-28.12 13.42-38.74 23.88-7.72 9.64-19.44 11.74-32.66 12.12v26h144v-26c-13.22-.38-24.94-2.48-32.66-12.12z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </Box>
  );
}
export default ({ sx = {}, ...other }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Card
      sx={{
        borderRadius: 2,
        bgcolor: isDark ? grey[900] : '#fff',
        backgroundImage: 'none',
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ position: 'relative' }}>
        <AvatarShape
          sx={{
            left: 0,
            zIndex: 9,
            width: 88,
            height: 36,
            bottom: -16,
            position: 'absolute',
            color: isDark ? grey[900] : '#fff',
          }}
        />

        <Avatar
          src="/avatar/avatar-1.webp"
          sx={{
            left: 24,
            zIndex: 9,
            bottom: -24,
            position: 'absolute',
          }}
        />
        <CardMedia
          sx={{
            height: 200,
          }}
          image="/card-1.webp"
        />
      </Box>
      <CardContent sx={{ p: 3, pt: 5 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            Andy
          </Typography>
          <Typography sx={{ color: 'text.disabled' }}>|</Typography>
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            19 Jan 2025
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontSize: 16,
            overflow: 'hidden',
            display: '-webkit-box',
            textOverflow: 'ellipsis',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          The Future of Renewable Energy: Innovations and Challenges Ahead
        </Typography>
      </CardContent>
      <Divider sx={{ borderStyle: 'dashed' }} />
      <Box
        gap={1.5}
        display="flex"
        justifyContent="flex-end"
        sx={{
          py: 1,
          px: 2,
          typography: 'caption',
          color: 'text.disabled',
        }}
      >
        <Box gap={0.5} display="flex" alignItems="center">
          <ChatIcon sx={{ fontSize: 14 }} />
          8.21k
        </Box>

        <Box gap={0.5} display="flex" alignItems="center">
          <VisibilityIcon sx={{ fontSize: 14 }} />
          1.12k
        </Box>

        <Box gap={0.5} display="flex" alignItems="center">
          <ShareIcon sx={{ fontSize: 14 }} />
          235
        </Box>
      </Box>
    </Card>
  );
};
