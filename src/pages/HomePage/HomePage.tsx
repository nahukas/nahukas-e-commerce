import React from 'react';

import './homePage.styles.scss';

const HomePage: React.FC = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Mate</h1>
          <span className='subtitle'>Shop Now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Beers</h1>
          <span className='subtitle'>Shop Now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Non-alcoholic beers</h1>
          <span className='subtitle'>Shop Now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Beers</h1>
          <span className='subtitle'>Shop Now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Non-alcoholic</h1>
          <span className='subtitle'>Shop Now</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
