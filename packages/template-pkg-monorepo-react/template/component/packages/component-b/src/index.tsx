import * as React from 'react';
import styles from './index.module.css';

interface ComponentProps {
  /** Title for ComponentB. */
  title: string;
}

export default function ComponentB(props: ComponentProps) {
  const { title = 'Hello World!' } = props;

  return (
    <div className={styles.ComponentB}>{title}</div>
  );
}
