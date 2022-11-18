import Head from 'next/head';

export const Meta = () => {
	return (
		<Head>
			<meta charSet='utf-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='theme-color' content='#000000' />

			<meta name='robots' content='index, follow' />
			<meta name='language' content='English' />
			<meta name='author' content='Honore Niyitegeka' />

			<meta name='title' content='Honore Niyitegeka - Front End Developer' />
			<meta
				name='description'
				content='Front End Developer | TypeScript | ReactJS | Python'
			/>
			<meta
				name='keywords'
				content='nythonore, honore niyitegeka, frontend developer, react developer, backend developer, fullstack developer, freelancer, contractor, rwanda'
			/>

			<meta
				property='og:title'
				content='Honore Niyitegeka - Frontend Developer'
			/>
			<meta property='og:type' content='website' />
			<meta
				name='og:description'
				content='Frontend Developer | TypeScript | ReactJS | Python'
			/>
			<meta property='og:url' content='https://nythonore.me/' />

			<meta name='twitter:card' content='summary_large_image' />

			<title>Honore Niyitegeka - Frontend Developer</title>
		</Head>
	);
};
