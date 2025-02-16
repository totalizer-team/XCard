---
group:
  title: Effects
---

# Compare

```jsx
import React from 'react';

import { Stack } from '@mui/material';

import Compare from '../../src/Compare';

export default () => {
  return (
    <Stack alignItems="center">
      <Compare
        firstImage="https://totalizer-x-menu.github.io/menu-light.png"
        secondImage="https://totalizer-x-menu.github.io/menu-dark.png"
        autoplay
        sx={{
          width: 400,
          height: 250,
          boxShadow: '0 0 0 3px rgba(125,125,125,.5)',
          borderRadius: 1,
        }}
      ></Compare>
    </Stack>
  );
};
```

## API

### Props

Props of the `Box` component are also available.

| Name        | Type             | Default | Description |
| ----------- | ---------------- | ------- | ----------- |
| firstImage  | `string`         | `''`    |             |
| secondImage | `string`         | `''`    |             |
| mode        | `hovrer \| drag` | `hover` |             |
| autoplay    | `bool`           | `true`  |             |
| duration    | `number`         | `5000`  |             |
