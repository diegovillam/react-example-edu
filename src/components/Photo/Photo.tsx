import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Photo, PhotoComment } from '../../context/PhotoContext';
import Comment from '../Comment/Comment';
import styles from './Photo.module.scss';

function Detail() {
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [comments, setComments] = useState<PhotoComment[]>([]);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(res => setPhoto(res.data));
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}/comments`)
      .then(res => setComments(res.data));
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <h2>{photo?.title}</h2>
        <img src={photo?.url} />
      </div>
      <div className={styles.comments}>
         {comments.map((c) => (
           <Comment comment={c} />
         ))}
      </div>
    </div>
  );
}

export default Detail;