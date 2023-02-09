import { Header, Work } from '../elements';

export const WorkContainer = () => {
	const works = [
		{
			title: 'Spotify - Clone UI',
			description:
				"Created UI clone of Spotify's home & search page using React, Tailwind CSS, Spotify API, TypeScript, and Redux.",
			tags: [
				'typescript',
				'react',
				'redux toolkit',
				'tailwind css',
				'spotify api',
			],
			liveUrl: 'https://zingy-gumption-42f161.netlify.app',
			githubUrl: 'https://github.com/nythonore/spotify-clone-ui',
		},
		{
			title: 'Github - Repo UI',
			description:
				'Created UI for repo & details page using React & Tailwind CSS with GitHub API integration.',
			tags: [
				'javascript',
				'react',
				'redux toolkit',
				'tailwind css',
				'github api',
			],
			liveUrl: 'https://igitegohotel.com',
			githubUrl: 'https://github.com/nythonore/github-repo-clone-ui',
		},
		{
			title: 'WhatsApp - Clone UI',
			description:
				'Created UI clone of WhatsApp chat page using React and Bootstrap.',
			tags: ['javascript', 'react', 'bootstrap'],
			liveUrl: 'https://quiet-twilight-427f92.netlify.app',
			githubUrl: 'https://github.com/nythonore/whatsapp-clone',
		},
		{
			title: 'Dark Theme Blog',
			description:
				'Built a web app for random blogs utilizing Blog API, TypeScript, React, Redux, and Bootstrap.',
			tags: ['typescript', 'react', 'redux', 'bootstrap'],
			liveUrl: 'https://stellular-youtiao-deaaaf.netlify.app',
			githubUrl: 'https://github.com/nythonore/blog-web',
		},
		{
			title: 'Obama Donate - Clone UI',
			description:
				'Created UI clone of Obama Donate landing & payment page using React and Bootstrap.',
			tags: ['javascript', 'react', 'bootstrap'],
			liveUrl: 'https://dreamy-crisp-71e4ca.netlify.app',
			githubUrl: 'https://github.com/nythonore/obamadonate-clone',
		},
	];

	return (
		<section id='work' className='py-12 md:py-16'>
			<div className='container'>
				<Header count='02' title='Featured Projects' />

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
							View More Projects
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
