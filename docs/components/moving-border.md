---
group:
  title: Effects
  order: 0
toc: content
mobile: false
---

# Moving Border

- motion

## Demo

```jsx
import React from 'react';

import { Avatar, ListItemText, Stack, useTheme } from '@mui/material';
import MovingBorder from '../../src/MovingBorder';

export default () => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      spacing={3}
      justifyContent="center"
      alignItems={'center'}
    >
      <MovingBorder
        sx={{
          width: 160,
          borderRadius: 2,
          p: 2,
        }}
      >
        <ListItemText primary="Card" secondary="default" />
      </MovingBorder>

      <MovingBorder
        animate={{
          double: true,
          width: 2,
          duration: 4,
        }}
        sx={{
          width: 160,
          borderRadius: 2,
          p: 2,
          background: 'rgba(0,0,0,.05)',
        }}
      >
        <ListItemText primary="Card" secondary="double line" />
      </MovingBorder>

      <MovingBorder
        animate={{
          double: true,
          width: 8,
          duration: 4,
          outline: theme.palette.text.disabled,
          color: theme.palette.text.primary,
          distance: 100,
        }}
        sx={{
          borderRadius: '50%',
        }}
      >
        <Avatar>X</Avatar>
      </MovingBorder>
    </Stack>
  );
};
```

## Usage

```jsx | pure
import React from 'react';
import { ListItemText } from '@mui/material';
import MovingBorder from '@totalizer/xcomponents/MovingBorder';

export default () => {
  return (
    <MovingBorder
      sx={{
        width: 160,
        p: 2,
      }}
    >
      <ListItemText primary="Card" secondary="default" />
    </MovingBorder>
  );
};
```

## API

### Props

Props of the `Box` component are also available.

| Name    | Type           | Default | Description |
| ------- | -------------- | ------- | ----------- |
| animate | `AnimateProps` | `{}`    |             |

### AnimateProps

| Name       | Type        | Default                      | Description |
| ---------- | ----------- | ---------------------------- | ----------- |
| double     | `bool`      | `false`                      |             |
| width      | `number`    | `2`                          |             |
| color      | `MUI color` | `theme.palette.primary.main` |             |
| outline    | `MUI color` | `divider`                    |             |
| delay      | `number`    | `0`                          |             |
| loop       | `bool`      | `true`                       |             |
| angle      | `number`    | `315`                        |             |
| length     | `number`    | `40`                         |             |
| ease       | `string`    | `linear`                     |             |
| duration   | `number`    | `8`                          |             |
| distance   | `number`    | `20`                         |             |
| repeatType | `string`    | `loop`                       |             |
| disabled   | `bool`      | `false`                      |             |
