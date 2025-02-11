import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';

export default ({ sx = {}, ...other }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Card
      sx={{
        pt: 1,
        textDecoration: 'none',
        transition: 'all .2s ease-in-out',
        '&:hover': {
          transform: `translateY(-${theme.spacing(1 / 2)})`,
        },
        borderRadius: 2,
        ...sx,
      }}
      {...other}
    >
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Box
            component={Avatar}
            src={'/avatar/avatar-2.webp'}
            height={55}
            width={55}
          />
          <ListItemText
            primary="Peter"
            secondary="CEO"
            slotProps={{
              primary: {
                sx: {
                  fontSize: 20,
                },
              },
            }}
          />
        </Stack>
        <Stack spacing={1.5} marginTop={2.5}>
          <Typography
            variant={'subtitle2'}
            color={'text.secondary'}
            sx={{
              p: 1,
              fontSize: 14,
              bgcolor: isDark ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.05)',
              borderRadius: 1,

              overflow: 'hidden',
              display: '-webkit-box',
              textOverflow: 'ellipsis',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            I am an ambitious workaholic, but apart from that, pretty simple
            person.
          </Typography>

          <Stack spacing={0.5}>
            <Stack direction={'row'} alignItems="center" spacing={1}>
              <CodeIcon sx={{ color: 'GrayText', fontSize: 18 }} />
              <Typography color="textSecondary" fontSize={14}>
                @totalizer/xmenu
              </Typography>
            </Stack>
            <Stack direction={'row'} alignItems="center" spacing={1}>
              <LanguageIcon sx={{ color: 'GrayText', fontSize: 18 }} />
              <Typography color="textSecondary" fontSize={14}>
                English * Chinese
              </Typography>
            </Stack>
            <Stack direction={'row'} alignItems="center" spacing={1}>
              <LocationOnIcon sx={{ color: 'GrayText', fontSize: 18 }} />
              <Typography color="textSecondary" fontSize={14}>
                China, Beijing
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent="flex-end">
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
        </Stack>
      </CardContent>
    </Card>
  );
};
