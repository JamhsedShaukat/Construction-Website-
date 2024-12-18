import Achievements from "@/components/Achivement";
import Articals from "@/components/Articals";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testomonial from "@/components/Testomonial";
import ToBuild from "@/components/ToBuild";

export default function Home() {

  return (
    <main>
     <Header/>
     <Hero/>
     <Achievements/>
     <Clients/>
     <Articals/>
     <ToBuild/>
     <Testomonial/>
     <Footer/>
    </main>
  );
}
