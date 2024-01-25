import Navbar from "./ui/navbar";
import Hero from "./ui/home/hero";
import Mission from "./ui/home/mission";
import Plans from "./ui/home/plans";
import Footer from "./ui/home/footer";
import Testimonials from "./ui/home/testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mission />
      <Plans />
      <Testimonials/>
      <Footer />
    </main>
  );
}
