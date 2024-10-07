import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addState = name => {
    if (Object.keys(this.state).includes(name)) {
      this.setState(prevState => ({
        [name]: (prevState[name] += 1),
      }));
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    if (!result) {
      return 0;
    }
    return Math.round((this.state.good * 100) / result);
  };

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions options={this.addState} />
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
  }
}
