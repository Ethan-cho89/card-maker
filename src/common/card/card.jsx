import React from 'react';
import Preview from '../preview/preview';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';
const Card = ({ card }) => {
  const { name, work, job, email, message, theme, fileName, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE; //앞이 있으면 그것으로, 없으면 뒤에 걸로

  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.avatar} src={url} alt="profile Photo" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.work}>{work}</p>
        <p className={styles.job}>{job}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark;
      break;
    case 'light':
      return styles.light;
      break;
    case 'colorful':
      return styles.colorful;
      break;
    default:
      throw new Error(`unknown Theme : ${theme}`);
  }
}

export default Card;
