import React from 'react';

import './menu-items.styles.scss';

interface MenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, imageUrl, size }) => (
  <div
    className={`${size} menu-item`}
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>shop NOW</span>
    </div>
  </div>
);

export default MenuItem;
