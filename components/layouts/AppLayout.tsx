import { ReactNode } from 'react';
import { Meta } from '../elements';
import { FooterContainer, NavBarContainer } from '../containers';

type AppLayoutProps = {
	children: ReactNode;
};

export const AppLayout = (props: AppLayoutProps) => {
	const { children } = props;

	return (
		<>
			<Meta />

			<div className='bg-dark'>
				<NavBarContainer />
				<main>{children}</main>
				<FooterContainer />
			</div>
		</>
	);
};
