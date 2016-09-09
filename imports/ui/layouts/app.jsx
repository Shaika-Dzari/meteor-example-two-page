import React from 'react';
import { Menu } from '../components/menu.jsx';

export const App = ( { children } ) => (
  <div>
    <Menu />
    { children }
  </div>
)