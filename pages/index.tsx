import type { NextPage } from 'next';
import { AppLayout } from '../components/layouts';
import {
	HeroContainer,
	AboutContainer,
	WorkContainer,
} from '../components/containers';

const Home: NextPage = () => {
	return (
		<AppLayout>
			<HeroContainer />
			<AboutContainer />
			<WorkContainer />
		</AppLayout>
	);
};

export default Home;
