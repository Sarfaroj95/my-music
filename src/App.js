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
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
