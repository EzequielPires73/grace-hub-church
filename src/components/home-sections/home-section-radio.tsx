'use client'
import { Play, PlayCircle, StopCircle } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const HomeSectionRadio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(new Audio("https://www.appradio.app:8120/live"));
  }, []);

  const handlePlay = () => {
    console.log(audio);
    if (!audio) return;
    if(isPlaying) {
      audio.pause()
      setIsPlaying(false);
    } else {
      audio.play()
      setIsPlaying(true);
    }
  }

  return (
    <div className='hidden items-start justify-center gap-4 pb-8'>
      <button onClick={handlePlay}><PlayCircle /></button>
      <button><StopCircle /></button>
    </div>
  );
};

export default HomeSectionRadio;
