import Image from 'next/image';

import bg from '../../../../public/background/contact-background.png';
import Form from '@/components/contact/Form';

export default function Contact() {
	return (
		<>
			<Image
				priority
				sizes='100vw'
				src={bg}
				alt='background-image'
				className='-z-50 w-full h-full object-cover object-center opacity-50 fixed top-0 left-0'
			/>
			<article className='relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8'>
				<div className='flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4'>
					<h1 className='text-accent font-semibold text-center text-4xl capitalize'>
						Chame o mago
					</h1>
					<p className='text-center font-light text-sm xs:text-base'>
						Entre no círculo do encantamento e entrelace suas palavras na
						estrutura do cosmos. Quer você procure evocar colaborações,
						desvendar mistérios ou simplesmente compartilhar histórias de
						aventura, suas mensagens são pergaminhos preciosos neste reino.
						Utilize o formulário abaixo para enviar suas missivas através da
						rede etérea e aguarde o sussurro da magia em resposta.
					</p>
				</div>
				<Form />
			</article>
		</>
	);
}
