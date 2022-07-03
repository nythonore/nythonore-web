import { ChevronRightIcon } from '@heroicons/react/outline';
import { Header, ImageCard } from '../elements';

export const AboutContainer = () => {
	const skills = [
		{
			category: 'Frontend',
			tools: ['Javascript (ES6+)', 'TypeScript', 'React JS', 'React Native'],
		},
		{
			category: 'Backend',
			tools: ['Python', 'Django', 'NodeJS', 'NestJS'],
		},
		{
			category: 'Database',
			tools: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
		},
		{
			category: 'Devops',
			tools: ['Docker', 'Kubernetes', 'CircleCi', 'Linux'],
		},
	];

	return (
		<section id='about' className='py-12 md:py-24'>
			<div className='container'>
				<Header count='01' title='About Me' />

				<div className='flex flex-col-reverse md:flex-row justify-center gap-12 mt-12'>
					<div className='basis-[70%] md:basis-[60%] lg:basis-[70%] font-light'>
						<p className='text-gray'>
							Here are a few technologies I’ve been working with recently:
						</p>

						<div className='mt-4 grid grid-cols-2 lg:md:grid-cols-4 gap-4'>
							{skills.map((skill, key) => (
								<div key={key}>
									<p className='text-light'>{skill.category}</p>

									<ul className='mt-4'>
										{skill.tools.map((tool, toolKey) => (
											<li
												key={toolKey}
												className='text-gray flex gap-1 items-center mb-1'
											>
												<ChevronRightIcon className='h-3.5 w-3.5 text-secondary' />
												<span>{tool}</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					<div className='basis-[30%] md:basis-[40%] lg:basis-[30%]'>
						<ImageCard
							alt='Honore Niyitegeka'
							src='/nythonore.jpg'
							cardStyles='bg-[#D9F6F1]'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
