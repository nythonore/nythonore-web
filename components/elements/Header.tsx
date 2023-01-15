type HeaderProps = {
	count: string;
	title: string;
};

export const Header = (props: HeaderProps) => {
	const { count, title } = props;

	return (
		<div className='flex gap-4 md:gap-8 items-center'>
			<h2 className='text-2xl font-semibold'>
				<span className='font-mono text-secondary font-medium'>{count}.</span>{' '}
				<span className="text-white">{title}</span>
			</h2>

			<div className='grow h-[0.05px] bg-secondary-light'></div>
		</div>
	);
};
