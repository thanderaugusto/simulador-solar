import Image from 'next/image';
import styles from './page.module.css';

import logo from '../../public/logo.png';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Image src={logo} alt="Logomarca 77 Solar" width={150} />
      </header>
      <main className={styles.main}>
        <h1>Simulador Solar</h1>
        <div className={styles.description}></div>
      </main>
    </>
  );
}
