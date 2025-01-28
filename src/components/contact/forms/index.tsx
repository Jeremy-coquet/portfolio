import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { styles } from './styles';
import { ContactFormType } from "@/types/contact";

const Forms = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormType>();
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit : SubmitHandler<ContactFormType> = async (data) => {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Erreur lors de l\'envoie du formulaire');
        }

        const result = await response.json();
        console.log(result);
        setSuccessMessage('Formulaire soumis avec succès !');
        reset();
      } catch (error) {
          console.error('Erreur:', error);
          setSuccessMessage('une erreur est survenue.')
      }
};

  return <>
    <form onSubmit={handleSubmit(onSubmit)} style={ styles.form as any }>
      <div style={ styles.div }>
        <label htmlFor="name" style={ styles.label }>Nom</label>
        <input 
          id='name' 
          {...register('name', { 
            required: 'Nom est requis',
            minLength: {
              value: 3,
              message: 'le nom doit comporter au moins 3 caractères'
            }
            })
          } 
          style={styles.input as any} 
        />
        {errors.name && <span style={ styles.span }>{typeof errors.name.message === 'string' && errors.name.message }</span>}
      </div>

      <div style={ styles.div }>
        <label htmlFor="prenom" style={ styles.label }>Prénom: </label>
        <input 
          id='prenom' 
          {...register('prenom', {
           required: 'prenom est requis',
           minLength: {
            value: 3,
            message: 'le prénom doit comporter au moins 3 caractères'
            }
           })
          } 
          style={styles.input as any} />
        { errors.prenom && <span style={ styles.span }>{ typeof errors.prenom.message === 'string' && errors.prenom.message }</span> }
      </div>

      <div style={ styles.div }>
        <label htmlFor="email" style={ styles.label }>Email: </label>
        <input id='email' {...register('email', { required: 'Email est requis',
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          message: 'Email invalide'
        } 
        })} style={styles.input as any} />
        { errors.email && <span style={ styles.span }> { typeof errors.email.message === 'string' && errors.email.message } </span> }
      </div>

      <div style={ styles.div }>
        <label htmlFor="message" style={ styles.label }>Message: </label>
        <input id='message' {...register('message', { 
          required: 'Message est requis',
          minLength: {
            value: 12,
            message: 'le message doit comporter au moins 12 caractères'
          }
          })} style={styles.input as any} />
        { errors.message && <span style={ styles.span }> {typeof errors.message.message === 'string' && errors.message.message }</span> }
      </div>


      <button type='submit' style={ styles.button as any }>submit</button>
      {successMessage && <div style={styles.success}>{successMessage}</div>}
    </form>
    </>
};

export default Forms;

