import React from 'react';
import { useNavigate } from 'react-router';

import './menu-items.styles.scss';

interface MenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, imageUrl, size }) => {
  const navigate = useNavigate();

  const handleClick = (section: string) => {
    navigate(`/shop/${section}`);
  };

  return (
    <div className={`${size} menu-item`} onClick={() => handleClick(title)}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>shop NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
