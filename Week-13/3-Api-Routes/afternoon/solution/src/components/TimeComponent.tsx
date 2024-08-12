// Mark this file as a client component
"use client";

import React, { useEffect, useState } from 'react';
import { fetchTime } from '../utils/api';

interface TimeData {
  datetime: string;
}

const TimeComponent: React.FC = () => {
  const [time, setTime] = useState<TimeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTime()
      .then(data => {
        setTime(data);
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

  if (!time) {
    return <p>Failed to fetch time data.</p>;
  }

  return (
    <div>
      <h1>Current Time in London</h1>
      <p>{time.datetime}</p>
    </div>
  );
};

export default TimeComponent;