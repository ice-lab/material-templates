import styles from './index.module.css';

export default function BasicLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
