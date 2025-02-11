import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

/**
 * UI
 */
import { Box, Card, Stack } from '@mui/material';

import { useTheme } from '@mui/material/styles';
/**
 * 排序
 */
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

/**
 * 状态管理
 */

/**
 * 子组件
 */
const XItem = ({
  record,
  hoveredIndex,
  setHoveredIndex = () => {},
  itemRender = () => {},
  onItemClick = () => {},
}) => {
  const theme = useTheme();
  const isDark = theme?.palette?.mode === 'dark';

  const { id } = record;
  const {
    attributes,
    listeners,
    setNodeRef,
    isDragging,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    ...(isDragging
      ? {
          position: 'relative',
          zIndex: 9999,
          cursor: 'grabbing',
          boxShadow: isDark
            ? '-2px -2px 15px 0 rgba(255, 255, 255, 0.1), 5px 8px 15px 0 rgba(255, 255, 255, 0.25)'
            : '-2px -2px 15px 0 rgba(34, 33, 81, 0.1), 5px 8px 15px 0 rgba(34, 33, 81, 0.25)',
        }
      : {}),
  };

  return (
    <Box
      key={id}
      sx={{
        p: 1,
        position: 'relative',
      }}
      onMouseEnter={() => setHoveredIndex(id)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {isDragging ? (
        ''
      ) : (
        <AnimatePresence>
          {hoveredIndex === id && (
            <Box
              component={motion.span}
              sx={{
                position: 'absolute',
                inset: '0',
                width: '100%',
                backgroundColor: 'rgba(200, 200, 200, 1)',
                borderRadius: 1,
              }}
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
        </AnimatePresence>
      )}
      <Card
        sx={{ position: 'relative', zIndex: 10, cursor: 'pointer' }}
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        onPointerUp={() => {
          if (!isDragging) {
            onItemClick(record);
            // console.log(`click ${id}`);
          }
        }}
      >
        {itemRender(record)}
      </Card>
    </Box>
  );
};
/**
 * 主组建
 */
export default ({
  data = [],
  onDragEnd = () => {},
  onItemClick = () => {},
  itemRender = () => {},
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  const activationConstraint = {
    delay: 200,
    tolerance: 5,
  };

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint,
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint,
  });

  const sensors = useSensors(
    mouseSensor,
    touchSensor,
    // useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={(e) => {
        const { active, over } = e;
        if (active && over && active.id !== over.id) {
          const oldIndex = data.findIndex((el) => el.id === active.id);
          const newIndex = data.findIndex((el) => el.id === over.id);
          const newData = arrayMove(data, oldIndex, newIndex);
          onDragEnd(newData);
        }
      }}
    >
      <SortableContext
        items={data.map((el) => el.id)}
        strategy={rectSortingStrategy}
      >
        <Stack spacing={{ xs: 0 }} direction="row" useFlexGap flexWrap="wrap">
          {data.map((el) => (
            <XItem
              key={el.id}
              record={el}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              itemRender={itemRender}
              onItemClick={onItemClick}
            />
          ))}
        </Stack>
      </SortableContext>
    </DndContext>
  );
};
