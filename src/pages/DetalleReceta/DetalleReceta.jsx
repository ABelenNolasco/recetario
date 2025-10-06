import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getRecetaById, updateReceta, deleteReceta } from '../../api/api';
import styles from './DetalleReceta.module.css';

const COLLECTION_NAME = 'recetas';

export default function RecetaDetail() {
  const [receta, setReceta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const fetchReceta = async () => {
    const item = await getRecetaById(id);
    if (item) setReceta(item);
    setLoading(false);
  };
  useEffect(() => {
    fetchReceta();
  }, [id]);


  useEffect(() => {
    if (receta) {
      reset({
        nombre: receta.nombre || "",
        ingredientes:receta.ingredientes || "",
        pasos: receta.pasos || ""
      });
    }
  }, [receta, reset]);

  const onUpdateSubmit = async (data) => {
    const updatedReceta = {
      nombre: data.nombre,
      ingredientes: data.ingredientes,
      pasos: data.pasos
    };
    const success = await updateReceta(id, updatedReceta);
    if (success) {
      alert("Receta actualizada con éxito");
      setIsEditing(false);
      fetchReceta();
    } else {
      alert("Error al actualizar la receta");
    }
  };

  const handleDelete = async () => {
    if (window.confirm(`¿Eliminar receta "${receta.nombre}"?`)) {
      const success = await deleteReceta(id);
      if (success) {
        alert("Receta eliminada");
        navigate('/listado');
      } else {
        alert("Error al eliminar la receta");
      }
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (!receta) return <p>Receta no encontrada.</p>;

  return (
    <div className={styles.contenedorPpal}>
      {isEditing ? (
        <div>
          <h2>Editar Receta</h2>
          <form className={styles.edicion} onSubmit={handleSubmit(onUpdateSubmit)}>
            <input placeholder="Nombre" {...register("nombre", { required: true })} />
            {errors.nombre && <p>Nombre obligatorio</p>}

            <input placeholder="Ingredientes" {...register("ingredientes", { required: true })} />
            {errors.ingredientes && <p>Ingredientes obligatorios</p>}

            <textarea placeholder="Pasos" {...register("pasos", { required: true })}></textarea>
            {errors.pasos && <p>Pasos obligatorios</p>}

            <button className={styles.botonBueno} type="submit">Guardar</button>
            <button className={styles.botonMalo} type="button" onClick={() => setIsEditing(false)}>Cancelar</button>
          </form>
        </div>
      ) : (
        <div>
          <h1 className={styles.tituloCard}>{receta.nombre}</h1>
          <p className={styles.subtitulo}><u><b>Ingredientes:</b></u> {receta.ingredientes}</p>
          <p className={styles.subtitulo}><u><b>Pasos:</b></u> {receta.pasos}</p>
          <button className={styles.botonBueno} onClick={() => setIsEditing(true)}>Editar</button>
          <button className={styles.botonMalo} onClick={handleDelete}>Eliminar</button>
          <br />
          <br />
          <Link to="/listado"> Volver a recetario</Link>
        </div>
      )}
    </div>
  );
}

