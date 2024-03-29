import Link from 'next/link';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid';
import { Popover, Transition } from '@headlessui/react';

export const NavBarContainer = () => {
	const menus = [
		{ label: 'About', path: '/#about' },
		{ label: 'Work', path: '/#work' },
		{ label: 'Blog', path: 'https://nythonore.hashnode.dev' },
		{ label: 'Contact', path: '/#contact' },
	];

	return (
		<nav className='sticky top-0 z-10 w-full bg-dark-light/60 backdrop-blur-lg'>
			<Popover>
				{({ open }) => (
					<>
						<div className='container flex h-20 items-center justify-between'>
							<div className='text-white'>
								<Link href='/'>
									<div className='flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border-2 border-secondary'>
										<h2 className='text-xl font-bold text-secondary'>HN</h2>
									</div>
								</Link>
							</div>

							<div className='md:hidden'>
								<Popover.Button>
									{!open ? (
										<MenuAlt1Icon className='h-[28px] w-[28px] text-secondary' />
									) : (
										<XIcon className='h-[28px] w-[28px] text-secondary' />
									)}
								</Popover.Button>
							</div>

							<div className='hidden items-center gap-8 md:flex'>
								<div className='flex gap-8'>
									{menus.map((menu, key) => (
										<a key={key} href={menu.path} className='text-sm'>
											<span className='font-mono text-secondary'>{`0${
												key + 1
											}.`}</span>{' '}
											<span className='text-gray'>{menu.label}</span>
										</a>
									))}
								</div>

								<a
									href='/resume.pdf'
									target='_blank'
									rel='noreferrer'
									className='btn-secondary-outline'
								>
									Resume
								</a>
							</div>
						</div>

						<Transition
							enter='transition duration-100 ease-out'
							enterFrom='transform scale-95 opacity-0'
							enterTo='transform scale-100 opacity-100'
							leave='transition duration-75 ease-out'
							leaveFrom='transform scale-100 opacity-100'
							leaveTo='transform scale-95 opacity-0'
						>
							<Popover.Panel className='md:hidden'>
								{open && (
									<div className='container min-h-[calc(100vh-80px)] py-8'>
										<div className='flex flex-col gap-8'>
											{menus.map((menu, key) => (
												<a key={key} href={menu.path} className='text-lg'>
													<span className='font-mono text-secondary'>{`0${
														key + 1
													}.`}</span>{' '}
													<span className='text-gray'>{menu.label}</span>
												</a>
											))}
										</div>

										<a
											href='/resume.pdf'
											target='_blank'
											rel='noreferrer'
											className='btn-secondary mt-16 block w-full px-4 py-4 text-base font-medium text-dark hover:text-secondary'
										>
											Resume
										</a>
									</div>
								)}
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
		</nav>
	);
};
