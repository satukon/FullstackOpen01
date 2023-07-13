import { useState } from 'react';

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

const StatisticLine = ({ promptText, valueToShow }) => {

  if (promptText === 'Average:') {
    return (
      <tr>
      <td>{promptText}</td>
      <td>{(valueToShow).toFixed(1)}</td>
      </tr>
    );
  }

  if (promptText === 'Positives:') {
    return (
      <tr>
      <td>{promptText}</td>
      <td>{(valueToShow).toFixed(2)} %</td>
      </tr>
    );
  }

  return (
    <tr>
    <td>{promptText}</td>
    <td>{valueToShow}</td>
    </tr>
  );
};

const Statistics = ({good, neutral, bad}) => {
  
  const goodsCount = good * 1;
  const neutralsCount = neutral * 0;
  const badsCount = bad * -1;

  const sum = good + neutral + bad;
  const avg = (goodsCount + neutralsCount + badsCount) / sum;
  const pos = (good / sum) * 100;

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>No feedback given</p>
    );
  }

  return (
    <table>
      <tbody>
        <StatisticLine promptText="Good:" valueToShow={good} />
        <StatisticLine promptText="Neutral:" valueToShow={neutral} />
        <StatisticLine promptText="Bad:" valueToShow={bad} />
        <StatisticLine promptText="All:" valueToShow={sum} />
        <StatisticLine promptText="Average:" valueToShow={avg} />
       <StatisticLine promptText="Positives:" valueToShow={pos} />
      </tbody>
    </table>
  );
};

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give feedback</h1>

      <Button onClick={increaseGood} text="Good" /> &nbsp;
      <Button onClick={increaseNeutral} text="Neutral" /> &nbsp;
      <Button onClick={increaseBad} text="Bad" />

      <h1>Statistics</h1>
      
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;