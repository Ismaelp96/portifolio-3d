import { Inter } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';
import FireFlisBackground from '@/components/FireFliesBackground';
import Sound from '@/components/Sound';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
	title: 'Ismael Patrick - DEV',
	description: 'Portifólio de alguns projetos já realizados',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={clsx(
					inter.variable,
					'bg-background text-foreground font-inter',
				)}>
				{children}
				<FireFlisBackground />
				<Sound />
				<div id='my-modal' />
			</body>
		</html>
	);
}
