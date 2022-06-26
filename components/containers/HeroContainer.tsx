import Link from 'next/link';

export const HeroContainer = () => {
	return (
		<section id='hero' className='body-h flex items-center py-24'>
			<div className='container'>
				<div>
					<p className='text-secondary font-mono'>Hi, my name is</p>

					<p className='text-light text-4xl md:text-6xl font-bold mt-6'>
						Honore Niyitegeka.
					</p>

					<p className='text-gray text-4xl md:text-6xl font-bold mt-4'>
						I build things for the web.
					</p>

					<div className='w-full md:w-[50%] mt-8'>
						<p className='text-gray leading-7'>
							I’m a fullstack developer located in Rwanda. I help companies
							design, develop and launch world class digital products.
							Currently, I’m focused on building accessible, human-centered
							products at{' '}
							<a
								href='https://ishema.rw'
								className='text-secondary'
								target='_blank'
								rel='noreferrer'
							>
								@IshemaHub
							</a>
						</p>
					</div>

					<div className='flex gap-4 mt-6'>
						<Link href='/#work'>
							<p className='btn-primary-outline py-4'>View My Work</p>
						</Link>

						<Link href='/#contact'>
							<p className='btn-primary-outline py-4'>Get In Touch</p>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
