import { useRef, useState } from "react";
import { IntroExperience } from "./components/IntroExperience";
import { Hero } from "./components/Hero";
import { Countdown } from "./components/Countdown";
import { StoryTimeline } from "./components/StoryTimeline";
import { Gallery } from "./components/Gallery";
import { Ceremony } from "./components/Ceremony";
import { LocationMap } from "./components/LocationMap";
import { RSVPForm } from "./components/RSVPForm";
import { Footer } from "./components/Footer";
import { MusicPlayer } from "./components/MusicPlayer";
import { useAudio } from "./hooks/useAudio";
import { MUSIC_TRACK_URL } from "./data/content";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const rsvpRef = useRef<HTMLDivElement>(null);
  const { isPlaying, play, toggle } = useAudio(MUSIC_TRACK_URL);

  const handleIntroComplete = () => {
    setShowIntro(false);
    play(); // tenta iniciar a música assim que o utilizador já interagiu com a página
  };

  const scrollToRSVP = () => {
    rsvpRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {showIntro && <IntroExperience onComplete={handleIntroComplete} />}

      {!showIntro && (
        <main className="bg-ink">
          <Hero onRSVPClick={scrollToRSVP} />
          <Countdown />
          <StoryTimeline />
          <Gallery />
          <Ceremony />
          <LocationMap />
          <RSVPForm ref={rsvpRef} />
          <Footer />
          <MusicPlayer isPlaying={isPlaying} onToggle={toggle} />
        </main>
      )}
    </>
  );
}

export default App;
