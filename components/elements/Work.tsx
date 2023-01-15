import { ExternalLinkIcon, CodeIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

type WorkProps = {
	title: string;
	description: string;
	tags: string[];
	liveUrl: string;
	githubUrl?: string;
};

export const Work = (props: WorkProps) => {
	const { title, description, tags, liveUrl, githubUrl } = props;

	return (
		<div className='flex flex-col justify-between gap-6 rounded-md bg-dark-light p-7'>
			<div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='42'
					height='42'
					fill='#18EDCC'
					className='bi bi-github'
					viewBox='0 0 16 16'
				>
					<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
				</svg>

				<div className='my-4'>
					<h2 className='text-xl font-bold text-white'>{title}</h2>
					<p className='my-4 text-base font-light text-gray'>{description}</p>
				</div>

				<div className='grid grid-cols-3 gap-2'>
					{tags.map((tag, key) => (
						<span
							key={key}
							className='w-full flex-1 rounded-full border border-secondary py-1.5 text-center text-[10px] font-light uppercase text-white'
						>
							{tag}
						</span>
					))}
				</div>
			</div>

			<div className='flex gap-4'>
				<a
					href={liveUrl}
					className='btn-secondary w-full px-2 font-medium'
					target='_blank'
					rel='noreferrer'
				>
					<ExternalLinkIcon className='h-5 w-5' />
					Demo
				</a>

				<a
					href={githubUrl}
					className={clsx(
						'btn-secondary flex w-full items-center justify-center gap-1 px-2 py-3 font-medium',
						githubUrl
							? ''
							: 'cursor-not-allowed border-secondary-light bg-secondary-light py-3 text-gray hover:text-gray'
					)}
					target='_blank'
					rel='noreferrer'
				>
					<CodeIcon className='h-5 w-5' />
					Source Code
				</a>
			</div>
		</div>
	);
};
