/* eslint-disable react/no-unescaped-entities */
import { useTheme } from '@mui/material/styles';
import React from 'react';

import Box from '@mui/material/Box';
import Marquee from './Marquee';

import CardCourse01 from '../../../../src/Card/CardCourse01.jsx';
import CardJob01 from '../../../../src/Card/CardJob01.jsx';
import CardPost01 from '../../../../src/Card/CardPost01.jsx';
import CardPost02 from '../../../../src/Card/CardPost02.jsx';
import CardPost03 from '../../../../src/Card/CardPost03.jsx';
import CardProduct01 from '../../../../src/Card/CardProduct01.jsx';
import CardUser01 from '../../../../src/Card/CardUser01.jsx';
import CardUser02 from '../../../../src/Card/CardUser02.jsx';

export default () => {
  const theme = useTheme();

  return (
    <Box
      sx={
        {
          // width: 1200,
          // borderLeft: 2,
          // borderRight: 2,
          // borderColor: 'divider',
          // margin: 'auto',
        }
      }
    >
      <Marquee duration={20}>
        <CardCourse01 sx={{ width: 300 }} />
        <CardJob01 sx={{ width: 400 }} />
        <CardPost01 sx={{ width: 300 }} />
        <CardPost02 sx={{ width: 500 }} />
        <CardPost03 sx={{ width: 300 }} />
      </Marquee>
      <Marquee reverse duration={10} repeat={4}>
        <CardProduct01 sx={{ width: 200 }} />
        <CardUser01 sx={{ width: 300 }} />
        <CardUser02 sx={{ width: 300 }} />
      </Marquee>
    </Box>
  );
};
