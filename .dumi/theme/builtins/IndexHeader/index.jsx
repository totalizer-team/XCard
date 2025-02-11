'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { history } from 'umi';

import DashedBorder from './DashedBorder';
export default function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
        backgroundImage: isDark
          ? "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")"
          : "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        backgroundRepeat: 'repeat',
        borderBottom: 3,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', py: 10, zIndex: 3 }}>
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <DashedBorder
            sx={{
              p: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: 32,
                fontWeight: 600,
                lineHeight: 1.2,
                textAlign: 'center',
              }}
            >
              @totalizer /{' '}
              <Typography
                color="primary.main"
                component="span"
                variant="inherit"
              >
                xcard
              </Typography>
            </Typography>
          </DashedBorder>
          <Typography
            color="neutral.300"
            sx={{ fontWeight: 400, textAlign: 'center', fontSize: 18 }}
          >
            Transform Your UI: Stunning Card Effects, Seamless Templates.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
            <Button
              variant="outlined"
              onClick={() => {
                history.push('/guide');
              }}
            >
              Guide
            </Button>
            <Button
              onClick={() => {
                history.push('/components/menu-item');
              }}
            >
              Components
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
  x;
}
