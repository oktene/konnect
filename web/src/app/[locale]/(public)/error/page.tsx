"use client";

import React from 'react';
import Link from 'next/link';
import styles from './page.module.css'; // Estilos para a página 404

const Custom404: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Página Não Encontrada</h2>
      <p className={styles.message}>Desculpe, a página que você está procurando não existe.</p>
      <Link href="/" className={styles.link}>Voltar para a página inicial</Link>
    </div>
  );
};

export default Custom404;