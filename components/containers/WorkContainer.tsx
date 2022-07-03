import { Header, Work } from '../elements';

export const WorkContainer = () => {
	const works = [
		{
			title: 'WhatsApp - Clone UI',
			cover: '/works/whatsapp.png',
			description: 'Cloned WhatsApp chat page UI in React Js and Bootstrap.',
			tags: ['react', 'bootstrap'],
			liveUrl: 'https://whatsapp.nythonore.me/',
			githubUrl: 'https://github.com/nythonore/whatsapp-clone',
		},
		{
			title: 'Dark Theme Blog',
			cover: '/works/blog.png',
			description: 'A web app for random blogs in TypeScript & Redux and Bootstrap.',
			tags: ['typescript', 'react', 'bootstrap', 'redux'],
			liveUrl: 'https://blog-ui.nythonore.me/',
			githubUrl: 'https://github.com/nythonore/blog-web',
		},
		{
			title: 'Obama Donate - Clone UI',
			cover: '/works/obamadonate.png',
			description:
				'Cloned Obama Donate landing & payment page UI in React JS and Bootstrap.',
			tags: ['react', 'bootstrap'],
			liveUrl: 'https://obamadonate.nythonore.me/',
			githubUrl: 'https://github.com/nythonore/obamadonate-clone',
		},
		{
			title: 'Cookie UI',
			cover: '/works/cookie.png',
			description: 'Cookie single-page UI in React JS and Bootstrap.',
			tags: ['react', 'bootstrap'],
			liveUrl: 'https://cookie-ui.nythonore.me/',
			githubUrl: 'https://github.com/nythonore/cookie-ui',
		},
	];

	return (
		<section id='work' className='py-12 md:py-24'>
			<div className='container'>
				<Header count='02' title='Some Things I’ve Built' />

				<div className='grid grid-cols-1 gap-24 mt-12'>
					{works.map((work, key) => (
						<Work key={key} {...{ ...work, index: key + 1 }} />
					))}
				</div>
			</div>
		</section>
	);
};
