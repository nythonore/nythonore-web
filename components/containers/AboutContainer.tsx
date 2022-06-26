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
		<section id='about' className='body-h flex items-center py-24'>
			<div className='container'>
				<Header count='01' title='About Me' />

				<div className='flex flex-col-reverse md:flex-row justify-center gap-12 mt-10'>
					<div className='basis-[70%]'>
						<p className='text-gray'>
							Fullstack developer with over three years of experience building
							high-quality websites, applications, and databases for reputable
							brands. I am well versed in all the key languages and am able to
							design, code and deploy in an organized and efficient manner.
						</p>

						<p className='text-gray mt-4'>
							Having worked on different projects helped me to adapt to the
							changes quickly and made me a mature team worker. I am able to
							work well both in a team environment as well as using my own
							initiative. I am able to work well under pressure and adhere to
							strict deadlines.
						</p>

						<p className='text-gray mt-4'>
							Here are a few technologies I’ve been working with recently:
						</p>

						<div className='mt-4 grid grid-cols-2 md:grid-cols-4 gap-4'>
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

					<div className='basis-[30%]'>
						<ImageCard
							alt='Honore Niyitegeka'
							src='https://nythonore.me/static/media/nythonore.0ce7a5a4fc7a531c2891.jpg'
							cardStyles='bg-[#D9F6F1]'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
