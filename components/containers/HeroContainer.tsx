import Link from 'next/link';

export const HeroContainer = () => {
	return (
		<section id='hero' className='py-12 md:py-16'>
			<div className='container'>
				<div>
					<p className='text-secondary'>Hi, my name is</p>

					<p className='mt-6 text-4xl font-bold text-light md:text-6xl'>
						Honore Niyitegeka.
					</p>

					<p className='mt-4 text-4xl font-bold text-gray md:text-6xl'>
						I build things for the web.
					</p>

					<div className='mt-8 w-full lg:w-[55%]'>
						<p className='font-light leading-7 text-gray'>
							A Frontend focused web Developer building the frontend of websites
							and web applications that leads to the success of the overall
							product
						</p>
					</div>

					<div className='mt-6 flex gap-4'>
						<Link href='/#work'>
							<p className='btn-secondary-outline grow py-4 px-8 md:grow-0'>
								View My Work
							</p>
						</Link>

						<Link href='/#contact'>
							<p className='btn-secondary-outline grow py-4 px-8 md:grow-0'>
								Hire Me
							</p>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
