'use client'

import styles from './styles.module.css'
import { useRouter } from "next/navigation";

export const Header = () => {
    const router = useRouter()
  return (
    <div className={styles.header}>
      <div className={styles.header_container}>
        <h3 onClick={() => router.push('/default')} className={styles.link}>Текст редактор</h3>
        <h3 onClick={() => router.push('/balloon')} className={styles.link}>Верхнее меню</h3>
        <h3 onClick={() => router.push('/advanced')} className={styles.link}>Улучшенный редактор</h3>
      </div>
    </div>
  );
}