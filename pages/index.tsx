import type { NextPage } from 'next';
import { AppLayout } from '../components/layouts';
import {
	NavBarContainer,
	HeroContainer,
	AboutContainer,
	WorkContainer,
	FooterContainer,
} from '../components/containers';

const Home: NextPage = () => {
	return (
		<AppLayout>
			<NavBarContainer />
			<HeroContainer />
			<AboutContainer />
			<WorkContainer />
			<FooterContainer />
		</AppLayout>
	);
};

export default Home;
