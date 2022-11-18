import { Header, Work } from '../elements';

export const WorkContainer = () => {
	const works = [
		{
			title: 'Waka Pay',
			description: '',
			tags: [
				'react',
				'tailwind',
				'graphql',
				'python',
				'postgresql',
				'mastercard',
			],
			liveUrl: 'https://pay.wakaglobal.com/',
			githubUrl: undefined,
		},
		{
			title: 'Igitego Hotel',
			description: '',
			tags: [
				'typescript',
				'react',
				'react query',
				'tailwind',
				'python',
				'postgresql',
			],
			liveUrl: 'https://igitegohotel.com/',
			githubUrl: undefined,
		},
		{
			title: 'Dark Theme Blog',
			description:
				'A web app for random blogs in TypeScript, React, Redux and Bootstrap',
			tags: ['typescript', 'react', 'redux', 'bootstrap'],
			liveUrl: 'https://stellular-youtiao-deaaaf.netlify.app/',
			githubUrl: 'https://github.com/nythonore/obamadonate-clone',
		},
		{
			title: 'WhatsApp - Clone UI',
			description: 'Cloned WhatsApp chat page UI in React Js and Bootstrap.',
			tags: ['javascript', 'react', 'bootstrap'],
			liveUrl: 'https://quiet-twilight-427f92.netlify.app/',
			githubUrl: 'https://github.com/nythonore/cookie-ui',
		},
		{
			title: 'Obama Donate - Clone UI',
			description:
				'Cloned Obama Donate landing & payment page UI in React JS and Bootstrap.',
			tags: ['javascript', 'react', 'bootstrap'],
			liveUrl: 'https://dreamy-crisp-71e4ca.netlify.app/',
			githubUrl: 'https://github.com/nythonore/cookie-ui',
		},
	];

	return (
		<section id='work' className='py-12 md:py-16'>
			<div className='container'>
				<Header count='02' title='Featured Works' />

				<div className='mt-12 grid grid-cols-1 gap-5 md:grid-cols-3'>
					{works.map((work, key) => (
						<Work key={key} {...work} />
					))}

					<div className='flex items-center justify-center p-6'>
						<a
							href='https://github.com/nythonore?tab=repositories'
							className='text-2xl font-medium text-secondary underline'
							target='_blank'
							rel='noreferrer'
						>
							View More Works
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
