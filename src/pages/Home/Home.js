import Banner from './Banner/Banner';
import HowItWorks from './HowItWorks/HowItWorks';
import Packages from './Packages/Packages';
import Services from './Services/Services';

export default function Home() {
  return (
    <>
      <Banner />
      <HowItWorks />
      <Services />
      <Packages />
    </>
  );
}
