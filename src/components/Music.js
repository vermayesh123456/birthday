// Music.js
import React, { useEffect } from 'react';

const Music = () => {
  useEffect(() => {
    const audio = new Audio('/path/to/birthday-song.mp3');
    audio.volume = 0.5;
    audio.loop = true; // Set the loop property to true for continuous playback

    audio.play();

    // No need for cleanup, as the component will persist throughout the application

    // Optional: You can adjust the volume or other properties if needed
    // audio.volume = 0.5;

    // Uncomment the line below if you want to stop the music when the component unmounts
    // return () => audio.pause();
  }, []);

  return null; // The Music component doesn't render anything in the UI
};

export default Music;
