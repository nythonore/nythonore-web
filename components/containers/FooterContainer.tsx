import { Header } from '../elements';

export const FooterContainer = () => {
	const socials = [
		{ label: 'LinkedIn', path: 'https://www.linkedin.com/in/nythonore' },
		{ label: 'Twitter', path: 'https://twitter.com/nythonore' },
		{ label: 'Instagram', path: 'https://www.instagram.com/nythonore' },
		{ label: 'Github', path: 'https://github.com/nythonore' }
	];

	return (
		<footer id='contact' className='py-12 md:py-24'>
			<div className='container'>
				<Header count='03' title='Get In Touch' />

				<div className='w-full lg:w-[50%] mt-12'>
					<p className='text-light text-xl md:text-xl font-light'>
						You can find me on Twitter for a chat or LinkedIn for something a
						bit more professional. Come say hello, I’d love to hear from you.
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
								className='text-gray text-base underline font-light'
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
