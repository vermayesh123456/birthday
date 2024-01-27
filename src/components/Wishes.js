import React, { useEffect, useState } from 'react';

const Wishes = () => {
  const [text, setText] = useState('');
  const wishes = ['Wishing you a fantastic birthday!', 'May your day be filled with joy and laughter.'];

  useEffect(() => {
    let currentIndex = 0;
    let intervalId;

    const typeText = () => {
      if (currentIndex < wishes.length) {
        setText((prevText) => prevText + wishes[currentIndex].charAt(prevText.length));

        if (text.length === wishes[currentIndex].length) {
          currentIndex += 1;
          clearInterval(intervalId);
          setTimeout(() => {
            intervalId = setInterval(typeText, 50);
          }, 50);
        }
      } else {
        clearInterval(intervalId);
      }
    };

    intervalId = setInterval(typeText, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, wishes]);

  return (
    <section>
      <h3>{text}</h3>
    </section>
  );
};

export default Wishes;
