import { Header } from '../elements';

export const FooterContainer = () => {
	const socials = [
		{ label: 'LinkedIn', path: 'https://www.linkedin.com/in/nythonore' },
		{ label: 'Twitter', path: 'https://twitter.com/nythonore' },
		{ label: 'Instagram', path: 'https://www.instagram.com/nythonore' },
		{ label: 'Github', path: 'https://github.com/nythonore' },
	];

	return (
		<footer id='contact' className='body-h flex items-center py-24'>
			<div className='container'>
				<Header count='03' title='Get In Touch' />

				<div className='w-full md:w-[50%] mt-12'>
					<p className='text-light text-2xl md:text-4xl'>
						Feel free to reach out for collaborations or just a friendly hello
						👋{' '}
						<a
							href='mailto:nythonore@gmail.com'
							className='underline font-medium text-gray'
						>
							nythonore@gmail.com
						</a>
					</p>
				</div>

				<div className='mt-12 flex gap-4 flex-wrap justify-between'>
					<div className='flex gap-4 flex-wrap'>
						{socials.map((social, key) => (
							<a
								key={key}
								href={social.path}
								target='_blank'
								rel='noreferrer'
								className='text-gray text-base underline'
							>
								{social.label}
							</a>
						))}
					</div>

					<a
						href='https://github.com/nythonore/nythonore-web'
						className='text-light group'
						target='_blank'
						rel='noreferrer'
					>
						Designed & Built by{' '}
						<span className='group-hover:text-secondary hover'>
							Honore Niyitegeka
						</span>
					</a>
				</div>
			</div>
		</footer>
	);
};
