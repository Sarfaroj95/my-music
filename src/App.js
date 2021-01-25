import { useState, useEffect } from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Tui Chara",
      artist: "Sad singer",
      img_src: "./images/tui-chara.jpg",
      src: "./music/Tui-chara.mp3"
    },
    {
      title: "Khairiyat Pucho",
      artist: "Arijit",
      img_src: "./images/khairiyat.jpg",
      src: "./music/kheriyat.mp3"
    },
    {
      title: "Humnava Mere",
      artist: "Jubin Nautiyal",
      img_src: "./images/humnava.jpg",
      src: "./music/Humnava.mp3"
    },
    {
      title: "Khusi Ke Pal",
      artist: "Shirley Setia",
      img_src: "./images/khusiki-pal.jpg",
      src: "./music/khusikipal.mp3"
    }


  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <div className="main-div">
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
        />
      </div>
      <div className="sec-div">
        <marquee className="story">কখনো যদি এমন হয়- তুমি আর আমি একসাথে আমাদের সব স্বপ্ন পূরণ করবো কখনো যদি এমন হয়- আমি কিছু না বলতেই তুমি সব শুনে নেবে আমাদের চলার পথও এক হয়ে যাবে তখন আমার হাতের মুঠোয় তোমার উষ্ণ স্পর্শ থাকবে সেদিন কেন আজ মনে হয় তুমিহিনা অসম্পূর্ণ এ পৃথিবী? কেন আজ প্রথম প্রেমের শিহরণ তুমিবিনা অসম্পৃক্ত?…</marquee>
      </div>

    </div>
  );
}

export default App;
