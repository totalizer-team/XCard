---
group:
  title: Effects
---

# Card 3D

```jsx
'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardBody, CardContainer, CardItem } from '../../src/Card3D';
import Link from '@mui/material/Link';

export default function ThreeDCardDemo() {
  return (
    <CardContainer sx={{ p: 2 }}>
      <CardBody
        sx={{
          width: 300,
          padding: 2,
          borderRadius: 2,
          border: 2,
          borderColor: 'divider',
        }}
      >
        <CardItem component={Typography} translateZ="60">
          Card 3D
        </CardItem>
        <CardItem component={Typography} translateZ="50" fontSize={12}>
          Hover over this card
        </CardItem>
        <CardItem translateZ="60" sx={{ mt: 1 }}>
          <Box
            component={'img'}
            src="/card-1.webp"
            sx={{
              width: '100%',
              objectFit: 'cover',
              borderRadius: 2,
            }}
          />
        </CardItem>
        <Stack
          direction="row"
          spacing={2}
          alignItems={'center'}
          sx={{ mt: 2, transformStyle: 'preserve-3d' }}
        >
          <CardItem
            translateZ="30"
            component={Link}
            href="/"
            target="__blank"
            fontSize={12}
          >
            Link →
          </CardItem>
          <CardItem
            translateZ="30"
            component={Button}
            variant="contained"
            size="small"
          >
            Button
          </CardItem>
        </Stack>
      </CardBody>
    </CardContainer>
  );
}
```

## API

### Props

CardContainer

| Name     | Type              | Default | Description |
| -------- | ----------------- | ------- | ----------- |
| children | `React.ReactNode` | `null`  |             |

CardBody

| Name     | Type              | Default | Description |
| -------- | ----------------- | ------- | ----------- |
| children | `React.ReactNode` | `null`  |             |

CardItem

| Name       | Type              | Default | Description |
| ---------- | ----------------- | ------- | ----------- |
| children   | `React.ReactNode` | `null`  |             |
| translateX | `number`          | `0`     |             |
| translateY | `number`          | `0`     |             |
| translateZ | `number`          | `0`     |             |
| rotateX    | `number`          | `0`     |             |
| rotateX    | `number`          | `0`     |             |
| rotateX    | `number`          | `0`     |             |
