import React from 'react';
import styles from './styles.css';


const GifItem = ({ name, image }) => (
    <div className={styles.item}>
        <div className={styles.itemName}>{name}</div>
        <div className={styles.itemImage} style={{
            backgroundImage: `url("${image}")`
        }} />
    </div>
);

export default GifItem;
