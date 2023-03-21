import * as React from 'react';
import styles from './index.module.css';

interface ComponentProps {
  /** Title for componentC. */
  title: string;
}

export default function componentC(props: ComponentProps) {
  const { title = 'Hello World!' } = props;

  return (
    <div className={styles.componentC}>{title}</div>
  );
}
