'use client';
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import Box from '@mui/material/Box';

const MouseEnterContext = createContext(undefined);

export const CardContainer = ({ children, sx = {}, style = {} }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = -(e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (e) => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <Box
        sx={{
          perspective: '1000px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...sx,
        }}
      >
        <Box
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          sx={{
            transformStyle: 'preserve-3d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            transition: 'all ease-out .2s',
          }}
        >
          {children}
        </Box>
      </Box>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({ children, sx = {}, ...rest }) => {
  return (
    <Box
      sx={{
        transformStyle: 'preserve-3d',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export const CardItem = ({
  component = 'div',
  children,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  sx = {},
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    <Box
      component={component}
      ref={ref}
      sx={{
        width: 'fit-content',
        transition: 'all ease-out .2s',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error('useMouseEnter must be used within a MouseEnterProvider');
  }
  return context;
};
