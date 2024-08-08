// Mark this file as a client component
"use client";

import React, { useEffect, useState } from 'react';
import { fetchJoke } from '../utils/api';

interface JokeData {
  joke?: string;
  setup?: string;
  delivery?: string;
}

const JokeComponent: React.FC = () => {
  const [joke, setJoke] = useState<JokeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJoke()
      .then(data => {
        setJoke(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!joke) {
    return <p>Failed to fetch joke data.</p>;
  }

  return (
    <div>
      <h1>Random Joke</h1>
      <p>{joke.joke || `${joke.setup} - ${joke.delivery}`}</p>
    </div>
  );
};

export default JokeComponent;
