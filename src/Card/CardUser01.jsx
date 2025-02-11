import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';

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
        textAlign: 'center',
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
            right: 0,
            zIndex: 10,
            mx: 'auto',
            bottom: -26,
            position: 'absolute',
            color: isDark ? grey[900] : '#fff',
          }}
        />

        <Avatar
          src="/avatar/avatar-1.webp"
          sx={{
            width: 64,
            height: 64,
            zIndex: 11,
            left: 0,
            right: 0,
            bottom: -32,
            mx: 'auto',
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
      <ListItemText
        sx={{ mt: 7, mb: 1 }}
        primary="Jayvion Simon"
        secondary="CEO"
      />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ mb: 2.5 }}
      >
        <IconButton size="small">
          <XIcon fontSize="small" />
        </IconButton>
        <IconButton size="small">
          <GitHubIcon fontSize="small" />
        </IconButton>
        <IconButton size="small">
          <FacebookIcon fontSize="small" />
        </IconButton>
        <IconButton size="small">
          <InstagramIcon fontSize="small" />
        </IconButton>
        <IconButton size="small">
          <LinkedInIcon fontSize="small" />
        </IconButton>
      </Stack>
      <Divider sx={{ borderStyle: 'dashed' }} />
      <Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        sx={{ pt: 1, pb: 2, typography: 'subtitle1' }}
      >
        <Box>
          <Typography
            variant="caption"
            sx={{ mb: 0.5, color: 'text.secondary' }}
          >
            Follower
          </Typography>
          <Typography>10.0k</Typography>
        </Box>
        <Box>
          <Typography
            variant="caption"
            sx={{ mb: 0.5, color: 'text.secondary' }}
          >
            Following
          </Typography>
          <Typography>10.0k</Typography>
        </Box>
        <Box>
          <Typography
            variant="caption"
            sx={{ mb: 0.5, color: 'text.secondary' }}
          >
            Total post
          </Typography>
          <Typography>20</Typography>
        </Box>
      </Box>
    </Card>
  );
};
