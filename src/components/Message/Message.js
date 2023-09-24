import React from 'react';
import styles from './Message.module.scss'
const Message = () => {
  return (
    <div className={styles.Message}>
      <h2>Ваша иннициатива была отклоненна</h2>
      <p>Добрый день уважаемый Байтемир, ваша гражданская иннициатива была отклоненна по причинам присутсвия в ней нецензурной лексики, и выражений не соответсвующих нашим правилам</p>
    </div>
  );
}

export default Message;
