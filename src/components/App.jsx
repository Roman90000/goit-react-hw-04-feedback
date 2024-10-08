//
// import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addState = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const result = good + neutral + bad;
    if (!result) {
      return 0;
    }
    return Math.round((good * 100) / result);
  };

  const total = good + neutral + bad;
  const positive = countPositiveFeedbackPercentage();

  return (
    <div>
      <h1>Please leave feedback</h1>
      <FeedbackOptions options={addState} />
      <h2>Statistics</h2>
      {!total ? (
        'There is no feedback'
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positive}
        />
      )}

      <GlobalStyle />
    </div>
  );
};
