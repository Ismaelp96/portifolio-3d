'use client';

import { useForm } from 'react-hook-form';
import React from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';
import { motion } from 'framer-motion';

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const item = {
	hidden: { scale: 0 },
	show: { scale: 1 },
};

export default function FormContact() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const sendEmail = (params) => {
		const toastId = toast.loading(
			'Enviando sua mensagem, espere um momento...',
		);

		emailjs
			.send(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				params,
				{
					publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
					limitRate: {
						throttle: 5000,
					},
				},
			)
			.then(
				() => {
					toast.success('Recebi sua mensagem, retornarei em breve!', {
						id: toastId,
					});
				},
				(error) => {
					toast.error(
						'Ocorreu um erro ao enviar sua mensagem, tente novamente mais tarde',
						{
							id: toastId,
						},
					);
				},
			);
	};

	const onSubmit = (data) => {
		const templateParams = {
			to_name: 'Ismael',
			from_name: data.name,
			reply_to: data.email,
			message: data.message,
		};
		sendEmail(templateParams);
	};

	return (
		<>
			<Toaster richColors={true} />
			<motion.form
				variants={container}
				initial='hidden'
				animate='show'
				onSubmit={handleSubmit(onSubmit)}
				className='max-w-md w-full flex flex-col items-center justify-center space-y-4'>
				<motion.input
					variants={item}
					type='text'
					placeholder='Nome'
					{...register('name', {
						required: 'Esse campo é obrigatório!',
						minLength: {
							value: 3,
							message: 'Nome precisa ter no minimo 3 caracters',
						},
					})}
					className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
				/>
				{errors.name && (
					<span className='ml-2 inline-block self-start text-accent'>
						{errors.name.message}
					</span>
				)}
				<motion.input
					variants={item}
					type='email'
					placeholder='Digite seu Email'
					{...register('email', {
						required: 'E-mail é obrigatório',
					})}
					className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
				/>
				{errors.email && (
					<span className='ml-2 inline-block self-start text-accent'>
						{errors.email.message}
					</span>
				)}

				<motion.textarea
					variants={item}
					{...register('message', {
						required: 'Por gentileza, escreva sua mensagem',
						maxLength: {
							value: 256,
							message: 'Limite de caracters foi ultrapassado',
						},
						minLength: {
							value: 50,
							message: 'É necessário ter mais de 50 caracteres',
						},
					})}
					className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
					placeholder='Digite sua mensagem'
				/>
				{errors.name && (
					<span className='ml-2 inline-block self-start text-accent'>
						{errors.message.message}
					</span>
				)}
				<motion.input
					variants={item}
					className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize transition-shadow duration-300 ease-in-out'
					type='submit'
					value='Transmita sua mensagem!'
				/>
			</motion.form>
		</>
	);
}
