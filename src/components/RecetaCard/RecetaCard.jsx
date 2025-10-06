import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecetaCard.module.css';

const RecetaCard = ({ receta }) => {
  if (!receta) return null;

  return (
    <div className={`card ${styles.card}`} style={{ width: '18rem', marginBottom: '1rem' }}>
      <div className="card-body">
        <h5 className={styles['card-title']}>{receta.nombre}</h5>
        <p className="card-text">
        <b>Ingredientes: </b>{receta.ingredientes}
        </p>
        <p className="card-text">
          <b>Instrucciones: </b> {receta.pasos}
        </p>
        <Link 
          to={`/recetas/${receta.id || receta._id}`} 
          className="card-link"
          style={{ textDecoration:'none', color: '#3a3042' }}
        >
          Ver receta!
        </Link>
      </div>
    </div>
  );
};

export default RecetaCard;



