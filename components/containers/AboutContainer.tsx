import { ChevronRightIcon } from '@heroicons/react/outline';
import { Header, ImageCard } from '../elements';

export const AboutContainer = () => {
	const skills = [
		{
			category: 'Frontend',
			tools: ['Tailwind CSS', 'TypeScript', 'React JS', 'React Native'],
		},
		{
			category: 'Backend',
			tools: ['Python', 'NodeJS', 'PHP', 'GraphQL'],
		},
		{
			category: 'Database',
			tools: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
		},
		{
			category: 'Devops',
			tools: ['Docker', 'Kubernetes', 'CircleCI', 'AWS'],
		},
	];

	return (
		<section id='about' className='py-12 md:py-16'>
			<div className='container'>
				<Header count='01' title='About Me' />

				<div className='mt-12 flex flex-col-reverse justify-center gap-12 md:flex-row'>
					<div className='basis-[70%] font-light md:basis-[60%] lg:basis-[70%]'>
						<p className='text-gray'>
							Hello, my name is Honore. I am a front-end developer based in
							Canada.
						</p>

						<p className='mt-4 text-gray'>
							a seasoned frontend developer with years of experience building
							user-friendly and seamless web applications. possessing a keen
							sense of design and user experience, as well as being fluent in
							HTML, CSS, JavaScript, React, and Python. demonstrated leadership
							abilities in leading development teams and excellent communication
							abilities for successful cross-functional team collaboration.
						</p>

						<p className='mt-4 text-gray'>
							Here are a few technologies I’ve been working with recently:
						</p>

						<div className='mt-4 grid grid-cols-2 gap-4 lg:md:grid-cols-4'>
							{skills.map((skill, key) => (
								<div key={key}>
									<p className='text-gray'>{skill.category}</p>

									<ul className='mt-4'>
										{skill.tools.map((tool, toolKey) => (
											<li
												key={toolKey}
												className='mb-1 flex items-center gap-1 text-gray'
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
