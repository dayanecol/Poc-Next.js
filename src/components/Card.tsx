import React from "react";
import Image from "next/image";
import styles from "../styles/Card.module.css";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;
