import Header from "./components/Layout/Header";
import HeroSection from "./components/Herosection/Herosection";
import PhotoSlider from "./components/Project/PhotoSlider";
import SocialMediaSection from "./components/SNS/SocialMediaSection";
import MailSection from "./components/MailSection/MailSection";
import Photos from "./components/Project/Photos";

export default function Home() {
  return (
    <div>
    <main className="flex min-h-screen flex-col bg-[#121212]">
        <Header />
        <HeroSection/>
        <Photos />
        <PhotoSlider />
        <MailSection />
        <SocialMediaSection />
      </main>
    </div>
  );
}
