import React from 'react';
import { Link } from 'react-router-dom';
import { Album } from '../../context/PhotoContext';
import styles from './AlbumPreview.module.scss';

type Props = {
  album: Album;
}

function AlbumPreview(props: Props) {
  return (
    <Link to={`/albums/${props.album.id}`}>
      <div className={styles.wrapper}>
        <p>{props.album.title}</p>
      </div>
    </Link>
  )
}

export default AlbumPreview;