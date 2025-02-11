---
group:
  title: Layouts
---

# Marquee

## row

```jsx
import React, { useState } from 'react';
import Marquee from '../../src/Marquee';
import Box from '@mui/material/Box';
export default () => {
  const data = [];
  for (let i = 1; i <= 10; i++) {
    data.push({ id: i });
  }
  return (
    <>
      <Marquee pauseOnHover duration={20}>
        {data.map((item) => (
          <Box
            key={item.id}
            sx={{
              py: 4,
              textAlign: 'center',
              width: 100,
              border: 1,
              borderColor: 'divider',
            }}
          >
            {item.id}
          </Box>
        ))}
      </Marquee>
      <Marquee pauseOnHover reverse duration={10}>
        {data.map((item) => (
          <Box
            key={item.id}
            sx={{
              py: 4,
              textAlign: 'center',
              width: 100,
              border: 1,
              borderColor: 'divider',
            }}
          >
            {item.id}
          </Box>
        ))}
      </Marquee>
    </>
  );
};
```

## column

```jsx
import React, { useState } from 'react';
import Marquee from '../../src/Marquee';
import Box from '@mui/material/Box';
export default () => {
  const data = [];
  for (let i = 1; i <= 10; i++) {
    data.push({ id: i });
  }
  return (
    <>
      <Marquee
        pauseOnHover
        duration={10}
        direction="column"
        sx={{ width: 100, height: 200, margin: 'auto' }}
      >
        {data.map((item) => (
          <Box
            key={item.id}
            sx={{
              py: 4,
              textAlign: 'center',
              width: 100,
              border: 1,
              borderColor: 'divider',
            }}
          >
            {item.id}
          </Box>
        ))}
      </Marquee>
    </>
  );
};
```

## API

### Props

| Name         | Type            | Default | Description |
| ------------ | --------------- | ------- | ----------- |
| reverse      | `bool`          | `false` |             |
| pauseOnHover | `bool`          | `false` |             |
| direction    | `row \| column` | `row`   |             |
| repeat       | `number`        | `2`     |             |
| duration     | `number`        | `40`    |             |
