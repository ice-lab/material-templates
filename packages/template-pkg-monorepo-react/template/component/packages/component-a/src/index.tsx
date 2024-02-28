import * as React from 'react';
import Header from 'header';
import styles from './index.module.css';

interface ComponentProps {
  /** Title for ComponentA. */
  title: string;
}

export default function ComponentA(props: ComponentProps) {
  const { title = 'Hello World!' } = props;

  return (
    <div className={styles.ComponentA}>
      <Header />
      {title}
    </div>
  );
}
