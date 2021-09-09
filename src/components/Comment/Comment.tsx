import React from 'react';
import { PhotoComment } from '../../context/PhotoContext';
import styles from './Comment.module.scss';

type Props = {
  comment: PhotoComment;
}

function Comment(props: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.comment}>
        <p>{props.comment.body}</p>
        <small className={styles.author}>{props.comment.email}</small>
      </div>
    </div>
  );
}

export default Comment;