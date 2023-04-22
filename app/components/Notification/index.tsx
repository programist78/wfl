import styles from './Notification.module.scss'
import React, { useState } from "react";

type Props = {
  message: string;
};

const Notification: React.FC<Props> = ({ message }) => {
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleClick = () => {
    if (!showNotification) {
      setIsAnimating(true);
    }
    setShowNotification(true);
  };

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowNotification(false);
      setIsAnimating(false);
    }, 300); // время анимации закрытия в миллисекундах
  };

  return (
    <div>
      <button onClick={handleClick}>Показать уведомление</button>
      {showNotification && (
        <div
        className={styles.notification + (isAnimating ? " " + styles.is_animating : "")}
          onAnimationEnd={() => setIsAnimating(false)}
        >
          <span className={styles.message}>{message}</span>
          <button className={styles.close_btn} onClick={handleClose}>
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default Notification;
