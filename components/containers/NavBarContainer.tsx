import Link from 'next/link';

export const NavBarContainer = () => {
	const menus = [
		{ label: 'About', path: '/#about' },
		{ label: 'Work', path: '/#work' },
		{ label: 'Contact', path: '/#contact' },
	];

	return (
		<nav className='sticky top-0 z-50 w-full bg-dark/60 backdrop-blur-lg shadow-md shadow-dark'>
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

					<button className='btn-primary-outline text-sm font-light px-4 py-2'>
						Resume
					</button>
				</div>
			</div>
		</nav>
	);
};
