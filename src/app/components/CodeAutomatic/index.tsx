'use client';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { phrases } from '@/app/constants/phrases';
import { DictionaryLanguagesType, LanguageType } from '@/app/types/language';

export const CodeAutomatic = ({ language }: LanguageType) => {
  const phraseList = phrases[0][language as keyof DictionaryLanguagesType];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phraseList[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentPhrase.slice(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phraseList.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentPhraseIndex, phraseList]);

  return (
    <code className={styles.code}>
      <span className={styles.tag}>&lt;</span>
      <span className={styles.highlight}>code</span>
      <span className={styles.tag}>&gt;</span>
      <strong>{displayedText}</strong>
      <span className={styles.cursor}>|</span>
      <span className={styles.tag}>&lt;/</span>
      <span className={styles.highlight}>code</span>
      <span className={styles.tag}>&gt;</span>
    </code>
  );
};
