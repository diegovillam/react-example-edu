import React from 'react';

import { usePhotos } from '../../context/PhotoContext';
import AlbumPreview from '../AlbumPreview/AlbumPreview';
import styles from './ListAlbums.module.scss';

export default function() {
  const photos = usePhotos();

  return (
    <div className={styles.grid}>
      {photos.albums.map((p) => (
        <AlbumPreview album={p} />
      ))}
    </div>
  );
}