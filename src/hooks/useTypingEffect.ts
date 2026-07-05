import { useEffect, useState } from 'react';

export function useTypingEffect(phrases: string[], typingSpeed = 80, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextCharIndex = charIndex + 1;
        setDisplayText(currentPhrase.slice(0, nextCharIndex));

        if (nextCharIndex === currentPhrase.length) {
          setIsDeleting(true);
          return;
        }

        setCharIndex(nextCharIndex);
        return;
      }

      const nextCharIndex = charIndex - 1;
      setDisplayText(currentPhrase.slice(0, nextCharIndex));

      if (nextCharIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % phrases.length);
        return;
      }

      setCharIndex(nextCharIndex);
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    if (!isDeleting && charIndex === phrases[phraseIndex].length) {
      return () => clearTimeout(timeout);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases, typingSpeed]);

  useEffect(() => {
    if (!isDeleting && charIndex === phrases[phraseIndex].length) {
      const pause = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(pause);
    }
  }, [charIndex, isDeleting, phraseIndex, phrases, pauseDuration]);

  return displayText;
}
