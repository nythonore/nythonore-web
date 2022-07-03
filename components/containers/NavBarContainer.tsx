import Link from 'next/link';

export const NavBarContainer = () => {
	const menus = [
		{ label: 'About', path: '/#about' },
		{ label: 'Work', path: '/#work' },
		{ label: 'Blog', path: 'https://nythonore.hashnode.dev' },
		{ label: 'Contact', path: '/#contact' },
	];

	return (
		<nav className='sticky top-0 z-10 w-full bg-dark-light/40 backdrop-blur-lg'>
			<div className='container flex h-20 items-center justify-between'>
				<div className='text-white'>
					<Link href='/'>
						<div className='flex items-center justify-center w-11 h-11 border-2 border-secondary rounded-xl cursor-pointer'>
							<h2 className='text-xl text-secondary font-bold'>H</h2>
						</div>
					</Link>
				</div>

				<div className='flex items-center gap-8'>
					<div className='flex gap-8'>
						{menus.map((menu, key) => (
							<a key={key} href={menu.path} className='text-sm'>
								<span className='font-mono text-secondary'>{`0${
									key + 1
								}.`}</span>{' '}
								<span className='text-light'>{menu.label}</span>
							</a>
						))}
					</div>

					<a
						href='/resume.pdf'
						target='_blank'
						rel='noreferrer'
						className='btn-primary-outline text-sm font-light px-4 py-2'
					>
						Resume
					</a>
				</div>
			</div>
		</nav>
	);
};
