import Navbar from "./ui/navbar";
import Hero from "./ui/home/hero";
import Mission from "./ui/home/mission";
import Plan from "./ui/home/plan";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mission />
      <Plan />
    </main>
  );
}
