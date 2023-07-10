import React from 'react';
import styles from '../styles/Form.module.css';

const FormPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action="https://getform.io/f/52f1e41d-25bf-4a49-841c-8657553f8c4c" method="POST">
        <h2 className={styles.title}>Contact Me</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <input required type="text" id="name" name="name" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input required type="email" id="email" name="email" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>Message:</label>
          <textarea required id="message" name="message" rows="5" className={styles.input} />
        </div>
        <button type="submit" className={styles.button}>Send</button>
      </form>
      <h1> Branch öğreniyorum.</h1>
    </div>
  );
};

export default FormPage;
