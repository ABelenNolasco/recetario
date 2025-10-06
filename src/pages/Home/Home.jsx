import React from 'react'
import styles from './Home.module.css'

export default function Home() {
    return (
        <div>

            <div className={styles.homeContainer}>
                <h1 className={styles.tituloHome}>Bienvenido al Recetario</h1>
                <p className={styles.subTitulo}>¡A cocinar!</p>
            </div>
        </div>
    )
};
