import { Header, Work } from '../elements';

export const WorkContainer = () => {
	const works = [
		{
			title: 'WhatsApp - Clone UI',
			cover:
				'https://nythonore.me/static/media/whatsapp.b3cbc0ff0cbb83095175.png',
			description:
				'A CRUD application to store and edit notes using React and Tailwind CSS.',
			tags: ['react', 'bootstrap'],
			liveUrl: 'https://whatsapp.nythonore.me/',
			githubUrl: 'https://github.com/nythonore/whatsapp-clone',
		},
		{
			title: 'Dark Theme Blog',
			cover: 'https://nythonore.me/static/media/blog.02889399320dfe95234e.png',
			description:
				'Buzzphonics is a sounds app for parents and kids to learn Phase 2 and Phase 3 phonics in the UK.',
			tags: ['typescript', 'react', 'bootstrap', 'redux'],
			liveUrl: 'https://blog-ui.nythonore.me/',
			githubUrl: 'https://github.com/nythonore/blog-web',
		},
		{
			title: 'Obama Donate - Clone UI',
			cover:
				'https://nythonore.me/static/media/obamadonate.fcde1928ceede86700a7.png',
			description:
				'A website for my yoga business created with Next.js. It has a markdown blog using gray-matter and marked.',
			tags: ['react', 'bootstrap'],
			liveUrl: 'https://obamadonate.nythonore.me/',
			githubUrl: 'https://github.com/nythonore/obamadonate-clone',
		},
		{
			title: 'Cookie UI',
			cover:
				'https://nythonore.me/static/media/cookie.f8890fbcf532f9870a93.png',
			description:
				'A CRUD application to store and edit notes using React and Tailwind CSS.',
			tags: ['react', 'bootstrap'],
			liveUrl: 'https://cookie-ui.nythonore.me/',
			githubUrl: 'https://github.com/nythonore/cookie-ui',
		},
	];

	return (
		<section id='work' className='body-h flex items-center py-24'>
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
