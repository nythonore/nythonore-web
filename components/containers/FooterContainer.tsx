import { Header } from '../elements';

export const FooterContainer = () => {
	const socials = [
		{ label: 'LinkedIn', path: 'https://www.linkedin.com/in/nythonore' },
		{ label: 'Twitter', path: 'https://twitter.com/nythonore' },
		{ label: 'Instagram', path: 'https://www.instagram.com/nythonore' },
		{ label: 'Github', path: 'https://github.com/nythonore' },
	];

	return (
		<footer id='contact' className='py-12 md:py-16'>
			<div className='container'>
				<Header count='03' title='Sold Yet 🤙' />

				<div className='mt-10 w-full lg:w-[50%]'>
					<p className='text-xl font-light text-light md:text-xl'>
						You can find me on{' '}
						<a
							href='https://twitter.com/nythonore'
							className='text-secondary'
							target='_blank'
							rel='noreferrer'
						>
							@Twitter
						</a>{' '}
						for a chat or{' '}
						<a
							href='https://www.linkedin.com/in/nythonore'
							className='text-secondary'
							target='_blank'
							rel='noreferrer'
						>
							@LinkedIn
						</a>{' '}
						for something a bit more professional. Come say hello, I’d love to
						hear from you.
					</p>
				</div>

				<div className='mt-12 flex flex-wrap justify-between gap-4'>
					<div className='flex flex-wrap gap-4'>
						{socials.map((social, key) => (
							<a
								key={key}
								href={social.path}
								target='_blank'
								rel='noreferrer'
								className='text-base font-light text-gray underline'
							>
								{social.label}
							</a>
						))}
					</div>

					<a
						href='https://github.com/nythonore/nythonore-web'
						className='group text-light'
						target='_blank'
						rel='noreferrer'
					>
						Designed & Built by{' '}
						<span className='hover group-hover:text-secondary'>
							Honore Niyitegeka
						</span>
					</a>
				</div>
			</div>
		</footer>
	);
};
