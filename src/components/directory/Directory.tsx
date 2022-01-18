import React, { useEffect, useState } from 'react';

import { IDirectory } from '../../api/Directory/directory.models';
import { DirectoryService } from '../../api/Directory/DirectoryService';
import MenuItem from '../menu-item/MenuItem';

import './directory.styles.scss';

const Directory: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [sections, setSections] = useState<IDirectory[]>([]);

  useEffect(() => {
    const fetchDirectory = async () => {
      setLoading(true);
      try {
        const response = await DirectoryService.getDirectory();
        setSections(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDirectory();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='directory-menu'>
      {sections.map(({ title, imageUrl, id }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
