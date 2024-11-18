import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Projectmgm } from "../components/Projectmgm";
import Extension from "../components/Extension";
import CustomiseApp from "../components/CustomiseApp";
import YourWork from "../components/YourWork";
import { Sponsors } from "../components/Sponsers";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projectmgm />
      <Extension />
      <CustomiseApp />
      <YourWork />
      <Sponsors />
      <Footer />
    </>
  );
};