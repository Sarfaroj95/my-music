import { useState, useEffect } from 'react';
import Pictures from './components/Player/Pictures';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Ghar Se The Chale",
      artist: "Arijit Singh",
      img_src: "./images/arin.jpeg",
      src: "./music/gharse.mp3"
    },
    {
      title: "Khairiyat Pucho",
      artist: "Arijit Singh",
      img_src: "./images/jaidul.jpeg",
      src: "./music/kheriyat.mp3"
    },
    // {
    //   title: "Humnava Mere",
    //   artist: "Jubin Nautiyal",
    //   img_src: "./images/humnava.jpg",
    //   src: "./music/Humnava.mp3"
    // },
    // {
    //   title: "Khusi Ke Pal",
    //   artist: "Shirley Setia",
    //   img_src: "./images/khusiki-pal.jpg",
    //   src: "./music/khusikipal.mp3"
    // }


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
      {/* <div className="sec-div">
        <marquee className="story">আকাশের নীল পরি মেলেছে দুটি ডানা মনের মাঝে বাসা বাঁধতে নেইকো কোনো মানা অচিন দেশে নিয়ে যাবো, বাঁধবো সুখের ঘর মনের মাঝে থাকবে চিরকাল, হবেনা কখনো পর... আর একটা কথা। কাওকে ভালো করে না চিনে খারাপ মন্তব্য করবে না।</marquee>
      </div>

      <div className="Pic">
        <Pictures />
      </div> */}
      {/* <div >
        <p className="msg">Love is part of life</p>
      </div> */}


    </div>
  );
}

export default App;
