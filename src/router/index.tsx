import { RouteObject } from 'react-router-dom';
import React from 'react';
import Mine from '@/views/mine/index';
import Home from '@/views/home/index';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/mine',
    element: <Mine />
  }
];

export default routes;
