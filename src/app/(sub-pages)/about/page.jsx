import Image from 'next/image';
import dynamic from 'next/dynamic';

import bg from '../../../../public/background/about-background.png';
import RenderModel from '@/components/RenderModel';
import AboutDetails from '@/components/about';

const HatModel = dynamic(() => import('@/components/models/Hat'), {
	ssr: false,
});

export const metadata = {
	title: 'Sobre',
};

export default function AboutPage() {
	return (
		<>
			<Image
				priority
				sizes='100vw'
				src={bg}
				alt='background-image'
				className='-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50'
			/>
			<div className='w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0'>
				<RenderModel>
					<HatModel />
				</RenderModel>
			</div>
			<AboutDetails />
		</>
	);
}
