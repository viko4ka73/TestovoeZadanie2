/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import styles from './github.style.scss';

export const Github = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}></div>
      <div className={styles.control}>
        <div className={styles.control__btns}>
          <button className={styles.control__btn}>
            <span />
          </button>
          <button className={styles.control__btn}>
            <span />
          </button>
          <button className={styles.control__btn}>
            <span />
          </button>
          <button className={styles.control__btn}>
            <span />
          </button>
          <button className={styles.control__btn}>
            <span />
          </button>
        </div>
      </div>
    </div>
  );
};
