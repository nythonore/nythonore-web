import clsx from 'clsx';
import { ExternalLinkIcon, CodeIcon } from '@heroicons/react/solid';
import { ImageCard } from './ImageCard';

type WorkProps = {
	index: number;
	title: string;
	cover: string;
	description: string;
	tags: string[];
	liveUrl: string;
	githubUrl: string;
};

export const Work = (props: WorkProps) => {
	const { index, title, cover, description, tags, liveUrl, githubUrl } = props;

	const isReverse = index % 2 === 0 ? true : false;

	return (
		<div
			className={clsx(
				'flex flex-col md:flex-row justify-center gap-12',
				isReverse ? 'md:flex-row-reverse' : ''
			)}
		>
			<div className='basis-[30%] md:basis-[40%] lg:basis-[30%]'>
				<ImageCard
					alt={title}
					src={cover}
					cardStyles={clsx(isReverse ? 'bg-[#E5F2FD]' : 'bg-[#D9F6F1]')}
				/>
			</div>

			<div
				className={clsx(
					'basis-[50%]',
					isReverse ? 'md:text-right' : 'text-left'
				)}
			>
				<h2 className='text-2xl md:text-3xl font-bold text-light'>{title}</h2>

				<p className='mt-4 text-base md:text-lg font-light text-gray'>
					{description}
				</p>

				<div
					className={clsx(
						'flex flex-wrap gap-2 mt-6',
						isReverse ? 'md:justify-end' : 'justify-start'
					)}
				>
					{tags.map((tag, key) => (
						<span
							key={key}
							className='font-light uppercase bg-dark-light border border-secondary text-light py-2 px-2 md:px-3 rounded-full text-sm'
						>
							{tag}
						</span>
					))}
				</div>

				<div
					className={clsx(
						'flex gap-4 mt-10',
						isReverse ? 'md:justify-end' : 'justify-start'
					)}
				>
					<a
						href={liveUrl}
						target='_blank'
						rel='noreferrer'
						className='flex gap-1 items-center btn-primary text-base font-normal text-black hover:text-secondary'
					>
						<ExternalLinkIcon className='h-5 w-5' />
						<span>Live</span>
					</a>

					<a
						href={githubUrl}
						target='_blank'
						rel='noreferrer'
						className='flex gap-1 items-center btn-primary text-base font-normal text-black hover:text-secondary'
					>
						<CodeIcon className='h-5 w-5' />
						<span>GitHub</span>
					</a>
				</div>
			</div>
		</div>
	);
};
