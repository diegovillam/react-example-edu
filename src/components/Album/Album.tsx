import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { usePhotos, Photo } from '../../context/PhotoContext';
import styles from './Album.module.scss';

export default function() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
        .then(res => setPhotos(res.data));
  }, [id]);

  return (
    <div className={styles.grid}>
      {photos.length === 0 && (
        <h2>
          No photos found
        </h2>
      )}
      {photos.map((p) => (
        <Link to={`/photos/${p.id}`}>
          <div className={styles.image}>
            <img src={p.thumbnailUrl} alt={p.title} />
            <small>
              {p.title}
            </small>
          </div>
        </Link>
      ))}
    </div>
  );
}