import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRecetas } from "../../api/api";
import RecetaCard from '../../components/RecetaCard/RecetaCard';
import styles from './RecetasLista.module.css';
const COLLECTION_NAME = 'recetas';

export default function RecetaLista() {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecetas = async () => {
      const items = await getRecetas(COLLECTION_NAME);
      setRecetas(items);
      setLoading(false);
    };
    fetchRecetas();
  }, []);



  return (
    <div>
      <div className="receta-list-header">
        <h1 className={styles.tituloPppal}>Nuestras Recetas</h1>
        <Link to="/agregar" className="add-button">
          <button type="button" className={styles.botonAgregar}>Agregar Receta</button>
        </Link>
      </div>

      <div className={styles.recetaGrid}>
        {recetas.map((receta) => (
          <RecetaCard key={receta.id} receta={receta} />
        ))}
      </div>
    </div>
  );
}