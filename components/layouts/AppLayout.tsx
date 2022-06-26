// import Head from 'next/head';
import { ReactNode } from 'react';

type AppLayoutProps = {
	children: ReactNode;
};

export const AppLayout = (props: AppLayoutProps) => {
	const { children } = props;

	return (
		<>
			{/* <Head></Head> */}
			<main className='bg-dark'>{children}</main>
		</>
	);
};
