import { useState } from 'react';
import './index.less';

import Stack from '@mui/material/Stack';
export default function Marquee({
  reverse = false,
  pauseOnHover = false,
  children,
  direction = 'row',
  repeat = 2,
  duration = 40,
  sx = {},
  ...props
}) {
  const [animationPlayState, setAnimationPlayState] = useState('running');
  const vertical = direction === 'column';
  return (
    <Stack
      direction={direction}
      spacing={1}
      sx={{
        overflow: 'hidden',
        p: 1,
        ...sx,
      }}
      {...props}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <Stack
            key={i}
            direction={direction}
            spacing={1}
            justifyContent={'space-around'}
            flexShrink={0}
            sx={{
              animation: `${
                vertical ? 'marqueeVertical' : 'marquee'
              } ${duration}s linear infinite`,
              animationDirection: reverse ? 'reverse' : 'normal',
              animationPlayState: animationPlayState,
            }}
            onMouseEnter={() => pauseOnHover && setAnimationPlayState('paused')}
            onMouseLeave={() =>
              pauseOnHover && setAnimationPlayState('running')
            }
          >
            {children}
          </Stack>
        ))}
    </Stack>
  );
}
