import React, { useEffect, useState } from 'react';
import MenuItem from '../menu-item/MenuItem';

import './directory.styles.scss';

const Directory: React.FC = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchDirectory = async () => {
      try {
        const response = await fetch('directory.data.json', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        });
        const responseJSON = await response.json();
        console.log(responseJSON);
        setSections(responseJSON);
      } catch (error) {}
    };

    fetchDirectory();
  }, []);

  return (
    <div className='directory-menu'>
      {sections.map(({ title, imageUrl, id }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
