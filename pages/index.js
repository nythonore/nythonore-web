import Head from '../components/Head';
import Intro from '../components/Intro';
import About from '../components/About';
import Work from '../components/Work';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head />

      <main>
        <Intro />
        <About />
        <Work />
      </main>

     <Footer />
    </div>
  )
}
