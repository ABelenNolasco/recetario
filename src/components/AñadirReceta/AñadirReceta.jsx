import React from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import styles from './AñadirReceta.module.css';

export default function AñadirReceta() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const enviar = async (data) => {
    try {
      await addDoc(collection(db, "recetas"), {
        nombre: data.nombre,
        ingredientes: data.ingredientes,
        pasos: data.pasos,
      });
      alert("Receta guardada correctamente");
      reset();
    } catch (error) {
      console.error("Error guardando la receta:", error);
      alert("Error al guardar la receta");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Nueva Receta</h2>
      <form className={styles.añadirReceta} onSubmit={handleSubmit(enviar)}>
        <input 
          type="text" 
          placeholder="Nombre de la receta" 
          {...register("nombre", { required: "Campo obligatorio", minLength: { value: 3, message: "Mínimo 3 caracteres" } })}/>
        {errors.nombre && <p className={styles.advertencia}>{errors.nombre.message}</p>}

        <input 
          type="text" 
          placeholder="Ingredientes " 
          {...register("ingredientes", { required: "Campo obligatorio", minLength: { value: 10, message: "Mínimo 10 caracteres" } })}/>
        {errors.ingredientes && <p className={styles.advertencia}>{errors.ingredientes.message}</p>}

        <textarea 
          placeholder="Pasos" 
          {...register("pasos", { required: "Campo obligatorio", minLength: { value: 10, message: "Mínimo 10 caracteres" } })}></textarea>
        {errors.pasos && <p className={styles.advertencia}>{errors.pasos.message}</p>}

        <button type="submit">Guardar Receta</button>
      </form>
    </div>
  );
}


