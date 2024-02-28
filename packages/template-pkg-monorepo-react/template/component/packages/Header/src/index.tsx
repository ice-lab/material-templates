import * as React from 'react';
import styles from './index.module.css';

interface ComponentProps {
  title?: string;
}

export default function Header(props: ComponentProps) {
  const { title = 'Hello World!' } = props;

  return (
    <div className={styles.ComponentA}>Header {title}</div>
  );
}
