import React, { useEffect, useState } from 'react';

const Typewriter = ({ words = ['Hello', 'World', 'React'] }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);
      setSpeed(isDeleting ? 100 : 200);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, index, isDeleting]);

  return <>{text}|</>;
};

export default Typewriter;
