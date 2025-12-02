import { Hero } from './components/Hero';
import { FlyingBananas } from './components/FlyingBananas';
import { BananaZone } from './components/BananaZone';
import { Reviews } from './components/Reviews';
import { FooterCTA } from './components/FooterCTA';

function App() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <FlyingBananas />
      <BananaZone />
      <Reviews />
      <FooterCTA />
    </main>
  );
}

export default App;