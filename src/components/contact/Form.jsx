'use client';
import { useForm } from 'react-hook-form';
import React from 'react';

export default function FormContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
    >
      <input
        type='text'
        placeholder='Nome'
        {...register('name', { required: true })}
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      <input
        type='email'
        placeholder='Digite seu Email'
        {...register('email', { required: true })}
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />
      <textarea
        {...register('message', { required: true, max: 256, min: 50 })}
        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
      />

      <input
        className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize transition-shadow duration-300 ease-in-out'
        type='submit'
        value='Cast your Message!'
      />
    </form>
  );
}
