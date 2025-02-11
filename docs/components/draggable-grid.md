---
group:
  title: Layouts
---

# Draggable Grid

- motion
- dnd-kit

## 01

```jsx
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import DraggableGrid from '../../src/DraggableGrid';

export default () => {
  const list = [];
  for (let i = 1; i <= 20; i++) {
    list.push({ id: i });
  }

  const [data, setData] = useState(list);
  return (
    <DraggableGrid
      data={data}
      onDragEnd={(newData) => setData(newData)}
      onItemClick={(item) => {
        console.log('click', item.id);
        // alert(`click ${item.id}`);
      }}
      itemRender={(item) => {
        return (
          <Box
            sx={{
              py: 5,
              width: 100,
              textAlign: 'center',
            }}
          >
            {item.id}
          </Box>
        );
      }}
    />
  );
};
```
