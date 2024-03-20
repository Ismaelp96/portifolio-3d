/* eslint-disable @next/next/no-img-element */
import ItemLayout from './ItemLayout';

const AboutDetails = () => {
	return (
		<section className='w-auto xs:w-full pt-[348px] sm:pt-[400px] lg:pt-[396px] relative z-10'>
			<div className='mb-20 w-full'>
				<h1 className='font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent text-center'>
					Ismael
				</h1>
				<p className='font-light text-foreground text-lg text-center'>
					Conheça o mago por trás deste portfólio
				</p>
			</div>
			<div className='grid grid-cols-12 gap-8 w-full'>
				<ItemLayout
					className={
						'col-span-full lg:col-span-8 row-span-2 flex-col items-start'
					}>
					<h2 className='text-xl md:text-2xl text-left w-full capitalize'>
						Arquiteto do Encantamento
					</h2>
					<p className='font-light text-xs sm:text-sm md:text-base'>
						Minha jornada no desenvolvimento web é alimentada por uma série de
						conhecimentos místicos ferramentas e linguagens, com JavaScript
						lançando o núcleo do meu encantamentos. Eu uso frameworks como
						React.js e Next.js com precisão, criando portais(sites) integrados
						que conectam reinos(usuários) em todo o universo digital. As antigas
						artes do Jamstack me permite criar experiências rápidas, seguras e
						dinâmicas, enquanto minhas habilidades de design garantem que cada
						criação não seja apenas funcional mas visualmente cativante.
						Junte-se a mim enquanto continuo a explorar novos feitiços e
						tecnologias para moldar o futuro da web.
					</p>
				</ItemLayout>
				<ItemLayout
					className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
					<p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
						25+
						<sub className='font-semibold text-base'>Projetos</sub>
					</p>
				</ItemLayout>
				<ItemLayout
					className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
					<p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
						1+{' '}
						<sub className='font-semibold text-base'>anos de experiência</sub>
					</p>
				</ItemLayout>
				<ItemLayout
					className={'col-span-full sm:col-span-6 md:col-span-4 !p-0'}>
					<img
						src={`https://github-readme-stats.vercel.app/api/top-langs?username=Ismaelp96&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&locale=pt-BR`}
						alt='Ismaelp96 Git Stats'
						loading='lazy'
						className='w-full h-auto'
					/>
				</ItemLayout>
				<ItemLayout className={'col-span-full md:col-span-8 !p-0'}>
					<img
						src={`https://github-readme-stats.vercel.app/api?username=Ismaelp96&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&locale=pt-BR`}
						alt='Ismaelp96 Git Stats language'
						loading='lazy'
						className='w-full h-auto'
					/>
				</ItemLayout>
				<ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
					<img
						src='https://github-readme-streak-stats.herokuapp.com?user=Ismaelp96&theme=dark&hide_border=true&type=png&locale=pt_BRg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B'
						alt='Ismaelp96 Git Streak'
						loading='lazy'
						className='w-auto h-auto'
					/>
				</ItemLayout>
				<ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
					<img
						src={`https://github-readme-stats.vercel.app/api/pin/?username=Ismaelp96&repo=imdb-next&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&locale=pt-BR`}
						alt='Ismaelp96 Git Stats language'
						loading='lazy'
						className='w-full h-auto'
					/>
				</ItemLayout>
			</div>
		</section>
	);
};

export default AboutDetails;
