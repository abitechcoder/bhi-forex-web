import Navbar from "./ui/navbar";
import Hero from "./ui/home/hero";
import Mission from "./ui/home/mission";
import Plans from "./ui/home/plans";
import Footer from "./ui/home/footer";
import Testimonials from "./ui/home/testimonials";
import OngoingReg from "./ui/home/OngoingReg";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mission />
      <Plans />
      <OngoingReg />
      <Testimonials/>
      <Footer />
    </main>
  );
}
